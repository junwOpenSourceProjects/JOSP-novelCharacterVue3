// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-01',

  ui: {
    primary: '#1456f0',
    gray: 'neutral',
    fonts: false
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: '小说人物管理 - JOSP',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '小说人物管理系统 - 角色管理、关系编排、事件追踪' }
      ]
    }
  }
})
