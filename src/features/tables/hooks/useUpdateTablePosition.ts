import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTablePosition } from "../services/tableService"

export const useUpdateTablePosition = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({
            id,
            posX,
            posY
        }: {
            id: number
            posX: number
            posY: number
        }) =>
            updateTablePosition(
                id,
                posX,
                posY
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tables"]
            })
        }
    })
}