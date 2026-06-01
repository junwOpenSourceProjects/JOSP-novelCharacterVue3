<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const route = useRoute()

const links = [
  { label: '概览', icon: 'i-lucide-layout-dashboard', to: '/' },
  { label: '首页', icon: 'i-lucide-home', to: '/home' },
  { label: '人物库', icon: 'i-lucide-users', to: '/library' },
  { label: '仪表盘', icon: 'i-lucide-bar-chart-3', to: '/dashboard' },
  { label: '创建角色', icon: 'i-lucide-user-plus', to: '/character/create' },
  { label: '文本分析', icon: 'i-lucide-file-text', to: '/analyze' },
  { label: '设置', icon: 'i-lucide-settings', to: '/settings' }
]

const { isNotificationsSlideoverOpen } = useDashboard()

const userMenuItems = [[{
  label: '个人资料',
  icon: 'i-lucide-user',
  to: '/settings'
}, {
  label: '系统设置',
  icon: 'i-lucide-cog',
  to: '/settings'
}]] satisfies DropdownMenuItem[][]

const title = computed(() => {
  const map: Record<string, string> = {
    '/': '概览',
    '/home': '首页',
    '/library': '人物库',
    '/dashboard': '仪表盘',
    '/character/create': '创建角色',
    '/analyze': '文本分析',
    '/settings': '设置'
  }
  // 动态匹配 /character/:id
  if (route.path.startsWith('/character/')) {
    return '角色详情'
  }
  return map[route.path] || '小说人物管理'
})
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      :links="links"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header>
        <div class="flex items-center gap-2 px-2 py-1">
          <div class="size-8 rounded bg-primary flex items-center justify-center text-white font-bold">
            J
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-semibold">JOSP 人物管理</span>
            <span class="text-xs text-muted">小说角色系统</span>
          </div>
        </div>
      </template>

      <template #footer>
        <UDropdownMenu :items="userMenuItems">
          <UButton
            color="neutral"
            variant="ghost"
            class="w-full justify-start"
            icon="i-lucide-user-circle"
          >
            <div class="flex flex-col items-start">
              <span class="text-sm">管理员</span>
              <span class="text-xs text-muted">admin@josp.com</span>
            </div>
          </UButton>
        </UDropdownMenu>
      </template>
    </UDashboardSidebar>

    <UDashboardPanel :ui="{ root: 'min-h-svh' }">
      <template #header>
        <UDashboardNavbar :title="title">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>
          <template #right>
            <UTooltip text="通知">
              <UButton
                color="neutral"
                variant="ghost"
                square
                @click="isNotificationsSlideoverOpen = true"
              >
                <UChip color="error" inset>
                  <UIcon name="i-lucide-bell" class="size-5" />
                </UChip>
              </UButton>
            </UTooltip>
            <ColorModeButton />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>

    <UDashboardSlideover
      v-model:open="isNotificationsSlideoverOpen"
      title="通知中心"
    >
      <template #body>
        <div class="p-4 space-y-3">
          <UAlert
            color="primary"
            variant="subtle"
            title="角色创建成功"
            description="李白 已成功添加到人物库"
            icon="i-lucide-user-plus"
          />
          <UAlert
            color="success"
            variant="subtle"
            title="关系图谱更新"
            description="已为角色 李白 添加 师徒 关系"
            icon="i-lucide-git-branch"
          />
        </div>
      </template>
    </UDashboardSlideover>
  </UDashboardGroup>
</template>
