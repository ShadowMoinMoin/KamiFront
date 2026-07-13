import { ShoppingCart, ClipboardList, Clock3, CoinsIcon } from "lucide-react";
import StatCard from "./StatCard";
import type { Summary } from "../../../shared/types/dashboard";
interface Props {
    summary?: Summary;
}
export default function DashboardStats({
    summary,
}: Props) {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Ventas totales"
                value={`S/ ${summary?.totalSales?.toFixed(2) ?? "0.00"}`}
                icon={<ShoppingCart size={20} />}

            />
            <StatCard
                title="Ventas hoy"
                value={`S/ ${summary?.todaySales.toFixed(2) ?? "0.00"}`}
                icon={<CoinsIcon size={20} />}

            />
            <StatCard
                title="Pedidos pagados"
                value={summary?.paidOrders ?? 0}
                icon={<ClipboardList size={20} />}

            />
            <StatCard
                title="Ticket promedio"
                value={`S/ ${summary?.averageTicket.toFixed(2) ?? "0.00"}`}
                icon={<Clock3 size={20} />}
            />
        </div>
    );
}