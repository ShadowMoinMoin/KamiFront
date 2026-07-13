export type ReservationStatus =
    | "PENDING"
    | "CONFIRMED"
    | "CANCELLED"

export interface Reservation {
    id: number
    tableId: number
    customerName: string
    phone: string
    startTime: string
    endTime: string
    status: ReservationStatus
    notes: string
}
export interface ReservationRequest {
    tableId: number
    customerName: string
    phone: string
    startTime: string
    endTime?: string
    notes: string
}