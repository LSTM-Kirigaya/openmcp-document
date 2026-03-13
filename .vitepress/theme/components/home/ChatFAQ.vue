<template>
  <section class="chat-faq-section" ref="faqSection">
    <SectionHeader :title="t.title" :subtitle="t.subtitle" />

    <div class="chat-container">
      <div
        v-for="(item, index) in qaList"
        :key="index"
        class="qa-pair"
        :class="{ 'visible': visibleItems.has(index) }"
        :data-index="index"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <!-- Question (Right side) -->
        <div class="question-row">
          <div class="question-bubble">
            <span class="question-text">{{ item.q }}</span>
          </div>
          <div class="avatar user-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            </svg>
          </div>
        </div>

        <!-- Answer (Left side) -->
        <div class="answer-row">
          <div class="avatar bot-avatar">
            <img src="/images/favicon.svg" alt="OpenMCP" />
          </div>
          <div class="answer-bubble">
            <span class="answer-text" v-html="item.a"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();
const faqSection = ref<HTMLElement | null>(null);
const visibleItems = ref<Set<number>>(new Set());

const content = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about OpenMCP',
    qa: [
      {
        q: 'What is OpenMCP?',
        a: 'OpenMCP is an open-source Model Context Protocol (MCP) client and development platform. It provides a unified interface for managing MCP servers, debugging tools, building AI-powered applications, and deploying MCP services to the cloud.'
      },
      {
        q: 'How do I get started?',
        a: 'You can get started by installing OpenMCP via npm: <code>npm install -g openmcp</code>. Then run <code>openmcp</code> to launch the application. Check out our <a href="/guide/">Quick Start Guide</a> for detailed instructions.'
      },
      {
        q: 'Is OpenMCP free to use?',
        a: 'Yes! OpenMCP is completely free and open-source under the MIT license. You can use it for personal projects, commercial applications, and contribute to its development. <strong>Cloud storage and features that consume additional server resources may require a subscription fee.</strong>'
      },
      {
        q: 'What programming languages are supported?',
        a: 'OpenMCP supports MCP servers written in any programming language. We provide official templates for Python, TypeScript/JavaScript, and Java. Servers communicate via stdio or HTTP, so you can use your preferred language and framework.'
      },
      {
        q: 'Can I deploy to the cloud?',
        a: 'Absolutely! OpenMCP Cloud allows you to deploy your MCP servers with a single command. We handle the infrastructure, scaling, and monitoring so you can focus on building great AI tools.'
      }
    ]
  },
  zh: {
    title: '问题解答',
    subtitle: '解答您关于 OpenMCP 的所有疑问',
    qa: [
      {
        q: 'OpenMCP 是什么？',
        a: 'OpenMCP 是一个开源的 Model Context Protocol (MCP) 客户端和开发平台。它提供统一界面来管理 MCP 服务器、调试工具、构建 AI 应用，并将 MCP 服务部署到云端。'
      },
      {
        q: '如何开始使用 OpenMCP？',
        a: '您可以通过 npm 安装 OpenMCP：<code>npm install -g openmcp</code>。然后运行 <code>openmcp</code> 启动应用。查看我们的<a href="/zh/guide/">快速入门指南</a>获取详细说明。'
      },
      {
        q: 'OpenMCP 是免费的吗？',
        a: '是的！OpenMCP 在 MIT 许可下完全免费且开源。您可以将其用于个人项目、商业应用，并贡献代码。<strong>云端存储和消耗额外服务器资源的功能可能需要支付订阅费用。</strong>'
      },
      {
        q: '支持哪些编程语言？',
        a: 'OpenMCP 支持任何编程语言编写的 MCP 服务器。我们提供 Python、TypeScript/JavaScript 和 Java 的官方模板。服务器通过 stdio 或 HTTP 通信，因此您可以使用任何语言和框架。'
      },
      {
        q: '我可以将 MCP 服务器部署到云端吗？',
        a: '当然可以！OpenMCP Cloud 让您只需一条命令即可部署 MCP 服务器。我们处理基础设施、扩展和监控，让您专注于构建优秀的 AI 工具。'
      }
    ]
  },
  ja: {
    title: 'よくある質問',
    subtitle: 'OpenMCP に関するすべての疑問にお答えします',
    qa: [
      {
        q: 'OpenMCP とは何ですか？',
        a: 'OpenMCPは、オープンソースの Model Context Protocol (MCP) クライアントおよび開発プラットフォームです。MCPサーバーの管理、デバッグツールの構築、AIアプリケーションの開発、MCPサービスのクラウドへのデプロイを統一的なインターフェースで提供します。'
      },
      {
        q: 'OpenMCP の使い方は？',
        a: 'npm で OpenMCP をインストールできます：<code>npm install -g openmcp</code>。その後 <code>openmcp</code> を実行してアプリを起動します。詳細な説明は<a href="/ja/guide/">クイックスタートガイド</a>をご覧ください。'
      },
      {
        q: 'OpenMCP は無料ですか？',
        a: 'はい！OpenMCPはMITライセンスの下で完全に無料かつオープンソースです。個人プロジェクト、商用アプリケーションに使用でき、コードに貢献することもできます。<strong>クラウドストレージや追加のサーバーリソースを消費する機能については、サブスクリプション料金が必要になる場合があります。</strong>'
      },
      {
        q: 'どのプログラミング言語がサポートされていますか？',
        a: 'OpenMCPは、あらゆるプログラミング言語で書かれたMCPサーバーをサポートしています。Python、TypeScript/JavaScript、Javaの公式テンプレートを提供しています。サーバーはstdioまたはHTTPで通信するため、お好みの言語やフレームワークを使用できます。'
      },
      {
        q: 'MCPサーバーをクラウドにデプロイできますか？',
        a: 'もちろんです！OpenMCP Cloud を使用すれば、1つのコマンドでMCPサーバーをデプロイできます。インフラストラクチャ、スケーリング、監視を当社が処理するので、優れたAIツールの構築に集中できます。'
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
const qaList = computed(() => t.value.qa);

// Intersection Observer for scroll animation
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Delay to ensure DOM is fully rendered and browser is ready
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              visibleItems.value = new Set([...visibleItems.value, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 50px 0px'
      }
    );

    // Observe all QA pairs
    const pairs = faqSection.value?.querySelectorAll('.qa-pair');
    pairs?.forEach((pair) => {
      observer?.observe(pair);
    });
  }, 100);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.chat-faq-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem;
}



