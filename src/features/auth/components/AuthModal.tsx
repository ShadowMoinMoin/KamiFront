import { useState } from "react"
import Modal from "../../../components/ui/Modal"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

interface Props {
    open: boolean
    onClose: () => void
}

export default function AuthModal({
    open,
    onClose,
}: Props) {
    const [mode, setMode] = useState<
        "login" | "register"
    >("login")

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <h2
                className="
                    mb-2
                    font-display
                    text-4xl
                    text-white
                "
            >
                {mode === "login"
                    ? "Bienvenido"
                    : "Crear Cuenta"}
            </h2>

            <p className="mb-8 text-zinc-400">
                {mode === "login"
                    ? "Accede a tu cuenta."
                    : "Únete a Kami Fusion."}
            </p>

            {mode === "login" ? (
                <LoginForm
                    onSuccess={onClose}
                />
            ) : (
                <RegisterForm
                    onSuccess={onClose}
                />
            )}

            <div className="mt-6 text-center">
                {mode === "login" ? (
                    <button
                        onClick={() =>
                            setMode(
                                "register"
                            )
                        }
                        className="
                            text-accent
                            hover:text-accent-light
                        "
                    >
                        Crear una cuenta
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            setMode("login")
                        }
                        className="
                            text-accent
                            hover:text-accent-light
                        "
                    >
                        Ya tengo cuenta
                    </button>
                )}
            </div>
        </Modal>
    )
}