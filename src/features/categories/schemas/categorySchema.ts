import { z } from "zod";
export const categorySchema = z.object({
    name: z.string().min(2, "Minimo 2 caracteres.").max(50, "Máximo 50 caracteres."),
    description: z.string().max(255, "Máximo 255 caracteres.").optional()
});
export type CategoryFormData = z.infer<typeof categorySchema>;