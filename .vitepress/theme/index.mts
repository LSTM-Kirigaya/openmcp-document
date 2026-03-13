// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import { inBrowser } from 'vitepress';
import busuanzi from 'busuanzi.pure.js';
import DefaultTheme from 'vitepress/theme';

import CustomLayout from './Layout.vue';

import TwoSideLayout from './components/home/TwoSideLayout.vue';
import NewHomeHero from './components/home/NewHomeHero.vue';
import FeatureShowcase from './components/home/FeatureShowcase.vue';
import ChatFAQ from './components/home/ChatFAQ.vue';
import HomeFooter from './components/home/HomeFooter.vue';
import Pricing from './components/home/Pricing.vue';
import PricingPage from './components/home/PricingPage.vue';
import SectionHeader from './components/home/SectionHeader.vue';
import AudienceSection from './components/home/AudienceSection.vue';
import TemplatesSection from './components/home/TemplatesSection.vue';
import BlogPage from './components/home/BlogPage.vue';
import NavBar from './components/NavBar.vue';
import KTab from './components/KTab/index.vue';
import BiliPlayer from './components/bilibli-player/index.vue';
import KNavItem from './components/nav-item/index.vue';
import Contributors from './components/Contributors/index.vue';

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';
import { NolebaseUnlazyImg } from '@nolebase/vitepress-plugin-thumbnail-hash/client';
// import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties';

import { ElCollapse, ElCollapseItem, ElTimeline, ElTimelineItem } from 'element-plus';

import './css/style.css';
import './css/iconfont.css';
import './css/element-plus.css';
import './css/animation.css';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import '@nolebase/vitepress-plugin-thumbnail-hash/client/style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(CustomLayout)
	},
	enhanceApp({ app, router, siteData }) {
		app.component('TwoSideLayout', TwoSideLayout);
		app.component('NewHomeHero', NewHomeHero);
		app.component('FeatureShowcase', FeatureShowcase);
		app.component('ChatFAQ', ChatFAQ);
		app.component('HomeFooter', HomeFooter);
		app.component('Pricing', Pricing);
		app.component('PricingPage', PricingPage);
		app.component('SectionHeader', SectionHeader);
		app.component('AudienceSection', AudienceSection);
		app.component('TemplatesSection', TemplatesSection);
		app.component('BlogPage', BlogPage);
		app.component('NavBar', NavBar);
		app.component('KTab', KTab);
		app.component('BiliPlayer', BiliPlayer);
		app.component('KNavItem', KNavItem);
		app.component('Contributors', Contributors);
		app.component('NolebaseUnlazyImg', NolebaseUnlazyImg);

		app.component('el-collapse', ElCollapse);
		app.component('el-collapse-item', ElCollapseItem);
		app.component('el-timeline', ElTimeline);
		app.component('el-timeline-item', ElTimelineItem);

		app.use(NolebaseGitChangelogPlugin);
		app.use(NolebaseInlineLinkPreviewPlugin);

		// 添加浏览量统计
		if (inBrowser) {
			router.onAfterRouteChange = () => {
				busuanzi.fetch()
			}

			// 滚动条自动淡入淡出
			let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
			const html = document.documentElement;
			
			const showScrollbar = () => {
				html.classList.remove('scrollbar-hidden');
			};
			
			const hideScrollbar = () => {
				html.classList.add('scrollbar-hidden');
			};
			
			// 初始状态：隐藏滚动条
			hideScrollbar();
			
			// 监听滚动事件
			window.addEventListener('scroll', () => {
				showScrollbar();
				
				// 清除之前的定时器
				if (scrollTimeout) {
					clearTimeout(scrollTimeout);
				}
				
				// 停止滚动 2 秒后隐藏滚动条
				scrollTimeout = setTimeout(() => {
					hideScrollbar();
				}, 2000);
			}, { passive: true });
			
			// 鼠标进入页面时显示滚动条
			document.addEventListener('mouseenter', () => {
				showScrollbar();
			});
			
			// 鼠标离开页面时隐藏滚动条
			document.addEventListener('mouseleave', () => {
				hideScrollbar();
			});
		}
	}
} satisfies Theme
