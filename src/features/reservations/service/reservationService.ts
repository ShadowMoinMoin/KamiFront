import api from "../../../shared/services/axios";
import type { Reservation, ReservationRequest } from "../../../shared/types/reservation";
export const getReservations = async (): Promise<Reservation[]> => {
    const { data } = await api.get("/reservations")
    return data
}
export const createReservation = async (
    reservation: ReservationRequest
): Promise<Reservation> => {
    const { data } = await api.post("/reservations", reservation)
    return data
}
export const confirmReservation = async (
    id: number
): Promise<Reservation> => {
    const { data } = await api.patch(`/reservations/${id}/confirm`)
    return data
}
export const cancelReservation = async (
    id: number
): Promise<Reservation> => {
    const { data } = await api.patch(`/reservations/${id}/cancel`)
    return data
}