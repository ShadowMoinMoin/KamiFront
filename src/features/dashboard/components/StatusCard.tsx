interface Props {
    title: string;
    count: number;
    color: string;
}

export default function StatusCard({
    title,
    count,
    color,
}: Props) {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/70">
                    {title}
                </span>
                <span
                    className={`h-3 w-3 rounded-full ${color}`}
                />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">
                {count}
            </h2>
        </div>
    );
}