import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";


const IMAGE =
    "https://res.cloudinary.com/dqusg1diz/image/upload/v1782075630/SushiFlorDeCerezo_zn4sf9.png";

export default function Story() {
    const navigate = useNavigate();

    return (
        <section className="py-32">
            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="relative overflow-hidden rounded-3xl"
                    >

                        <img
                            src={IMAGE}
                            alt="Chef preparando sushi"
                            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <p className="text-sm uppercase tracking-[0.35em] text-accent">
                            Nuestra historia
                        </p>

                        <h2 className="mt-6 text-5xl font-display text-accent-light leading-tight">
                            Tradición japonesa,
                            <br />
                            creatividad sin límites.
                        </h2>

                        <p className="mt-8 leading-8 text-zinc-400">
                            En KAMI FUSION creemos que la gastronomía es una
                            experiencia que despierta los sentidos. Cada plato
                            nace del respeto por las técnicas japonesas y la
                            búsqueda constante de nuevos sabores.
                        </p>

                        <p className="mt-6 leading-8 text-zinc-400">
                            Desde la selección de ingredientes hasta la
                            presentación final, cuidamos cada detalle para
                            ofrecer una experiencia única a nuestros invitados.
                        </p>

                        <Button
                            onClick={() => navigate("/tables")}
                            className="mt-10"
                        >
                            Reservar una mesa
                        </Button>

                    </motion.div>

                </div>

            </Container>
        </section>
    );
}