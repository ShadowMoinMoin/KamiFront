import { useCartStore } from "../store/cartStore"
import { LucidePlus, LucideMinus, LucideX } from "lucide-react"
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({
    open,
    onClose
}: {
    open: boolean
    onClose: () => void
}) {
    const items = useCartStore(s => s.items)
    const increase = useCartStore(s => s.increase)
    const decrease = useCartStore(s => s.decrease)
    const getTotal = useCartStore(s => s.getTotal)
    const navigate = useNavigate()
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: 375 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="w-full max-w-[380px] bg-background/70 backdrop-blur-xl border-l border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] text-white p-5"
                    >
                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                            <h2 className="text-xl font-light tracking-[0.25em] text-accent">
                                Tu pedido
                            </h2>

                            <button onClick={onClose} className="rounded p-1 text-white/70 hover:text-white hover:bg-white/10 transition">
                                <LucideX size={22} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {items.length === 0 ? (
                                <p className="text-white/50">
                                    Tu carrito está vacío.
                                </p>
                            ) : (
                                items.map(item => (
                                    <div key={item.product.id} className="flex justify-between">
                                        <div>
                                            <p className="font-light tracking-wide text-white">
                                                {item.product.name}
                                            </p>
                                            <p className="text-sm text-white/50">
                                                S/ {item.product.price}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button onClick={() => decrease(item.product.id)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent transition">
                                                <LucideMinus />
                                            </button>

                                            <span className="text-white/80">{item.quantity}</span>

                                            <button onClick={() => increase(item.product.id)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent transition">
                                                <LucidePlus />
                                            </button>
                                        </div>
                                    </div>
                                )))}
                        </div>

                        <div className="mt-6 border-t border-white/10 pt-4">
                            <p className="text-lg font-light text-accent">
                                Total: S/ {getTotal().toFixed(2)}
                            </p>

                            <button
                                onClick={() => {onClose(), navigate("/checkout")}}
                                className="mt-4 w-full rounded-xl bg-accent/90 py-2 text-black hover:bg-accent transition"
                            >
                                Continuar pedido
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}