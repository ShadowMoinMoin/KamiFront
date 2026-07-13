import api from "../../../shared/services/axios";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth";
export const loginRequest = async (
    data: LoginRequest
): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data)
    return response.data
}
export const registerRequest = async (
    data: RegisterRequest
): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data)
    return response.data
}