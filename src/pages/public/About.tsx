import { motion } from "motion/react";
import {
    Building2,
    ChefHat,
    HeartHandshake,
    Leaf,
    Clock,
    Award,
} from "lucide-react";
import Container from "../../components/ui/Container";

const values = [
    {
        icon: ChefHat,
        title: "Pasión por la cocina",
        description:
            "Cada creación nace del respeto por la gastronomía japonesa y del deseo de ofrecer sabores únicos."
    },
    {
        icon: Leaf,
        title: "Calidad sin compromisos",
        description:
            "Trabajamos únicamente con ingredientes frescos y cuidadosamente seleccionados para garantizar una experiencia excepcional."
    },
    {
        icon: HeartHandshake,
        title: "Atención cercana",
        description:
            "Creemos que un excelente servicio es tan importante como un gran plato. Cada cliente merece sentirse especial."
    }
];

const stats = [
    {
        icon: Clock,
        value: "5+",
        label: "Años creando experiencias"
    },
    {
        icon: Award,
        value: "100%",
        label: "Ingredientes frescos"
    },
    {
        icon: Building2,
        value: "1000+",
        label: "Clientes satisfechos"
    }
];

export default function About() {
    return (
        <section className="py-32">
            <Container>
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="uppercase tracking-[0.4em] text-sm text-accent">
                            私たちについて
                        </p>

                        <h2 className="mt-6 font-display text-5xl tracking-[0.08em] text-accent-light">
                            Nuestra Historia
                        </h2>

                        <div className="mt-8 space-y-6 text-zinc-400 leading-8">
                            <p>
                                En <span className="text-white">KAMI FUSION</span>{" "}
                                creemos que la gastronomía es una forma de arte.
                                Nuestro propósito es combinar la tradición
                                japonesa con técnicas modernas para crear platos
                                que despierten emociones.
                            </p>

                            <p>
                                Cada receta refleja nuestra dedicación por los
                                detalles, la calidad de los ingredientes y la
                                innovación constante. Más que servir sushi,
                                buscamos crear momentos que nuestros clientes
                                quieran volver a vivir.
                            </p>

                            <p>
                                Nuestro equipo comparte una misma filosofía:
                                cocinar con pasión, atender con calidez y
                                superar las expectativas en cada visita.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="overflow-hidden rounded-[2rem] border border-white/10">
                            <img
                                src="https://res.cloudinary.com/dqusg1diz/image/upload/v1782075630/SushiFlorDeCerezo_zn4sf9.png"
                                alt="Kami Fusion"
                                className="h-[650px] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-black/70 p-8 backdrop-blur-xl">
                            <p className="font-display text-4xl text-accent">
                                和
                            </p>
                            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-400">
                                Tradición • Calidad • Innovación
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Valores */}
                <div className="mt-32 grid gap-8 md:grid-cols-3">
                    {values.map(({ icon: Icon, title, description }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15
                            }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                                <Icon
                                    className="text-accent"
                                    size={26}
                                />
                            </div>

                            <h3 className="mt-6 font-display text-2xl tracking-[0.06em] text-white">
                                {title}
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Estadísticas */}
                <div className="mt-28 rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md">
                    <div className="grid gap-10 md:grid-cols-3">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="text-center"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                                    <Icon
                                        size={28}
                                        className="text-accent"
                                    />
                                </div>

                                <p className="mt-6 font-display text-5xl text-accent-light">
                                    {value}
                                </p>

                                <p className="mt-2 text-zinc-400">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}