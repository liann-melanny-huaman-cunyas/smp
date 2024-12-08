import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "'./resources/css/**/*.css',"
    ],

    theme: {
        extend: {
            colors: {
                customBlue: '#214b7d',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
            },
        },
    },

    plugins: [
    ],
};
