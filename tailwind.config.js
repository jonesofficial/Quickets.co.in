/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                whatsapp: "#25D366",
                brandYellow: "#F2CD1C",
            },
            fontFamily: {
                heading: ['"Dharma Gothic"', "sans-serif"],
                body: ["Montserrat", "sans-serif"],
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
            },
            animation: {
                shimmer: 'shimmer 2.5s linear infinite',
            },
        },
    },
    plugins: [],
};
