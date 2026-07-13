import { useState } from "react";
import CardPaymentForm from "./CardPaymentForm";
import type { PaymentMethod } from "../../../shared/types/payment";

interface Props {
    open: boolean;
    onClose: () => void;
    checkout: any;
    onSuccess: () => void;
}

export default function PaymentMethodModal({
    open,
    onClose,
    checkout,
    onSuccess,
}: Props) {

    const [method, setMethod] =
        useState<PaymentMethod | null>(null);

    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handlePay = async () => {
        if (!method) return;

        setLoading(true);

        try {
            await checkout.payOrder(method);
            await new Promise((r) => setTimeout(r, 800));
            onSuccess();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl p-6 text-white shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-lg font-light tracking-[0.12em] uppercase">
                        Método de pago
                    </h2>

                    <p className="text-xs text-white/40 mt-2">
                        Selecciona cómo deseas completar tu pedido
                    </p>
                </div>

                {!method && (
                    <div className="space-y-3">
                        {[
                            { id: "TARJETA", label: "Tarjeta" },
                            { id: "YAPE", label: "Yape" },
                            { id: "PLIN", label: "Plin" },
                            { id: "EFECTIVO", label: "Efectivo" },
                        ].map((m) => (
                            <button
                                key={m.id}
                                onClick={() =>
                                    setMethod(m.id as PaymentMethod)
                                }
                                className="w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-left text-sm transition hover:border-accent/40 hover:text-accent hover:bg-white/[0.03]">
                                {m.label}
                            </button>
                        ))}

                    </div>
                )}

                {method === "TARJETA" && (
                    <div className="mt-4">
                        <CardPaymentForm />
                    </div>
                )}

                {method && method !== "TARJETA" && (
                    <div className="mt-6 space-y-4">

                        <div className="rounded-xl border border-white/10 bg-background/40 p-4">
                            <p className="text-xs text-white/40">
                                Método seleccionado
                            </p>

                            <p className="mt-1 text-accent font-medium">
                                {method}
                            </p>
                        </div>

                        <button
                            onClick={handlePay}
                            disabled={loading}
                            className="w-full rounded-xl bg-accent py-3 text-black font-medium transition hover:opacity-90 disabled:opacity-50">
                            {loading
                                ? "Procesando..."
                                : "Confirmar pago"}
                        </button>
                    </div>
                )}

                <button
                    onClick={() =>
                        method ? setMethod(null) : onClose()
                    }
                    className="mt-6 w-full text-xs text-white/40 hover:text-white transition">
                    {method
                        ? "← Cambiar método"
                        : "Cerrar"}
                </button>

            </div>
        </div>
    );
}