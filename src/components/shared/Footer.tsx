import { NavLink } from "react-router-dom"
import Container from "../ui/Container"
import { motion } from "motion/react"

const links = [
    {
        title: "Empresa",
        items: [
            { label: "Nosotros", path: "/about" },
            { label: "Menú", path: "/menu" },
            { label: "Trabaja con Nosotros", path: "/careers" },
        ],
    },
    {
        title: "Atención al Cliente",
        items: [
            { label: "Reservas", path: "/tables" },
            { label: "Ayuda", path: "/help" },
            { label: "Términos", path: "/terms" },
        ],
    },
    {
        title: "Mi Cuenta",
        items: [
            { label: "Iniciar Sesión", path: "/login" },
            { label: "Mi Perfil", path: "/profile" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-background overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(143,154,123,0.14),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-[radial-gradient(circle_at_top,rgba(143,154,123,0.08),transparent_60%)]" />
            <Container>
                <div className="relative py-24">

                    <motion.div
                        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="grid gap-14 md:grid-cols-4"
                    >
                        <div>
                            <h2 className="text-2xl font-light tracking-[0.45em] text-white">
                                KAMI
                            </h2>
                            <p className="mt-2 text-xs uppercase tracking-[0.5em] text-accent">
                                Fusion
                            </p>
                            <p className="mt-6 text-sm leading-relaxed text-white/60">
                                Experiencia gastronómica japonesa moderna con identidad minimalista y enfoque premium.
                            </p>

                            <p className="mt-6 text-sm text-white/60">
                                @kami.fusion
                            </p>
                        </div>
                        {links.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: index * 0.12 }}
                            >
                                <h3 className="text-xs uppercase tracking-[0.4em] text-white/40">
                                    {section.title}
                                </h3>
                                <div className="mt-6 flex flex-col gap-3">
                                    {section.items.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="group relative text-sm text-white/60 transition hover:text-white"
                                        >
                                            {item.label}
                                            <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                                        </NavLink>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="my-14 h-px w-full origin-left bg-white/5"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
                    >

                        <p className="text-xs tracking-[0.3em] text-white/40">
                            © {new Date().getFullYear()} KAMI FUSION. ALL RIGHTS RESERVED.
                        </p>

                        <div className="flex gap-6 text-xs uppercase tracking-[0.3em] text-white/40">
                            <span className="cursor-pointer transition hover:text-accent">
                                Instagram
                            </span>
                            <span className="cursor-pointer transition hover:text-accent">
                                Facebook
                            </span>
                            <span className="cursor-pointer transition hover:text-accent">
                                TikTok
                            </span>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </footer>
    )
}