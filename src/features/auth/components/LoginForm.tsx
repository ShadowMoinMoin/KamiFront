import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "sonner"

import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store/authStore";

import { loginSchema, type LoginFormData } from "../schemas/loginSchema";

import Button from "../../../components/ui/Button"

interface Props {
    onSuccess?: () => void
}

export default function LoginForm({
    onSuccess
}: Props) {

    const { login } = useAuthStore()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (
        data: LoginFormData
    ) => {
        try {
            const response =
                await loginRequest(data)

            login(response.token, {
                id: response.userId,
                name: response.name,
                role: response.role,
            })

            onSuccess?.()

        } catch {
            toast.error(
                "Credenciales inválidas"
            )
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input type="email" placeholder="Correo" {...register("email")} className="w-full border border-border bg-background px-4 py-3 text-white outline-none" />
            {errors.email && (
                <p className="text-sm text-red-400">
                    {errors.email.message}
                </p>
            )}
            <input type="password" placeholder="Contraseña" {...register("password")} className="w-full border border-border bg-background px-4 py-3 text-white outline-none" />
            {errors.password && (
                <p className="text-sm text-red-400">
                    {errors.password.message}
                </p>
            )}
            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Ingresando..." : "Iniciar Sesión"}
            </Button>
        </form>
    )
}