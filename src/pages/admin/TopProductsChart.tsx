import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, } from "recharts";

import type { TopProduct } from "../../shared/types/dashboard";

interface Props {
    products: TopProduct[];
}

export default function TopProductsChart({
    products
}: Props) {

    const data = products
        .slice(0, 8)
        .map(product => ({
            name: product.productName,
            quantity: product.quantity
        }));

    return (
        <section className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-6">
                <h2 className="font-bold text-3xl">
                    Productos más vendidos
                </h2>
                <p className="text-sm text-white/60">
                    Ranking por cantidad de ventas.
                </p>
            </div>
            <div className="h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
                        <CartesianGrid stroke="#25272B" horizontal={false} />
                        <XAxis type="number" stroke="#ffffff60" />
                        <YAxis type="category" dataKey="name" width={120} stroke="#ffffff60" />
                        <Tooltip contentStyle={{ background: "#121315", border: "1px solid #25272B", borderRadius: "12px", color: "#fff" }} />
                        <Bar dataKey="quantity" fill="#8F9A7B" radius={[0, 8, 8, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}