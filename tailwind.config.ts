import type { Config } from "tailwindcss"

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0B",
                surface: "#121315",
                surface2: "#1A1B1E",

                accent: "#8F9A7B",
                "accent-light": "#AAB598",

                border: "#25272B",
            },

            fontFamily: {
                display: ["Cormorant Garamond", "serif"],
                body: ["Inter", "sans-serif"],
            },

            boxShadow: {
                glow: "0 0 40px rgba(143,154,123,0.25)",
            },
        },
    },
    plugins: [],
} satisfies Config