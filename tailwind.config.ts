import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        "brand-pink": "hsl(var(--brand-pink))",
        "brand-blue": "hsl(var(--brand-blue))",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, hsl(var(--brand-pink)), hsl(var(--brand-blue)))",
        "brand-radial":
          "radial-gradient(60% 60% at 50% 0%, hsl(var(--brand-pink) / .25), transparent 60%), radial-gradient(50% 50% at 100% 100%, hsl(var(--brand-blue) / .25), transparent 60%)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      boxShadow: {
        "brand-glow": "0 0 0 1px hsl(var(--brand-blue) / .25), 0 8px 30px hsl(var(--brand-blue) / .25)",
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
} satisfies Config
