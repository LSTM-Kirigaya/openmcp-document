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
          <div class="plan-price">
            <span class="currency">¥</span>
            <span class="amount">0</span>
            <span class="period">/{{ t.period }}</span>
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
          <div class="plan-price">
            <span class="currency">¥</span>
            <span class="amount">10</span>
            <span class="period">/{{ t.period }}</span>
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
          <div class="plan-price">
            <span class="currency">¥</span>
            <span class="amount">20</span>
            <span class="period">/{{ t.period }}</span>
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
        <div v-for="(row, index) in t.table.rows" :key="index" class="table-row">
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

const content = {
  zh: {
    title: '选择适合你的方案',
    subtitle: '从个人开发者到专业团队，我们都有适合你的选择',
    period: '月',
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
          '云备份 50 个测试用例',
          '版本历史 30 天',
          '团队协作最多 3 人',
          '云端部署 1 个实例',
          '每月 1000 次 API 调用',
          '优先邮件支持'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: '团队版',
        desc: '适合专业团队',
        features: [
          '云备份无限测试用例',
          '版本历史永久保留',
          '团队协作最多 10 人',
          '云端部署 5 个实例',
          '每月 10000 次 API 调用',
          '优先技术支持'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: '免费开始使用',
      pro: '升级到 Pro',
      team: '升级到 Team',
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
      email: 'kirigaya@openmcp.cn',
      link: 'mailto:kirigaya@openmcp.cn'
    },
    comparisonTitle: '功能对比',
    table: {
      feature: '功能',
      rows: [
        { name: '本地开发', free: '无限', pro: '无限', team: '无限' },
        { name: '云备份测试用例', free: false, pro: '50个', team: '无限' },
        { name: '版本历史', free: false, pro: '30天', team: '永久' },
        { name: '团队成员', free: '1人', pro: '3人', team: '10人' },
        { name: '云端部署实例', free: false, pro: '1个', team: '5个' },
        { name: 'API 调用额度', free: false, pro: '1000次/月', team: '10000次/月' },
        { name: '技术支持', free: '社区', pro: '邮件优先', team: '在线客服' }
      ]
    }
  },
  en: {
    title: 'Choose Your Plan',
    subtitle: 'From individual developers to professional teams, we have the right plan for you',
    period: 'mo',
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
          'Cloud backup 50 test cases',
          '30-day version history',
          'Team collaboration up to 3',
          '1 cloud deployment instance',
          '1000 API calls per month',
          'Priority email support'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: 'Team',
        desc: 'For professional teams',
        features: [
          'Unlimited cloud backup',
          'Permanent version history',
          'Team collaboration up to 10',
          '5 cloud deployment instances',
          '10000 API calls per month',
          'Priority technical support'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: 'Get Started Free',
      pro: 'Upgrade to Pro',
      team: 'Upgrade to Team',
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
      email: 'kirigaya@openmcp.cn',
      link: 'mailto:kirigaya@openmcp.cn'
    },
    comparisonTitle: 'Feature Comparison',
    table: {
      feature: 'Feature',
      rows: [
        { name: 'Local Development', free: 'Unlimited', pro: 'Unlimited', team: 'Unlimited' },
        { name: 'Cloud Backup', free: false, pro: '50 cases', team: 'Unlimited' },
        { name: 'Version History', free: false, pro: '30 days', team: 'Permanent' },
        { name: 'Team Members', free: '1', pro: '3', team: '10' },
        { name: 'Cloud Instances', free: false, pro: '1', team: '5' },
        { name: 'API Calls', free: false, pro: '1000/mo', team: '10000/mo' },
        { name: 'Support', free: 'Community', pro: 'Email', team: 'Priority' }
      ]
    }
  },
  ja: {
    title: 'プランを選択',
    subtitle: '個人開発者からプロフェッショナルチームまで、あなたに最適なプランをご用意',
    period: '月',
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
          'クラウドバックアップ 50件',
          'バージョン履歴 30日間',
          'チーム協力 最大3人',
          'クラウドデプロイ 1インスタンス',
          '月1000回 API コール',
          '優先メールサポート'
        ],
        link: '#upgrade-pro'
      },
      team: {
        name: 'Team',
        desc: 'プロフェッショナルチーム向け',
        features: [
          '無制限クラウドバックアップ',
          '永久バージョン履歴',
          'チーム協力 最大10人',
          'クラウドデプロイ 5インスタンス',
          '月10000回 API コール',
          '優先技術サポート'
        ],
        link: '#upgrade-team'
      }
    },
    cta: {
      free: '無料で開始',
      pro: 'Pro にアップグレード',
      team: 'Team にアップグレード',
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
      email: 'kirigaya@openmcp.cn',
      link: 'mailto:kirigaya@openmcp.cn'
    },
    comparisonTitle: '機能比較',
    table: {
      feature: '機能',
      rows: [
        { name: 'ローカル開発', free: '無制限', pro: '無制限', team: '無制限' },
        { name: 'クラウドバックアップ', free: false, pro: '50件', team: '無制限' },
        { name: 'バージョン履歴', free: false, pro: '30日', team: '永久' },
        { name: 'チームメンバー', free: '1人', pro: '3人', team: '10人' },
        { name: 'クラウドインスタンス', free: false, pro: '1個', team: '5個' },
        { name: 'API コール', free: false, pro: '1000回/月', team: '10000回/月' },
        { name: 'サポート', free: 'コミュニティ', pro: 'メール優先', team: '優先対応' }
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
