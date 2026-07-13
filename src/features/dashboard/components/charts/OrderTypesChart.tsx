import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import type { OrderType } from "../../../../shared/types/dashboard";

interface Props {
    data: OrderType[];
}

export default function OrderTypesChart({
    data
}: Props) {

    const formatted =
        data.map(item => ({
            ...item,
            orderType: item.orderType.replace("_", " ")
        }));
    return (
        <section className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4">
                <h2 className="font-display text-2xl">
                    Tipo de pedidos
                </h2>
                <p className="text-sm text-white/60">
                    Cantidad por modalidad.
                </p>
            </div>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={formatted}>
                        <CartesianGrid stroke="#25272B" vertical={false} />
                        <XAxis dataKey="orderType" stroke="#ffffff60" />
                        <YAxis stroke="#ffffff60" />
                        <Tooltip contentStyle={{ background: "#121315", border: "1px solid #25272B", borderRadius: "12px" }} />
                        <Bar dataKey="orders" fill="#10B981" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}