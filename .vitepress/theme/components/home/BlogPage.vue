<template>
  <div class="blog-page-wrapper">
    <!-- 顶部大标题区域 -->
    <div class="blog-hero">
      <h1 class="blog-title">
        {{ t.titleLine1 }}<br />
        <span class="title-highlight">{{ t.titleHighlight }}</span>
      </h1>
    </div>
    
    <!-- 分类标签 -->
    <div class="blog-categories">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        class="category-btn"
        :class="{ active: activeCategory === cat.id }"
        @click="activeCategory = cat.id"
      >
        {{ cat.name }}
      </button>
    </div>
    
    <!-- 博客列表 -->
    <div class="blog-container">
      <div class="blog-grid">
        <!-- 第一篇大图文章 -->
        <article 
          v-if="filteredPosts.length > 0"
          class="blog-card featured"
          @click="openPost(filteredPosts[0])"
        >
          <div class="card-image-wrapper">
            <div class="card-image" :style="{ background: filteredPosts[0].gradient }">
              <span class="card-tag">{{ filteredPosts[0].category }}</span>
              <div class="card-icon" v-if="filteredPosts[0].icon">{{ filteredPosts[0].icon }}</div>
            </div>
          </div>
          <div class="card-content">
            <h2 class="card-title">{{ filteredPosts[0].title }}</h2>
            <p class="card-summary">{{ filteredPosts[0].summary }}</p>
            <div class="card-meta">
              <span class="card-author">{{ filteredPosts[0].author }}</span>
              <span class="card-date">{{ filteredPosts[0].date }}</span>
            </div>
          </div>
        </article>
        
        <!-- 其他小卡片 -->
        <article 
          v-for="post in filteredPosts.slice(1)" 
          :key="post.id"
          class="blog-card"
          @click="openPost(post)"
        >
          <div class="card-image-wrapper small">
            <div class="card-image" :style="{ background: post.gradient }">
              <span class="card-tag small">{{ post.category }}</span>
              <div class="card-icon" v-if="post.icon">{{ post.icon }}</div>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title small">{{ post.title }}</h3>
            <div class="card-meta">
              <span class="card-author">{{ post.author }}</span>
              <span class="card-date">{{ post.date }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  zh: {
    titleLine1: '想法、实验',
    titleHighlight: '与我们的旅程',
    categories: {
      all: '全部',
      journey: '心路历程',
      release: '版本发布',
      tech: '技术深度',
      case: '案例分享'
    }
  },
  en: {
    titleLine1: 'Ideas, experiments,',
    titleHighlight: 'and our journey',
    categories: {
      all: 'All',
      journey: 'Journey',
      release: 'Release',
      tech: 'Tech Deep Dive',
      case: 'Case Studies'
    }
  },
  ja: {
    titleLine1: 'アイデア、実験、',
    titleHighlight: 'そして私たちの旅',
    categories: {
      all: 'すべて',
      journey: '軌跡',
      release: 'リリース',
      tech: '技術深掘り',
      case: '事例紹介'
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

// 分类数据
const categories = computed(() => [
  { id: 'all', name: t.value.categories.all },
  { id: 'journey', name: t.value.categories.journey },
  { id: 'release', name: t.value.categories.release },
  { id: 'tech', name: t.value.categories.tech },
  { id: 'case', name: t.value.categories.case }
]);

const activeCategory = ref('all');

// 博客文章数据 - 使用渐变背景配合深色主题
const allPosts = computed(() => {
  const postsData = {
    zh: [
      {
        id: 1,
        title: 'OpenMCP 的诞生：为什么我们决定做这个项目',
        category: '心路历程',
        categoryId: 'journey',
        date: '2024-03-15',
        author: 'Kirigaya',
        summary: '从最初的灵感到第一个可用的原型，记录 OpenMCP 诞生背后的故事。我们如何解决 MCP 开发中的痛点，以及我们对未来的愿景。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        icon: '🚀',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 版本发布：全新 UI 与多语言支持',
        category: '版本发布',
        categoryId: 'release',
        date: '2024-03-10',
        author: 'OpenMCP Team',
        summary: '本次更新带来了焕然一新的用户界面，支持中文、英文、日文三种语言。',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        icon: '✨',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: '技术选型思考：为什么选择 VSCode 作为基础平台',
        category: '技术深度',
        categoryId: 'tech',
        date: '2024-02-28',
        author: 'Kirigaya',
        summary: '深入探讨我们在技术选型时的考虑，为什么最终选择基于 VSCode 构建 OpenMCP。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        icon: '🤔',
        link: '/blog/tech-stack-choice'
      },
      {
        id: 4,
        title: '案例分享：如何使用 OpenMCP 快速搭建 AI 工作流',
        category: '案例分享',
        categoryId: 'case',
        date: '2024-02-20',
        author: 'Community',
        summary: '分享一个使用 OpenMCP 搭建完整 AI 工作流的真实案例，从需求分析到落地实现。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        icon: '💡',
        link: '/blog/case-study-1'
      }
    ],
    en: [
      {
        id: 1,
        title: 'The Birth of OpenMCP: Why We Decided to Build This Project',
        category: 'Journey',
        categoryId: 'journey',
        date: '2024-03-15',
        author: 'Kirigaya',
        summary: 'From the initial inspiration to the first working prototype, documenting the story behind OpenMCP\'s birth.',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        icon: '🚀',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 Release: New UI and Multi-language Support',
        category: 'Release',
        categoryId: 'release',
        date: '2024-03-10',
        author: 'OpenMCP Team',
        summary: 'This update brings a refreshed user interface with support for Chinese, English, and Japanese.',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        icon: '✨',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: 'Technical Decision: Why We Chose VSCode as Our Foundation',
        category: 'Tech Deep Dive',
        categoryId: 'tech',
        date: '2024-02-28',
        author: 'Kirigaya',
        summary: 'An in-depth look at our technical considerations and why we chose VSCode.',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        icon: '🤔',
        link: '/blog/tech-stack-choice'
      },
      {
        id: 4,
        title: 'Case Study: Building AI Workflows with OpenMCP',
        category: 'Case Studies',
        categoryId: 'case',
        date: '2024-02-20',
        author: 'Community',
        summary: 'A real-world case study of building a complete AI workflow using OpenMCP.',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        icon: '💡',
        link: '/blog/case-study-1'
      }
    ],
    ja: [
      {
        id: 1,
        title: 'OpenMCPの誕生：なぜこのプロジェクトを始めたのか',
        category: '軌跡',
        categoryId: 'journey',
        date: '2024-03-15',
        author: 'Kirigaya',
        summary: '最初のインスピレーションから最初の動作するプロトタイプまで、OpenMCP誕生の裏側にある物語。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        icon: '🚀',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'v0.5.0 リリース：新しいUIと多言語サポート',
        category: 'リリース',
        categoryId: 'release',
        date: '2024-03-10',
        author: 'OpenMCP Team',
        summary: 'このアップデートでは、中国語、英語、日本語をサポートする新しいユーザーインターフェースが導入されました。',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        icon: '✨',
        link: '/blog/v0.5.0-release'
      },
      {
        id: 3,
        title: '技術選定の考察：なぜVSCodeを基盤として選んだのか',
        category: '技術深掘り',
        categoryId: 'tech',
        date: '2024-02-28',
        author: 'Kirigaya',
        summary: '技術選定時の私たちの考慮事項を深く掘り下げ、なぜVSCodeを選んだのか。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        icon: '🤔',
        link: '/blog/tech-stack-choice'
      },
      {
        id: 4,
        title: '事例紹介：OpenMCPでAIワークフローを構築する',
        category: '事例紹介',
        categoryId: 'case',
        date: '2024-02-20',
        author: 'Community',
        summary: 'OpenMCPを使用して完全なAIワークフローを構築した実際の事例。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        icon: '💡',
        link: '/blog/case-study-1'
      }
    ]
  };
  return postsData[currentLang.value] || postsData.en;
});

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return allPosts.value;
  }
  return allPosts.value.filter(post => post.categoryId === activeCategory.value);
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

/* 顶部大标题 */
.blog-hero {
  text-align: center;
  padding: 80px 20px 40px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%);
}

.blog-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: #fff;
}

