/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		clipPath: {
			'custom-shape': 'polygon(30% 13%, 100% 0%, 75% 84%, 0% 100%)',
		  },
		  backgroundColor: {
			  'grid-bg': '#f0f',
			},
			borderColor: {
				'grid-border': '#f22',
			},
			keyframes: {
				slideIn: {
					'0%': { transform: 'translateX(20rem)' },
					'100%': { transform: 'translateX(0)' }
				},
				slideOut: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-91rem)' }
				},
			spin: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
			},
			reverseSpin: {
				'0%': { transform: 'rotate(360deg)' },
				'100%': { transform: 'rotate(0deg)' },
				  },
		  	verticalScroll: {
				'0%': { transform: 'translateY(100%)' },
				'100%': { transform: 'translateY(-100%)' },
			},
			pulseMusic: {
				'0%, 75%': { opacity: 1, transform: 'scale(1)' },
				'25%, 50%': { opacity: 0.5, transform: 'scale(0.95)' },
				'100%': { opacity: 1, transform: 'scale(1)' },
			}
		},
		animation: {
		  	verticalScroll: 'verticalScroll 10s linear infinite',
		  	spin: 'spin 5s linear infinite',
		  	reverseSpin: 'reverseSpin 5s linear infinite',
			slideIn: 'slideIn .5s ease-out forwards',
			slideOut: 'slideIn 0.8s ease-out forwards',
			pulseMusic: 'pulseMusic 5s ease-in-out infinite',
		},
	  },
	},
	plugins: [
		require('tailwind-clip-path'),
		plugin(function({ addUtilities }) {
			addUtilities({
			  '.clip-triangle': {
				clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
			  },
			});
		}),
	],
  };
  