import type { OrderStatus } from "../types/order";

interface Props {
    status: OrderStatus;
}

const steps: OrderStatus[] = [
    "PENDIENTE",
    "CONFIRMADO",
    "EN_PREPARACION",
    "LISTO",
    "ENTREGADO",
];

const labels: Record<OrderStatus, string> = {
    PENDIENTE: "Pedido recibido",
    CONFIRMADO: "Confirmado",
    EN_PREPARACION: "En preparación",
    LISTO: "Listo",
    ENTREGADO: "Entregado",
    EN_CAMINO: "En camino",
    CANCELADO: "Cancelado",
    PAGADO: "Pagado"
};

export function OrderTimeline({ status }: Props) {
    const currentIndex = steps.indexOf(status);

    return (
        <div className="mt-4 space-y-3">
            {steps.map((step, index) => {
                const isDone = index < currentIndex;
                const isActive = index === currentIndex;
                const isCancelled = status === "CANCELADO";

                return (
                    <div key={step} className="flex items-center gap-3">
                        <div
                            className={`
                                w-3 h-3 rounded-full transition-all
                                ${isCancelled
                                    ? "bg-red-500"
                                    : isDone
                                        ? "bg-green-500"
                                        : isActive
                                            ? "bg-yellow-500 animate-pulse"
                                            : "bg-zinc-300"
                                }
                            `}
                        />

                        <span
                            className={`
                                text-sm transition-all
                                ${isCancelled
                                    ? "text-red-500"
                                    : isDone
                                        ? "text-green-600"
                                        : isActive
                                            ? "text-yellow-600 font-medium"
                                            : "text-zinc-400"
                                }
                            `}
                        >
                            {labels[step]}
                        </span>
                    </div>
                );
            })}
            {status === "CANCELADO" && (
                <div className="text-sm text-red-500 mt-2">
                    Este pedido fue cancelado
                </div>
            )}
        </div>
    );
}