/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            "furious-green": "#5DB075",
            "furious-green-2": "#2B633B",
            "furious-green-3": "#9FFCBA",
            "furious-comp-1": "#632121",
            "furious-comp-2": "#B05D5D"
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
