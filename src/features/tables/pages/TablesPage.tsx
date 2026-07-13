import Container from "../../../components/ui/Container";
import ReservationModal from "../../reservations/components/ReservationModal";
import TableMap from "../components/TableMap";
import { useTableUIStore } from "../store/tableUIStore";

export default function TablesPage() {
    const table = useTableUIStore(state => state.selectedTable)
    const setTable = useTableUIStore(state => state.setSelectedTable)
    return (
            <main className="min-h-screen bg-background">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-accent/5 blur-3xl rounded-full" />

                    <div className="absolute left-0 top-[300px] h-[300px] w-[300px] bg-accent/5 blur-3xl rounded-full" />
                </div>

                <Container className="relative z-10 pt-36 pb-20">
                    <div className="max-w-3xl">
                        <p className="text-sm tracking-[0.35em] text-accent uppercase">
                            KAMI FUSION
                        </p>

                        <h1 className="mt-6 text-5xl font-light tracking-[0.08em] text-white md:text-6xl">
                            Reserva tu Mesa
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                            Selecciona una mesa disponible y realiza tu
                            reserva para disfrutar de una experiencia
                            gastronómica única donde la tradición japonesa
                            se fusiona con la creatividad contemporánea.
                        </p>
                    </div>

                    <div className="mt-16">
                        <TableMap />
                    </div>

                </Container>

                <ReservationModal
                    table={table}
                    onClose={() => setTable(null)}
                />
            </main>
    )
}