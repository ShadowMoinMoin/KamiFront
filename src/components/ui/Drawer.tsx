import { AnimatePresence, motion } from "motion/react"
import type { ReactNode } from "react"

interface Props {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export default function Drawer({
    open,
    onClose,
    children,
}: Props) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
                    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{duration: 0.25,}}
                        className="fixed right-0 top-0 z-50 h-screen w-[320px] border-l border-border bg-surface">
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}