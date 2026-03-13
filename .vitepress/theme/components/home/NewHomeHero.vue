<template>
  <div class="home-hero">
    <!-- 背景渐变 -->
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <!-- 主要内容 -->
    <div class="hero-content">
      <!-- Badge -->
      <div class="hero-badge">
        <span class="badge-text">🚀 {{ t.badge }}</span>
      </div>

      <!-- 标题 -->
      <h1 class="hero-title">
        <span class="title-main">OpenMCP</span>
        <span class="title-sub">{{ t.subtitle }}</span>
      </h1>

      <!-- 简介 -->
      <p class="hero-description" v-html="t.description"></p>

      <!-- 代码安装框 -->
      <div class="install-box">
        <div class="install-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="install-code">
          <div class="code-content">
            <span class="code-prompt">$</span>
            <code class="code-text">{{ currentCode }}</code>
          </div>
          <button class="copy-btn" @click="copyCode" :class="{ copied: copied }">
            <svg v-if="!copied" class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span class="copy-text">{{ copied ? t.copied : t.copy }}</span>
          </button>
        </div>
      </div>

      <!-- 特性标签 -->
      <div class="hero-features">
        <div v-for="(feature, index) in t.features" :key="index" class="feature-item">
          <span class="feature-icon">{{ feature.icon }}</span>
          <span>{{ feature.text }}</span>
        </div>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="hero-footer">
      <div class="scroll-hint">
        <span>{{ t.scrollHint }}</span>
        <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

// 多语言内容
const content = {
  zh: {
    badge: 'MCP 开发与调试一体化平台',
    subtitle: 'MCP 开发与调试一体化平台',
    description: '为开发者提供完整的 MCP Server 调试工具链，结合 VSCode 插件与 SDK，<br>让 AI Agent 开发更简单、更高效。',
    copy: '复制',
    copied: '已复制',
    scrollHint: '向下滚动了解更多',
    tabs: {
      cli: '安装 CLI',
      sdk: '安装 SDK'
    },
    features: [
      { icon: '🔧', text: '一体化调试' },
      { icon: '🚀', text: '快速部署' },
      { icon: '🎯', text: '多模型支持' }
    ]
  },
  en: {
    badge: 'All you need for MCP Development',
    subtitle: 'MCP Development & Debugging Platform',
    description: 'Complete MCP Server debugging toolchain for developers,<br>combining VSCode plugin with SDK for simpler AI Agent development.',
    copy: 'Copy',
    copied: 'Copied',
    scrollHint: 'Scroll down to learn more',
    tabs: {
      cli: 'Install CLI',
      sdk: 'Install SDK'
    },
    features: [
      { icon: '🔧', text: 'Integrated Debugging' },
      { icon: '🚀', text: 'Fast Deployment' },
      { icon: '🎯', text: 'Multi-Model Support' }
    ]
  },
  ja: {
    badge: 'MCP開発に必要なものすべて',
    subtitle: 'MCP開発・デバッグプラットフォーム',
    description: '開発者向けの完全なMCP Serverデバッグツールチェーン。<br>VSCodeプラグインとSDKを組み合わせ、AI Agent開発をより簡単に。',
    copy: 'コピー',
    copied: 'コピー済み',
    scrollHint: '下にスクロールして詳細を見る',
    tabs: {
      cli: 'CLIをインストール',
      sdk: 'SDKをインストール'
    },
    features: [
      { icon: '🔧', text: '統合デバッグ' },
      { icon: '🚀', text: '高速デプロイ' },
      { icon: '🎯', text: 'マルチモデル対応' }
    ]
  }
};

// 获取当前语言的内容
const currentLang = computed(() => {
  const l = lang.value || 'en';
  if (l.startsWith('zh')) return 'zh';
  if (l.startsWith('ja')) return 'ja';
  return 'en';
});

const t = computed(() => content[currentLang.value] || content.en);

const activeTab = ref('cli');
const copied = ref(false);

const tabs = computed(() => [
  { id: 'cli', label: t.value.tabs.cli, code: 'npm install -g openmcp-cli' },
  { id: 'sdk', label: t.value.tabs.sdk, code: 'npm install openmcp-sdk' },
]);

const currentCode = computed(() => {
  const tab = tabs.value.find(t => t.id === activeTab.value);
  return tab?.code || '';
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(currentCode.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('复制失败:', err);
  }
};


</script>

<style scoped>
.home-hero {
  position: relative;
  min-height: calc(100vh - 64px);
  background: #0a0a0f;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  padding-top: 64px;
}

/* 背景渐变 */
.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%);
  top: -200px;
  right: -100px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

/* 主要内容 */
.hero-content {
  position: relative;
  z-index: 5;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  margin-bottom: 2rem;
}

.badge-text {
  font-size: 0.9rem;
  color: #a5b4fc;
  font-weight: 500;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.title-main {
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #c7d2fe 50%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.title-sub {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
}

.hero-description {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

/* 安装代码框 */
.install-box {
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.install-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-btn {
  flex: 1;
  padding: 1rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.03);
}

.tab-btn.active {
  color: #fff;
  background: rgba(99, 102, 241, 0.2);
  border-bottom: 2px solid #6366f1;
}

.install-code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
}

.code-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  font-size: 1rem;
}

.code-prompt {
  color: #6366f1;
  font-weight: 600;
}

.code-text {
  color: #e2e8f0;
  font-weight: 500;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.copy-btn.copied {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
  color: #22c55e;
}

.copy-icon,
.check-icon {
  width: 16px;
  height: 16px;
}

/* 特性标签 */
.hero-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.1rem;
}

/* 底部 */
.hero-footer {
  position: relative;
  z-index: 5;
  padding: 2rem;
  text-align: center;
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .title-main {
    font-size: 3rem;
  }

  .title-sub {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .install-box {
    max-width: 100%;
  }

  .code-content {
    font-size: 0.85rem;
  }

  .hero-features {
    gap: 1rem;
  }
}
</style>
