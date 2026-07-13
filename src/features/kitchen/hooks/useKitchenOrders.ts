import { useQuery } from "@tanstack/react-query"
import type { Order } from "../../orders/types/order"
import { getOrders } from "../../orders/services/orderService"

export const useKitchenOrders = () => {
    return useQuery<Order[]>({
        queryKey: ["kitchen-orders"],
        queryFn: getOrders,
    })
}