<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-left">
        <a :href="homeLink" class="nav-brand">
          <img src="/images/favicon.svg" alt="OpenMCP" class="nav-logo" />
          <span class="nav-title">OpenMCP</span>
        </a>
      </div>
      <div class="nav-right">
        <!-- 首页导航 -->
        <template v-if="!isDocPage">
          <a :href="nav.docs.link" class="nav-link" :class="{ active: isActive(nav.docs.link) }">{{ nav.docs.text }}</a>
          <a :href="nav.quickStart.link" class="nav-link" :class="{ active: isActive(nav.quickStart.link) }">{{ nav.quickStart.text }}</a>
          <a :href="nav.pricing.link" class="nav-link" :class="{ active: isActive(nav.pricing.link) }">{{ nav.pricing.text }}</a>
          <a :href="nav.blog.link" class="nav-link" :class="{ active: isActive(nav.blog.link) }">{{ nav.blog.text }}</a>
        </template>
        
        <!-- 文档页面导航 -->
        <template v-else>
          <!-- Plugin Tutorial 下拉菜单 -->
          <div class="nav-home">
            <a :href="docNav.backHome.link" class="nav-link">{{ docNav.backHome.text }}</a>
          </div>

          <div class="nav-dropdown">
            <button class="nav-dropdown-btn" @click="showCliMenu = !showCliMenu">
              <span>{{ docNav.cliTutorial.text }}</span>
              <svg class="dropdown-arrow" :class="{ open: showCliMenu }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <Transition name="fade">
              <div v-if="showCliMenu" class="nav-dropdown-menu">
                <a v-for="item in docNav.cliTutorial.items" :key="item.link" :href="item.link" class="nav-dropdown-item" @click="showCliMenu = false">
                  {{ item.text }}
                </a>
              </div>
            </Transition>
          </div>

          <div class="nav-dropdown">
            <button class="nav-dropdown-btn" @click="showPluginMenu = !showPluginMenu">
              <span>{{ docNav.pluginTutorial.text }}</span>
              <svg class="dropdown-arrow" :class="{ open: showPluginMenu }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <Transition name="fade">
              <div v-if="showPluginMenu" class="nav-dropdown-menu">
                <a v-for="item in docNav.pluginTutorial.items" :key="item.link" :href="item.link" class="nav-dropdown-item" @click="showPluginMenu = false">
                  {{ item.text }}
                </a>
              </div>
            </Transition>
          </div>
          
          <!-- SDK Tutorial 下拉菜单 -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-btn" @click="showSdkMenu = !showSdkMenu">
              <span>{{ docNav.sdkTutorial.text }}</span>
              <svg class="dropdown-arrow" :class="{ open: showSdkMenu }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <Transition name="fade">
              <div v-if="showSdkMenu" class="nav-dropdown-menu">
                <a v-for="item in docNav.sdkTutorial.items" :key="item.link" :href="item.link" class="nav-dropdown-item" @click="showSdkMenu = false">
                  {{ item.text }}
                </a>
              </div>
            </Transition>
          </div>
          
          <!-- Examples -->
          <a :href="docNav.examples.link" class="nav-link" :class="{ active: isActive(docNav.examples.link) }">{{ docNav.examples.text }}</a>
          
          <!-- FAQ -->
          <a :href="docNav.faq.link" class="nav-link" :class="{ active: isActive(docNav.faq.link) }">{{ docNav.faq.text }}</a>
        </template>
        
        <!-- 语言切换器 -->
        <div class="lang-switcher">
          <button class="lang-btn" @click="showLangMenu = !showLangMenu">
            <svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span class="lang-text">{{ currentLangLabel }}</span>
            <svg class="lang-arrow" :class="{ open: showLangMenu }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <Transition name="fade">
            <div v-if="showLangMenu" class="lang-menu">
              <a v-for="langOption in langOptions" :key="langOption.code" :href="langOption.link" class="lang-menu-item" :class="{ active: currentLang === langOption.code }" @click="showLangMenu = false">
                <span class="lang-flag">{{ langOption.flag }}</span>
                <span>{{ langOption.label }}</span>
              </a>
            </div>
          </Transition>
        </div>

        <a 
          href="https://github.com/LSTM-Kirigaya/openmcp-client" 
          target="_blank" 
          class="github-link"
        >
          <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="star-count" :class="{ 'star-loaded': isStarLoaded }">{{ starCount }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData, useRoute } from 'vitepress';

const { lang, page } = useData();
const route = useRoute();

// 判断是否在文档页面
const isDocPage = computed(() => {
  const path = route.path || '';
  return path.includes('/plugin-tutorial') || path.includes('/sdk-tutorial') || path.includes('/cli-tutorial');
});

