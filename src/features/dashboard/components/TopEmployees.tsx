import { UserRound, ShoppingBag, Coins } from "lucide-react";
import type { TopEmployee } from "../../../shared/types/dashboard";

interface Props {
    employees?: TopEmployee[];
    onSelect?: (employee: TopEmployee) => void;
}
export default function TopEmployees({
    employees = [],
    onSelect
}: Props) {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold">
                Mejores empleados
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {employees.map((employee) => (
                    <button
                        key={employee.employeeId}
                        onClick={() => onSelect?.(employee)}
                        className="rounded-xl bg-white/5 p-5 text-left transition hover:bg-white/10 hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                <UserRound size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    {employee.employeeName}
                                </h3>
                                <p className="text-sm text-white/50">
                                    Rendimiento
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="flex gap-2 text-white/60">
                                    <ShoppingBag size={16} />
                                    Pedidos
                                </span>
                                <span>
                                    {employee.orders}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="flex gap-2 text-white/60">
                                    <Coins size={16} />
                                    Ventas
                                </span>
                                <span>
                                    S/ {employee.totalSales.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}