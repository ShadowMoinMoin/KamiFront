import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "../../../components/ui/Button";

import { useCreateProduct, useUpdateProduct } from "../hooks/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";

import type { Product } from "../../../shared/types/product";

interface Props {
    product?: Product | null;
    onClose: () => void;
}

export default function ProductForm({
    product,
    onClose,
}: Props) {

    const {
        data: categories = []
    } = useCategories()

    const createProduct = useCreateProduct();
    const updateProduct = useUpdateProduct();
    const [categoryId, setCategoryId] = useState<number>(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [preparationTime, setPreparationTime] = useState("");

    useEffect(() => {
        if (product) {
            setCategoryId(product.categoryId);
            setName(product.name);
            setDescription(product.description);
            setPrice(String(product.price));
            setImageUrl(product.imageUrl);
            setPreparationTime(String(product.preparationTime));
        } else {
            setCategoryId(0);
            setName("");
            setDescription("");
            setPrice("");
            setImageUrl("");
            setPreparationTime("");
        }
    }, [product]);
    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();
        const payload = {
            categoryId,
            name,
            description,
            price: Number(price),
            imageUrl,
            preparationTime: Number(
                preparationTime
            )
        };
        if (product) {
            updateProduct.mutate({
                id: product.id,
                product: payload
            }, {
                onSuccess: () => {
                    toast.success("Producto actualizado correctamente.")
                    onClose()
                }
            });
        } else {
            createProduct.mutate(
                payload,
                {
                    onSuccess: () => {
                        toast.success("Producto creado correctamente.")
                        onClose()
                    }
                }
            );
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Categoría
                        </label>
                        <select value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} className="h-11 w-full rounded-xl border border-border bg-surface2 px-4 transition focus:border-primary focus:outline-none">
                            <option value={0}>
                                Selecciona una categoría
                            </option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Nombre
                        </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="h-11 w-full rounded-xl border border-border bg-surface2 px-4 transition focus:border-primary focus:outline-none"/>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Descripción
                        </label>
                        <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe el producto..." className="w-full rounded-xl border border-border bg-surface2 px-4 py-3 transition focus:border-primary focus:outline-none"/>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Precio
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                                    S/
                                </span>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(e.target.value)
                                    }
                                    className="h-11 w-full rounded-xl border border-border bg-surface2 pl-10 pr-4 transition focus:border-primary focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Tiempo de Preparación
                            </label>
                            <div className="relative">
                                <input type="number" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} className="h-11 w-full rounded-xl border border-border bg-surface2 px-4 pr-12 transition focus:border-primary focus:outline-none" />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50">
                                    min
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Imagen
                        </label>
                        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL" className="h-11 w-full rounded-xl border border-border bg-surface2 px-4 transition focus:border-primary focus:outline-none" />
                    </div>
                    <div className="overflow-hidden rounded-xl border border-border bg-surface2">
                        {imageUrl ? (
                            <img src={imageUrl} className="aspect-video w-full object-cover" />
                        ) : (
                            <div className="flex aspect-video items-center justify-center text-sm text-white/40">
                                Vista previa
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={onClose}>
                    Cancelar
                </Button>
                <Button type="submit" className="w-full sm:w-auto">
                    {product ? "Guardar cambios" : "Crear producto"}
                </Button>
            </div>
        </form>
    );
}