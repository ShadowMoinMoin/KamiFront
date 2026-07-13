import { useEffect, useState } from "react";
import type { OrderStatus } from "../types/order";

interface Props {
    status: OrderStatus;
}

const steps: OrderStatus[] = [
    "PENDIENTE",
    "CONFIRMADO",
    "EN_PREPARACION",
    "LISTO",
    "ENTREGADO",
];

export default function OrderProgress({ status }: Props) {
    const currentIndex = steps.indexOf(status);

    const progress = ((currentIndex + 1) / steps.length) * 100;

    const [flash, setFlash] = useState(false);

    useEffect(() => {
        setFlash(true);

        const t = setTimeout(() => setFlash(false), 600);

        return () => clearTimeout(t);
    }, [status]);

    return (
        <div className="mt-4 space-y-2">

            <div className="flex justify-between text-xs text-zinc-400">
                <span>Progreso del pedido</span>
                <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden relative">

                <div
                    className={` h-full rounded-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-700 ease-out ${flash ? "shadow-[0_0_20px_rgba(143,154,123,0.6)]" : ""}`}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex justify-between text-[10px] text-zinc-500">
                {steps.map((step, i) => (
                    <span
                        key={step}
                        className={`
                            transition-all duration-300
                            ${i <= currentIndex ? "text-accent" : ""}
                        `}
                    >
                        {step}
                    </span>
                ))}
            </div>

        </div>
    );
}