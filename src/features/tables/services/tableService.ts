import api from "../../../shared/services/axios"
import type { DiningTable } from "../../../shared/types/diningTable"

export const getTables = async (): Promise<DiningTable[]> => {
    const { data } = await api.get("/tables")
    return data
}
export const updateTablePosition = async (
    id: number,
    posX: number,
    posY: number
): Promise<DiningTable> => {
    const { data } = await api.put(`/tables/${id}/position`, {posX, posY})
    return data
}