import { useEffect, useState } from "react";

import { AnimatePresence } from "motion/react";

import CategorySection from "../../features/categories/components/CategorySection";
import CategoryTabs from "../../features/categories/components/CategoryTabs";

import CartDrawer from "../../features/cart/components/CartDrawer";

import ProductCardSkeleton from "../../features/products/components/ProductCardSkeleton";

import { useActiveCategories } from "../../features/categories/hooks/useCategories";
import { useAvailableProducts } from "../../features/products/hooks/useProducts";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    const { data: categories = [] } = useActiveCategories()

    const {
        data: products = [],
        isLoading: productsLoading
    } = useAvailableProducts()

    const [cartOpen, setCartOpen] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id

                        const categoryId = Number(
                            id.replace("category-", "")
                        )

                        setActiveCategory(categoryId)
                    }
                })
            },
            {
                root: null,
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0.1,
            }
        )

        sections.forEach((section) =>
            observer.observe(section)
        )

        return () => observer.disconnect()
    }, [categories])
    
    return (
        <div className="bg-background text-white">
            
            <div id="menu">
                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                />
                <div className="mx-auto max-w-7xl p-6">
                    <div className="mx-auto max-w-7xl space-y-16 px-4 py-8">
                        {productsLoading ? (
                            categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="space-y-4"
                                >
                                    <div className="h-8 w-48 animate-pulse rounded bg-surface2" />

                                    <div className="grid gap-4">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <ProductCardSkeleton key={index} />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            categories.map((category) => {
                                const categoryProducts = products.filter(
                                    (p) => p.categoryId === category.id
                                )
                                if (categoryProducts.length === 0) {
                                    return null
                                }
                                return (
                                    <CategorySection
                                        key={category.id}
                                        category={category}
                                        products={categoryProducts}
                                    />
                                )
                            })
                        )}
                    </div>
                </div>
                <AnimatePresence>
                    {cartOpen && (
                        <CartDrawer
                            open={cartOpen}
                            onClose={() =>
                                setCartOpen(false)
                            }
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}