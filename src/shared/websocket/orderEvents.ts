export type OrderStatus =
    | "PENDIENTE"
    | "CONFIRMADO"
    | "EN_PREPARACION"
    | "LISTO"
    | "EN_CAMINO"
    | "ENTREGADO"
    | "CANCELADO";

export type OrderEventType =
    | "CREATED"
    | "STATUS_CHANGED"
    | "CANCELLED";

export interface OrderEvent {
    orderId: number;
    orderCode: string;
    status: OrderStatus;
    type: OrderEventType;
}