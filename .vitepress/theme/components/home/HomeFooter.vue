<template>
  <footer class="home-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img src="/images/favicon.svg" alt="OpenMCP" class="footer-logo" />
        <span class="footer-title">OpenMCP</span>
      </div>
      
      <div class="footer-links">
        <div class="footer-col">
          <h4>{{ t.product.title }}</h4>
          <ul>
            <li><a :href="t.product.features.link">{{ t.product.features.text }}</a></li>
            <li><a :href="t.product.templates.link">{{ t.product.templates.text }}</a></li>
            <li><a :href="t.product.pricing.link">{{ t.product.pricing.text }}</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>{{ t.resources.title }}</h4>
          <ul>
            <li><a :href="t.resources.docs.link">{{ t.resources.docs.text }}</a></li>
            <li><a :href="t.resources.api.link">{{ t.resources.api.text }}</a></li>
            <li><a :href="t.resources.github.link" target="_blank">{{ t.resources.github.text }}</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>{{ t.community.title }}</h4>
          <ul>
            <li><a :href="t.community.discord.link" target="_blank">{{ t.community.discord.text }}</a></li>
            <li><a :href="t.community.twitter.link" target="_blank">{{ t.community.twitter.text }}</a></li>
            <li><a :href="t.community.blog.link">{{ t.community.blog.text }}</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© {{ currentYear }} OpenMCP. {{ t.copyright }}</p>
      <div class="footer-social">
        <a href="https://github.com/LSTM-Kirigaya/openmcp-client" target="_blank" class="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const currentYear = new Date().getFullYear();

const content = {
  en: {
    product: {
      title: 'Product',
      features: { text: 'Features', link: '/#features' },
      templates: { text: 'Templates', link: '/#templates' },
      pricing: { text: 'Pricing', link: '/pricing/' }
    },
    resources: {
      title: 'Resources',
      docs: { text: 'Documentation', link: '/guide/' },
      api: { text: 'SDK Reference', link: '/sdk-tutorial/' },
      github: { text: 'GitHub', link: 'https://github.com/LSTM-Kirigaya/openmcp-client' }
    },
    community: {
      title: 'Community',
      discord: { text: 'Discord', link: 'https://discord.com/invite/SKTZRf6NzU' },
      twitter: { text: 'Twitter', link: '#' },
      blog: { text: 'Blog', link: '/blog/' }
    },
    copyright: 'All rights reserved.'
  },
  zh: {
    product: {
      title: '产品',
      features: { text: '功能特性', link: '/zh/#features' },
      templates: { text: '模板', link: '/zh/#templates' },
      pricing: { text: '定价', link: '/zh/pricing/' }
    },
    resources: {
      title: '资源',
      docs: { text: '文档', link: '/zh/guide/' },
      api: { text: 'SDK 参考', link: '/zh/sdk-tutorial/' },
      github: { text: 'GitHub', link: 'https://github.com/LSTM-Kirigaya/openmcp-client' }
    },
    community: {
      title: '社区',
      discord: { text: 'Discord', link: 'https://discord.com/invite/SKTZRf6NzU' },
      twitter: { text: 'Twitter', link: '#' },
      blog: { text: '博客', link: '/zh/blog/' }
    },
    copyright: '保留所有权利。'
  },
  ja: {
    product: {
      title: '製品',
      features: { text: '機能', link: '/ja/#features' },
      templates: { text: 'テンプレート', link: '/ja/#templates' },
      pricing: { text: '料金', link: '/ja/pricing/' }
    },
    resources: {
      title: 'リソース',
      docs: { text: 'ドキュメント', link: '/ja/guide/' },
      api: { text: 'SDK リファレンス', link: '/ja/sdk-tutorial/' },
      github: { text: 'GitHub', link: 'https://github.com/LSTM-Kirigaya/openmcp-client' }
    },
    community: {
      title: 'コミュニティ',
      discord: { text: 'Discord', link: 'https://discord.com/invite/SKTZRf6NzU' },
      twitter: { text: 'Twitter', link: '#' },
      blog: { text: 'ブログ', link: '/ja/blog/' }
    },
    copyright: '全著作権所有。'
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
.home-footer {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo {
  width: 36px;
  height: 36px;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.footer-col h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: #6366f1;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s;
}

.social-link:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  color: #6366f1;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-links {
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
