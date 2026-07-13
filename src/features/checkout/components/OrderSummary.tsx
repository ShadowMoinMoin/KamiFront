import Button from "../../../components/ui/Button";

interface Props {
    items: any[];
    total: number;
    loading: boolean;
    onContinue: () => void;
}

export default function OrderSummary({
    items,
    total,
    loading,
    onContinue,
}: Props) {
    return (
        <aside className="sticky top-28 h-fit rounded-2xl border border-white/10 bg-surface/70 backdrop-blur-xl p-6 shadow-lg">
            <h2 className="mb-6 text-lg font-light tracking-[0.12em] text-white uppercase">
                Tu pedido
            </h2>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.product.id}
                        className="flex items-start justify-between gap-4 border-b border-white/5 pb-3">
                        <div className="space-y-1">
                            <p className="text-white text-sm font-light">
                                {item.product.name}
                            </p>
                            <span className="text-xs text-white/40">
                                x{item.quantity}
                            </span>
                        </div>

                        <span className="text-accent font-medium text-sm">
                            S/ {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
            <div className="my-6 border-t border-white/10" />
            <div className="flex justify-between items-center text-white">
                <span className="text-sm text-white/60">
                    Total
                </span>
                <span className="text-xl font-light text-accent tracking-wide">
                    S/ {total.toFixed(2)}
                </span>
            </div>

            <div className="mt-6">
                <Button
                    className="w-full rounded-xl bg-accent text-black font-medium tracking-wide hover:opacity-90 transition"
                    disabled={loading}
                    onClick={onContinue}
                >
                    Continuar al pago
                </Button>
            </div>

        </aside>
    );
}