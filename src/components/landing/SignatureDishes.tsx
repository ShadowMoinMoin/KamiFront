import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../features/products/hooks/useProducts";
import Container from "../ui/Container";
import ProductCard from "../../features/products/components/ProductCard";
import Button from "../ui/Button";



export default function SignatureDishes() {
    const navigate = useNavigate();

    const { data: products = [], isLoading } = useProducts();

    const featuredProducts = products.slice(0, 4);

    if (isLoading) return null;

    return (
        <section className="py-32">
            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.35em] text-accent">
                        Nuestros favoritos
                    </p>

                    <h2 className="mt-6 text-5xl font-light tracking-[0.08em] text-white">
                        Sabores que definen KAMI
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        Una selección de nuestros platos más representativos.
                        Preparados con ingredientes frescos, técnica japonesa
                        y un toque de creatividad.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {featuredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Button
                        onClick={() => navigate("/menu")}
                        className="px-10"
                    >
                        Ver menú completo
                    </Button>
                </div>

            </Container>
        </section>
    );
}