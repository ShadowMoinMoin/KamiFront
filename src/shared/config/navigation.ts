import type { UserRole } from "../types/user";
export interface NavItem {
    label: string,
    path: string
}
export const navigation: Record<UserRole, NavItem[]> = {
    ADMIN: [
        {
            label: "Dashboard",
            path: "/admin"
        },
        {
            label: "Categorías",
            path: "/categories",
        },
        {
            label: "Productos",
            path: "/products",
        },
    ],
    COCINA: [
        {
            label: "Cocina",
            path: "/kitchen",
        },
    ],
    MOZO: [
        {
            label: "Pedidos",
            path: "/waiter",
        },
    ],
    GERENTE: [
        {
            label: "Caja",
            path: "/cashier",
        },
    ],

    DELIVERY: [
        {
            label: "Delivery",
            path: "/delivery",
        },
    ],
    CLIENTE: []
}