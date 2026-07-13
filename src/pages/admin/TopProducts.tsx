import type { TopProduct } from "../../shared/types/dashboard";

interface Props {
    products: TopProduct[];
}

export default function TopProducts({
    products
}: Props) {

    return (
        <section className="space-y-4">
            <div>
                <h2 className="font-display text-3xl">
                    Productos más vendidos
                </h2>
                <p className="text-sm text-white/60">
                    Productos con mayor cantidad de ventas.
                </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                {
                    products.slice(0, 3).map(
                        (product, index) => (
                            <div key={product.productName} className="rounded-2xl border border-border bg-surface p-6">
                                <span className="text-sm text-accent">
                                    #{index + 1}
                                </span>
                                <h3 className="mt-3 font-display text-2xl">
                                    {product.productName}
                                </h3>
                                <p className=" mt-4 text-white/60">
                                    Vendidos:
                                    <span className="ml-2 text-white font-semibold">
                                        {product.quantity}
                                    </span>
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
}