import type { DiningTable } from "../../../shared/types/diningTable";
import { useTableUIStore } from "../store/tableUIStore";
import { useDraggable } from "@dnd-kit/core";

interface Props {
    table: DiningTable;
    onClick?: (table: DiningTable) => void;
}

export default function TableCard({
    table,
    onClick,
}: Props) {
    const setSelectedTable = useTableUIStore(
        (state) => state.setSelectedTable
    );
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: String(table.id)
    })
    return (
        <div ref={setNodeRef} {...attributes} {...listeners}
            onClick={() => {
                setSelectedTable(table);
                onClick?.(table);
            }}
            className={` absolute flex h-20 w-20 flex-col items-center justify-center rounded-3xl border border-white/10 bg-background/80 backdrop-blur-xl transition-all duration-50 hover:border-accent/40 hover:shadow-[0_0_35px_rgba(143,154,123,0.18)]
                ${isDragging
                    ? `scale-110 border-accent shadow-[0_0_45px_rgba(143,154,123,0.35)] z-50`
                    : ""
                }
            `} style={{
                touchAction: "none",
                left: `${table.posX}px`,
                top: `${table.posY}px`,
                transform: transform
                    ? `translate(${transform.x}px, ${transform.y}px)`
                    : undefined,
            }}
        >
            <div className="relative mt-1 text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                Mesa {table.tableNumber}
            </div>

            <div className="absolute -bottom-2 px-2 py-[1px] text-[9px] text-[#A1A1AA] bg-[#0B0B0D] border border-[#1F1F23] rounded-full">
                Pax: {table.capacity}
            </div>
        </div>
    );
}