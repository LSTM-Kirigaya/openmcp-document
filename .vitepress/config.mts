import lightbox from "vitepress-plugin-lightbox";

import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img';

import { contributors } from './contributors';
import { withMermaid } from "vitepress-plugin-mermaid";
import { customIcons } from './theme/hook/icons';

export const baseUrl = '/openmcp';

export default withMermaid({
	title: "OpenMCP",
	description: "为开发者和科研人员准备的MCP开发环境和SDK",
	base: baseUrl,
	ignoreDeadLinks: true,

	sitemap: {
		hostname: 'https://kirigaya.cn/' + baseUrl
	},

	vite: {
		plugins: [
			GitChangelog({
				// 填写在此处填写您的仓库链接
				repoURL: () => 'https://gitea.3geeks.top/kirigaya/openmcp-document',
				mapAuthors: contributors
			}),
			GitChangelogMarkdownSection({
				excludes: ['preview/contributors.md', 'index.md']
			}),
			ThumbnailHashImages(),
		],
		optimizeDeps: {
			include: [
				'mermaid'
			],
			exclude: [
				'@nolebase/vitepress-plugin-inline-link-preview/client',
			],
		},
		ssr: {
			noExternal: [
				// 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
				'@nolebase/vitepress-plugin-inline-link-preview',
				'@unlazy/vue'
			],
		},
	},

	markdown: {
		config: (md) => {
			md.use(lightbox);
			md.use(InlineLinkPreviewElementTransform);
			md.use(BiDirectionalLinks());
			md.use(UnlazyImages(), { 
				imgElementTag: 'NolebaseUnlazyImg', 
			});
		}
	},

	head: [
		['link', { rel: 'icon', href: baseUrl + '/images/favicon.png' }]
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '教程',
				items: [
					{
						component: 'KNavItem',
						props: {
							title: '简介',
							description: '关于 mcp 和 openmcp，阁下需要知道的 ...',
							icon: 'openmcp',
							link: '/plugin-tutorial/'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: '快速开始',
							description: '通过一个例子快速了解 OpenMCP 的基本概念',
							icon: 'quick-fill',
							link: '/plugin-tutorial/quick-start/'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'OpenMCP 使用手册',
							description: 'OpenMCP Client 的基本使用',
							icon: 'shiyongshouce',
							link: '/plugin-tutorial/usage/connect-mcp'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'MCP 服务器开发案例',
							description: '使用不同语言开发的不同模式的 MCP 服务器',
							icon: 'yibangonggongyusuan',
							link: '/plugin-tutorial/examples/mcp-examples'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'FAQ',
							description: '为您答疑解惑，排忧解难',
							icon: 'yijianchuli',
							link: '/plugin-tutorial/faq/help'
						}
					},
				]
			},
			{ text: 'SDK', link: '/sdk-tutorial' },
			{
				text: '更多',
				items: [
					{
						component: 'KNavItem',
						props: {
							title: '更新日志',
							description: '查看项目的更新历史记录',
							icon: 'a-yusuan2',
							link: '/preview/changelog'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: '参与 OpenMCP',
							description: '了解如何参与 OpenMCP 项目的开发和维护',
							icon: 'shujuzhongxin',
							link: '/preview/join'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'OpenMCP 贡献者列表',
							description: '关于参与 OpenMCP 的贡献者们',
							icon: 'heike',
							link: '/preview/contributors'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: '资源频道',
							description: '获取项目相关的资源和信息',
							icon: 'xinxiang',
							link: '/preview/channel'
						}
					}
				]
			},
		],

		sidebar: {
			'/plugin-tutorial/': [
				{
					text: '简介',
					items: [
						{ text: 'OpenMCP 概述', link: '/plugin-tutorial/index' },
						{ text: '什么是 MCP？', link: '/plugin-tutorial/what-is-mcp' },
						{ text: 'MCP 基础概念', link: '/plugin-tutorial/concept' }
					]
				},
				{
					text: '快速开始',
					items: [
						{ text: '快速开始', link: '/plugin-tutorial/quick-start' },
						{ text: '安装 OpenMCP', link: '/plugin-tutorial/quick-start/acquire-openmcp' },
						{ text: '你的第一个 MCP', link: '/plugin-tutorial/quick-start/first-mcp' },
						{ text: '快速调试 MCP', link: '/plugin-tutorial/quick-start/quick-debug' },
						{ text: '扔进大模型里面测测好坏！', link: '/plugin-tutorial/quick-start/put-into-llm' },
					]
				},
				{
					text: "OpenMCP 使用手册",
					items: [
						{ text: '连接 mcp 服务器', link: '/plugin-tutorial/usage/connect-mcp' },
						{ text: '调试 tools, resources 和 prompts', link: '/plugin-tutorial/usage/debug' },
						{ text: '连接大模型', link: '/plugin-tutorial/usage/connect-llm' },
						{ text: '用大模型测试您的 mcp', link: '/plugin-tutorial/usage/test-with-llm' },
						{ text: '连接多个 MCP 服务器', link: '/plugin-tutorial/usage/multi-server' },
						{ text: '分发您的实验结果', link: '/plugin-tutorial/usage/distribute-result' },
						{ text: 'SSE 在线部署的鉴权器实现', link: '/plugin-tutorial/usage/sse-oauth2' },
					]
				},
				{
					text: "MCP 服务器开发案例",
					items: [
						{ text: 'MCP 服务器开发案例', link: '/plugin-tutorial/examples/mcp-examples' },
						{ text: '例子 1. python 实现天气信息 mcp 服务器 (STDIO)', link: '/plugin-tutorial/examples/python-simple-stdio' },
						{ text: '例子 2. go 实现 neo4j 的只读 mcp 服务器 (SSE)', link: '/plugin-tutorial/examples/go-neo4j-sse' },
						{ text: '例子 3. java 实现文档数据库的只读 mcp (HTTP)', link: '/plugin-tutorial/examples/java-es-http' },
						{ text: '例子 4. typescript 实现基于 crawl4ai 的超级网页爬虫 mcp (STDIO)', link: '/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
						{ text: '例子 5. python 实现进行通用表单填充 的 mcp (STDIO)', link: '/plugin-tutorial/examples/python-form-stdio' },
						{ text: '例子 6. python 实现基于 blender 的 mcp (STDIO)', link: '/plugin-tutorial/examples/python-blender-stdio' },
						{ text: '例子 7. python 实现 cadence EDA 的 mcp (STDIO)', link: '/plugin-tutorial/examples/python-cadence-stdio' },
					]
				},
				{
					text: 'FAQ',
					items: [
						{ text: '帮助', link: '/plugin-tutorial/faq/help' },
					]
				}
			],

			'/sdk-tutorial/': [
				{
					text: '简介',
					items: [
						{ text: 'openmcp-sdk.js', link: '/sdk-tutorial/' },
					]
				},
				{
					text: '基本使用',
					items: [
						{ text: '最简单的对话', link: '/sdk-tutorial/usage/greet' },
						{ text: '任务循环', link: '/sdk-tutorial/usage/task-loop' },
						{ text: '多服务器连接', link: '/sdk-tutorial/usage/multi-server' },
					]
				}
			]
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/LSTM-Kirigaya/openmcp-client' },
			{ icon: customIcons.share, link: 'https://kirigaya.cn/home' },
		],

		footer: {
			message: '缩短LLM到Agent的最后一公里',
			copyright: 'OpenMCP All rights reserved'
		},

		// 左上角的 logo
		logo: '/images/openmcp.png',
	}
})
