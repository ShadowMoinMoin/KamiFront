import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import { toast } from "sonner";
import { getRoleHome } from "../utils/getRoleHome";
export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await loginRequest(data);
            login(
                response.token,
                {
                    id: response.userId,
                    name: response.name,
                    role: response.role
                }
            );
            navigate(getRoleHome(response.role))
        } catch (error) {
            toast.error("Credenciales inválidas")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-8 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/40">
                <h1 className="text-3xl font-bold mb-2 text-white">
                    Kami Fusion
                </h1>
                <p className="text-sm text-slate-400 mb-6">
                    Inicia sesión para continuar
                </p>
                <div className="mb-4">
                    <input type="email" placeholder="Correo" {...register("email")} className="w-full p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition"
                    />
                    {errors.email && (
                        <p className="text-rose-400 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <input type="password" placeholder="Contraseña" {...register("password")} className="w-full p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition"/>
                    {errors.password && (
                        <p className="text-rose-400 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full p-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
                </button>
            </form>
        </div>
    )
}