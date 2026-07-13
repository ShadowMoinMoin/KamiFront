import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { activateCategory, createCategory, deleteCategory, getCategories, getActiveCategories, updateCategory } from "../services/categoryService"

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })
}

export const useActiveCategories = () => {
    return useQuery({
        queryKey: ["categories", "active"],
        queryFn: getActiveCategories,
    });
};

export const useCreateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
    });
};

export const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            category,
        }: {
            id: number;
            category: {
                name: string;
                description: string;
            };
        }) => updateCategory(id, category),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
    });
};

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
    });
};

export const useActivateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: activateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
    });
};