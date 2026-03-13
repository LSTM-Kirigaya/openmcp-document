---
layout: doc
---

<NewHomeHero />

<div class="home-wrapper">

<!-- Feature Showcase Section - 功能特性展示 (设计图3风格) -->
<FeatureShowcase />

<!-- Audience Section - 目标用户 -->
<AudienceSection />

<!-- Templates Section - 模板展示 -->
<TemplatesSection />

<!-- Pricing Section - 定价 -->
<Pricing />

<!-- FAQ Section - 对话式问答 -->
<ChatFAQ />

<!-- Footer -->
<HomeFooter />

</div>

<script setup>
// No script needed for new FAQ component
</script>

<style>
/* 强制内容容器全宽 */
.VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.VPDoc .content {
  max-width: 100% !important;
}

.VPDoc.has-aside .aside {
  display: none !important;
}

/* 首页包装器 - 深色背景 */
.home-wrapper {
  position: relative;
  z-index: 1;
  background: #0a0a0f;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 0;
}



/* Audience Section */
.audience-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.audience-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.audience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.audience-card:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.audience-card:hover::before {
  opacity: 1;
}

.audience-icon {
  width: 48px;
  height: 48px;
  color: #6366f1;
  margin-bottom: 1.25rem;
}

.audience-card h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.875rem;
}

.audience-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.audience-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.audience-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.625rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9375rem;
}

.audience-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 6px;
  background: #6366f1;
  border-radius: 50%;
}

/* Templates Section */
.templates-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

/* Template Action Buttons */
.templates-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.template-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.template-btn .btn-icon {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.15);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: translateY(-1px);
}

/* Templates Grid - 2 columns x 3 rows */
.templates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Example Cards */
.example-card {
  display: block;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.example-header {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.example-icon {
  width: 48px;
  height: 48px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.example-card:hover .example-icon {
  filter: grayscale(0);
  transform: scale(1.15);
}

.example-content {
  padding: 1.5rem;
}

.example-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.625rem;
}

.example-content p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.example-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.example-card:hover .example-link {
  color: #6366f1;
  gap: 0.625rem;
}

.arrow-icon {
  width: 14px;
  height: 14px;
}

/* Responsive */
@media (max-width: 1024px) {
  .audience-grid,
  .templates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .example-header {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .audience-grid,
  .templates-grid {
    grid-template-columns: 1fr;
  }
  
  .audience-card,
  .example-card {
    padding: 0;
  }
  
  .example-content {
    padding: 1.25rem;
  }
  
  .templates-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .template-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
