import { LogOut, User, ShoppingBag } from "lucide-react"
import { useAuthStore } from "../../features/auth/store/authStore"
import { useNavigate } from "react-router-dom"
import { getRoleHome } from "../../features/auth/utils/getRoleHome";

interface Props {
    open: boolean
    onClose: () => void
}

export default function UserDropdown({
    open,
    onClose,
}: Props) {
    const { user, logout } = useAuthStore()

    const navigate = useNavigate()

    if (!open || !user) return null

    const handleLogout = () => {
        logout()
        onClose()
    }
    
    return (
        <div className="absolute right-0 mt-2 w-56 overflow-hidden border border-border bg-surface shadow-glow">
            <div className="border-b border-border p-4">
                <p className="text-sm text-zinc-400">
                    Bienvenido
                </p>
                <p className="text-white font-medium">
                    {user.name}
                </p>
            </div>

            <div className="flex flex-col">
                <button onClick={() => {onClose(), navigate(getRoleHome(user.role))}} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-300 hover:bg-background hover:text-accent">
                    <User size={16} />
                    Mi perfil
                </button>
                <button onClick={() => {onClose(), navigate("/profile")}} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-300 hover:bg-background hover:text-accent">
                    <ShoppingBag size={16} />
                    Mis pedidos
                </button>
                <button onClick={handleLogout} className="flex items-center gap-2 border-t border-border px-4 py-3 text-sm text-red-400 hover:bg-background">
                    <LogOut size={16} />
                    Cerrar sesión
                </button>
            </div>
        </div>
    )
}