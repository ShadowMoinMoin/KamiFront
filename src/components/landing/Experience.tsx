import { motion } from "motion/react";
import { Fish, Flame, Sparkles } from "lucide-react";
import Container from "../ui/Container";

const features = [
    {
        icon: Fish,
        title: "Ingredientes Premium",
        description:
            "Seleccionamos pescados frescos e ingredientes de alta calidad para cada preparación."
    },
    {
        icon: Flame,
        title: "Fusión Creativa",
        description:
            "Combinamos técnicas japonesas con sabores contemporáneos para sorprender en cada bocado."
    },
    {
        icon: Sparkles,
        title: "Experiencia Exclusiva",
        description:
            "Cada visita está diseñada para convertirse en un momento memorable."
    }
];

export default function Experience() {
    return (
        <section className="py-32">
            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <p className="tracking-[0.4em] text-accent uppercase text-sm">
                        神のような味わい
                    </p>

                    <h2 className="mt-6 font-display text-5xl text-accent-light tracking-[0.08em]">
                        Una experiencia diferente
                    </h2>

                    <p className="mt-8 text-zinc-400 leading-8">
                        En KAMI FUSION creemos que cada plato debe contar una
                        historia. Fusionamos tradición japonesa, ingredientes
                        premium y creatividad para ofrecer una experiencia que
                        va más allá del sushi.
                    </p>

                </motion.div>

                <div className="mt-24 grid gap-8 md:grid-cols-3">

                    {features.map(({ icon: Icon, title, description }, index) => (

                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .15
                            }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                                    <Icon
                                        size={26}
                                        className="text-accent"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-display text-2xl font-light tracking-[0.06em] text-white">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-4 leading-7 text-zinc-400">
                                {description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </Container>
        </section>
    );
}