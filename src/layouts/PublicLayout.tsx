import { Outlet } from "react-router-dom"
import { useState } from "react"

import Navbar from "../components/shared/Navbar"
import CartDrawer from "../features/cart/components/CartDrawer"
import MobileMenu from "../components/shared/MobileMenu"
import AuthModal from "../features/auth/components/AuthModal"
import Footer from "../components/shared/Footer"

export default function PublicLayout() {
    const [cartOpen, setCartOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    return (
        <>
            <Navbar onCartClick={() => setCartOpen(true)} onMenuClick={() => setMenuOpen(true)} onUserClick={() => setAuthOpen(true)}/>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)}/>
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)}/>
            <AuthModal open={authOpen} onClose={() => setAuthOpen(false)}/>
            <main className="min-h-screen pt-20 bg-background">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}