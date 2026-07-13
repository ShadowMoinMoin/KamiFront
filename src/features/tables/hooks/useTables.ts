import { useQuery } from "@tanstack/react-query"
import { getTables } from "../services/tableService"
import type { DiningTable } from "../../../shared/types/diningTable"

export const useTables = () => {
    return useQuery<DiningTable[]>({
        queryKey: ["tables"],
        queryFn: getTables
    })
}