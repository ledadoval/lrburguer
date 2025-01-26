module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            fontFamily: {
                'montserrat': ['Montserrat'],
                'lato': ['Lato'],
                'garamond': ['Garamond']
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
    ],
};
