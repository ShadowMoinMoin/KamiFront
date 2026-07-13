import type { Product } from "../../../shared/types/product";
import { Clock, Plus } from "lucide-react";
import { useCartStore } from "../../cart/store/cartStore";
import { toast } from "sonner";
import Button from "../../../components/ui/Button";

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const addItem = useCartStore(s => s.addItem)
    const handleAdd = () => {
        addItem(product)
        toast.success("Agregado al carrito.")
    }
    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
            <div className="relative h-52 w-full overflow-hidden">
                <img loading="lazy" src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                    {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/60">
                    {product.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-accent">
                        S/ {product.price.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/40">
                        <Clock size={14} />
                        {product.preparationTime} min
                    </div>
                </div>
                <Button variant="primary" onClick={handleAdd} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-2 text-sm font-medium text-background transition hover:bg-accent-light">
                    <Plus size={16} />
                    Agregar
                </Button>
            </div>
        </article>
    )
}