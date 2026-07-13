import api from "../../../shared/services/axios";
import type { Product, ProductRequest } from "../../../shared/types/product";
export const getProducts = async (): Promise<Product[]> => {
    const { data } = await api.get('/products')
    return data
}
export const getAvailableProducts = async (): Promise<Product[]> => {
    const { data } = await api.get('/products/active')
    return data
}
export const getProductsByCategory = async (
    categoryId: number
): Promise<Product[]> => {
    const { data } = await api.get(`/products/category/${categoryId}`)
    return data
}
export const createProduct = async (
    product: ProductRequest
): Promise<Product> => {
    const { data } = await api.post('/products', product)
    return data
}
export const updateProduct = async (
    id: number,
    product: ProductRequest
): Promise<Product> => {
    const { data } = await api.put(`/products/${id}`, product)
    return data
}
export const deleteProduct = async (
    id: number
): Promise<void> => {
    await api.delete(`/products/${id}`)
}
export const activateProduct = async (
    id: number
): Promise<Product> => {
    const { data } = await api.patch(`/products/${id}/activate`)
    return data
}