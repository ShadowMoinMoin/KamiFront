import { create } from "zustand"
import type { DiningTable } from "../../../shared/types/diningTable"

type TableUIState = {
    selectedTable: DiningTable | null
    setSelectedTable: (table: DiningTable | null) => void
}
export const useTableUIStore = create<TableUIState>((set) => ({
    selectedTable: null,
    setSelectedTable: (table) =>
        set({ selectedTable: table })
}))