.title-highlight {
  color: #a5b4fc;
  font-style: italic;
}

/* 分类标签 */
.blog-categories {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 20px 40px;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin: 0 auto;
}

.category-btn {
  padding: 8px 20px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.2s ease;
  position: relative;
}

.category-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.category-btn.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.category-btn.active::after {
  content: '';
  position: absolute;
  bottom: -41px;
  left: 0;
  right: 0;
  height: 2px;
  background: #6366f1;
}

/* 博客容器 */
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

/* 博客网格布局 */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 博客卡片 */
.blog-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-card.featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* 卡片图片 */
.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card-image-wrapper.small {
  aspect-ratio: 16/12;
}

.card-image {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  position: relative;
}

.card-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #a5b4fc;
  width: fit-content;
  border: 1px solid rgba(165, 180, 252, 0.2);
}

.card-tag.small {
  padding: 4px 12px;
  font-size: 0.75rem;
}

.card-icon {
  font-size: 3rem;
  align-self: flex-end;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

/* 卡片内容 */
.card-content {
  padding: 0 4px;
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px;
  line-height: 1.3;
}

.card-title.small {
  font-size: 1.1rem;
  margin: 0 0 8px;
}

.card-summary {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0 0 16px;
}

.card-meta {
  display: flex;
  gap: 16px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
}

.card-author {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
}

/* 响应式 */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .blog-card.featured {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .blog-title {
    font-size: 3rem;
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .blog-card.featured {
    grid-column: span 1;
  }
  
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-hero {
    padding: 60px 20px 30px;
  }
}
</style>
