import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, UserRole } from "../../../shared/types/user";
interface AuthState {
    token: string | null
    user: User | null ;
    login: (
        token: string,
        user: User
    ) => void
    logout: () => void
    isAuthenticated: () => boolean
    hasRole: (...roles: UserRole[]) => boolean
}
export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            login: (token, user) =>
                set({token, user}),
            logout: () =>
                set({
                    token: null,
                    user: null
                }),
            isAuthenticated: () => {
                return !!get().token
            },
            hasRole: (...roles) => {
                const user = get().user
                if (!user) return false
                return roles.includes(user.role)
            }
        }),
        {
            name: 'auth-storage'
        }
    )
)