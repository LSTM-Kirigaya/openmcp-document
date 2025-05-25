// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import HeroImage from './openmcp-hero-image.vue';

import './style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			'home-hero-image': () => h(HeroImage)
		})
	},
	enhanceApp({ app, router, siteData }) {
		// ...
	}
} satisfies Theme
