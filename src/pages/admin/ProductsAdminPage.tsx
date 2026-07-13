import { useState } from "react";
import { Plus } from "lucide-react";

import ProductTable from "../../features/products/components/ProductTable";
import ProductModal from "../../features/products/components/ProductModal";

import { useProducts, useActivateProduct, useDeleteProduct } from "../../features/products/hooks/useProducts";
import type { Product } from "../../shared/types/product";

export default function ProductsAdminPage() {

    const {
        data: products = [],
        isLoading,
    } = useProducts();

    const [selectedProduct, setSelectedProduct]
        = useState<Product | null>(null);
    const [open, setOpen] = useState(false);
    const deleteProduct = useDeleteProduct();

    const activateProduct = useActivateProduct();

    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = [...new Set(products.map((p) => p.categoryName))];
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(
                (p) => p.categoryName === selectedCategory
            );
    return (
        <div className="min-h-screen bg-background p-4 sm:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="font-display text-3xl">
                            Productos
                        </h2>

                        <p className="text-sm text-white/60">
                            Administra los productos del menú.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full sm:w-60 appearance-none rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-white outline-none transition hover:border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent/20">
                                <option value="all">Todas las categorías</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7"/>
                            </svg>
                        </div>
                        <button
                            onClick={() => setOpen(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-black transition hover:bg-accent-light active:scale-95">
                            <Plus size={18} />
                            Nuevo producto
                        </button>
                    </div>
                </div>
                <ProductTable products={filteredProducts}
                    loading={isLoading}
                    onDelete={(id) => deleteProduct.mutate(id)}
                    onEdit={(product) => {
                        setSelectedProduct(product);
                        setOpen(true);
                    }}
                    onActivate={(id) => activateProduct.mutate(id)} />
                <ProductModal open={open} product={selectedProduct} onClose={() => { setOpen(false); setSelectedProduct(null); }} />
            </div>
        </div>
    );
}