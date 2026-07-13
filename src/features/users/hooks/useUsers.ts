import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Users, UserRole } from "../../../shared/types/user";
import api from "../../../shared/services/axios";

export function useUsers() {

    return useQuery<Users[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await api.get("/users");
            return response.data;
        }
    });
}


export function useChangeUserRole() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            id,
            role
        }: {
            id: number;
            role: UserRole;
        }) => {

            const response = await api.patch(
                `/users/${id}/role`,
                { role }
            );

            return response.data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        }
    });

}

export function useDeleteUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({
            id
        }: {
            id: number
        }) => {
            const response = await api.delete(`/users/${id}`)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        }
    })
}

export function useActivateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({
            id
        }: {
            id: number
        }) => {
            const response = await api.patch(`users/${id}/activate`)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        }
    })
}