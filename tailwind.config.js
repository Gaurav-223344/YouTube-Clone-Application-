/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".scrollbar-thin": {
                    "scrollbar-width": "thin",
                    "scrollbar-color": "rgba(0,0,0,0.5) transparent",
                },
                ".scrollbar-thumb": {
                    "scrollbar-color": "#888 transparent",
                },
                ".scrollbar-track": {
                    "scrollbar-color": "transparent #f1f1f1",
                },
                ".scrollbar": {
                    overflow: "auto",
                    "scrollbar-width": "thin", // Firefox
                    "scrollbar-color": "#888 transparent", // Firefox
                },
                ".scrollbar::-webkit-scrollbar": {
                    width: "8px", // Width of the scrollbar
                },
                ".scrollbar::-webkit-scrollbar-thumb": {
                    background: "#888", // Color of the scroll thumb
                    "border-radius": "10px", // Rounded corners of the scroll thumb
                },
                ".scrollbar::-webkit-scrollbar-track": {
                    background: "#f1f1f1", // Background of the scrollbar track
                },
            });
        },
    ],
};
