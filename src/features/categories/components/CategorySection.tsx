import type { Category } from "../../../shared/types/category";
import type { Product } from "../../../shared/types/product";

import ProductCard from "../../products/components/ProductCard";

interface Props {
    category: Category
    products: Product[]
}

export default function CategorySection({
    category,
    products,
}: Props) {
    return (
        <section id={`category-${category.id}`} className="scroll-mt-40">
            <h2 className="mb-6 text-3xl font-bold text-white">
                {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}