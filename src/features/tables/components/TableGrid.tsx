import { useTables } from "../hooks/useTables";
import TableCard from "./TableCard";

export default function TableGrid() {
    const { data: tables = [] } = useTables();

    return (
        <div className="relative w-full h-[600px] bg-slate-100 rounded-xl overflow-hidden">
            {tables.map((table) => (
                <TableCard key={table.id} table={table} />
            ))}
        </div>
    );
}