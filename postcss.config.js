const purgecss = [
    "@fullhuman/postcss-purgecss",
    {

        content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.tsx", "./pages/**/*.tsx"],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
];
module.exports = {
    plugins: [
        "postcss-import",
        "tailwindcss",
        "autoprefixer",
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
};