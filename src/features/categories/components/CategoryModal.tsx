import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { Category } from "../../../shared/types/category";
import CategoryForm from "./CategoryForm";

interface Props {
    open: boolean;
    category?: Category | null;
    onClose: () => void;
}

export default function CategoryModal({
    open,
    category,
    onClose,
}: Props) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: .95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: .95, y: 20 }}
                        transition={{ duration: .2 }}
                        className="w-full max-w-lg rounded-2xl border border-border bg-surface shadow-glow">
                        <div className="flex items-center justify-between border-b border-border p-6">
                            <div>
                                <h2 className="font-display text-3xl">
                                    {category ? "Editar categoría" : "Nueva categoría"}
                                </h2>
                                <p className="text-sm text-white/50">
                                    Completa la información.
                                </p>
                            </div>
                            <button onClick={onClose} className="rounded-lg p-2 hover:bg-surface2">
                                <X />
                            </button>
                        </div>
                        <CategoryForm category={category} onClose={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}