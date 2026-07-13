import { useEffect, useState } from "react";
import type { Order } from "../types/order";
import { OrderTimeline } from "./OrderTimeline";
import OrderProgress from "./OrderProgress";

interface Props {
    open: boolean;
    order: Order | null;
    onClose: () => void;
}

export default function OrderDetailDrawer({
    open,
    order,
    onClose
}: Props) {

    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (open && order) {
            setMounted(true);

            timeout = setTimeout(() => {
                setIsVisible(true);
            }, 10);
        } else {
            setIsVisible(false);

            timeout = setTimeout(() => {
                setMounted(false);
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [open, order]);

    if (!mounted || !order) return null;
    return (
        <div className="fixed inset-0 z-50">
            <div
                onClick={onClose}
                className={`
                    absolute inset-0 bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300
                    ${isVisible ? "opacity-100" : "opacity-0"}
                `}
            />
            <aside
                className={`
                    fixed right-0 top-0 h-full w-full max-w-md
                    bg-surface border-l border-border
                    shadow-2xl
                    flex flex-col

                    transform transition-transform duration-300 ease-out

                    ${isVisible ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="p-5 border-b border-border">
                    <div className="flex items-start justify-between">
                        <h2 className="text-white font-light tracking-[0.12em]">
                            Pedido #{order.orderCode}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white/40 transition hover:text-white hover:scale-105"
                        >
                            ✕
                        </button>
                    </div>
                    <p className="mt-1 text-xs text-white/40">
                        {new Date(order.createdAt).toLocaleString()}
                    </p>
                </div>
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                            Estado actual
                        </p>
                        <div className="mt-1 text-lg font-light text-accent">
                            <OrderProgress status={order.orderStatus} />
                        </div>
                    </div>
                    <OrderTimeline status={order.orderStatus} />
                    <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
                            Items
                        </p>
                        <div className="space-y-3">
                            {order.items.map((item) => (
                                <div
                                    key={item.productId}
                                    className="flex justify-between border-b border-border pb-2 text-sm"
                                >
                                    <span className="text-white/70">
                                        {item.productName} × {item.quantity}
                                    </span>
                                    <span className="text-accent">
                                        S/ {item.subtotal.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {order.observations && (
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                                Observaciones
                            </p>
                            <p className="text-sm text-white/70 leading-relaxed">
                                {order.observations}
                            </p>
                        </div>
                    )}
                </div>
                <div className="border-t border-border p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-white/40">
                            Total
                        </span>
                        <span className="text-xl font-light tracking-[0.08em] text-accent">
                            S/ {order.total.toFixed(2)}
                        </span>
                    </div>
                </div>
            </aside>
        </div>
    );
}