/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // colors: {
        //     'blue': '#3B82F6',
        //     'green': '#0D9488',
        // },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}