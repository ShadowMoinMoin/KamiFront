import { useState } from "react";

import { useCartStore } from "../../cart/store/cartStore";
import { createOrder } from "../../orders/services/orderService";
import { createPayment } from "../services/checkoutService";
import type { PaymentMethod } from "../../../shared/types/payment";

export function useCheckout() {
    const items = useCartStore((s) => s.items);
    const clear = useCartStore((s) => s.clear);

    const [loading, setLoading] = useState(false);

    const [orderType, setOrderType] = useState<
        "PARA_LLEVAR" | "DELIVERY"
    >("PARA_LLEVAR");

    const [deliveryAddress, setDeliveryAddress] =
        useState("");

    const [observations, setObservations] =
        useState("");

    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod | null>(null);

    const [orderId, setOrderId] =
        useState<number | null>(null);

    const total = items.reduce(
        (acc, item) =>
            acc + item.product.price * item.quantity,
        0
    );

    const createOrderDraft = async () => {
        setLoading(true);

        try {
            const payload = {
                orderType,
                deliveryAddress:
                    orderType === "DELIVERY"
                        ? deliveryAddress
                        : undefined,
                observations,

                items: items.map((item) => ({
                    productId: item.product.id,
                    quantity: item.quantity,
                })),
            };

            const order = await createOrder(payload);

            setOrderId(order.id);

            return order;
        } finally {
            setLoading(false);
        }
    };

    const payOrder = async (method: PaymentMethod) => {
        if (!orderId) {
            throw new Error("No existe una orden creada.");
        }

        setLoading(true);

        try {
            await createPayment({
                orderId,
                paymentMethod: method,
                amount: total,
            });

            setPaymentMethod(method);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        clear();

        setOrderId(null);
        setPaymentMethod(null);

        setOrderType("PARA_LLEVAR");
        setDeliveryAddress("");
        setObservations("");
    };

    return {
        // carrito
        items,
        total,

        // formulario
        orderType,
        setOrderType,

        deliveryAddress,
        setDeliveryAddress,

        observations,
        setObservations,

        // pago
        paymentMethod,
        setPaymentMethod,

        // estado
        orderId,
        loading,

        // acciones
        createOrderDraft,
        payOrder,
        reset,
    };
}