// https://nuxt.com/docs/api/configuration/nuxt-config

import packageJSON from './package.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

export default defineNuxtConfig({
    // @ts-ignore
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        'nuxt-icon'
    ],
    runtimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL,
        AVATAR_URL: process.env.AVATAR_URL,
        public: {
            APP_NAME: process.env.APP_NAME,
            APP_SOURCE_NAME: packageJSON.name,
            APP_VERSION: packageJSON.version,
            APP_AUTHOR: packageJSON.author
        }
    },
    i18n: {
        vueI18n: {
            legacy: false,
            locale: 'ru',
            messages: {
                ru,
                en
            }
        }
    },
    vite: {
        ssr: {
            noExternal: ['moment']
        }
    }
})
