import { motion } from "motion/react";
import Container from "../ui/Container";

const images = [
    "https://res.cloudinary.com/dqusg1diz/image/upload/v1782075630/SushiFlorDeCerezo_zn4sf9.png",
    "https://images.unsplash.com/photo-1553621042-f6e147245754",
    "https://png.pngtree.com/thumb_back/fh260/background/20240412/pngtree-japanese-food-and-top-view-concept-different-kinds-of-sushi-on-image_15656557.jpg",
    "https://media.istockphoto.com/id/1354366250/es/foto/juego-de-rollos-de-sushi-uramaki-arco-iris-con-aguacate.jpg?s=612x612&w=0&k=20&c=5690maI0BJd7Yk4PdqrcOQOJ6ZUbs8kvSvgg7khN4Dc=",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
];

export default function Gallery() {
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
                    <p className="text-sm uppercase tracking-[0.35em] text-accent">
                        Galería
                    </p>

                    <h2 className="mt-6 text-5xl font-light text-white">
                        Una experiencia que también se ve
                    </h2>

                    <p className="mt-8 text-zinc-400 leading-8">
                        Cada plato, cada detalle y cada espacio están diseñados
                        para crear una experiencia visual única.
                    </p>
                </motion.div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">

                    <motion.div
                        className="col-span-2 row-span-2 overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={images[0]}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={images[1]} className="h-full w-full object-cover" />
                    </motion.div>

                    <motion.div
                        className="col-span-2 overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={images[2]} className="h-full w-full object-cover" />
                    </motion.div>

                    <motion.div
                        className="overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={images[3]} className="h-full w-full object-cover" />
                    </motion.div>

                    <motion.div
                        className="overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={images[4]} className="h-full w-full object-cover" />
                    </motion.div>

                    <motion.div
                        className="col-span-2 overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={images[5]} className="h-full w-full object-cover" />
                    </motion.div>

                </div>

            </Container>
        </section>
    );
}