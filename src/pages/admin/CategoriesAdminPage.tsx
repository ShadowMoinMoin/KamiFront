import { useState } from "react";
import { Plus } from "lucide-react";

import { useCategories } from "../../features/categories/hooks/useCategories";
import CategoryTable from "../../features/categories/components/CategoryTable";
import CategoryModal from "../../features/categories/components/CategoryModal";
import { useActivateCategory, useDeleteCategory } from "../../features/categories/hooks/useCategories";
import type { Category } from "../../shared/types/category";

export default function CategoriesAdminPage() {
    const { data: categories = [], isLoading } = useCategories();
    const [
        selectedCategory,
        setSelectedCategory
    ] = useState<Category | null>(null);
    const [open, setOpen] = useState(false);
    const deleteCategory = useDeleteCategory();
    const activateCategory = useActivateCategory();
    return (
        <div className="min-h-screen bg-background p-8 text-white">
            <div className="mx-auto max-w-7xl space-y-8">

                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="font-display text-4xl">
                            Categorías
                        </h1>

                        <p className="mt-1 text-white/60">
                            Administra las categorías del menú.
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="
                            flex items-center gap-2
                            rounded-xl
                            bg-accent
                            px-5 py-3
                            font-medium
                            text-black
                            transition
                            hover:bg-accent-light
                        "
                    >
                        <Plus size={18} />
                        Nueva categoría
                    </button>

                </div>

                <CategoryTable
                    categories={categories}
                    loading={isLoading}
                    onDelete={(id) => deleteCategory.mutate(id)}
                    onActivate={(id) => activateCategory.mutate(id)}
                    onEdit={(category) => {
                        setSelectedCategory(category);
                        setOpen(true)
                    }}
                />

            </div>

            <CategoryModal
                open={open}
                category={selectedCategory}
                onClose={() => {
                    setOpen(false)
                    setSelectedCategory(null)
                }}
            />

        </div>
    );
}