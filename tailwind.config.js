module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans"]
            },
            gridTemplateColumns: {
                "1/5": "1fr 5fr"
            }
        },
    },
    variants: {
        extend: {},
    },
    Plugins: [require('@tailwindcss/forms')],  
}