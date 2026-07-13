import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import ProductForm from "./ProductForm";
import type { Product } from "../../../shared/types/product";

interface Props {
    open: boolean;
    product?: Product | null;
    onClose: () => void;
}

export default function ProductModal({
    open,
    product,
    onClose,
}: Props) {

    return (
        <AnimatePresence>
            {open && (
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div className="mx-4 flex w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface shadow-glow" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .95 }}>
                        <div className="flex items-center justify-between border-b border-border p-6">
                            <div>
                                <h2 className="font-bold text-3xl">
                                    {product ? "Editar producto" : "Nuevo producto"}
                                </h2>
                                <p className="text-sm text-white/50">
                                    Información del producto.
                                </p>
                            </div>
                            <button onClick={onClose} className=" rounded-lg p-2 hover:bg-surface2">
                                <X />
                            </button>
                        </div>
                        <ProductForm product={product} onClose={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}