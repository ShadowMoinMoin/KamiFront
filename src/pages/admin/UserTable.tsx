import { RotateCcw, Trash2 } from "lucide-react";
import type { Users, UserRole } from "../../shared/types/user";

interface Props {
    users: Users[];
    loading: boolean;
    onChangeRole: (id: number, role: UserRole) => void;
    onDelete?: (id: number) => void;
    onActivate?: (id: number) => void;
}

export default function UserTable({
    users,
    loading,
    onChangeRole,
    onDelete,
    onActivate
}: Props) {

    if (loading) {
        return (
            <div className="rounded-xl border border-border bg-surface p-6">
                <p className="text-white/60">
                    Cargando usuarios...
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-glow">
            <table className="w-full text-sm text-white">
                <thead className="bg-surface2">
                    <tr>
                        <th className="px-6 py-4 text-center">
                            Nombre
                        </th>

                        <th className="px-6 py-4 text-center">
                            Email
                        </th>
                        <th className="px-6 py-4 text-center">
                            Rol
                        </th>
                        <th className="px-6 py-4 text-center">
                            Estado
                        </th>
                        <th className="px-6 py-4 text-center">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="border-t border-border transition hover:bg-surface2/60">
                            <td className="p-5">
                                <div className="font-medium">
                                    {user.firstName} {user.lastName}
                                </div>
                            </td>
                            <td className="p-5 text-white/70">
                                {user.email}
                            </td>
                            <td className="p-5">
                                <select defaultValue={user.role} onChange={(e) => onChangeRole(user.id, e.target.value as UserRole)} className="rounded-lg border border-border bg-background px-3 py-2 text-white outline-none transition focus:border-accent focus:ring-1 focus:ring-accent">
                                    <option value="ADMIN">
                                        ADMIN
                                    </option>
                                    <option value="MOZO">
                                        MOZO
                                    </option>
                                    <option value="COCINA">
                                        COCINA
                                    </option>
                                    <option value="DELIVERY">
                                        DELIVERY
                                    </option>
                                    <option value="CLIENTE">
                                        CLIENTE
                                    </option>
                                </select>
                            </td>
                            <td className="p-5">
                                <span
                                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${user.status === "ACTIVO"
                                            ? "border-green-500/30 bg-green-500/10 text-green-400"
                                            : "border-red-500/30 bg-red-500/10 text-red-400"
                                        }`}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-3 py-4 sm:px-6 sm:py-5">
                                <div className=" flex justify-center gap-2">
                                    {user.status === 'ACTIVO' ? (
                                        <button
                                            onClick={() => onDelete?.(user.id)}
                                            className="rounded-lg p-2 text-red-400 hover:bg-red-500/10"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => onActivate?.(user.id)}
                                            className="rounded-lg p-2 text-green-400 hover:bg-green-500/10"
                                        >
                                            <RotateCcw size={18} />
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}