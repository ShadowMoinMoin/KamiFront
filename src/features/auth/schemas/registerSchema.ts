import { z } from "zod";
export const registerSchema = z.object({
    firstName: z.string().min(1, "El nombre es obligatorio."),
    lastName: z.string().min(1, "El apellido es obligatorio."),
    email: z.email("Correo inválido."),
    phone: z.string().optional(),
    password: z.string().min(6, "Mínimo 6 caracteres."),
    confirmPassword: z.string(),
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            path: ["confirmPassword"],
            error: "Las contraseñas no coinciden."
        }
    );
export type RegisterFormData = z.infer<typeof registerSchema>;