/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                "vin-rouge": "#460723",
                "vin-blanc": "#C8BB86",
                "bg-rose": "#F0EBEB",
                "bg-fonce": "#2D2D2D",
                "bg-gris": "#D9D9D9",
            },
        },
    },
    plugins: [],
};
