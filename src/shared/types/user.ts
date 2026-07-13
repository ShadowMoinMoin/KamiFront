export type UserRole =
    | "ADMIN"
    | "GERENTE"
    | "MOZO"
    | "COCINA"
    | "DELIVERY"
    | "CLIENTE"

export type UserStatus =
    | "ACTIVO"
    | "INACTIVO";

export interface User {
    id: number
    name: string
    role: UserRole
}

export interface Users {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
}