import { z } from "zod";
export const productSchema = z.object({
    categoryId: z.number(),
    name: z.string().min(2, "Mínimo 2 caracteres.").max(100, "Máximo 100 caracteres."),
    description: z.string().optional(),
    price: z.number().min(0.01, "El precio debe ser mayor a 0."),
    imageUrl: z.string(),
    preparationTime: z.number().min(1, "Mínimo 1 minuto").optional()
})
export type ProductFormData = z.infer<typeof productSchema>;