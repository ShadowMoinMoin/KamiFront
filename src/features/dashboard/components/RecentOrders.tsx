import type { Order } from "../../orders/types/order";
import OrderStatusBadge from "../../orders/components/OrderStatusBadge";

interface Props {
    orders: Order[];
}

export default function RecentOrders({
    orders,
}: Props) {

    const recentOrders = [...orders]
        .sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        .slice(0, 10);

    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
                Últimos pedidos
            </h2>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-accent/30 hover:shadow-xl">
                <table className="w-full">
                    <thead className="bg-white/5">
                        <tr className="text-left text-sm text-white/70">
                            <th className="px-4 py-3">
                                Código
                            </th>

                            <th className="px-4 py-3">
                                Estado
                            </th>

                            <th className="px-4 py-3 text-right">
                                Total
                            </th>

                            <th className="px-4 py-3 text-right">
                                Fecha
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {recentOrders.map(order => (
                            <tr
                                key={order.id}
                                className="text-sm text-white/80 hover:bg-white/5 transition"
                            >
                                <td className="px-4 py-3 font-medium text-white">
                                    {order.orderCode}
                                </td>

                                <td className="px-4 py-3">
                                    <OrderStatusBadge
                                        status={order.orderStatus}
                                    />
                                </td>

                                <td className="px-4 py-3 text-right text-white/90">
                                    S/ {order.total.toFixed(2)}
                                </td>

                                <td className="px-4 py-3 text-right text-white/60">
                                    {new Date(order.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}