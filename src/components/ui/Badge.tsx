interface Props {
    value: number
}
export default function Badge({
    value,
}: Props) {
    if (value <= 0) return null
    return (
        <span
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-black">
            {value}
        </span>
    )
}