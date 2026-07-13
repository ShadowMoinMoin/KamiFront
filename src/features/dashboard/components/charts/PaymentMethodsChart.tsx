import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import type { PaymentMethod } from "../../../../shared/types/dashboard";

interface Props {
    data: PaymentMethod[];
}

const COLORS = ["#C026D3", "#22D3EE", "#3B82F6", "#34D399"];

export default function PaymentMethodsChart({
    data
}: Props) {
    return (
        <section className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4">
                <h2 className="font-display text-2xl">
                    Métodos de pago
                </h2>
                <p className="text-sm text-white/60">
                    Distribución de ingresos.
                </p>
            </div>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} dataKey="total" nameKey="method" cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={4}>
                            {data.map(
                                (_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                )
                            )}
                        </Pie>
                        <Tooltip contentStyle={{ background: "#121315", border: "1px solid #25272B", borderRadius: "12px" }} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}