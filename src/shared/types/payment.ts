export type PaymentMethod =
    | "EFECTIVO"
    | "TARJETA"
    | "YAPE"
    | "PLIN";

export interface Payment {
    id: number
    orderId: number
    paymentMethod: PaymentMethod
    amount: number
    transactionReference: string
}