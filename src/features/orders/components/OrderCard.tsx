import { useEffect, useState } from "react";
import { useOrderUIStore } from "../store/orderUIStore";
import type { Order } from "../types/order";
import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderCard({ order }: { order: Order }) {

    const openDrawer = useOrderUIStore(s => s.openDrawer);

    const [flash, setFlash] = useState(false);

    useEffect(() => {
        setFlash(true);

        const t = setTimeout(() => setFlash(false), 700);

        return () => clearTimeout(t);
    }, [order.orderStatus]);

    return (
        <article
            onClick={() => openDrawer(order)}
            className={`
                group relative cursor-pointer
                rounded-3xl border border-border
                bg-surface/70 backdrop-blur-xl

                p-6
                transition-all duration-300 ease-out

                hover:-translate-y-1
                hover:border-accent/30
                hover:bg-surface
                hover:shadow-xl

                active:scale-[0.99]

                ${flash
                    ? "ring-2 ring-accent/25 shadow-[0_0_30px_rgba(143,154,123,0.12)]"
                    : ""
                }
            `}
        >
            <div className="absolute left-0 top-0 h-full w-[2px] rounded-l-3xl bg-accent/20 opacity-0" />
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <h3 className="text-lg font-light tracking-[0.14em] text-white">
                        #{order.orderCode}
                    </h3>

                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                        {order.orderType}
                    </p>
                </div>

                <div className="transition-transform duration-300 group-hover:scale-105">
                    <OrderStatusBadge status={order.orderStatus} />
                </div>
            </div>

            <div className="mt-5 border-t border-white/5 pt-4">
                <p className="text-sm text-white/50">
                    Items{" "}
                    <span className="font-medium text-white/80">
                        {order.items.length}
                    </span>
                </p>
                <p className="mt-2 text-lg font-light tracking-[0.08em] text-accent">
                    S/ {order.total.toFixed(2)}
                </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent" />
            </div>
        </article>
    );
}