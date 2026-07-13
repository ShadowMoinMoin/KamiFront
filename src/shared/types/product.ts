export interface Product {
    id: number
    categoryId: number
    categoryName: string
    name: string
    description: string
    price: number
    imageUrl: string
    available: boolean
    preparationTime: number | null
}
export interface ProductRequest {
    categoryId: number
    name: string
    description?: string
    price: number
    imageUrl?: string
    preparationTime?: number
}