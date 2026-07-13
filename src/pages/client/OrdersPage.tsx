import { useAuthStore } from "../../features/auth/store/authStore";
import OrderCard from "../../features/orders/components/OrderCard";
import OrderDetailDrawer from "../../features/orders/components/OrderDetailDrawer";
import { useMyOrders } from "../../features/orders/hooks/useOrders";
import { useOrderUIStore } from "../../features/orders/store/orderUIStore";

export default function OrdersPage() {
    const { user } = useAuthStore()
    const { data: orders = [], isLoading } = useMyOrders();
    const { open, closeDrawer, selectedOrder } = useOrderUIStore();

    const sortedOrders = [...orders].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
    );

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-white/60">
                    Cargando pedidos...
                </p>
            </div>
        );
    }
    if (!user) return null
    const totalOrders = orders.length;

    const lastOrder = sortedOrders[0];

    return (
        <div className="min-h-screen bg-background">

            <div className="mx-auto max-w-6xl px-6 pt-28 pb-10">

                <p className="text-xs uppercase tracking-[0.35em] text-accent">
                    KAMI FUSION
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-[0.08em] text-white">
                    {user.name}
                </h1>

                <p className="mt-3 text-white/40 text-sm">
                    Revisa tus pedidos y su estado en tiempo real
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">

                    <div className="rounded-xl border border-white/10 bg-surface p-4">
                        <p className="text-white/40 text-xs">Total pedidos</p>
                        <p className="text-2xl text-white mt-2">{totalOrders}</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-surface p-4">
                        <p className="text-white/40 text-xs">Último pedido</p>
                        <p className="text-sm text-white mt-2">
                            {lastOrder?.orderCode ?? "-"}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-surface p-4">
                        <p className="text-white/40 text-xs">Estado reciente</p>
                        <p className="text-sm text-accent mt-2">
                            {lastOrder?.orderStatus ?? "-"}
                        </p>
                    </div>

                </div>

            </div>

            <div className="mx-auto max-w-6xl px-6 pb-20">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-white text-lg font-light">
                        Pedidos recientes
                    </h2>

                    <span className="text-white/40 text-sm">
                        {totalOrders} total
                    </span>
                </div>

                {sortedOrders.length === 0 ? (
                    <div className="rounded-xl border border-white/10 bg-surface p-10 text-center">
                        <p className="text-white/60">
                            Aún no tienes pedidos
                        </p>

                        <p className="mt-2 text-sm text-white/30">
                            Cuando hagas tu primer pedido aparecerá aquí
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {sortedOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                            />
                        ))}
                    </div>
                )}

            </div>

            <OrderDetailDrawer
                open={open}
                order={selectedOrder}
                onClose={closeDrawer}
            />
        </div>
    );
}