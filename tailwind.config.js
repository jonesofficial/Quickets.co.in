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
        },
    },
    plugins: [],
};
