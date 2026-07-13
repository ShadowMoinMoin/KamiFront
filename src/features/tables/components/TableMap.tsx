import { DndContext, type DragEndEvent, type DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useTables } from "../hooks/useTables";
import { useUpdateTablePosition } from "../hooks/useUpdateTablePosition";
import TableCard from "./TableCard";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../auth/store/authStore";

export default function TableMap() {
    const { data: tables = [] } = useTables()
    const updatePosition = useUpdateTablePosition()
    const queryClient = useQueryClient()
    const { hasRole } = useAuthStore()
    const canMoveTables = hasRole("ADMIN")
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5
            }
        })
    )
    const GRID_SIZE = 50;

    const MAP_WIDTH = 800;
    const MAP_HEIGHT = 700;

    const handleDragStart = (event: DragStartEvent) => {
        const tableId = Number(event.active.id);
        console.log("Moviendo mesa:", tableId);
    }
    const handleDragEnd = (event: DragEndEvent) => {
        if (!canMoveTables) return
        const { active, delta } = event;

        const tableId = Number(active.id);

        const tables = queryClient.getQueryData<any[]>(["tables"]);
        if (!tables) return;

        const table = tables.find((t) => t.id === tableId);
        if (!table) return;

        let newPosX = table.posX + delta.x;
        let newPosY = table.posY + delta.y;

        newPosX = Math.round(newPosX / GRID_SIZE) * GRID_SIZE;
        newPosY = Math.round(newPosY / GRID_SIZE) * GRID_SIZE;

        newPosX = Math.max(0, Math.min(MAP_WIDTH - GRID_SIZE, newPosX));
        newPosY = Math.max(0, Math.min(MAP_HEIGHT - GRID_SIZE, newPosY));

        queryClient.setQueryData(["tables"], (old: any[] = []) =>
            old.map((t) =>
                t.id === tableId
                    ? { ...t, posX: newPosX, posY: newPosY }
                    : t
            )
        );

        updatePosition.mutate({
            id: tableId,
            posX: newPosX,
            posY: newPosY,
        });
    }
    return (
        <DndContext
            sensors={canMoveTables ? sensors : []}
            onDragStart={canMoveTables ? handleDragStart : undefined}
            onDragEnd={canMoveTables ? handleDragEnd : undefined}
        >
            <div className=" relative h-[700px] w-full overflow-hidden rounded-3xl border border-white/10 bg-background/90 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,154,123,0.12),transparent_35%)]" />
                <div className=" absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent" />
                <div className="absolute left-0 right-0 top-[180px] h-[280px] border-y border-white/5 bg-white/[0.02] backdrop-blur-sm" />
                <div className=" absolute inset-x-0 bottom-0 h-40 border-t border-accent/10 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute left-8 top-8 z-10">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-accent">
                        Gestión de salón
                    </p>
                    <h2 className="mt-2 text-2xl font-light tracking-[0.15em] text-white">
                        Distribución de Mesas
                    </h2>
                </div>
                {tables.map((table) => (
                    <TableCard
                        key={table.id}
                        table={table}
                    />
                ))}
            </div>
        </DndContext>
    );
}