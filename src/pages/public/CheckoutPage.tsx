import { useState } from "react";
import { useCartStore } from "../../features/cart/store/cartStore";
import { createOrder } from "../../features/orders/services/orderService";

export default function CheckoutPage() {
    const items = useCartStore((s) => s.items);
    const clear = useCartStore((s) => s.clear);

    const [orderType, setOrderType] = useState<
        "PARA_LLEVAR" | "DELIVERY"
    >("PARA_LLEVAR");

    const [deliveryAddress, setDeliveryAddress] =
        useState("");

    const [observations, setObservations] =
        useState("");

    const handleSubmit = async () => {
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

        try {
            await createOrder(payload);

            clear();

            alert("Pedido enviado");
        } catch {
            alert("Error al enviar pedido");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">
                Confirmar pedido
            </h1>

            <div className="space-y-4">
                <select
                    value={orderType}
                    onChange={(e) =>
                        setOrderType(
                            e.target.value as
                            | "PARA_LLEVAR"
                            | "DELIVERY"
                        )
                    }
                    className="w-full border rounded p-2"
                >
                    <option value="PARA_LLEVAR">
                        Recojo en Tienda
                    </option>

                    <option value="DELIVERY">
                        Delivery
                    </option>
                </select>

                {orderType === "DELIVERY" && (
                    <input
                        value={deliveryAddress}
                        onChange={(e) =>
                            setDeliveryAddress(e.target.value)
                        }
                        placeholder="Dirección"
                        className="w-full border rounded p-2"
                    />
                )}

                <textarea
                    value={observations}
                    onChange={(e) =>
                        setObservations(e.target.value)
                    }
                    placeholder="Observaciones"
                    className="w-full border rounded p-2"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white rounded p-3"
                >
                    Confirmar pedido
                </button>
            </div>
        </div>
    );
}