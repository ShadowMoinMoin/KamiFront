import { X, ShoppingBag, Coins, TrendingUp } from "lucide-react";

import type { TopEmployee } from "../../../shared/types/dashboard";

interface Props {
    employee: TopEmployee | null;
    onClose: () => void;
}
export default function EmployeePerformanceModal({
    employee,
    onClose
}: Props) {
    if (!employee) return null;
    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div
                className="w-full max-w-lg rounded-2xl bg-background p-6 shadow-xl">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {employee.employeeName}
                        </h2>
                        <p className="text-white/50">
                            Desempeño del empleado
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 hover:bg-white/10">
                        <X size={20} />
                    </button>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-4">
                        <div className="flex gap-2 text-white/60">
                            <ShoppingBag size={18} />
                            Pedidos
                        </div>
                        <p className="mt-2 text-2xl font-bold">
                            {employee.orders}
                        </p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4">
                        <div className="flex gap-2 text-white/60">
                            <Coins size={18} />
                            Ventas
                        </div>
                        <p className="mt-2 text-2xl font-bold">
                            S/ {employee.totalSales.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <div className="flex gap-2 text-white/60">
                        <TrendingUp size={18} />
                        Ticket promedio
                    </div>
                    <p className="mt-3 text-sm text-white/70">
                        S/ {(employee.totalSales / employee.orders).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}