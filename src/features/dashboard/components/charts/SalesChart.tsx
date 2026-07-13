import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import type { DailySale} from "../../../../shared/types/dashboard";

interface Props {
    data: DailySale[];
}

export default function SalesChart({
    data
}: Props) {

    const formatted = data.map(item => ({
        ...item,
        date: new Date(item.date)
            .toLocaleDateString(
                "es-PE",
                { day: "2-digit", month: "short" }
            )
    }));

    return (
        <section className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-6">
                <h2 className="font-display text-3xl">
                    Ventas diarias
                </h2>
                <p className="text-sm text-white/60">
                    Evolución de ventas.
                </p>
            </div>
            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={formatted}>
                        <defs>
                            <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8F9A7B" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#8F9A7B" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#25272B" vertical={false} />
                        <XAxis dataKey="date" stroke="#ffffff60" />
                        <YAxis stroke="#ffffff60" />
                        <Tooltip contentStyle={{ background: "#121315", border: "1px solid #25272B", borderRadius: "12px" }} />
                        <Area type="monotone" dataKey="total" stroke="#8F9A7B" fill="url(#sales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}