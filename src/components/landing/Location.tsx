import { motion } from "motion/react";
import Container from "../ui/Container";
import { LucideClock, LucideMapPin, PhoneIcon } from "lucide-react";

export default function Location() {
    return (
        <section className="py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-sm uppercase tracking-[0.4em] text-accent">
                        Ubicación
                    </p>

                    <h2 className="mt-6 text-5xl font-light text-white">
                        Encuéntranos
                    </h2>

                    <p className="mt-8 text-zinc-400 leading-8">
                        Te esperamos para que vivas la experiencia KAMI FUSION.
                    </p>
                </motion.div>
                <div className="mt-20 grid gap-10 lg:grid-cols-2 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10"
                    >
                        <iframe
                            className="h-full w-full"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997819.8660017292!2d-76.56402724035756!3d-12.044076233861732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964a0d1b2db1%3A0xd3cd284b0c2086ee!2sOkami%20Sushi%20%26%20Bar!5e0!3m2!1ses-419!2spe!4v1782607020265!5m2!1ses-419!2spe"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
                    >

                        <h3 className="text-2xl font-light text-white">
                            KAMI FUSION
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Restaurante de cocina japonesa fusión,
                            especializado en experiencias gastronómicas únicas.
                        </p>

                        <div className="mt-8 space-y-4 text-sm text-zinc-300">

                            <p className="flex items-center gap-2">
                                <LucideMapPin/>Pje. San Antonio 179, Huancayo
                            </p>

                            <p className="flex items-center gap-2">
                                <LucideClock/>Lunes a Domingo: 12:30 – 22:30
                            </p>

                            <p className="flex items-center gap-2">
                                <PhoneIcon/>+51 908 986 385
                            </p>

                        </div>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://maps.app.goo.gl/X4ZJ8Kt9dDQ9mo9m6",
                                    "_blank"
                                )
                            }
                            className="mt-10 w-full rounded-full bg-accent px-8 py-4 font-medium text-black transition hover:bg-accent-light hover:scale-[1.02]"
                        >
                            Abrir en Google Maps
                        </button>

                    </motion.div>

                </div>

            </Container>
        </section>
    );
}