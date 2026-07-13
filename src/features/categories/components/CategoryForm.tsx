import { useEffect, useState } from "react";

import Button from "../../../components/ui/Button";

import { useCreateCategory, useUpdateCategory } from "../hooks/useCategories";
import type { Category } from "../../../shared/types/category";

interface Props {
    category?: Category | null;
    onClose: () => void;
}

export default function CategoryForm({
    category,
    onClose,
}: Props) {

    const createMutation = useCreateCategory();
    const updateMutation = useUpdateCategory();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (category) {
            setName(category.name);
            setDescription(category.description);
        } else {
            setName("");
            setDescription("");
        }
    }, [category]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            name,
            description,
        };
        if (category) {
            updateMutation.mutate({
                id: category.id,
                category: payload,
            }, {
                onSuccess: onClose,
            });
        } else {
            createMutation.mutate(payload, {
                onSuccess: onClose,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div>
                <label className="mb-2 block text-sm">
                    Nombre
                </label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-border bg-surface2 px-4 py-3 outline-none focus:border-accent"/>
            </div>
            <div>
                <label className="mb-2 block text-sm">
                    Descripción
                </label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full rounded-xl border border-border bg-surface2 px-4 py-3 outline-none focus:border-accent"/>
            </div>
            <div className="flex justify-end gap-3">
                <Button variant="secondary" type="button" onClick={onClose}>
                    Cancelar
                </Button>
                <Button type="submit">
                    {category ? "Guardar cambios" : "Crear categoría"}
                </Button>
            </div>
        </form>
    );
}