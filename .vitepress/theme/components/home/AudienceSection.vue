<template>
  <section class="audience-section">
    <SectionHeader :title="t.title" :subtitle="t.subtitle" />

    <div class="audience-grid">
      <div v-for="(card, index) in t.cards" :key="index" class="audience-card">
        <div class="audience-icon" v-html="card.icon"></div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
        <ul class="audience-features">
          <li v-for="(feature, fIndex) in card.features" :key="fIndex">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  en: {
    title: 'Who is OpenMCP for?',
    subtitle: 'The Development of OpenMCP is for ...',
    cards: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>`,
        title: 'Professional Software Engineers',
        desc: 'Shift testing left integrates development and testing seamlessly with rich features, no third-party tools needed.',
        features: [
          'Manage agents via left panel',
          'Monitor LLM tool details',
          'Track performance metrics',
          'Build apps with MCP servers'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>`,
        title: 'Open Source Community',
        desc: 'Fully open-source with transparent technical details. Share and collaborate on MCP projects.',
        features: [
          'Free to use and contribute',
          'Git version control for all tests',
          'Share prompts with community',
          'Zero-cost project replication'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591l4.376 4.094c.496.462.778 1.108.778 1.783V21M15.75 3.104c.251.023.501.05.75.082m-.75-.082a24.301 24.301 0 00-4.5 0m4.5 0l-6 21"/>
        </svg>`,
        title: 'AI Research Scientists',
        desc: 'Convert research into MCP servers with minimal code. Auto-track experiments in Git.',
        features: [
          'Quick demo building',
          'Research reproducibility',
          'Academic collaboration',
          'Paper result replication'
        ]
      }
    ]
  },
  zh: {
    title: 'OpenMCP 为谁准备?',
    subtitle: '为每一位追求效率的开发者而生',
    cards: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>`,
        title: '专业软件工程师',
        desc: '测试左移，开发与测试一体化，无需切换第三方工具。丰富功能让开发更高效。',
        features: [
          '左侧面板管理智能体',
          'LLM 工具调用细节一目了然',
          '性能指标实时追踪',
          '用 MCP 服务器构建应用'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>`,
        title: '开源社区爱好者',
        desc: '完全开源透明，欢迎加入我们实现关于 Agent 的奇思妙想。',
        features: [
          '免费使用和贡献',
          'Git 版本控制所有测试',
          '与社区分享提示词',
          '零成本复现项目'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591l4.376 4.094c.496.462.778 1.108.778 1.783V21M15.75 3.104c.251.023.501.05.75.082m-.75-.082a24.301 24.301 0 00-4.5 0m4.5 0l-6 21"/>
        </svg>`,
        title: 'AI 研发科学家',
        desc: '几行代码将科研成果转为 MCP 服务器，快速构建演示原型。',
        features: [
          '快速构建演示原型',
          '研究成果可复现',
          '学术协作更便捷',
          '论文结果一键复现'
        ]
      }
    ]
  },
  ja: {
    title: 'OpenMCP は誰のため？',
    subtitle: '効率性を追求するすべての開発者のために',
    cards: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>`,
        title: 'プロフェッショナルエンジニア',
        desc: 'シフトレフトテストで開発とテストをシームレスに統合。豊富な機能で開発をより効率的に。',
        features: [
          '左パネルでエージェントを管理',
          'LLMツールの詳細を一目で確認',
          'パフォーマンス指標をリアルタイム追跡',
          'MCPサーバーでアプリを構築'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>`,
        title: 'オープンソースコミュニティ',
        desc: '完全にオープンソースで透明性のある技術詳細。MCPプロジェクトでの共有と協力。',
        features: [
          '無料で使用・貢献可能',
          'すべてのテストにGitバージョン管理',
          'コミュニティとプロンプトを共有',
          'ゼロコストでプロジェクトを複製'
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591l4.376 4.094c.496.462.778 1.108.778 1.783V21M15.75 3.104c.251.023.501.05.75.082m-.75-.082a24.301 24.301 0 00-4.5 0m4.5 0l-6 21"/>
        </svg>`,
        title: 'AI 研究者・科学者',
        desc: '最小限のコードで研究成果をMCPサーバーに変換。迅速にデモプロトタイプを構築。',
        features: [
          '迅速なデモ構築',
          '研究の再現性',
          '学術協力',
          '論文結果の再現'
        ]
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
.audience-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.audience-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.audience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.audience-card:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.audience-card:hover::before {
  opacity: 1;
}

.audience-icon {
  width: 48px;
  height: 48px;
  color: #6366f1;
  margin-bottom: 1.25rem;
}

.audience-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.audience-card h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.875rem;
}

.audience-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.audience-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.audience-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.625rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9375rem;
}

.audience-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 6px;
  background: #6366f1;
  border-radius: 50%;
}

@media (max-width: 1024px) {
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
