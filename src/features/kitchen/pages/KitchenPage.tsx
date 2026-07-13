import { ChefHat } from "lucide-react";
import KitchenColumn from "../components/KitchenColumn";
import { useKitchenOrders } from "../hooks/useKitchenOrders";

export default function KitchenPage() {

    const { data: orders = [] } = useKitchenOrders();

    const confirmed = orders.filter(
        o => o.orderStatus === "CONFIRMADO"
    );

    const inProgress = orders.filter(
        o => o.orderStatus === "EN_PREPARACION"
    );

    const ready = orders.filter(
        o => o.orderStatus === "LISTO"
    );

    return (
        <div className="min-h-screen bg-background p-6 text-white">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <ChefHat className="text-accent" />
                    Cocina - Panel de órdenes
                </h1>
                <div className="flex gap-4">
                    <KitchenColumn title="Confirmado" orders={confirmed} />
                    <KitchenColumn title="En preparación" orders={inProgress} />
                    <KitchenColumn title="Listo" orders={ready} />
                </div>

            </div>

        </div>
    );
}