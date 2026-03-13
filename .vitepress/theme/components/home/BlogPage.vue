<template>
  <div class="blog-page-wrapper">
    <div class="blog-header">
      <h1 class="blog-title">{{ t.title }}</h1>
      <p class="blog-subtitle">{{ t.subtitle }}</p>
    </div>
    
    <div class="blog-container">
      <div class="blog-list">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="blog-card"
          @click="openPost(post)"
        >
          <div class="blog-card-header">
            <span class="blog-date">{{ post.date }}</span>
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
            </div>
          </div>
          <h2 class="blog-card-title">{{ post.title }}</h2>
          <p class="blog-card-summary">{{ post.summary }}</p>
          <div class="blog-card-footer">
            <span class="read-more">{{ t.readMore }} →</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  zh: {
    title: '开发日志',
    subtitle: '记录 OpenMCP 迭代的每一步，分享我们的思考与成长',
    readMore: '阅读更多'
  },
  en: {
    title: 'Dev Blog',
    subtitle: 'Documenting every step of OpenMCP\'s evolution, sharing our thoughts and growth',
    readMore: 'Read more'
  },
  ja: {
    title: '開発ブログ',
    subtitle: 'OpenMCPの進化の每一步を記録し、私たちの思考と成長を共有します',
    readMore: '続きを読む'
  }
};

const currentLang = computed(() => {
  const l = lang.value || 'en';
  if (l.startsWith('zh')) return 'zh';
  if (l.startsWith('ja')) return 'ja';
  return 'en';
});

const t = computed(() => content[currentLang.value] || content.en);

// 博客文章数据
const posts = computed(() => {
  const allPosts = {
    zh: [
      {
        id: 1,
        title: 'OpenMCP 的诞生：为什么我们决定做这个项目',
        date: '2024-03-15',
        tags: ['心路历程', '产品理念'],
        summary: '从最初的灵感到第一个可用的原型，记录 OpenMCP 诞生背后的故事。我们如何解决 MCP 开发中的痛点，以及我们对未来的愿景。',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 版本发布：全新 UI 与多语言支持',
        date: '2024-03-10',
        tags: ['版本发布', '新功能'],
        summary: '本次更新带来了焕然一新的用户界面，支持中文、英文、日文三种语言。同时优化了调试体验，让 MCP 开发更加流畅。',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: '技术选型思考：为什么选择 VSCode 作为基础平台',
        date: '2024-02-28',
        tags: ['技术架构', '思考'],
        summary: '深入探讨我们在技术选型时的考虑，为什么最终选择基于 VSCode 构建 OpenMCP，以及这个决定带来的优势和挑战。',
        link: '/blog/tech-stack-choice'
      }
    ],
    en: [
      {
        id: 1,
        title: 'The Birth of OpenMCP: Why We Decided to Build This Project',
        date: '2024-03-15',
        tags: ['Journey', 'Product Vision'],
        summary: 'From the initial inspiration to the first working prototype, documenting the story behind OpenMCP\'s birth. How we solved the pain points in MCP development and our vision for the future.',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 Release: New UI and Multi-language Support',
        date: '2024-03-10',
        tags: ['Release', 'Features'],
        summary: 'This update brings a refreshed user interface with support for Chinese, English, and Japanese. Debugging experience has also been optimized for smoother MCP development.',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: 'Technical Decision: Why We Chose VSCode as Our Foundation',
        date: '2024-02-28',
        tags: ['Architecture', 'Thoughts'],
        summary: 'An in-depth look at our technical considerations and why we ultimately chose to build OpenMCP based on VSCode, along with the advantages and challenges this decision brought.',
        link: '/blog/tech-stack-choice'
      }
    ],
    ja: [
      {
        id: 1,
        title: 'OpenMCPの誕生：なぜこのプロジェクトを始めたのか',
        date: '2024-03-15',
        tags: ['軌跡', '製品ビジョン'],
        summary: '最初のインスピレーションから最初の動作するプロトタイプまで、OpenMCP誕生の裏側にある物語を記録します。MCP開発の痛点をどのように解決し、将来に対する私たちのビジョンについて。',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 リリース：新しいUIと多言語サポート',
        date: '2024-03-10',
        tags: ['リリース', '機能'],
        summary: 'このアップデートでは、中国語、英語、日本語をサポートする新しいユーザーインターフェースが導入されました。デバッグ体験も最適化され、よりスムーズなMCP開発が可能になりました。',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: '技術選定の考察：なぜVSCodeを基盤として選んだのか',
        date: '2024-02-28',
        tags: ['アーキテクチャ', '考察'],
        summary: '技術選定時の私たちの考慮事項を深く掘り下げ、なぜ最終的にVSCodeをベースにOpenMCPを構築することを選んだのか、この決定がもたらした利点と課題について説明します。',
        link: '/blog/tech-stack-choice'
      }
    ]
  };
  return allPosts[currentLang.value] || allPosts.en;
});

function openPost(post: any) {
  window.location.href = post.link;
}
</script>

<style scoped>
.blog-page-wrapper {
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
  padding-top: 64px;
}

.blog-header {
  text-align: center;
  padding: 60px 20px 40px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%);
}

.blog-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.blog-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(165, 180, 252, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
}

.blog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.blog-date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
}

.blog-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.blog-tag {
  font-size: 0.75rem;
  padding: 4px 12px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-radius: 20px;
  border: 1px solid rgba(165, 180, 252, 0.2);
}

.blog-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: #fff;
  line-height: 1.4;
}

.blog-card-summary {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin: 0 0 20px;
}

.blog-card-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  font-size: 0.95rem;
  color: #a5b4fc;
  font-weight: 500;
  transition: color 0.2s;
}

.blog-card:hover .read-more {
  color: #6366f1;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-subtitle {
    font-size: 1rem;
  }
  
  .blog-card {
    padding: 20px;
  }
  
  .blog-card-title {
    font-size: 1.2rem;
  }
}
</style>
