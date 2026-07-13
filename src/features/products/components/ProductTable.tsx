import { Pencil, RotateCcw, Trash2 } from "lucide-react";

import type { Product } from "../../../shared/types/product";

interface Props {
    products: Product[];
    loading: boolean;
    onEdit?: (product: Product) => void;
    onDelete?: (id: number) => void;
    onActivate?: (id: number) => void;
}

export default function ProductTable({
    products,
    loading,
    onEdit,
    onDelete,
    onActivate
}: Props) {

    if (loading) {
        return (
            <div className="rounded-2xl border border-border bg-surface p-8 text-center text-white/60">
                Cargando productos...
            </div>
        )
    }

    return (
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="min-w-[900px] w-full">
                <thead className="border-b border-border bg-surface2">
                    <tr className="text-left text-sm text-white/50">
                        <th className="px-6 py- text-center">
                            Producto
                        </th>
                        <th className="px-6 py- text-center">
                            Categoría
                        </th>
                        <th className="px-6 py- text-center">
                            Precio
                        </th>
                        <th className="px-6 py- text-center">
                            Preparación
                        </th>
                        <th className="px-6 py- text-center">
                            Estado
                        </th>
                        <th className="px-6 py-4 text-center">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr
                            key={product.id}
                            className=" border-b border-border transition hover:bg-surface2">
                            <td className="px-3 py-4 sm:px-6 sm:py-5">
                                <div className="flex items-center gap-4">
                                    {product.imageUrl && (
                                        <img src={product.imageUrl} className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover" />)}
                                    <div>
                                        <p className="font-medium">
                                            {product.name}
                                        </p>
                                        <p className="max-w-[180px] truncate text-sm text-white/50">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/70">
                                {product.categoryName}
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5">
                                S/{Number(product.price).toFixed(2)}
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/70">
                                {product.preparationTime} min
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5">
                                <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold
                                    ${product.available ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}>
                                    {product.available ? "Disponible" : "No Disponible"}
                                </span>
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5">
                                <div className=" flex justify-end gap-2">
                                    <button onClick={() => onEdit?.(product)} className="rounded-lg p-2 text-blue-400 hover:bg-blue-500/10">
                                        <Pencil size={18} />
                                    </button>
                                    {product.available
                                        ?
                                        <button onClick={() => onDelete?.(product.id)} className="rounded-lg p-2 text-red-400 hover:bg-red-500/10">
                                            <Trash2 size={18} />
                                        </button>
                                        :
                                        <button onClick={() => onActivate?.(product.id)}
                                            className="rounded-lg p-2 text-green-400 hover:bg-green-500/10">
                                            <RotateCcw size={18} />
                                        </button>
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}