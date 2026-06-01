<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const characters = [
  { id: 1, name: '李白', role: '主角', type: '玄幻', age: 28, status: '活跃', createTime: '2024-01-15' },
  { id: 2, name: '杜甫', role: '配角', type: '历史', age: 35, status: '活跃', createTime: '2024-01-18' },
  { id: 3, name: '白居易', role: '反派', type: '古风', age: 42, status: '草稿', createTime: '2024-02-01' },
  { id: 4, name: '王维', role: '主角', type: '历史', age: 30, status: '活跃', createTime: '2024-02-10' },
  { id: 5, name: '孟浩然', role: '配角', type: '古风', age: 38, status: '归档', createTime: '2024-02-15' },
  { id: 6, name: '王昌龄', role: '主角', type: '军事', age: 33, status: '活跃', createTime: '2024-03-01' }
]

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: '姓名' },
  { key: 'role', label: '角色' },
  { key: 'type', label: '类型' },
  { key: 'age', label: '年龄' },
  { key: 'status', label: '状态' },
  { key: 'createTime', label: '创建时间' }
]

const search = ref('')
</script>

<template>
  <div class="p-6 space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">人物管理</h1>
        <p class="text-muted mt-1">管理小说中的所有人物角色</p>
      </div>
      <div class="flex gap-2">
        <UButton variant="outline" icon="i-lucide-download">导出</UButton>
        <UButton icon="i-lucide-plus">新建人物</UButton>
      </div>
    </div>

    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="搜索人物..."
            class="w-64"
          />
          <div class="flex gap-2">
            <USelectMenu
              :items="['全部', '主角', '配角', '反派']"
              placeholder="角色"
            />
            <USelectMenu
              :items="['全部', '活跃', '草稿', '归档']"
              placeholder="状态"
            />
          </div>
        </div>
      </template>

      <UTable
        :data="characters"
        :columns="columns"
        :search="search"
      />
    </UCard>
  </div>
</template>
