<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const stats = [
  { label: '人物总数', value: '128', icon: 'i-lucide-users', change: '+12%' },
  { label: '关系数量', value: '342', icon: 'i-lucide-git-branch', change: '+8%' },
  { label: '事件记录', value: '89', icon: 'i-lucide-calendar-clock', change: '+24%' },
  { label: '小说项目', value: '5', icon: 'i-lucide-book-open', change: '0%' }
]

const recentCharacters = [
  { id: 1, name: '李白', role: '主角', type: '玄幻', status: '活跃' },
  { id: 2, name: '杜甫', role: '配角', type: '历史', status: '活跃' },
  { id: 3, name: '白居易', role: '反派', type: '古风', status: '草稿' },
  { id: 4, name: '王维', role: '主角', type: '历史', status: '活跃' }
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">欢迎回来</h1>
        <p class="text-muted mt-1">这是你的小说人物管理系统</p>
      </div>
      <UButton icon="i-lucide-plus" size="md">新建人物</UButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard v-for="stat in stats" :key="stat.label">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-muted">{{ stat.label }}</p>
            <p class="text-2xl font-bold mt-1">{{ stat.value }}</p>
            <p class="text-xs text-success mt-1">{{ stat.change }} 较上周</p>
          </div>
          <div class="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <UIcon :name="stat.icon" class="size-6 text-primary" />
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">最近人物</h3>
            <UButton to="/characters" variant="ghost" size="sm">查看全部</UButton>
          </div>
        </template>
        <UTable
          :data="recentCharacters"
          :columns="[
            { key: 'name', label: '姓名' },
            { key: 'role', label: '角色' },
            { key: 'type', label: '类型' },
            { key: 'status', label: '状态' }
          ]"
        />
      </UCard>

      <UCard>
        <template #header>
          <h3 class="font-semibold">快速入口</h3>
        </template>
        <div class="grid grid-cols-2 gap-3">
          <UButton
            to="/characters"
            variant="outline"
            class="h-20 flex-col"
            icon="i-lucide-user-plus"
          >
            新建人物
          </UButton>
          <UButton
            to="/analysis"
            variant="outline"
            class="h-20 flex-col"
            icon="i-lucide-file-text"
          >
            文本分析
          </UButton>
          <UButton
            to="/relationships"
            variant="outline"
            class="h-20 flex-col"
            icon="i-lucide-git-branch"
          >
            关系图谱
          </UButton>
          <UButton
            to="/events"
            variant="outline"
            class="h-20 flex-col"
            icon="i-lucide-calendar-clock"
          >
            事件追踪
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
