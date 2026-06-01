<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const quickLinks = [
  { to: '/home', label: '首页', icon: 'i-lucide-home', desc: '系统总览与快速入口' },
  { to: '/library', label: '人物库', icon: 'i-lucide-book-open', desc: '浏览全部人物' },
  { to: '/dashboard', label: '仪表盘', icon: 'i-lucide-bar-chart-3', desc: '数据可视化' },
  { to: '/character/create', label: '创建角色', icon: 'i-lucide-user-plus', desc: '新增小说人物' },
  { to: '/analyze', label: '文本分析', icon: 'i-lucide-file-text', desc: '智能解析小说文本' },
  { to: '/settings', label: '设置', icon: 'i-lucide-settings', desc: '系统配置' }
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">欢迎使用 JOSP 小说人物管理系统</h1>
      <p class="text-muted mt-2">珀箫文化 / 小说人物管理 / v1.0</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="link in quickLinks"
        :key="link.to"
        :to="link.to"
        class="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors no-underline"
      >
        <div class="flex items-start gap-4">
          <div class="size-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center shrink-0">
            <UIcon :name="link.icon" class="size-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ link.label }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ link.desc }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
