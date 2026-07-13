import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { registerSchema, type RegisterFormData } from "../schemas/registerSchema";
import { registerRequest } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function RegisterPage() {
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
    });
    const onSubmit = async (data: RegisterFormData) => {
        try {
            const { confirmPassword, ...payload } = data;
            const response = await registerRequest(payload);
            login(response.token,
                {
                    id: response.userId,
                    name: response.name,
                    role: response.role,
                }
            );
            navigate("/")
        } catch (error) {
            toast.error("Error al registrarse.")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
                <h1 className="text-3x1 font-bold mb-6">
                    Registrarse
                </h1>
                <div className="mb-4">
                    <input type="text" placeholder="Nombre" {...register("firstName")} className="w-full border p-3 rounded-lg"/>
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Apellido" {...register("lastName")} className="w-full border p-3 rounded-lg"/>
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input type="email" placeholder="Correo" {...register("email")} className="w-full border p-3 rounded-lg"/>
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Teléfono" {...register("phone")} className="w-full border p-3 rounded-lg"/>
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Contraseña" {...register("password")} className="w-full border p-3 rounded-lg"/>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Confirmar contraseña" {...register("confirmPassword")} className="w-full border p-3 rounded-lg"/>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white p-3 rounded-lg disabled:opacity-50">
                    {isSubmitting ? "Registrando..." : "Registrarse"}
                </button>
            </form>
        </div>
    )
}