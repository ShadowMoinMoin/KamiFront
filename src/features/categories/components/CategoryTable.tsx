import { Pencil, RotateCcw, Trash2 } from "lucide-react";
import type { Category } from "../../../shared/types/category";

interface Props {
    categories: Category[];
    loading: boolean;

    onEdit?: (category: Category) => void;
    onDelete?: (id: number) => void;
    onActivate?: (id: number) => void;
}

export default function CategoryTable({
    categories,
    loading,
    onEdit,
    onDelete,
    onActivate,
}: Props) {
    if (loading) {
        return (
            <div className="rounded-2xl border border-border bg-surface p-8 text-center text-white/60">
                Cargando categorías...
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
            <table className="w-full">
                <thead className="border-b border-border bg-surface2">
                    <tr className="text-left text-sm uppercase tracking-wide text-white/50">
                        <th className="px-6 py-4">Nombre</th>
                        <th className="px-6 py-4">Descripción</th>
                        <th className="px-6 py-4">Estado</th>
                        <th className="px-6 py-4 text-right">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {categories.map((category) => (
                        <tr
                            key={category.id}
                            className="border-b border-border transition hover:bg-surface2"
                        >
                            <td className="px-6 py-5 font-medium">
                                {category.name}
                            </td>

                            <td className="px-6 py-5 text-white/60">
                                {category.description || "-"}
                            </td>

                            <td className="px-6 py-5">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${category.active
                                            ? "bg-green-500/15 text-green-400"
                                            : "bg-red-500/15 text-red-400"
                                        }`}
                                >
                                    {category.active
                                        ? "Activa"
                                        : "Inactiva"}
                                </span>
                            </td>

                            <td className="px-6 py-5">
                                <div className="flex justify-end gap-2">

                                    <button
                                        onClick={() => onEdit?.(category)}
                                        className="rounded-lg p-2 text-blue-400 transition hover:bg-blue-500/10"
                                    >
                                        <Pencil size={18} />
                                    </button>

                                    {category.active ? (
                                        <button
                                            onClick={() =>
                                                onDelete?.(category.id)
                                            }
                                            className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                onActivate?.(category.id)
                                            }
                                            className="rounded-lg p-2 text-green-400 transition hover:bg-green-500/10"
                                        >
                                            <RotateCcw size={18} />
                                        </button>
                                    )}

                                </div>
                            </td>
                        </tr>
                    ))}

                    {categories.length === 0 && (
                        <tr>
                            <td
                                colSpan={4}
                                className="py-10 text-center text-white/50"
                            >
                                No hay categorías registradas.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}