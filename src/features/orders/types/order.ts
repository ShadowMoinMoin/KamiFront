export type OrderStatus = 
    | "PENDIENTE"
    | "CONFIRMADO"
    | "EN_PREPARACION"
    | "LISTO"
    | "EN_CAMINO"
    | "ENTREGADO"
    | "CANCELADO"
    | "PAGADO"

export type OrderType =
    | "LOCAL"
    | "PARA_LLEVAR"
    | "DELIVERY"

export interface OrderDetail {
    productId: number
    productName: string
    quantity: number
    unitPrice: number
    subtotal: number
}
export interface Order {
    id: number
    orderCode: string

    userId: number
    deliveryId?: number
    tableId?: number

    orderType: OrderType
    orderStatus: OrderStatus

    subtotal: number
    tax: number
    total: number

    deliveryAddress?: string
    observations?: string

    createdAt: string
    
    items: OrderDetail[]
}