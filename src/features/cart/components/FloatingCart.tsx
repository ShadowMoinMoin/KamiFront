import { useCartStore } from "../store/cartStore";
import { LucideShoppingCart } from "lucide-react"
export default function FloatingCart({ onOpen }: { onOpen: () => void }) {
    const items = useCartStore(s => s.items)
    const getTotal = useCartStore(s => s.getTotal)
    const totalItems = items.reduce((acc, i) => acc + i.quantity, 0)
    if (items.length === 0) return null
    return (
        <button
            onClick={onOpen}
            className=" fixed bottom-6 right-6 flex items-center gap-3 rounded-full bg-background/80 backdrop-blur-xl border border-white/10 px-5 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:border-accent hover:text-accent"
        >
            <div className="relative">
                <LucideShoppingCart size={24} />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-black">
                    {totalItems}
                </span>
            </div>

            <span className="font-light tracking-wide text-white/90">
                S/ {getTotal().toFixed(2)}
            </span>
        </button>
    )
}