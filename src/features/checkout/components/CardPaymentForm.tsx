export default function CardPaymentForm() {
    return (
        <div className="space-y-5">
            <div>
                <label className="
                    text-xs uppercase
                    tracking-[0.2em]
                    text-white/40
                ">
                    Número de tarjeta
                </label>
                <input
                    className="
                        mt-2 w-full
                        rounded-xl
                        border border-white/10
                        bg-background/40
                        px-4 py-3
                        text-white
                        tracking-widest
                        outline-none
                        transition
                        focus:border-accent/40
                    "
                    placeholder="1234 1234 1234 1234"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="
                        text-xs uppercase
                        tracking-[0.2em]
                        text-white/40
                    ">
                        Expiración
                    </label>

                    <input
                        className="
                            mt-2 w-full
                            rounded-xl
                            border border-white/10
                            bg-background/40
                            px-4 py-3
                            text-white
                            outline-none
                            transition
                            focus:border-accent/40
                        "
                        placeholder="MM/AA"
                    />
                </div>

                <div>
                    <label className="
                        text-xs uppercase
                        tracking-[0.2em]
                        text-white/40
                    ">
                        CVV
                    </label>

                    <input
                        className="
                            mt-2 w-full
                            rounded-xl
                            border border-white/10
                            bg-background/40
                            px-4 py-3
                            text-white
                            outline-none
                            transition
                            focus:border-accent/40
                        "
                        placeholder="123"
                    />
                </div>

            </div>

            <div className="
                rounded-xl
                border border-white/10
                bg-white/5
                p-3
            ">
                <p className="text-xs text-white/40 leading-relaxed">
                    Este pago es simulado. Luego se integrará con una pasarela real.
                </p>
            </div>

        </div>
    );
}