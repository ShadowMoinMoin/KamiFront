import api from "../../../shared/services/axios"
import type { Payment } from "../../../shared/types/payment"

export const createPayment = async (payload: {
    orderId: number
    paymentMethod: "EFECTIVO" | "TARJETA" | "YAPE" | "PLIN" | "TRANSFERENCIA"
    amount: number
}): Promise<Payment> => {
    const { data } = await api.post("/payments", payload)
    return data
}