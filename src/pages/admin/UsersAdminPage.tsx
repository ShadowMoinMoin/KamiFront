import { useMemo, useState } from "react";
import UserTable from "./UserTable";
import {
    useUsers,
    useChangeUserRole,
    useDeleteUser,
    useActivateUser,
} from "../../features/users/hooks/useUsers";

export default function UsersAdminPage() {
    const { data: users = [], isLoading } = useUsers();

    const [search, setSearch] = useState("");

    const deleteUser = useDeleteUser();
    const changeRole = useChangeUserRole();
    const activateUser = useActivateUser();

    const filteredUsers = useMemo(() => {
        const text = search.trim().toLowerCase();

        if (!text) {
            return users.filter(
                (u) => u.role !== "ADMIN" && u.role !== "CLIENTE"
            );
        }

        return users.filter((u) =>
            u.email.toLowerCase().includes(text)
        );
    }, [users, search]);

    return (
        <div className="min-h-screen bg-background p-4 sm:p-8 text-white">
            <div className="mx-auto max-w-7xl space-y-8">
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-glow">
                    <h2 className="font-display text-4xl font-medium text-accent-light">
                        Usuarios
                    </h2>

                    <p className="mt-2 text-sm text-white/60">
                        Administra los usuarios y sus permisos.
                    </p>

                    <input
                        type="text"
                        placeholder="Buscar por Gmail..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2 outline-none focus:border-accent"
                    />
                </div>

                <section className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
                    <UserTable
                        users={filteredUsers}
                        loading={isLoading}
                        onDelete={(id) => deleteUser.mutate({ id })}
                        onActivate={(id) => activateUser.mutate({ id })}
                        onChangeRole={(id, role) =>
                            changeRole.mutate({ id, role })
                        }
                    />
                </section>
            </div>
        </div>
    );
}