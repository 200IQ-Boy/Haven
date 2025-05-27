import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nature-inspired color palette
        "twilight-lavender": "#a89cc8",
        "rosy-mist": "#f1dce8",
        "midnight-blue": "#2c2f5a",
        "soft-sage": "#a0c4b4",
        "pale-honey": "#ffe6a7",
        "pastel-fig": "#d6a4a4",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "mist-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.05",
          },
          "25%": {
            transform: "translateY(-15px) translateX(8px)",
            opacity: "0.15",
          },
          "50%": {
            transform: "translateY(-8px) translateX(-12px)",
            opacity: "0.08",
          },
          "75%": {
            transform: "translateY(-20px) translateX(5px)",
            opacity: "0.12",
          },
        },
        "float-gentle": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translateY(-10px) translateX(5px) scale(1.05)",
            opacity: "0.3",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "0.4",
          },
        },
        "pulse-gentle": {
          "0%, 100%": {
            opacity: "0.5",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1)",
          },
        },
        "ping-slow": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.1",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "mist-float": "mist-float 20s ease-in-out infinite",
        "float-gentle": "float-gentle 25s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 4s ease-in-out infinite",
        "ping-slow": "ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        serif: ["Times New Roman", "Georgia", "serif"],
      },
      fontWeight: {
        light: "300",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
