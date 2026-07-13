import { motion } from "motion/react"
import Container from "../ui/Container"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"

const HERO_IMAGE = "https://res.cloudinary.com/dqusg1diz/image/upload/v1782075630/SushiFlorDeCerezo_zn4sf9.png"

export default function Hero() {
    const navigate = useNavigate()
    return (
        <section className="relative min-h-screen overflow-hidden bg-background">
            <img
                src={HERO_IMAGE}
                alt="Sushi premium"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,184,102,0.18),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.25)_100%)]" />
            <Container className="relative z-10 flex min-h-screen items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="mt-8 text-6xl font-display leading-[0.9] tracking-[0.08em] text-white sm:text-7xl md:text-8xl">
                        KAMI
                        <span className="mt-4 block text-accent">
                            FUSION
                        </span>
                    </h1>

                    <p className="mt-6 text-sm tracking-[0.3em] text-accent-light">
                        神のような味わい、創造のような融合。
                    </p>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">
                        Donde la tradición japonesa se fusiona con la
                        creatividad moderna para crear una experiencia
                        gastronómica inolvidable.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <Button onClick={() => navigate("/tables")} className="border border-accent bg-accent px-8 py-4 text-black hover:bg-accent-light">
                            Reservar Mesa
                        </Button>

                        <Button
                            variant="secondary"
                            className="border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-sm hover:bg-white/10"
                            onClick={() => navigate("/menu")}
                        >
                            Ver Menú
                        </Button>
                    </div>
                </motion.div>
            </Container>
            <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}