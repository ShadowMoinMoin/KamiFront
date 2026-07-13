import type { Product } from "../../../shared/types/product";

export interface CartItem {
    product: Product
    quantity: number
}
export interface CartState {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (productId: number) => void
    increase: (productId: number) => void
    decrease: (productId: number) => void
    clear: () => void
    getTotal: () => number
}