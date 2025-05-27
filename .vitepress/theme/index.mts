// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import CustomLayout from './Layout.vue';

import HeroImage from './components/home/HeroImage.vue';
import TwoSideLayout from './components/home/TwoSideLayout.vue';
import KTab from './components/KTab/index.vue';
import BiliPlayer from './components/bilibli-player/index.vue';
import KNavItem from './components/nav-item/index.vue';

import './style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(CustomLayout, null, {
			'home-hero-image': () => h(HeroImage)
		})
	},
	enhanceApp({ app, router, siteData }) {
		app.component('TwoSideLayout', TwoSideLayout);
		app.component('KTab', KTab);
		app.component('BiliPlayer', BiliPlayer);
		app.component('KNavItem', KNavItem);
	}
} satisfies Theme
