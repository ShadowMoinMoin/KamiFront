import Modal from "../../../components/ui/Modal";

export default function PaymentSuccessModal({
    open,
    orderId,
    onClose,
}: any) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="text-center text-white space-y-5 py-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                </div>
                <h2 className="
                    text-xl font-light
                    tracking-[0.08em]
                ">
                    ¡Pedido confirmado!
                </h2>
                <div className="rounded-xl border border-white/10 bg-background/40 px-4 py-3">
                    <p className="text-xs text-white/40">
                        Orden
                    </p>

                    <p className="text-accent font-medium mt-1">
                        #{orderId}
                    </p>
                </div>
                <p className="text-sm text-white/50">
                    Tu pedido está en preparación
                </p>

                <button
                    onClick={onClose}
                    className="mt-2 w-full rounded-xl bg-accent py-3 text-black font-medium transition hover:opacity-90">
                    Ver mis pedidos
                </button>
            </div>
        </Modal>
    );
}