<template>
  <section class="pricing-section">
    <!-- 背景装饰 -->
    <div class="pricing-bg">
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
    </div>

    <!-- 标题区域 -->
    <div class="pricing-header">
      <h2 class="pricing-title">{{ t.title }}</h2>
      <p class="pricing-subtitle">{{ t.subtitle }}</p>
    </div>

    <!-- 定价卡片 -->
    <div class="pricing-cards">
      <!-- 免费版 -->
      <div class="pricing-card">
        <div class="card-header">
          <h3 class="plan-name">{{ t.plans.free.name }}</h3>
          <p class="plan-desc">{{ t.plans.free.desc }}</p>
          <div class="card-billing-toggle card-billing-toggle-spacer"></div>
          <div class="plan-price-wrap">
            <div class="plan-price">
              <span class="currency">¥</span>
              <span class="amount">0</span>
              <span class="period">/{{ t.period }}</span>
            </div>
          </div>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in t.plans.free.features" :key="index" class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
            <li v-for="(limit, index) in t.plans.free.limits" :key="'limit-'+index" class="feature-item disabled">
              <svg class="cross-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              <span>{{ limit }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <a :href="t.plans.free.link" class="btn btn-outline">{{ t.cta.free }}</a>
        </div>
      </div>

      <!-- 专业版 (推荐) -->
      <div class="pricing-card featured">
        <div class="featured-badge">{{ t.badge }}</div>
        <div class="card-header">
          <h3 class="plan-name">{{ t.plans.pro.name }}</h3>
          <p class="plan-desc">{{ t.plans.pro.desc }}</p>
          <div class="card-billing-toggle">
            <div class="billing-toggle">
              <span v-if="billingPeriod === 'yearly'" class="billing-discount-badge">{{ t.yearlyDiscount }}</span>
              <button
                class="billing-btn"
                :class="{ active: billingPeriod === 'monthly' }"
                @click="billingPeriod = 'monthly'"
              >
                {{ t.billingMonthly }}
              </button>
              <button
                class="billing-btn"
                :class="{ active: billingPeriod === 'yearly' }"
                @click="billingPeriod = 'yearly'"
              >
                {{ t.billingYearly }}
              </button>
            </div>
          </div>
          <div class="plan-price-wrap">
            <div class="plan-price" v-if="billingPeriod === 'monthly'">
              <span class="currency">¥</span>
              <span class="amount">{{ pricing.pro.monthly }}</span>
              <span class="period">/{{ t.period }}</span>
            </div>
            <div class="plan-price yearly" v-else>
              <span class="price-original">
                <span class="currency">¥</span>{{ pricing.pro.monthly * 12 }}.00
              </span>
              <span class="price-actual">
                <span class="currency">¥</span>
                <span class="amount">{{ Math.round(pricing.pro.monthly * 12 * pricing.pro.yearlyDiscount) }}</span>
                <span class="period">/{{ t.periodYear }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in t.plans.pro.features" :key="index" class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <a :href="t.plans.pro.link" class="btn btn-primary">{{ t.cta.pro }}</a>
        </div>
      </div>

      <!-- 团队版 -->
      <div class="pricing-card">
        <div class="card-header">
          <h3 class="plan-name">{{ t.plans.team.name }}</h3>
          <p class="plan-desc">{{ t.plans.team.desc }}</p>
          <div class="card-billing-toggle">
            <div class="billing-toggle">
              <span v-if="billingPeriod === 'yearly'" class="billing-discount-badge">{{ t.yearlyDiscount }}</span>
              <button
                class="billing-btn"
                :class="{ active: billingPeriod === 'monthly' }"
                @click="billingPeriod = 'monthly'"
              >
                {{ t.billingMonthly }}
              </button>
              <button
                class="billing-btn"
                :class="{ active: billingPeriod === 'yearly' }"
                @click="billingPeriod = 'yearly'"
              >
                {{ t.billingYearly }}
              </button>
            </div>
          </div>
          <div class="plan-price-wrap">
            <div class="plan-price" v-if="billingPeriod === 'monthly'">
              <span class="currency">¥</span>
              <span class="amount">{{ pricing.team.monthly }}</span>
              <span class="period">/{{ t.period }}</span>
            </div>
            <div class="plan-price yearly" v-else>
              <span class="price-original">
                <span class="currency">¥</span>{{ pricing.team.monthly * 12 }}.00
              </span>
              <span class="price-actual">
                <span class="currency">¥</span>
                <span class="amount">{{ Math.round(pricing.team.monthly * 12 * pricing.team.yearlyDiscount) }}</span>
                <span class="period">/{{ t.periodYear }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="card-features">
          <ul class="feature-list">
            <li v-for="(feature, index) in t.plans.team.features" :key="index" class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <a :href="t.plans.team.link" class="btn btn-white">{{ t.cta.team }}</a>
        </div>
      </div>
    </div>

    <!-- 技术支持服务 -->
    <div class="consulting-card">
      <div class="consulting-content">
        <div class="consulting-left">
          <div class="consulting-price">
            <span class="currency">¥</span>
            <span class="amount">799</span>
            <span class="period">/{{ t.consulting.unit }}</span>
          </div>
          <a :href="t.consulting.link" class="btn btn-consulting">{{ t.cta.consulting }}</a>
        </div>
        <div class="consulting-right">
          <h3 class="consulting-title">{{ t.consulting.title }}</h3>
          <p class="consulting-desc">{{ t.consulting.desc }}</p>
          <ul class="consulting-features">
            <li v-for="(item, index) in t.consulting.features" :key="index">
              <span class="dot"></span>
              {{ item }}
            </li>
          </ul>
          <p class="consulting-contact">
            {{ t.consulting.contact }}: 
            <a :href="'mailto:' + t.consulting.email">{{ t.consulting.email }}</a>
          </p>
        </div>
      </div>
    </div>

    <!-- 功能对比表 -->
    <div class="comparison-table-wrapper">
      <h3 class="comparison-title">{{ t.comparisonTitle }}</h3>
      <div class="comparison-table">
        <div class="table-header">
          <div class="table-cell feature-name">{{ t.table.feature }}</div>
          <div class="table-cell plan-name">{{ t.plans.free.name }}</div>
          <div class="table-cell plan-name">{{ t.plans.pro.name }}</div>
          <div class="table-cell plan-name">{{ t.plans.team.name }}</div>
        </div>
        <template v-for="(category, catIndex) in t.table.categories" :key="catIndex">
          <div class="table-row table-row-category">
            <div class="table-cell category-title">{{ category.title }}</div>
          </div>
          <div v-for="(row, rowIndex) in category.rows" :key="`${catIndex}-${rowIndex}`" class="table-row">
            <div class="table-cell feature-name">{{ row.name }}</div>
            <div class="table-cell" :class="{ 'has-feature': row.free }">
              <span v-if="row.free === true" class="check">✓</span>
              <span v-else-if="row.free === false" class="cross">—</span>
              <span v-else>{{ row.free }}</span>
            </div>
            <div class="table-cell" :class="{ 'has-feature': row.pro }">
              <span v-if="row.pro === true" class="check">✓</span>
              <span v-else-if="row.pro === false" class="cross">—</span>
              <span v-else>{{ row.pro }}</span>
            </div>
            <div class="table-cell" :class="{ 'has-feature': row.team }">
              <span v-if="row.team === true" class="check">✓</span>
              <span v-else-if="row.team === false" class="cross">—</span>
              <span v-else>{{ row.team }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

// 订阅周期: monthly | yearly
const billingPeriod = ref<'monthly' | 'yearly'>('yearly');

// 价格配置: 月价、年付折扣(8折=0.8)
const pricing = {
  pro: { monthly: 10, yearlyDiscount: 0.8 },
  team: { monthly: 30, yearlyDiscount: 0.8 }
};

const content = {
  zh: {
    title: 'OpenMCP，让MCP开发更高效',
    subtitle: '从个人开发者到专业团队，我们都有适合你的选择',
    period: '月',
    periodYear: '年',
    billingMonthly: '按月订购',
    billingYearly: '按年订购',
    yearlyDiscount: '限时8折',
    badge: '最受欢迎',
    plans: {
      free: {
        name: '免费版',
        desc: '适合个人开发者',
        features: [
          '本地 MCP Server 开发',
          'VSCode 插件基础功能',
          '本地测试用例管理',
          '社区支持'
        ],
        limits: ['无云备份', '无团队协作'],
        link: '/zh/guide/'
      },
      pro: {
        name: '专业版',
        desc: '适合小型团队',
        features: [
          '云端项目 8 个',
          '云备份每项目 100 个测试用例',
          '版本历史 30 天',
          '团队协作最多 3 人',
          '优先邮件支持'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: '商务版',
        desc: '适合企业团队',
        features: [
          '云端项目 50 个',
          '云备份每项目 1000 个测试用例',
          '版本历史 1 年',
          '团队协作最多 20 人',
          '优先技术支持'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: '免费开始使用',
      pro: '升级到 Pro',
      team: '升级到商务版',
      consulting: '预约咨询'
    },
    consulting: {
      title: '专家技术支持',
      desc: '一对一深度咨询服务，由 OpenMCP 核心开发者提供',
      unit: '次',
      features: [
        '架构设计与代码审查',
        'MCP Server 性能优化',
        '疑难问题排查',
        '最佳实践指导',
        '定制化开发建议'
      ],
      contact: '联系邮箱',
      email: 'zhelonghuang@qq.com',
      link: 'mailto:zhelonghuang@qq.com'
    },
    comparisonTitle: '功能对比',
    table: {
      feature: '功能',
      categories: [
        {
          title: '开发支持',
          rows: [
            { name: '本地开发', free: '无限', pro: '无限', team: '无限' }
          ]
        },
        {
          title: '云服务能力',
          rows: [
            { name: '云端项目', free: false, pro: '8个', team: '50个' },
            { name: '云备份测试用例/项目', free: false, pro: '100个', team: '1000个' },
            { name: '版本历史', free: false, pro: '30天', team: '1年' }
          ]
        },
        {
          title: '协作与支持',
          rows: [
            { name: '团队成员', free: '1人', pro: '3人', team: '20人' },
            { name: '技术支持', free: '社区', pro: '邮件优先', team: '在线客服' }
          ]
        }
      ]
    }
  },
  en: {
    title: 'OpenMCP, Making MCP Development More Efficient',
    subtitle: 'From individual developers to professional teams, we have the right plan for you',
    period: 'mo',
    periodYear: 'yr',
    billingMonthly: 'Monthly',
    billingYearly: 'Yearly',
    yearlyDiscount: '20% Off',
    badge: 'Most Popular',
    plans: {
      free: {
        name: 'Free',
        desc: 'For individual developers',
        features: [
          'Local MCP Server development',
          'Basic VSCode plugin features',
          'Local test case management',
          'Community support'
        ],
        limits: ['No cloud backup', 'No team collaboration'],
        link: '/guide/'
      },
      pro: {
        name: 'Pro',
        desc: 'For small teams',
        features: [
          '8 cloud projects',
          'Cloud backup 100 test cases per project',
          '30-day version history',
          'Team collaboration up to 3',
          'Priority email support'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: 'Business',
        desc: 'For enterprise teams',
        features: [
          '50 cloud projects',
          'Cloud backup 1000 test cases per project',
          '1-year version history',
          'Team collaboration up to 20',
          'Priority technical support'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: 'Get Started Free',
      pro: 'Upgrade to Pro',
      team: 'Upgrade to Business',
      consulting: 'Book Consultation'
    },
    consulting: {
      title: 'Expert Technical Support',
      desc: 'One-on-one in-depth consulting provided by OpenMCP core developers',
      unit: 'session',
      features: [
        'Architecture design & code review',
        'MCP Server performance optimization',
        'Troubleshooting complex issues',
        'Best practices guidance',
        'Custom development advice'
      ],
      contact: 'Contact',
      email: 'zhelonghuang@qq.com',
      link: 'mailto:zhelonghuang@qq.com'
    },
    comparisonTitle: 'Feature Comparison',
    table: {
      feature: 'Feature',
      categories: [
        {
          title: 'Development',
          rows: [
            { name: 'Local Development', free: 'Unlimited', pro: 'Unlimited', team: 'Unlimited' }
          ]
        },
        {
          title: 'Cloud Services',
          rows: [
            { name: 'Cloud Projects', free: false, pro: '8', team: '50' },
            { name: 'Cloud Backup /project', free: false, pro: '100 cases', team: '1000 cases' },
            { name: 'Version History', free: false, pro: '30 days', team: '1 year' }
          ]
        },
        {
          title: 'Collaboration & Support',
          rows: [
            { name: 'Team Members', free: '1', pro: '3', team: '20' },
            { name: 'Support', free: 'Community', pro: 'Email', team: 'Priority' }
          ]
        }
      ]
    }
  },
  ja: {
    title: 'OpenMCP、MCP開発をより効率的に',
    subtitle: '個人開発者からプロフェッショナルチームまで、あなたに最適なプランをご用意',
    period: '月',
    periodYear: '年',
    billingMonthly: '月額',
    billingYearly: '年額',
    yearlyDiscount: '20%OFF',
    badge: '人気No.1',
    plans: {
      free: {
        name: '無料版',
        desc: '個人開発者向け',
        features: [
          'ローカル MCP Server 開発',
          'VSCode プラグイン基本機能',
          'ローカルテストケース管理',
          'コミュニティサポート'
        ],
        limits: ['クラウドバックアップなし', 'チーム協力なし'],
        link: '/ja/guide/'
      },
      pro: {
        name: 'Pro',
        desc: '小規模チーム向け',
        features: [
          'クラウドプロジェクト 8個',
          'クラウドバックアップ プロジェクトあたり100件',
          'バージョン履歴 30日間',
          'チーム協力 最大3人',
          '優先メールサポート'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: 'Business',
        desc: 'エンタープライズチーム向け',
        features: [
          'クラウドプロジェクト 50個',
          'クラウドバックアップ プロジェクトあたり1000件',
          'バージョン履歴 1年間',
          'チーム協力 最大20人',
          '優先技術サポート'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: '無料で開始',
      pro: 'Pro にアップグレード',
      team: 'Business にアップグレード',
      consulting: '相談を予約'
    },
    consulting: {
      title: 'エキスパート技術サポート',
      desc: 'OpenMCP コア開発者による一对一の詳細コンサルティング',
      unit: '回',
      features: [
        'アーキテクチャ設計・コードレビュー',
        'MCP Server パフォーマンス最適化',
        '複雑な問題のトラブルシューティング',
        'ベストプラクティスガイダンス',
        'カスタム開発アドバイス'
      ],
      contact: '連絡先',
      email: 'zhelonghuang@qq.com',
      link: 'mailto:zhelonghuang@qq.com'
    },
    comparisonTitle: '機能比較',
    table: {
      feature: '機能',
      categories: [
        {
          title: '開発サポート',
          rows: [
            { name: 'ローカル開発', free: '無制限', pro: '無制限', team: '無制限' }
          ]
        },
        {
          title: 'クラウドサービス',
          rows: [
            { name: 'クラウドプロジェクト', free: false, pro: '8個', team: '50個' },
            { name: 'クラウドバックアップ/プロジェクト', free: false, pro: '100件', team: '1000件' },
            { name: 'バージョン履歴', free: false, pro: '30日', team: '1年間' }
          ]
        },
        {
          title: '協力・サポート',
          rows: [
            { name: 'チームメンバー', free: '1人', pro: '3人', team: '20人' },
            { name: 'サポート', free: 'コミュニティ', pro: 'メール優先', team: '優先対応' }
          ]
        }
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
</script>

<style scoped>
.pricing-section {
  position: relative;
  padding: 6rem 2rem;
  background: #0a0a0f;
  color: #fff;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.pricing-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.3;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%);
  bottom: -50px;
  right: -50px;
}

/* Header */
.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 3rem;
  position: relative;
  z-index: 1;
}

.pricing-title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pricing-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
}

/* 卡片内月/年订阅切换 */
.card-billing-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.card-billing-toggle-spacer {
  min-height: 2.5rem;
}

.billing-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 4px;
  position: relative;
}

.billing-discount-badge {
  position: absolute;
  top: -8px;
  right: -6px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  white-space: nowrap;
}

.billing-btn {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.billing-btn:hover {
  color: rgba(255, 255, 255, 0.9);
}

.billing-btn.active {
  background: rgba(99, 102, 241, 0.4);
  color: #fff;
}

/* 价格区域固定高度，防止切换时抖动 */
.plan-price-wrap {
  min-height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 年付价格：原价划线 + 实际价 */
.plan-price.yearly {
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.price-original {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: line-through;
}

.price-actual {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25rem;
}

.price-actual .amount {
  font-size: 3.5rem;
}

.price-actual .period {
  margin-bottom: 0.5rem;
}

/* Pricing Cards */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  position: relative;
  z-index: 1;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
}

.pricing-card.featured {
  background: rgba(99, 102, 241, 0.08);
  border: 2px solid rgba(99, 102, 241, 0.5);
  transform: scale(1.02);
}

.pricing-card.featured:hover {
  transform: scale(1.02) translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.3);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.375rem 1rem;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 1rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}

.plan-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
}

.plan-price {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25rem;
}

.plan-price .currency {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.plan-price .amount {
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}

.plan-price .period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
}

.card-features {
  flex: 1;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.feature-item.disabled {
  color: rgba(255, 255, 255, 0.4);
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #6366f1;
  flex-shrink: 0;
}

.cross-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.feature-item.disabled .cross-icon {
  color: rgba(255, 255, 255, 0.2);
}

/* Buttons */
.btn {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
}

.btn-white {
  background: #fff;
  color: #0a0a0f;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(255, 255, 255, 0.2);
}

/* Consulting Card */
.consulting-card {
  max-width: 900px;
  margin: 0 auto 4rem;
  background: rgba(10, 10, 15, 0.8);
  border: 2px solid transparent;
  border-radius: 24px;
  padding: 3px;
  position: relative;
  z-index: 1;
  background-clip: padding-box;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
}

.consulting-content {
  display: flex;
  background: rgba(15, 15, 20, 0.95);
  border-radius: 22px;
  overflow: hidden;
}

.consulting-left {
  width: 35%;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  gap: 1.5rem;
}

.consulting-price {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25rem;
}

.consulting-price .currency {
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
}

.consulting-price .amount {
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.consulting-price .period {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
}

.btn-consulting {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  color: #ffffff !important;
  width: auto;
  padding: 0.875rem 2rem;
  -webkit-text-fill-color: #ffffff !important;
  text-decoration: none !important;
  display: inline-block;
}

.btn-consulting:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

.consulting-right {
  flex: 1;
  padding: 3rem;
}

.consulting-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #fff;
}

.consulting-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
}

.consulting-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.consulting-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: #6366f1;
  border-radius: 50%;
  flex-shrink: 0;
}

.consulting-contact {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.consulting-contact a {
  color: #a5b4fc;
  text-decoration: none;
}

.consulting-contact a:hover {
  text-decoration: underline;
}

/* Comparison Table */
.comparison-table-wrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.comparison-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fff;
}

.comparison-table {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
}

.table-header {
  background: rgba(99, 102, 241, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.table-row:last-child {
  border-bottom: none;
}

/* 分类标题行 */
.table-row-category {
  grid-template-columns: 1fr;
}

.table-row-category .table-cell {
  grid-column: 1 / -1;
  padding: 0.875rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #a5b4fc;
  background: rgba(99, 102, 241, 0.12);
  border-bottom: 1px solid rgba(99, 102, 241, 0.25);
}

.table-row-category .category-title {
  text-align: left;
}

.table-cell {
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
  text-align: center;
}

.table-cell.feature-name {
  text-align: left;
  color: rgba(255, 255, 255, 0.9);
}

.table-cell.plan-name {
  font-weight: 600;
  color: #fff;
}

.table-cell.has-feature .check {
  color: #6366f1;
  font-weight: 700;
  font-size: 1.25rem;
}

.table-cell .cross {
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .pricing-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
  }

  .pricing-card.featured {
    transform: none;
    order: -1;
  }

  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }

  .consulting-content {
    flex-direction: column;
  }

  .consulting-left {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
  }

  .consulting-right {
    padding: 2rem;
  }

  .consulting-features {
    grid-template-columns: 1fr;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }

  .table-cell {
    padding: 0.875rem 1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  .pricing-section {
    padding: 4rem 1rem;
  }

  .pricing-title {
    font-size: 2rem;
  }

  .comparison-table {
    overflow-x: auto;
  }

  .table-header,
  .table-row {
    min-width: 500px;
  }
}
</style>
