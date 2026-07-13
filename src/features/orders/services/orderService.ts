import api from "../../../shared/services/axios";
import type { Order } from "../types/order";

export const getOrders = async (): Promise<Order[]> => {
    const { data } = await api.get("/orders")
    return data
}
export const getMyOrders = async (): Promise<Order[]> => {
    const { data } = await api.get("orders/me")
    return data
}
export const getOrderById = async (id: number): Promise<Order> => {
    const { data } = await api.get(`/orders/${id}`)
    return data
}
export const changeOrderStatus = async (
    id: number,
    status: string
) => {
    await api.patch(`/orders/${id}/status?status=${status}`)
}
export const createOrder = async (payload: any) => {
    const { data } = await api.post('/orders', payload);
    return data
}