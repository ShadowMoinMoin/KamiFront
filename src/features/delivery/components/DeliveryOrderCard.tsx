import {
    LucideArrowRight,
    LucideHash,
    LucideX,
} from "lucide-react";

import { changeOrderStatus } from "../../orders/services/orderService";
import type { Order } from "../../orders/types/order";

export default function DeliveryOrderCard({
    order,
}: {
    order: Order;
}) {

    const nextStatus = () => {
        if (order.orderStatus === "LISTO") {
            return "EN_CAMINO";
        }
        if (order.orderStatus === "EN_CAMINO") {
            return "ENTREGADO";
        }
        return null;
    };
    const handleNext = async () => {
        const status = nextStatus();
        if (!status) return;

        await changeOrderStatus(order.id, status);
    };

    return (
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-1 font-bold text-white">
                    <LucideHash className="text-accent" />
                    {order.orderCode}
                </h3>
                <span className="text-xs text-white/60">
                    {order.orderType}
                </span>
            </div>
            <div className="mt-2 space-y-1 text-sm text-white/80">
                {order.items.map(item => (
                    <p key={item.productId}>
                        {item.quantity}
                        <LucideX className="mx-1 inline h-3 w-3 text-white/40" />
                        {item.productName}
                    </p>
                ))}
            </div>
            <button
                onClick={handleNext}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-40"
                disabled={!nextStatus()}
            >
                Siguiente estado
                <LucideArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}