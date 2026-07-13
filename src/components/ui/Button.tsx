import type { HTMLMotionProps } from "motion/react"
import { motion } from "motion/react"
import type { ReactNode } from "react"

interface Props extends HTMLMotionProps<"button"> {
    children: ReactNode
    variant?: "primary" | "secondary" | "ghost"
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...rest
}: Props) {
    const styles = {
        primary: `bg-accent text-background border border-accent hover:bg-accent-light hover:border-accent-light shadow-[0_0_30px_rgba(143,154,123,0.15)]`,
        secondary: `border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/25`,
        ghost: `text-accent hover:bg-accent/10`,
    }

    return (
        <motion.button
            whileHover={{
                scale: 1.03,
                y: -1,
            }}
            whileTap={{
                scale: 0.98,
            }}
            transition={{
                duration: 0.2,
            }}
            className={`
                inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ${styles[variant]} ${className}
            `}
            {...rest}
        >
            {children}
        </motion.button>
    )
}