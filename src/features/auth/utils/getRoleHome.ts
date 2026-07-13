import type { UserRole } from "../../../shared/types/user";

export function getRoleHome(role: UserRole) {
    switch (role) {
        case "ADMIN":
            return "/dashboard"
        case "COCINA":
            return "/kitchen"
        case "MOZO":
            return "/orders"
        case "GERENTE":
            return "/cashier"
        case "DELIVERY":
            return "/delivery"
        case "CLIENTE":
            return "/profile"
        default:
            return "/";
    }
}