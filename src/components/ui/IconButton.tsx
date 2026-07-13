import type { ReactNode } from "react"

interface Props {
    icon: ReactNode
    onClick?: () => void
}

export default function IconButton({
    icon,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="relative flex h-10 w-10 items-center justify-center text-zinc-300 transition-colors hover:text-accent">
            {icon}
        </button>
    )
}