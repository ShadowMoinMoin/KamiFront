import api from "../../../shared/services/axios";
import type { Category, CategoryRequest } from "../../../shared/types/category";

export const getCategories = async (): Promise<Category[]> => {
    const { data } = await api.get('/categories')
    return data
}
export const getActiveCategories = async (): Promise<Category[]> => {
    const { data } = await api.get('/categories/active')
    return data
}
export const getCategoryById = async (
    id: number
): Promise<Category> => {
    const { data } = await api.get(`/categories/${id}`)
    return data
}
export const createCategory = async (
    category: CategoryRequest
): Promise<Category> => {
    const { data } = await api.post('/categories', category)
    return data
}
export const updateCategory = async (
    id: number,
    category: CategoryRequest
): Promise<Category> => {
    const { data } = await api.put(`/categories/${id}`, category)
    return data
}
export const deleteCategory = async (
    id: number
): Promise<void> => {
    await api.delete(`/categories/${id}`)
}
export const activateCategory = async (
    id: number
): Promise<Category> => {
    const { data } = await api.patch(`/categories/${id}/activate`)
    return data
}