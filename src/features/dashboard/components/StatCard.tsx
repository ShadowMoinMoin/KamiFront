import type { ReactNode } from "react";
interface Props {
    title: string;
    value: string | number;
    icon?: ReactNode;
}

export default function StatCard({
    title,
    value,
    icon,
}: Props) {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/70">
                    {title}
                </p>
                <div className="text-accent">
                    {icon}
                </div>
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">
                {value}
            </h2>
        </div>
    );
}