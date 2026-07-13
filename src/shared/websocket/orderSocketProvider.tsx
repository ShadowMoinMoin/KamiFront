import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
    connectOrderSocket,
    disconnectOrderSocket,
} from "./orderSocket";

import type { OrderEvent } from "./orderEvents";
import type { Order } from "../../features/orders/types/order";
import { toast } from "sonner";

export function OrderSocketProvider() {
    const queryClient = useQueryClient();

    useEffect(() => {
        connectOrderSocket((event: OrderEvent) => {

            queryClient.setQueryData<Order[]>(
                ["my-orders"],
                (old = []) =>
                    old.map((order) =>
                        order.id === event.orderId
                            ? {
                                ...order,
                                orderStatus: event.status,
                            }
                            : order
                    )
            );

            queryClient.invalidateQueries({
                queryKey: ["kitchen-orders"],
            });

            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            if (event.status === "EN_PREPARACION") {
                toast("Tu pedido está en preparación");
            }

            if (event.status === "LISTO") {
                toast.success("Tu pedido está listo");
            }
            if (event.status === "CANCELADO") {
                toast.error("Pedido cancelado");
            }
        });

        return () => {
            disconnectOrderSocket();
        };
    }, [queryClient]);

    return null;
}