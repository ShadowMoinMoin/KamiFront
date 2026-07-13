import { ShoppingCart, User, Menu } from "lucide-react"
import { NavLink } from "react-router-dom"

import Container from "../ui/Container"
import IconButton from "../ui/IconButton"
import Badge from "../ui/Badge"
import Logo from "./Logo"

import { useCartStore } from "../../features/cart/store/cartStore"
import UserDropdown from "./UserDropdown"
import { useAuthStore } from "../../features/auth/store/authStore"
import { useEffect, useRef, useState } from "react"

interface Props {
    onCartClick: () => void
    onMenuClick: () => void
    onUserClick: () => void
}

export default function Navbar({
    onCartClick,
    onMenuClick,
    onUserClick
}: Props) {
    const links = [
        { label: "Menú", path: "/menu" },
        { label: "Nosotros", path: "/about" },
        { label: "Reservas", path: "/tables" },
    ]
    const [userOpen, setUserOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const items = useCartStore(state => state.items)
    const user = useAuthStore(state => state.user)
    const userRef = useRef<HTMLDivElement>(null)
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as Node

            if (userRef.current && !userRef.current.contains(target)) {
                setUserOpen(false)
            }
        }
        if (userOpen) {
            document.addEventListener("mousedown", handleClick)
        }
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [userOpen])
    const handleUserClick = () => {
        if (!user) {
            onUserClick()
        } else {
            setUserOpen(v => !v)
        }
    }
    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? `border-b border-white/5 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]` : "bg-transparent"}`}>
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Logo />
                    <nav className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `group relative text-sm uppercase tracking-[0.2em] transition duration-300 ${isActive ? "text-accent" : "text-zinc-300 hover:text-accent"}`}
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        <span className={`absolute -bottom-2 left-0 h-px w-full bg-accent transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}/>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <div className="relative" ref={userRef}>
                            <IconButton icon={<User size={20} />} onClick={handleUserClick} />
                            <UserDropdown open={userOpen} onClose={() => setUserOpen(false)} />
                        </div>
                        <div className="relative">
                            <IconButton icon={<ShoppingCart size={20} />} onClick={onCartClick} />
                            <Badge value={totalItems} />
                        </div>
                        <div className="md:hidden">
                            <IconButton icon={<Menu size={22} />} onClick={onMenuClick} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}