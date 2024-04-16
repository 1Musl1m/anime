export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@ant-design-vue/nuxt", "nuxt-aos", "@nuxt/image", "@nuxt/image"],
    css: ["@/assets/style/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
