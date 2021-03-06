module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)',
				reverse: 'var(color-bg-reverse)',
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
