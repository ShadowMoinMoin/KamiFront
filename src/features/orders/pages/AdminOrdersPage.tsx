import OrderCard from "../components/OrderCard";
import OrderDetailDrawer from "../components/OrderDetailDrawer";
import { useOrders } from "../hooks/useOrders";
import { useOrderUIStore } from "../store/orderUIStore";

export default function AdminOrdersPage() {

    const { data: orders = [] } = useOrders();
    const { open, closeDrawer, selectedOrder } = useOrderUIStore();

    return (
        <div className="min-h-screen bg-background text-white">
            <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
                <p className="text-xs uppercase tracking-[0.4em] text-accent">
                    Kami Fusion
                </p>
                <h1 className="mt-4 text-5xl font-light tracking-[0.12em]">
                    Órdenes
                </h1>
                <p className="mt-4 max-w-xl text-sm text-white/50">
                    Gestiona y monitorea todas las órdenes en tiempo real.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur-xl">
                    {orders.length === 0 ? (
                        <div className="py-20 text-center text-white/40">
                            No hay órdenes disponibles
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {orders.map(order => (
                                <OrderCard
                                    key={order.id}
                                    order={order}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <OrderDetailDrawer
                open={open}
                order={selectedOrder}
                onClose={closeDrawer}
            />
        </div>
    );
}