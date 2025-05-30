// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import CustomLayout from './Layout.vue';

import TwoSideLayout from './components/home/TwoSideLayout.vue';
import KTab from './components/KTab/index.vue';
import BiliPlayer from './components/bilibli-player/index.vue';
import KNavItem from './components/nav-item/index.vue';
import Contributors from './components/Contributors/index.vue';

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';

import { ElCollapse, ElCollapseItem, ElTimeline, ElTimelineItem } from 'element-plus';

import './css/style.css';
import './css/iconfont.css';
import './css/element-plus.css';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(CustomLayout)
	},
	enhanceApp({ app, router, siteData }) {
		app.component('TwoSideLayout', TwoSideLayout);
		app.component('KTab', KTab);
		app.component('BiliPlayer', BiliPlayer);
		app.component('KNavItem', KNavItem);
		app.component('Contributors', Contributors);

		app.component('el-collapse', ElCollapse);
		app.component('el-collapse-item', ElCollapseItem);
		app.component('el-timeline', ElTimeline);
		app.component('el-timeline-item', ElTimelineItem);

		app.use(NolebaseGitChangelogPlugin);
		app.use(NolebaseInlineLinkPreviewPlugin);
	}
} satisfies Theme
