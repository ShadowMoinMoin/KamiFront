import { Truck } from "lucide-react";
import DeliveryColumn from "../components/DeliveryColumn";
import { useOrders } from "../../orders/hooks/useOrders";

export default function DeliveryPage() {

    const { data: orders = [] } = useOrders();

    const ready = orders.filter(
        o => o.orderStatus === "LISTO"
    );

    const onTheWay = orders.filter(
        o => o.orderStatus === "EN_CAMINO"
    );

    return (
        <div className="min-h-screen bg-background p-6 text-white">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <Truck className="text-accent" />
                    Delivery
                </h1>

                <div className="flex gap-4">
                    <DeliveryColumn
                        title="Listos para recoger"
                        orders={ready}
                    />

                    <DeliveryColumn
                        title="En camino"
                        orders={onTheWay}
                    />
                </div>

            </div>
        </div>
    );
}