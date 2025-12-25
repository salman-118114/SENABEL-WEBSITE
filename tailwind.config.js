/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'midnight-black': '#0a0a0a',
                'deep-charcoal': '#121212',
                'burnished-gold': '#D4AF37',
                'warm-cream': '#F5F5DC',
            },
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'cinzel': ['"Cinzel"', 'serif'],
                'montserrat': ['"Montserrat"', 'sans-serif'],
                'lato': ['"Lato"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