const content = {
  zh: {
    nav: {
      docs: { text: '文档', link: '/zh/plugin-tutorial/' },
      quickStart: { text: '快速开始', link: '/zh/plugin-tutorial/quick-start/' },
      pricing: { text: '定价', link: '/zh/pricing' },
      blog: { text: '博客', link: '/zh/blog' }
    },
    homeLink: '/zh/',
    docNav: {
      backHome: { text: '返回首页', link: '/zh/' },
      cliTutorial: {
        text: 'CLI 教程',
        items: [
          { text: '概览', link: '/zh/cli-tutorial/' },
          { text: 'gateway 命令', link: '/zh/cli-tutorial/gateway' },
          { text: 'webui 命令', link: '/zh/cli-tutorial/webui' },
          { text: 'mcp 命令', link: '/zh/cli-tutorial/mcp' },
        ]
      },
      pluginTutorial: {
        text: '插件教程',
        items: [
          { text: '简介', link: '/zh/plugin-tutorial/' },
          { text: '快速开始', link: '/zh/plugin-tutorial/quick-start/' },
          { text: '使用手册', link: '/zh/plugin-tutorial/usage/connect-mcp' },
        ]
      },
      sdkTutorial: {
        text: 'SDK 教程',
        items: [
          { text: 'openmcp-sdk', link: '/zh/sdk-tutorial/' },
          { text: '安装', link: '/zh/sdk-tutorial/install' },
          { text: '基础使用', link: '/zh/sdk-tutorial/usage/basic' },
        ]
      },
      examples: { text: '案例', link: '/zh/plugin-tutorial/examples/mcp-examples' },
      faq: { text: 'FAQ', link: '/zh/plugin-tutorial/faq/help' }
    }
  },
  en: {
    nav: {
      docs: { text: 'Docs', link: '/plugin-tutorial/' },
      quickStart: { text: 'Quick Start', link: '/plugin-tutorial/quick-start/' },
      pricing: { text: 'Pricing', link: '/pricing' },
      blog: { text: 'Blog', link: '/blog' }
    },
    homeLink: '/',
    docNav: {
      backHome: { text: 'Back to Home', link: '/' },
      cliTutorial: {
        text: 'CLI Tutorial',
        items: [
          { text: 'Overview', link: '/cli-tutorial/' },
          { text: 'gateway command', link: '/cli-tutorial/gateway' },
          { text: 'webui command', link: '/cli-tutorial/webui' },
          { text: 'mcp command', link: '/cli-tutorial/mcp' },
        ]
      },
      pluginTutorial: {
        text: 'Plugin Tutorial',
        items: [
          { text: 'Introduction', link: '/plugin-tutorial/' },
          { text: 'Quick Start', link: '/plugin-tutorial/quick-start/' },
          { text: 'User Guide', link: '/plugin-tutorial/usage/connect-mcp' },
        ]
      },
      sdkTutorial: {
        text: 'SDK Tutorial',
        items: [
          { text: 'openmcp-sdk', link: '/sdk-tutorial/' },
          { text: 'Installation', link: '/sdk-tutorial/install' },
          { text: 'Basic Usage', link: '/sdk-tutorial/usage/basic' },
        ]
      },
      examples: { text: 'Examples', link: '/plugin-tutorial/examples/mcp-examples' },
      faq: { text: 'FAQ', link: '/plugin-tutorial/faq/help' }
    }
  },
  ja: {
    nav: {
      docs: { text: 'ドキュメント', link: '/ja/plugin-tutorial/' },
      quickStart: { text: 'クイックスタート', link: '/ja/plugin-tutorial/quick-start/' },
      pricing: { text: '料金', link: '/ja/pricing' },
      blog: { text: 'ブログ', link: '/ja/blog' }
    },
    homeLink: '/ja/',
    docNav: {
      backHome: { text: 'ホームに戻る', link: '/ja/' },
      cliTutorial: {
        text: 'CLI Tutorial',
        items: [
          { text: 'Overview', link: '/ja/cli-tutorial/' },
          { text: 'gateway command', link: '/ja/cli-tutorial/gateway' },
          { text: 'webui command', link: '/ja/cli-tutorial/webui' },
          { text: 'mcp command', link: '/ja/cli-tutorial/mcp' },
        ]
      },
      pluginTutorial: {
        text: 'プラグインチュートリアル',
        items: [
          { text: '概要', link: '/ja/plugin-tutorial/' },
          { text: 'クイックスタート', link: '/ja/plugin-tutorial/quick-start/' },
          { text: 'ユーザーガイド', link: '/ja/plugin-tutorial/usage/connect-mcp' },
        ]
      },
      sdkTutorial: {
        text: 'SDK チュートリアル',
        items: [
          { text: 'openmcp-sdk', link: '/ja/sdk-tutorial/' },
          { text: 'インストール', link: '/ja/sdk-tutorial/install' },
          { text: '基本的な使い方', link: '/ja/sdk-tutorial/usage/basic' },
        ]
      },
      examples: { text: '事例', link: '/ja/plugin-tutorial/examples/mcp-examples' },
      faq: { text: 'FAQ', link: '/ja/plugin-tutorial/faq/help' }
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
const nav = computed(() => t.value.nav);
const homeLink = computed(() => t.value.homeLink);
const docNav = computed(() => t.value.docNav);

const langOptions = computed(() => [
  { code: 'en', label: 'English', flag: '🇺🇸', link: getLangLink('/') },
  { code: 'zh', label: '中文', flag: '🇨🇳', link: getLangLink('/zh/') },
  { code: 'ja', label: '日本語', flag: '🇯🇵', link: getLangLink('/ja/') }
]);

function getLangLink(basePath: string) {
  const currentPath = page.value.relativePath || '';
  // 移除 .md 扩展名
  const pathWithoutExt = currentPath.replace(/\.md$/, '');
  // 处理 index 文件
  const cleanPath = pathWithoutExt.replace(/\/index$|index$/, '');
  
  if (currentPath.startsWith('zh/')) {
    return basePath + cleanPath.slice(3);
  } else if (currentPath.startsWith('ja/')) {
    return basePath + cleanPath.slice(3);
  } else {
    return basePath + cleanPath;
  }
}

const currentLangLabel = computed(() => {
  const option = langOptions.value.find(l => l.code === currentLang.value);
  return option?.label || 'English';
});

const showLangMenu = ref(false);
const showCliMenu = ref(false);
const showPluginMenu = ref(false);
const showSdkMenu = ref(false);

function isActive(link: string) {
  const currentPath = page.value.relativePath || '';
  const cleanPath = currentPath.replace(/\.md$/, '').replace(/index$/, '');
  const cleanLink = link.replace(/\.html$/, '').replace(/\/$/, '');
  return cleanPath.includes(cleanLink) || cleanLink.includes(cleanPath);
}

const starCount = ref('');
const isStarLoaded = ref(false);

onMounted(() => {
  // 尝试从本地存储获取缓存
  const cached = localStorage.getItem('openmcp-star-count');
  const cachedTime = localStorage.getItem('openmcp-star-count-time');
  const now = Date.now();
  
  // 使用缓存（1小时内）
  if (cached && cachedTime && (now - parseInt(cachedTime)) < 3600000) {
    starCount.value = cached;
    isStarLoaded.value = true;
    return;
  }
  
  fetch('https://api.github.com/repos/LSTM-Kirigaya/openmcp-client')
    .then(res => {
      if (!res.ok) throw new Error('Rate limited');
      return res.json();
    })
    .then(data => {
      if (data.stargazers_count !== undefined) {
        const count = data.stargazers_count;
        const formatted = count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count.toString();
        starCount.value = formatted;
        isStarLoaded.value = true;
        // 缓存到本地
        localStorage.setItem('openmcp-star-count', formatted);
        localStorage.setItem('openmcp-star-count-time', now.toString());
      }
    })
    .catch(() => {
      // 失败时使用缓存或显示 GitHub
      if (cached) {
        starCount.value = cached;
        isStarLoaded.value = true;
      } else {
        starCount.value = 'GitHub';
      }
    });
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.nav-brand:hover {
  opacity: 0.8;
}

.nav-logo {
  width: 32px;
  height: 32px;
}

.nav-title {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: opacity 0.2s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #a5b4fc;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}


/* 导航下拉菜单 */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.nav-dropdown-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #a5b4fc;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-dropdown-btn:hover::after {
  width: 100%;
  left: 0;
}

.dropdown-arrow {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: rgba(15, 15, 20, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 180px;
  backdrop-filter: blur(10px);
  z-index: 1001;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
}

.nav-dropdown-item {
  display: block;
  padding: 0.625rem 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* 语言切换器 */
.lang-switcher {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.lang-icon {
  width: 18px;
  height: 18px;
}

.lang-arrow {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.lang-arrow.open {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: rgba(15, 15, 20, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 160px;
  backdrop-filter: blur(10px);
  z-index: 1001;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
}

.lang-menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all 0.2s;
}

.lang-menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.lang-menu-item.active {
  background: rgba(99, 102, 241, 0.2);
  color: #a5b4fc;
}

.lang-flag {
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* GitHub */
.github-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s;
}

.github-link:hover {
  color: #fff;
}

.github-icon {
  width: 18px;
  height: 18px;
}

.star-count {
  min-width: 2rem;
  text-align: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.star-count.star-loaded {
  opacity: 1;
  color: #6366f1;
}

/* 响应式 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-right {
    gap: 1rem;
  }

  .nav-link, .nav-dropdown {
    display: none;
  }
  
  .lang-text {
    display: none;
  }
}
</style>
