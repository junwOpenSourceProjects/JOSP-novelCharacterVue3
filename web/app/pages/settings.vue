<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const form = reactive({
  siteName: 'JOSP 人物管理',
  language: 'zh-CN',
  theme: 'light',
  notifications: true,
  autoSave: true
})
</script>

<template>
  <div class="p-6 space-y-6 max-w-4xl">
    <div>
      <h1 class="text-2xl font-bold">系统设置</h1>
      <p class="text-muted mt-1">配置系统参数与用户偏好</p>
    </div>

    <UCard>
      <template #header>
        <h3 class="font-semibold">基本设置</h3>
      </template>
      <div class="space-y-4">
        <UFormField label="站点名称" help="显示在浏览器标题和页眉">
          <UInput v-model="form.siteName" />
        </UFormField>

        <UFormField label="语言">
          <USelectMenu
            v-model="form.language"
            :items="['zh-CN', 'en-US', 'ja-JP']"
          />
        </UFormField>

        <UFormField label="主题">
          <URadioGroup
            v-model="form.theme"
            :items="[
              { label: '浅色', value: 'light' },
              { label: '深色', value: 'dark' },
              { label: '跟随系统', value: 'system' }
            ]"
          />
        </UFormField>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h3 class="font-semibold">通知与提醒</h3>
      </template>
      <div class="space-y-4">
        <UFormField label="启用通知">
          <USwitch v-model="form.notifications" />
        </UFormField>
        <UFormField label="自动保存" help="编辑时每 30 秒自动保存一次">
          <USwitch v-model="form.autoSave" />
        </UFormField>
      </div>
    </UCard>

    <div class="flex justify-end gap-2">
      <UButton variant="outline">取消</UButton>
      <UButton>保存设置</UButton>
    </div>
  </div>
</template>
