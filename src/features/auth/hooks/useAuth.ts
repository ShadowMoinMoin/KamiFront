import { useAuthStore } from "../store/authStore";

export function useAuth() {
    const token = useAuthStore(
        state => state.token
    )
    const user = useAuthStore(
        state => state.user
    )
    const logout = useAuthStore(
        state => state.logout
    )
    const hasRole = useAuthStore(
        state => state.hasRole
    )
    return {
        token,
        user,
        logout,
        hasRole,
        isAutheticated: !!token
    }
}