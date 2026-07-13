import { z } from "zod";
export const loginSchema = z.object({
    email: z.email("Este campo es obligatorio."),
    password: z.string().min(1, "Ingresa tu contraseña.")
})
export type LoginFormData = z.infer<typeof loginSchema>;