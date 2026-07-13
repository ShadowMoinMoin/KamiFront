import { X } from "lucide-react"
import { Link } from "react-router-dom"

import Drawer from "../ui/Drawer"
import Logo from "./Logo"

interface Props {
    open: boolean
    onClose: () => void
}

export default function MobileMenu({
    open,
    onClose,
}: Props) {
    const links = [
        { label: "Menú", href: "/menu", },
        { label: "Nosotros", href: "/about", },
        { label: "Reservas", href: "/tables", }
    ]

    return (
        <Drawer open={open} onClose={onClose}>
            <div className="flex h-full flex-col">
                <div
                    className="flex items-center justify-between border-b border-border p-6">
                    <Logo />
                    <button onClick={onClose} className="text-zinc-400 transition hover:text-accent">
                        <X size={22} />
                    </button>
                </div>
                <nav className="flex flex-col p-6">
                    {links.map(link => (
                        <Link key={link.href} to={link.href} onClick={onClose} className="border-b border-border py-5 text-sm uppercase tracking-[0.2em] text-zinc-300 transition hover:text-accent">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto p-6">
                    <Link to="/tables" onClick={onClose} className="block border border-accent bg-accent px-6 py-4 text-center text-black uppercase tracking-[0.2em]">
                        Reservar Mesa
                    </Link>
                </div>

            </div>
        </Drawer>
    )
}