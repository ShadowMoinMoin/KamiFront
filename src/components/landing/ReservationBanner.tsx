import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function ReservationBanner() {
    const navigate = useNavigate();

    return (
        <section className="relative py-32 overflow-hidden">

            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                    alt="Restaurant ambience"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-[0.4em] text-accent"
                    >
                        Reserva tu experiencia
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-5xl md:text-6xl font-light text-white leading-tight"
                    >
                        Una mesa, una historia,
                        <br />
                        un momento inolvidable
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-lg text-zinc-300 leading-8 max-w-2xl mx-auto"
                    >
                        Déjate llevar por una experiencia gastronómica donde
                        cada plato cuenta una historia y cada visita se
                        convierte en un recuerdo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            onClick={() => navigate("/tables")}
                            className="px-10 py-4 bg-accent text-black font-medium tracking-wide rounded-full hover:bg-accent-light transition transform hover:scale-105"
                        >
                            Reservar mesa
                        </button>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}