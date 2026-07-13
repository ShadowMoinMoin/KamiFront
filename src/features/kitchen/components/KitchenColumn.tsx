import type { Order } from "../../orders/types/order";
import KitchenOrderCard from "./KitchenOrderCard";

interface Props {
    title: string;
    orders: Order[];
}

export default function KitchenColumn({
    title,
    orders
}: Props) {
    return (
        <div className="flex-1 rounded-2xl border border-border bg-surface p-4 shadow-sm transition hover:border-accent/30 hover:shadow-xl">
            <h2 className="mb-4 text-center text-lg font-bold text-white">
                {title}
            </h2>
            <div className="space-y-3">
                {orders.map(order => (
                    <KitchenOrderCard
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>
        </div>
    );
}