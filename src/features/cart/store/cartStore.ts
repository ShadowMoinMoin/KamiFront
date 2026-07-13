import { create } from "zustand";
import type { CartState } from "../types/cart";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const items = get().items;
                const exists = items.find(i => i.product.id === product.id)
                if (exists) {
                    set({
                        items: items.map(i =>
                            i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                        )
                    })
                } else {
                    set({
                        items: [...items, { product, quantity: 1 }]
                    })
                }
            },
            removeItem: (productId) => {
                set({
                    items: get().items.filter(
                        i => i.product.id !== productId
                    )
                })
            },
            increase: (productId) => {
                set({
                    items: get().items.map(i =>
                        i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i
                    )
                })
            },
            decrease: (productId) => {
                set({
                    items: get().items.map(i =>
                        i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
                    )
                        .filter(i => i.quantity > 0)
                })
            },
            getTotal: () => {
                return get().items.reduce(
                    (acc, i) => acc + i.product.price * i.quantity, 0
                )
            },
            clear: () => set({ items: [] }),
        }),
        {
            name: "cart-storage"
        }
    )
)