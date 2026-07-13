import { AnimatePresence, motion } from "motion/react"
import type { ReactNode } from "react"

interface Props {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export default function Modal({
    open,
    onClose,
    children,
}: Props) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"/>
                    <motion.div initial={{opacity: 0, y: 20, scale: 0.98}} animate={{opacity: 1, y: 0, scale: 1,}} exit={{opacity: 0, y: 20, scale: 0.98,}} transition={{duration: 0.2}} className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 border border-border bg-surface p-8 shadow-glow">
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}