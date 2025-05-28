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
        // Twilight color palette
        "twilight-lavender": "#a89cc8",
        "midnight-blue": "#2c2f5a",
        "rosy-mist": "#f1dce8",
        "soft-sage": "#a0c4b4",
        "pale-honey": "#ffe6a7",
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
        drift: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.1",
          },
          "25%": {
            transform: "translateY(-20px) translateX(15px)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-20px)",
            opacity: "0.15",
          },
          "75%": {
            transform: "translateY(-30px) translateX(10px)",
            opacity: "0.25",
          },
        },
        "float-peaceful": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0.15",
          },
          "50%": {
            transform: "translateY(-15px) translateX(8px) scale(1.02)",
            opacity: "0.25",
          },
        },
        "pulse-gentle": {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "twinkle-random": {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(0.8) rotate(0deg)",
          },
          "25%": {
            opacity: "0.8",
            transform: "scale(1.3) rotate(90deg)",
          },
          "50%": {
            opacity: "0.4",
            transform: "scale(1.1) rotate(180deg)",
          },
          "75%": {
            opacity: "0.9",
            transform: "scale(1.4) rotate(270deg)",
          },
        },
        "cosmic-drift": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0.2",
          },
          "25%": {
            transform: "translateY(-30px) translateX(20px) rotate(90deg)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(-15px) translateX(-25px) rotate(180deg)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translateY(-40px) translateX(15px) rotate(270deg)",
            opacity: "0.5",
          },
        },
        "cosmic-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg) scale(1)",
            opacity: "0.25",
          },
          "33%": {
            transform: "translateY(-20px) translateX(15px) rotate(120deg) scale(1.2)",
            opacity: "0.4",
          },
          "66%": {
            transform: "translateY(-10px) translateX(-20px) rotate(240deg) scale(0.9)",
            opacity: "0.3",
          },
        },
        "constellation-draw": {
          "0%": {
            strokeDasharray: "0 1000",
            opacity: "0",
          },
          "20%": {
            opacity: "0.4",
          },
          "50%": {
            strokeDasharray: "500 500",
            opacity: "0.6",
          },
          "80%": {
            opacity: "0.4",
          },
          "100%": {
            strokeDasharray: "1000 0",
            opacity: "0",
          },
        },
        "constellation-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.02)",
          },
        },
        "shooting-star": {
          "0%": {
            transform: "translateX(-100px) translateY(-100px) rotate(-45deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(300px) translateY(300px) rotate(-45deg)",
            opacity: "0",
          },
        },
        "nebula-drift": {
          "0%, 100%": {
            transform: "translateX(0px) translateY(0px) scale(1) rotate(0deg)",
            opacity: "0.1",
          },
          "50%": {
            transform: "translateX(50px) translateY(-30px) scale(1.1) rotate(180deg)",
            opacity: "0.2",
          },
        },
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "spin-slow-reverse": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        drift: "drift 35s ease-in-out infinite",
        "float-peaceful": "float-peaceful 40s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "twinkle-random": "twinkle-random 4s ease-in-out infinite",
        "cosmic-drift": "cosmic-drift 25s ease-in-out infinite",
        "cosmic-float": "cosmic-float 15s ease-in-out infinite",
        "constellation-draw": "constellation-draw 8s ease-in-out infinite",
        "constellation-pulse": "constellation-pulse 6s ease-in-out infinite",
        "shooting-star": "shooting-star 3s ease-out infinite",
        "nebula-drift": "nebula-drift 20s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 25s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Times New Roman", "Georgia", "serif"],
      },
      fontWeight: {
        light: "300",
      },
      boxShadow: {
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
