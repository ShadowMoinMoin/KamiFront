import type { UserRole } from "../../../shared/types/user"

export interface LoginRequest {
    email: string
    password: string
}
export interface RegisterRequest {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string
}
export interface AuthResponse {
    token: string
    userId: number
    name: string
    role: UserRole
}