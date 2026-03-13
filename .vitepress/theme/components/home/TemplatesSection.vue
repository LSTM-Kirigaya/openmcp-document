<template>
  <section class="templates-section">
    <SectionHeader :title="t.title" :subtitle="t.subtitle" />

    <div class="templates-actions">
      <a :href="t.docsLink" class="template-btn btn-primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
        {{ t.docsText }}
      </a>
      <a :href="t.examplesLink" class="template-btn btn-secondary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="9" x2="15" y2="9"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        {{ t.examplesText }}
      </a>
    </div>

    <div class="templates-grid">
      <a v-for="item in t.items" :key="item.link" :href="item.link" class="example-card">
        <div class="example-header">
          <div class="example-icons" v-html="item.icon"></div>
        </div>
        <div class="example-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <span class="example-link">
            {{ t.learnMore }}
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  en: {
    title: 'Start building in seconds',
    subtitle: 'Kickstart your MCP development with built-in templates and examples',
    docsText: 'View Documentation',
    examplesText: 'View All Examples',
    learnMore: 'Learn More',
    docsLink: '/guide/',
    examplesLink: '/plugin-tutorial/examples/',
    items: [
      {
        title: 'MCP Basic Debugging',
        desc: 'Learn the fundamentals of MCP server debugging with real-time logs, breakpoints, and error tracing.',
        link: '/plugin-tutorial/usage/debug-basic.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-3.516.516a6.187 6.187 0 00-3.67 3.666c-.44 1.258-.607 2.46-.516 3.537a4.5 4.5 0 11-8.49-2.615c.919-1.953 2.578-3.732 4.743-5.109a13.08 13.08 0 012.858-1.541c.388-.158.585-.61.437-.998a4.493 4.493 0 01.604-4.582 4.5 4.5 0 016.953 5.434c.126.263.445.4.713.274A4.467 4.467 0 0121.75 6.75zM4.5 18a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"/>
        </svg>`
      },
      {
        title: 'MCP Interactive Testing',
        desc: 'Test your MCP servers interactively with the built-in chat interface and tool invocation panel.',
        link: '/plugin-tutorial/usage/interactive-testing.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193"/>
        </svg>`
      },
      {
        title: 'MCP Deploy & Export',
        desc: 'Package and deploy your MCP servers to various platforms with one-click export and cloud deployment.',
        link: '/plugin-tutorial/usage/deploy-export.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>`
      },
      {
        title: 'Rapid Deployment',
        desc: 'Deploy your MCP servers in seconds with pre-configured templates and automated CI/CD pipelines.',
        link: '/plugin-tutorial/usage/rapid-deploy.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        </svg>`
      },
      {
        title: 'Control Task Loops',
        desc: 'Master task iteration and loop control for complex multi-step agent workflows and automation.',
        link: '/plugin-tutorial/usage/task-loop.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>`
      },
      {
        title: 'Data Feedback Loop',
        desc: 'Implement data回流 mechanisms to continuously improve your MCP servers based on usage patterns.',
        link: '/plugin-tutorial/usage/data-feedback.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
        </svg>`
      }
    ]
  },
  zh: {
    title: '几秒钟内开始构建',
    subtitle: '使用内置模板和示例快速启动 MCP 开发',
    docsText: '查看文档',
    examplesText: '查看所有示例',
    learnMore: '了解更多',
    docsLink: '/zh/guide/',
    examplesLink: '/zh/plugin-tutorial/examples/',
    items: [
      {
        title: 'MCP 基础调试',
        desc: '通过实时日志、断点和错误跟踪学习 MCP 服务器调试的基础知识。',
        link: '/zh/plugin-tutorial/usage/debug-basic.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-3.516.516a6.187 6.187 0 00-3.67 3.666c-.44 1.258-.607 2.46-.516 3.537a4.5 4.5 0 11-8.49-2.615c.919-1.953 2.578-3.732 4.743-5.109a13.08 13.08 0 012.858-1.541c.388-.158.585-.61.437-.998a4.493 4.493 0 01.604-4.582 4.5 4.5 0 016.953 5.434c.126.263.445.4.713.274A4.467 4.467 0 0121.75 6.75zM4.5 18a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"/>
        </svg>`
      },
      {
        title: 'MCP 交互测试',
        desc: '使用内置对话界面和工具调用面板交互式测试你的 MCP 服务器。',
        link: '/zh/plugin-tutorial/usage/interactive-testing.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193"/>
        </svg>`
      },
      {
        title: 'MCP 部署和导出',
        desc: '一键导出和云部署，将你的 MCP 服务器打包部署到各种平台。',
        link: '/zh/plugin-tutorial/usage/deploy-export.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>`
      },
      {
        title: '极速部署',
        desc: '使用预配置模板和自动化 CI/CD 流水线在数秒内部署你的 MCP 服务器。',
        link: '/zh/plugin-tutorial/usage/rapid-deploy.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        </svg>`
      },
      {
        title: '控制任务循环',
        desc: '掌握任务迭代和循环控制，实现复杂的多步骤智能体工作流和自动化。',
        link: '/zh/plugin-tutorial/usage/task-loop.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>`
      },
      {
        title: '数据回流',
        desc: '实现数据回流机制，根据使用模式持续优化你的 MCP 服务器。',
        link: '/zh/plugin-tutorial/usage/data-feedback.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
        </svg>`
      }
    ]
  },
  ja: {
    title: '数秒で構築開始',
    subtitle: '組み込みテンプレートと例でMCP開発を素早く開始',
    docsText: 'ドキュメントを見る',
    examplesText: 'すべての例を見る',
    learnMore: '詳細を見る',
    docsLink: '/ja/guide/',
    examplesLink: '/ja/plugin-tutorial/examples/',
    items: [
      {
        title: 'MCP 基本デバッグ',
        desc: 'リアルタイムログ、ブレークポイント、エラー追跡でMCPサーバーデバッグの基礎を学ぶ。',
        link: '/ja/plugin-tutorial/usage/debug-basic.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-3.516.516a6.187 6.187 0 00-3.67 3.666c-.44 1.258-.607 2.46-.516 3.537a4.5 4.5 0 11-8.49-2.615c.919-1.953 2.578-3.732 4.743-5.109a13.08 13.08 0 012.858-1.541c.388-.158.585-.61.437-.998a4.493 4.493 0 01.604-4.582 4.5 4.5 0 016.953 5.434c.126.263.445.4.713.274A4.467 4.467 0 0121.75 6.75zM4.5 18a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"/>
        </svg>`
      },
      {
        title: 'MCP インタラクティブテスト',
        desc: '組み込みチャットインターフェースとツール呼び出しパネルでMCPサーバーを対話的にテスト。',
        link: '/ja/plugin-tutorial/usage/interactive-testing.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.18.063-2.283.727-2.98 1.67a2.126 2.126 0 00-.476.095m9.345-8.334c.53.031 1.054.094 1.572.185a2.25 2.25 0 011.785 2.197v4.786c0 1.136-.847 2.1-1.98 2.193"/>
        </svg>`
      },
      {
        title: 'MCP デプロイとエクスポート',
        desc: 'ワンクリックエクスポートとクラウドデプロイでMCPサーバーを各種プラットフォームに展開。',
        link: '/ja/plugin-tutorial/usage/deploy-export.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>`
      },
      {
        title: '高速デプロイ',
        desc: '事前設定済みテンプレートと自動化CI/CDパイプラインで数秒内にMCPサーバーをデプロイ。',
        link: '/ja/plugin-tutorial/usage/rapid-deploy.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        </svg>`
      },
      {
        title: 'タスクループ制御',
        desc: 'タスク反復とループ制御をマスターし、複雑な多ステップエージェントワークフローを実現。',
        link: '/ja/plugin-tutorial/usage/task-loop.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>`
      },
      {
        title: 'データフィードバック',
        desc: 'データフィードバックメカニズムを実装し、使用パターンに基づいてMCPサーバーを継続的に改善。',
        link: '/ja/plugin-tutorial/usage/data-feedback.html',
        icon: `<svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
        </svg>`
      }
    ]
  }
};

const currentLang = computed(() => {
  const l = lang.value || 'en';
  if (l.startsWith('zh')) return 'zh';
  if (l.startsWith('ja')) return 'ja';
  return 'en';
});

const t = computed(() => content[currentLang.value] || content.en);
</script>

<style scoped>
.templates-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

/* Template Action Buttons */
.templates-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.template-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.template-btn .btn-icon {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.15);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: translateY(-1px);
}

/* Templates Grid */
.templates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Example Cards */
.example-card {
  display: block;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.example-header {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

:deep(.example-icon) {
  width: 48px;
  height: 48px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.example-card:hover :deep(.example-icon) {
  filter: grayscale(0);
  transform: scale(1.15);
}

.example-content {
  padding: 1.5rem;
}

.example-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.625rem;
}

.example-content p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.example-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.example-card:hover .example-link {
  color: #6366f1;
  gap: 0.625rem;
}

.arrow-icon {
  width: 14px;
  height: 14px;
}

/* Responsive */
@media (max-width: 1024px) {
  .templates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .example-header {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .templates-grid {
    grid-template-columns: 1fr;
  }
  
  .templates-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .template-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
