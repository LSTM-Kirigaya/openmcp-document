<template>
  <section class="feature-showcase-section">
    <div class="showcase-header">
      <h2 class="showcase-title">{{ t.title }}</h2>
      <p class="showcase-subtitle">{{ t.subtitle }}</p>
    </div>

    <div class="showcase-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['showcase-tab', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="showcase-features">
      <div v-for="feature in currentFeatures" :key="feature" class="showcase-feature-item">
        <svg class="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>{{ feature }}</span>
      </div>
    </div>

    <div class="showcase-preview">
      <img :src="currentImage" :alt="currentTab.label" class="preview-image" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  en: {
    title: 'Stay productive and manage your MCP',
    subtitle: 'without leaving the editor',
    tabs: {
      debug: 'Debug Panel',
      chat: 'Chat Interface', 
      resource: 'Resource Manager'
    },
    features: {
      debug: [
        'Real-time debugging',
        'Multi-server support',
        'One-click reproduction',
        'Performance metrics',
        'Git version control',
        'Tool inspection'
      ],
      chat: [
        'Multi-model support',
        'Persistent conversations',
        'System prompt management',
        'Export chat history',
        'Custom model configs',
        'Streaming responses'
      ],
      resource: [
        'Visual resource editing',
        'Prompt template library',
        'Environment management',
        'Configuration sync',
        'Import/Export tools',
        'Cloud deployment'
      ]
    }
  },
  zh: {
    title: '保持高效，管理你的 MCP',
    subtitle: '无需离开编辑器',
    tabs: {
      debug: '调试面板',
      chat: '对话界面',
      resource: '资源管理'
    },
    features: {
      debug: [
        '实时调试',
        '多服务器支持',
        '一键复现',
        '性能指标',
        'Git 版本控制',
        '工具检查'
      ],
      chat: [
        '多模型支持',
        '持久化对话',
        '系统提示词管理',
        '导出对话历史',
        '自定义模型配置',
        '流式响应'
      ],
      resource: [
        '可视化资源编辑',
        '提示词模板库',
        '环境管理',
        '配置同步',
        '导入/导出工具',
        '云部署'
      ]
    }
  },
  ja: {
    title: 'エディタを離れずにMCPを管理',
    subtitle: '生産性を保ちながら',
    tabs: {
      debug: 'デバッグパネル',
      chat: 'チャットインターフェース',
      resource: 'リソースマネージャー'
    },
    features: {
      debug: [
        'リアルタイムデバッグ',
        'マルチサーバー対応',
        'ワンクリック再現',
        'パフォーマンス指標',
        'Gitバージョン管理',
        'ツール検査'
      ],
      chat: [
        'マルチモデル対応',
        '永続的な会話',
        'システムプロンプト管理',
        'チャット履歴のエクスポート',
        'カスタムモデル設定',
        'ストリーミングレスポンス'
      ],
      resource: [
        '視覚的リソース編集',
        'プロンプトテンプレートライブラリ',
        '環境管理',
        '設定同期',
        'インポート/エクスポートツール',
        'クラウドデプロイ'
      ]
    }
  }
};

const currentLang = computed(() => {
  const l = lang.value || 'en';
  if (l.startsWith('zh')) return 'zh';
  if (l.startsWith('ja')) return 'ja';
  return 'en';
});

const t = computed(() => content[currentLang.value] || content.en);

const activeTab = ref('debug');

const tabs = computed(() => [
  { id: 'debug', label: t.value.tabs.debug, image: './images/openmcp.xml.png' },
  { id: 'chat', label: t.value.tabs.chat, image: './images/openmcp.chatbot.png' },
  { id: 'resource', label: t.value.tabs.resource, image: './images/openmcp.resource.png' }
]);

const currentTab = computed(() => tabs.value.find(tab => tab.id === activeTab.value) || tabs.value[0]);
const currentFeatures = computed(() => t.value.features[activeTab.value as keyof typeof content.en.features] || t.value.features.debug);
const currentImage = computed(() => currentTab.value.image);
</script>

<style scoped>
.feature-showcase-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
}

.showcase-header {
  margin-bottom: 3rem;
}

.showcase-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.showcase-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
}

.showcase-tabs {
  display: inline-flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2.5rem;
}

.showcase-tab {
  padding: 0.875rem 1.75rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.showcase-tab:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
}

.showcase-tab.active {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.showcase-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2.5rem;
  margin-bottom: 3rem;
}

.showcase-feature-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  font-weight: 500;
}

.feature-check {
  width: 20px;
  height: 20px;
  color: #6366f1;
  flex-shrink: 0;
}

.showcase-preview {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.preview-image {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.showcase-preview:hover .preview-image {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .showcase-title {
    font-size: 2rem;
  }
  
  .showcase-subtitle {
    font-size: 1.125rem;
  }
  
  .showcase-tabs {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  
  .showcase-tab {
    width: 100%;
  }
  
  .showcase-features {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
}
</style>
