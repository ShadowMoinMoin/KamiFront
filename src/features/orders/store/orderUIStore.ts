import { create } from "zustand";
import type { Order } from "../types/order";

interface OrderUIState {
    selectedOrder: Order | null
    open: boolean
    openDrawer: (order: Order) => void
    closeDrawer: () => void
}

export const useOrderUIStore = create<OrderUIState>((set) => ({
    selectedOrder: null,
    open: false,
    openDrawer: (order) =>
        set({ selectedOrder: order, open: true }),
    closeDrawer: () =>
        set({ selectedOrder: null, open: false})
}))