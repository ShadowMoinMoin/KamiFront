import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "sonner"

import { useNavigate } from "react-router-dom"

import { registerRequest } from "../services/authService"
import { useAuthStore } from "../store/authStore"

import { registerSchema, type RegisterFormData } from "../schemas/registerSchema"

import { getRoleHome } from "../utils/getRoleHome"
import Button from "../../../components/ui/Button"

interface Props {
    onSuccess?: () => void
}

export default function RegisterPage({ onSuccess }: Props) {
    const navigate = useNavigate()
    const { login } = useAuthStore()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const { confirmPassword, ...payload } = data

            const response = await registerRequest(payload)

            login(response.token, {
                id: response.userId,
                name: response.name,
                role: response.role,
            })

            onSuccess?.()

            navigate(getRoleHome(response.role))
        } catch {
            toast.error("Error al registrarse.")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
                type="text"
                placeholder="Nombre"
                {...register("firstName")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />
            {errors.firstName && (
                <p className="text-sm text-red-400">
                    {errors.firstName.message}
                </p>
            )}

            <input
                type="text"
                placeholder="Apellido"
                {...register("lastName")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />
            {errors.lastName && (
                <p className="text-sm text-red-400">
                    {errors.lastName.message}
                </p>
            )}

            <input
                type="email"
                placeholder="Correo"
                {...register("email")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />
            {errors.email && (
                <p className="text-sm text-red-400">
                    {errors.email.message}
                </p>
            )}

            <input
                type="text"
                placeholder="Teléfono"
                {...register("phone")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />

            <input
                type="password"
                placeholder="Contraseña"
                {...register("password")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />
            {errors.password && (
                <p className="text-sm text-red-400">
                    {errors.password.message}
                </p>
            )}

            <input
                type="password"
                placeholder="Confirmar contraseña"
                {...register("confirmPassword")}
                className="w-full border border-border bg-background px-4 py-3 text-white outline-none"
            />
            {errors.confirmPassword && (
                <p className="text-sm text-red-400">
                    {errors.confirmPassword.message}
                </p>
            )}

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? "Registrando..." : "Registrarse"}
            </Button>
        </form>
    )
}