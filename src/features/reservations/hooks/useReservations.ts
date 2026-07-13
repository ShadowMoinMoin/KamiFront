import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createReservation, getReservations } from "../service/reservationService";

export const useReservations = () => {
    const queryClient = useQueryClient();
    const reservationsQuery = useQuery({
        queryKey: ["reservations"],
        queryFn: getReservations
    });
    const createMutation = useMutation({
        mutationFn: createReservation,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["reservations"]
            });
        }
    });
    return {
        reservationsQuery,
        createReservation: createMutation
    };
};