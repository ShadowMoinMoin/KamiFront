import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { activateProduct, createProduct, deleteProduct, getAvailableProducts, getProducts, updateProduct } from "../services/productService"
import type { ProductRequest } from "../../../shared/types/product";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}

export const useAvailableProducts = () => {
    return useQuery({
        queryKey: ["products", "active"],
        queryFn: getAvailableProducts,
    });
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
        }
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            id,
            product
        }: {
            id: number;
            product: ProductRequest;
        }) => updateProduct(id, product),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
        }
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
        }
    });
};

export const useActivateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: activateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
        }
    });
};