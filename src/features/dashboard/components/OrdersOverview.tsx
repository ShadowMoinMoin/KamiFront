import type { Order } from "../../orders/types/order";
import StatusCard from "./StatusCard";

interface Props {
    orders: Order[];
}

export default function OrdersOverview({

    orders,

}: Props) {
    const confirmed = orders.filter(
        o => o.orderStatus === "CONFIRMADO"
    ).length;
    const preparing = orders.filter(
        o => o.orderStatus === "EN_PREPARACION"
    ).length;
    const ready = orders.filter(
        o => o.orderStatus === "LISTO"
    ).length;
    const delivery = orders.filter(
        o => o.orderStatus === "EN_CAMINO"
    ).length;
    const delivered = orders.filter(
        o => o.orderStatus === "ENTREGADO"
    ).length;
    const cancelled = orders.filter(
        o => o.orderStatus === "CANCELADO"
    ).length;
    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold">
                Estado actual de pedidos
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <StatusCard
                    title="Confirmados"
                    count={confirmed}
                    color="bg-blue-400/70"
                />
                <StatusCard
                    title="Preparación"
                    count={preparing}
                    color="bg-yellow-400/70"
                />
                <StatusCard
                    title="Listos"
                    count={ready}
                    color="bg-green-400/70"
                />
                <StatusCard
                    title="En camino"
                    count={delivery}
                    color="bg-violet-400/70"
                />
                <StatusCard
                    title="Entregados"
                    count={delivered}
                    color="bg-zinc-500/70"
                />
                <StatusCard
                    title="Cancelados"
                    count={cancelled}
                    color="bg-red-400/70"
                />
            </div>
        </section>
    );
}