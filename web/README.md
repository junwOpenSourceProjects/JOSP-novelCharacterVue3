# JOSP 小说人物管理 - Web 管理后台

基于 Nuxt 4 + @nuxt/ui v4 的小说人物管理后台，作为原 Vite + Vue 3 SPA 项目（根目录）的现代化管理界面。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Nuxt | 4.4.6 | Vue 全栈框架 |
| @nuxt/ui | 4.7.0 | 现代 UI 组件库 |
| Vue | 3.5.33 | 渐进式 JS 框架 |
| @vueuse/nuxt | 14.2.1 | Vue 组合式工具集 |
| Tailwind CSS | 4.x | 原子化 CSS |

## 与原项目关系

| 路径 | 技术栈 | 用途 |
|------|--------|------|
| `../src/` | Vite + Vue 3 + Element Plus | 原有 SPA 前端（保留） |
| `../server/` (如有) | - | 业务后端 API |
| `./` (web/) | Nuxt 4 + @nuxt/ui | 新的管理后台 |

两个前端互不冲突，可独立部署：
- 原 SPA：`pnpm dev` (端口 5173)
- 新后台：`cd web && pnpm dev` (端口 3000)

## 快速开始

```bash
cd web
pnpm install    # 或 npm install
pnpm dev        # 启动开发服务器
pnpm build      # 构建生产版本
pnpm preview    # 预览生产版本
```

## 目录结构

```
web/
├── app/
│   ├── app.vue                 # 根组件
│   ├── app.config.ts           # UI 配置
│   ├── assets/css/main.css     # 全局样式
│   ├── composables/
│   │   └── useDashboard.ts     # 仪表盘状态
│   ├── layouts/
│   │   └── default.vue         # 默认布局 (侧边栏 + 顶部)
│   └── pages/
│       ├── index.vue           # 首页 (概览 dashboard)
│       ├── characters.vue      # 人物列表
│       └── settings.vue        # 系统设置
├── public/                     # 静态资源
├── nuxt.config.ts
├── package.json
└── README.md
```

## 设计规范

- **主色**: `#1456f0` (企业蓝)
- **字体**: `'等线','DengXian','Microsoft YaHei',sans-serif`
- **主题**: 支持浅色 / 深色 / 跟随系统
- **侧边栏**: 固定式，含 logo、菜单、用户区
- **顶部栏**: 含折叠按钮、通知、主题切换

## 当前功能（占位实现）

- ✅ 仪表盘首页 (统计卡片 + 最近人物 + 快速入口)
- ✅ 人物管理列表 (搜索、筛选、表格)
- ✅ 系统设置 (基本 + 通知)
- 🚧 关系图谱 (规划中)
- 🚧 事件追踪 (规划中)
- 🚧 文本分析 (规划中)

## 后续计划

- 接入业务后端 API（替换静态 mock 数据）
- 添加人物创建 / 编辑表单
- 关系图谱可视化（ECharts / D3）
- 文本分析模块接入 NLP 服务
