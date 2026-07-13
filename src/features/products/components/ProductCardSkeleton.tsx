export default function ProductCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <div className="h-56 animate-pulse bg-surface2" />
            <div className="p-4">
                <div className="h-5 w-3/4 animate-pulse rounded bg-surface2" />
                <div className="mt-3 h-4 w-full animate-pulse rounded bg-surface2" />
                <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-surface2" />
                <div className="mt-4 h-8 animate-pulse rounded bg-surface2" />
            </div>
        </div>
    )
}