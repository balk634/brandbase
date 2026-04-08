import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				paper: 'var(--color-paper)',
				// Overriding theme specific base colors for the premium service pages
				obsidian: '#020617', // Extremely dark slate
				premium: {
					900: '#13155eff', // Deeper base background for richer darkmode without black
					800: '#0D1629', // Elevated cards
					700: '#16233E', // Borders/Hover states
					glow: '#3B82F6', // For blurred background gradient orbs
				},
				primary: {
					DEFAULT: 'var(--color-primary)',
					foreground: 'hsl(var(--primary-foreground))'
				},
				grid: 'var(--color-grid)',
				ink: 'var(--color-ink)',
				'ink-muted': 'var(--color-ink-muted)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'var(--font-geist-sans)',
					'sans-serif'
				],
				serif: [
					'var(--font-redaction)',
					'serif'
				],
				'serif-10': [
					'var(--font-redaction-10)',
					'serif'
				],
				'serif-20': [
					'var(--font-redaction-20)',
					'serif'
				],
				body: [
					'var(--font-geist-sans)',
					'sans-serif'
				],
				mono: [
					'var(--font-geist-mono)',
					'monospace'
				]
			},
			borderRadius: {
				DEFAULT: '0px',
				sm: '0px',
				md: '0px',
				lg: '0px',
				xl: '0px',
				'2xl': '0px',
				'3xl': '0px',
				full: '0px'
			},
			backgroundImage: {
				mosaic: 'url("/mosaic.svg")'
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
