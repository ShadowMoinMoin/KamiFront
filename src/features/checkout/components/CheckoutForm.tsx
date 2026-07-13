interface Props {
    orderType: "PARA_LLEVAR" | "DELIVERY";
    setOrderType: (v: "PARA_LLEVAR" | "DELIVERY") => void;

    deliveryAddress: string;
    setDeliveryAddress: (v: string) => void;

    observations: string;
    setObservations: (v: string) => void;
}

export default function CheckoutForm({
    orderType,
    setOrderType,
    deliveryAddress,
    setDeliveryAddress,
    observations,
    setObservations,
}: Props) {
    return (
        <div className="
            space-y-6
            rounded-2xl
            border border-white/10
            bg-surface/70
            backdrop-blur-xl
            p-6
            shadow-lg
        ">

            <div>
                <label className="
                    mb-2 block
                    text-xs uppercase
                    tracking-[0.2em]
                    text-white/40
                ">
                    Tipo de pedido
                </label>

                <select
                    value={orderType}
                    onChange={(e) =>
                        setOrderType(
                            e.target.value as
                            | "PARA_LLEVAR"
                            | "DELIVERY"
                        )
                    }
                    className="
                        w-full
                        rounded-xl
                        border border-white/10
                        bg-background
                        px-4 py-3
                        text-white
                        outline-none
                        focus:border-accent/40
                        transition
                    "
                >
                    <option value="PARA_LLEVAR">
                        Recojo en tienda
                    </option>

                    <option value="DELIVERY">
                        Delivery
                    </option>
                </select>
            </div>

            {orderType === "DELIVERY" && (
                <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                        Dirección
                    </label>
                    <input
                        value={deliveryAddress}
                        onChange={(e) =>
                            setDeliveryAddress(e.target.value)
                        }
                        className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-accent/40 transition"/>
                </div>
            )}
            <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                    Observaciones
                </label>
                <textarea
                    rows={5}
                    value={observations}
                    onChange={(e) =>
                        setObservations(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-accent/40 transition resize-none"/>
            </div>
        </div>
    );
}