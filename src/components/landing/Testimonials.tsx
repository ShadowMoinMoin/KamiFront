import { motion } from "motion/react";
import Container from "../ui/Container";

const testimonials = [
    {
        name: "Andrea M.",
        text: "El mejor sushi de la ciudad, experiencia impecable."
    },
    {
        name: "Carlos R.",
        text: "Ambiente increíble y atención de primer nivel."
    },
    {
        name: "Valeria S.",
        text: "Cada plato se siente cuidadosamente diseñado."
    }
];

export default function Testimonials() {
    return (
        <section className="py-32">
            <Container>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-sm uppercase tracking-[0.4em] text-accent">
                        Opiniones
                    </p>

                    <h2 className="mt-6 text-5xl font-light text-white">
                        Lo que dicen nuestros clientes
                    </h2>

                    <p className="mt-8 text-zinc-400 leading-8">
                        Experiencias reales de quienes ya vivieron KAMI FUSION.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-3">

                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition"
                        >

                            {/* Stars */}
                            <div className="text-accent text-sm tracking-widest">
                                ★★★★★
                            </div>

                            {/* Text */}
                            <p className="mt-6 text-zinc-300 leading-7">
                                “{t.text}”
                            </p>

                            {/* Name */}
                            <div className="mt-6 text-sm text-zinc-500">
                                — {t.name}
                            </div>

                        </motion.div>
                    ))}

                </div>

            </Container>
        </section>
    );
}