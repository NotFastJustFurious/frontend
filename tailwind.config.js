/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors:{
                "furious-green": "#5DB075",
                "furious-green-2": "#2B633B",
                "furious-green-3": "#9FFCBA",
                "furious-green-4": "#3a8a52",
                "furious-comp-1": "#632121",
                "furious-comp-2": "#B05D5D"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@headlessui/tailwindcss')
    ],
}
