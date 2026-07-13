import { useQuery } from "@tanstack/react-query"
import { getMyOrders, getOrders } from "../services/orderService"

export const useOrders = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: getOrders,
    })
}

export const useMyOrders = () => {
    return useQuery({
        queryKey: ["my-orders"],
        queryFn: getMyOrders
    })
}