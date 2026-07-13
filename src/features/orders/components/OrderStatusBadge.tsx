import type { OrderStatus } from "../types/order";
import { cn } from "../../../shared/utils/cn";

interface Props {
    status: OrderStatus
}

const styles: Record<OrderStatus, string> = {
    PENDIENTE: "border border-zinc-700 bg-zinc-900/70 text-zinc-400",
    CONFIRMADO: "border border-blue-500/20 bg-blue-500/10 text-blue-300",
    EN_PREPARACION: "border border-amber-500/20 bg-amber-500/10 text-amber-300",
    LISTO: "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    EN_CAMINO: "border border-violet-500/20 bg-violet-500/10 text-violet-300",
    ENTREGADO: "border border-emerald-500/10 bg-emerald-500/5 text-emerald-400/80",
    CANCELADO: "border border-red-500/20 bg-red-500/10 text-red-300",
    PAGADO: "border border-accent/20 bg-accent/10 text-accent",
};

export default function OrderStatusBadge({ status }: Props) {
    return (
        <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", styles[status])}>
            {status}
        </span>
    )
}