.chat-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.qa-pair {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.qa-pair .question-row,
.qa-pair .answer-row {
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.qa-pair .question-row {
  transform: translateX(50px);
}

.qa-pair .answer-row {
  transform: translateX(-50px);
}

.qa-pair.visible .question-row,
.qa-pair.visible .answer-row {
  opacity: 1;
  transform: translateX(0);
}

.qa-pair.visible .answer-row {
  transition-delay: 0.15s;
}

/* Question Row - Right aligned */
.question-row {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.75rem;
  transform: translateX(50px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.qa-pair.visible .question-row {
  transform: translateX(0);
  opacity: 1;
}

.question-bubble {
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  border-bottom-right-radius: 4px;
  padding: 1rem 1.25rem;
  max-width: 70%;
  position: relative;
}

.question-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

/* Answer Row - Left aligned */
.answer-row {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  transform: translateX(-50px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.qa-pair.visible .answer-row {
  transform: translateX(0);
  opacity: 1;
}

.answer-bubble {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  padding: 1rem 1.25rem;
  max-width: 75%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.answer-text {
  color: #1a1a2e;
  font-size: 0.95rem;
  line-height: 1.7;
}

.answer-text :deep(code) {
  background: rgba(99, 102, 241, 0.15);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #6366f1;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
}

.answer-text :deep(a) {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.answer-text :deep(a:hover) {
  text-decoration: underline;
}

.answer-text :deep(strong) {
  color: #1a1a2e;
  font-weight: 600;
}

/* Avatars */
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-avatar {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

.user-avatar svg {
  width: 22px;
  height: 22px;
}

.bot-avatar {
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  overflow: hidden;
}

.bot-avatar img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .question-bubble,
  .answer-bubble {
    max-width: 85%;
  }

  .question-text {
    font-size: 0.9375rem;
  }

  .answer-text {
    font-size: 0.875rem;
  }
}
</style>
