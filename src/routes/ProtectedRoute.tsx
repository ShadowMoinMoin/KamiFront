import { Navigate } from "react-router-dom"
import { useAuthStore } from "../features/auth/store/authStore"
import type { UserRole } from "../shared/types/user"

interface Props {
    children: React.ReactNode
    roles?: UserRole[]
}

export default function ProtectedRoute({
    children,
    roles
}: Props) {
    const user = useAuthStore(
        state => state.user
    )
    if (!user) {
        return <Navigate to="/login"/>
    }
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/"/>
    }
    return <>{children}</>
}