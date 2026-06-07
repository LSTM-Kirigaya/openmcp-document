<template>
  <div class="blog-page-wrapper">
    <!-- 顶部大标题区域 -->
    <div class="blog-header">
      <h2 class="blog-title">{{ t.title }}</h2>
      <p class="blog-subtitle">{{ t.subtitle }}</p>
    </div>

    <!-- 分类标签 -->
    <div class="blog-categories">
      <button v-for="cat in categories" :key="cat.id" class="category-btn"
        :class="{ active: activeCategory === cat.id }" @click="activeCategory = cat.id">
        {{ cat.name }}
      </button>
    </div>

    <!-- 博客列表 -->
    <div class="blog-container">
      <div class="blog-grid">
        <!-- 第一篇大图文章 -->
        <article v-if="filteredPosts.length > 0" class="blog-card featured" @click="openPost(filteredPosts[0])">
          <div class="card-image-wrapper">
            <div class="card-image" :style="filteredPosts[0].image
              ? { backgroundImage: `url(${filteredPosts[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { background: filteredPosts[0].gradient }">
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
        <article v-for="post in filteredPosts.slice(1)" :key="post.id" class="blog-card" @click="openPost(post)">
          <div class="card-image-wrapper small">
            <div class="card-image" :style="post.image
              ? { backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { background: post.gradient }">
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
import { useData, useRouter } from 'vitepress';

const { lang } = useData();
const router = useRouter();

const content = {
  zh: {
    title: '开发日志',
    subtitle: '记录 OpenMCP 迭代的每一步，分享我们的思考与成长',
    categories: {
      all: '全部',
      journey: '心路历程',
      release: '版本发布',
      tech: '技术深度',
      case: '案例分享'
    }
  },
  en: {
    title: 'Dev Blog',
    subtitle: 'Documenting every step of OpenMCP\'s evolution, sharing our thoughts and growth',
    categories: {
      all: 'All',
      journey: 'Journey',
      release: 'Release',
      tech: 'Tech Deep Dive',
      case: 'Case Studies'
    }
  },
  ja: {
    title: '開発ブログ',
    subtitle: 'OpenMCPの進化の每一步を記録し、私たちの思考と成長を共有します',
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
        title: '全网第一个 MCP 服务器一体化开发测试软件 OpenMCP 发布！',
        category: '心路历程',
        categoryId: 'journey',
        date: '2025-04-13',
        author: 'Kirigaya',
        summary: 'OpenMCP 的第一个测试版本终于发布了，目前可以在 Vscode 或者 Trae 的插件商城下载。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/birth-of-openmcp.webp',
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: '优雅地开发 MCP 服务器（二）OpenMCP 使用教程 & 你的第一个 MCP 服务',
        category: '技术深度',
        categoryId: 'tech',
        date: '2025-05-27',
        author: 'Kirigaya',
        summary: '教大家写一个简单的 MCP 服务器，让大模型拥有得知天气预报的能力，基于 OpenMCP 进行开发调试。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/birth-of-openmcp.webp',
        // 封面图: /images/blog-poster/openmcp-tutorial-2.webp
        link: '/blog/openmcp-tutorial-2'
      },
      {
        id: 3,
        title: '知乎圈子「OpenMCP 博物馆」策划书',
        category: '心路历程',
        categoryId: 'journey',
        date: '2025-05-28',
        author: 'Kirigaya',
        summary: '收到知乎的邀请，成立一个有关 MCP 话题的「知乎圈子」，记录圈子的一些规则和想法。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-tutorial-2.webp',
        // 封面图: /images/blog-poster/openmcp-museum.webp
        link: '/blog/openmcp-museum'
      },
      {
        id: 4,
        title: 'OpenMCP 0.1.9 上线！这次我们更新了工具自检功能',
        category: '版本发布',
        categoryId: 'release',
        date: '2025-07-08',
        author: 'Kirigaya',
        summary: '工具自检功能可以在 MCP 开发初期快速完成所有 tool 的执行验证，加速 MCP 的开发和上线。',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        image: '/images/blog-poster/openmcp-museum.webp',
        // 封面图: /images/blog-poster/openmcp-0.1.9.webp
        link: '/blog/openmcp-0.1.9'
      },
      {
        id: 5,
        title: 'OpenMCP 重磅推出调用链可视化 & 季度小结',
        category: '版本发布',
        categoryId: 'release',
        date: '2026-04-08',
        author: 'Kirigaya',
        summary: 'OpenMCP 推出调用链可视化功能，让 MCP 服务器的工具调用过程一目了然。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/openmcp-0.1.9.webp',
        // 封面图: /images/blog-poster/openmcp-chain-visualization.webp
        link: '/blog/openmcp-chain-visualization'
      },
      {
        id: 6,
        title: '为什么我需要设计回流系统？openmcp reflux 用量化指标帮你更加了解你的 Agent 系统',
        category: '技术深度',
        categoryId: 'tech',
        date: '2026-04-24',
        author: 'Kirigaya',
        summary: '通过量化指标和回流系统，帮助开发者更好地理解和优化 Agent 系统与 MCP 的性能。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/openmcp-chain-visualization.webp',
        // 封面图: /images/blog-poster/openmcp-reflux.webp
        link: '/blog/openmcp-reflux'
      },
      {
        id: 7,
        title: 'OpenMCP 新功能介绍：批量验证与 Debugger MCP',
        category: '技术深度',
        categoryId: 'tech',
        date: '2026-05-06',
        author: 'Kirigaya',
        summary: '批量验证与 Debugger MCP 功能，助力自动化 Agent 开发，让迭代过程更加可控。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-reflux.webp',
        // 封面图: /images/blog-poster/openmcp-batch-validation.webp
        link: '/blog/openmcp-batch-validation'
      }
    ],
    en: [
      {
        id: 1,
        title: 'The First MCP Server All-in-One Dev & Test Tool: OpenMCP Released!',
        category: 'Journey',
        categoryId: 'journey',
        date: '2025-04-13',
        author: 'Kirigaya',
        summary: 'The first test version of OpenMCP is finally released, available on VSCode and Trae plugin marketplace.',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/openmcp-batch-validation.webp',
        // 封面图: /images/blog-poster/birth-of-openmcp.webp
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'Elegant MCP Server Development (II): OpenMCP Tutorial & Your First MCP Service',
        category: 'Tech Deep Dive',
        categoryId: 'tech',
        date: '2025-05-27',
        author: 'Kirigaya',
        summary: 'Teach you how to write a simple MCP server to give LLM weather forecast capabilities.',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/birth-of-openmcp.webp',
        // 封面图: /images/blog-poster/openmcp-tutorial-2.webp
        link: '/blog/openmcp-tutorial-2'
      },
      {
        id: 3,
        title: 'Zhihu Circle "OpenMCP Museum" Proposal',
        category: 'Journey',
        categoryId: 'journey',
        date: '2025-05-28',
        author: 'Kirigaya',
        summary: 'Invited by Zhihu to create a circle about MCP topics, recording the rules and ideas.',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-tutorial-2.webp',
        // 封面图: /images/blog-poster/openmcp-museum.webp
        link: '/blog/openmcp-museum'
      },
      {
        id: 4,
        title: 'OpenMCP 0.1.9 Released! Tool Self-Check Feature',
        category: 'Release',
        categoryId: 'release',
        date: '2025-07-08',
        author: 'Kirigaya',
        summary: 'Tool self-check feature can quickly verify all tool executions in early MCP development.',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        image: '/images/blog-poster/openmcp-museum.webp',
        // 封面图: /images/blog-poster/openmcp-0.1.9.webp
        link: '/blog/openmcp-0.1.9'
      },
      {
        id: 5,
        title: 'OpenMCP Launches Call Chain Visualization & Quarterly Summary',
        category: 'Release',
        categoryId: 'release',
        date: '2026-04-08',
        author: 'Kirigaya',
        summary: 'OpenMCP introduces call chain visualization, making tool invocation transparent.',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/openmcp-0.1.9.webp',
        // 封面图: /images/blog-poster/openmcp-chain-visualization.webp
        link: '/blog/openmcp-chain-visualization'
      },
      {
        id: 6,
        title: 'Why I Designed the Reflux System? OpenMCP Reflux with Quantitative Metrics',
        category: 'Tech Deep Dive',
        categoryId: 'tech',
        date: '2026-04-24',
        author: 'Kirigaya',
        summary: 'Use quantitative metrics and reflux system to better understand Agent systems.',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/openmcp-chain-visualization.webp',
        // 封面图: /images/blog-poster/openmcp-reflux.webp
        link: '/blog/openmcp-reflux'
      },
      {
        id: 7,
        title: 'OpenMCP New Features: Batch Validation & Debugger MCP',
        category: 'Tech Deep Dive',
        categoryId: 'tech',
        date: '2026-05-06',
        author: 'Kirigaya',
        summary: 'Batch validation and Debugger MCP features for automated Agent development.',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-reflux.webp',
        // 封面图: /images/blog-poster/openmcp-batch-validation.webp
        link: '/blog/openmcp-batch-validation'
      }
    ],
    ja: [
      {
        id: 1,
        title: '初のMCPサーバー統合開発テストツールOpenMCPがリリース！',
        category: '軌跡',
        categoryId: 'journey',
        date: '2025-04-13',
        author: 'Kirigaya',
        summary: 'OpenMCPの最初のテストバージョンがリリースされ、VSCodeとTraeのプラグインマーケットでダウンロード可能。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/openmcp-batch-validation.webp',
        // 封面图: /images/blog-poster/birth-of-openmcp.webp
        link: '/blog/birth-of-openmcp'
      },
      {
        id: 2,
        title: 'MCPサーバーのエレガントな開発（二）：OpenMCPチュートリアル',
        category: '技術深掘り',
        categoryId: 'tech',
        date: '2025-05-27',
        author: 'Kirigaya',
        summary: 'シンプルなMCPサーバーの書き方を教え、LLMに天気予報の能力を与えます。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/birth-of-openmcp.webp',
        // 封面图: /images/blog-poster/openmcp-tutorial-2.webp
        link: '/blog/openmcp-tutorial-2'
      },
      {
        id: 3,
        title: '知乎サークル「OpenMCP博物館」企画書',
        category: '軌跡',
        categoryId: 'journey',
        date: '2025-05-28',
        author: 'Kirigaya',
        summary: '知乎からの招待を受け、MCPトピックのサークルを設立します。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-tutorial-2.webp',
        // 封面图: /images/blog-poster/openmcp-museum.webp
        link: '/blog/openmcp-museum'
      },
      {
        id: 4,
        title: 'OpenMCP 0.1.9リリース！ツール自己診断機能',
        category: 'リリース',
        categoryId: 'release',
        date: '2025-07-08',
        author: 'Kirigaya',
        summary: 'ツール自己診断機能により、MCP開発初期のすべてのツール実行を迅速に検証。',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
        image: '/images/blog-poster/openmcp-museum.webp',
        // 封面图: /images/blog-poster/openmcp-0.1.9.webp
        link: '/blog/openmcp-0.1.9'
      },
      {
        id: 5,
        title: 'OpenMCPがコールチェーン可視化と四半期サマリーを発表',
        category: 'リリース',
        categoryId: 'release',
        date: '2026-04-08',
        author: 'Kirigaya',
        summary: 'OpenMCPがコールチェーン可視化を導入し、ツール呼び出しを明確にします。',
        gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #3d7ab5 100%)',
        image: '/images/blog-poster/openmcp-0.1.9.webp',
        // 封面图: /images/blog-poster/openmcp-chain-visualization.webp
        link: '/blog/openmcp-chain-visualization'
      },
      {
        id: 6,
        title: 'なぜリフラックスシステムを設計したのか？OpenMCP Reflux',
        category: '技術深掘り',
        categoryId: 'tech',
        date: '2026-04-24',
        author: 'Kirigaya',
        summary: '定量的指標とリフラックスシステムを使用して、Agentシステムをより深く理解します。',
        gradient: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        image: '/images/blog-poster/openmcp-chain-visualization.webp',
        // 封面图: /images/blog-poster/openmcp-reflux.webp
        link: '/blog/openmcp-reflux'
      },
      {
        id: 7,
        title: 'OpenMCP新機能：バッチ検証とDebugger MCP',
        category: '技術深掘り',
        categoryId: 'tech',
        date: '2026-05-06',
        author: 'Kirigaya',
        summary: '自動化Agent開発のためのバッチ検証とDebugger MCP機能。',
        gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
        image: '/images/blog-poster/openmcp-reflux.webp',
        // 封面图: /images/blog-poster/openmcp-batch-validation.webp
        link: '/blog/openmcp-batch-validation'
      }
    ]
  };
  const posts = postsData[currentLang.value] || postsData.en;
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return allPosts.value;
  }
  return allPosts.value.filter(post => post.categoryId === activeCategory.value);
});
function openPost(post: any) {
  router.go(post.link);
}
</script>

<style scoped>
/* 标题区域 - 仿照定价页 */
.blog-header {
  text-align: center;
  padding: 80px 20px 20px;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px;
}

.blog-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* 分类标签 */
.blog-categories {
  display: flex;
  gap: 8px;
  padding: 0 20px 20px;
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
  bottom: -21px;
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
  font-size: 4rem;
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
