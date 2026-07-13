import type { Category } from "../../../shared/types/category";
import { motion } from "motion/react";

interface Props {
    categories: Category[]
    activeCategory: number | null
}

export default function CategoryTabs({ categories, activeCategory }: Props) {
    const scrollToCategory = (id: number) => {
        setTimeout(() => {
            const element = document.getElementById(`category-${id}`)
            if (!element) return
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, 0)
    }
    return (
        <div className="sticky top-20 z-40 border-b border-white/5 bg-background/70 backdrop-blur-xl">
            <div className="overflow-x-auto scrollbar-hide">
                <div className="mx-auto flex w-max min-w-full justify-center gap-8 px-6 py-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => scrollToCategory(category.id)}
                            className={`group relative pb-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${activeCategory === category.id
                                    ? "text-accent"
                                    : "text-white/60 hover:text-white"
                                }`}
                        >
                            {category.name}
                            <motion.span
                                layoutId="active-category"
                                className={`absolute bottom-0 left-0 h-px w-full origin-left bg-accent ${activeCategory === category.id
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                transition={{type: "spring", stiffness: 380, damping: 30,}}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}