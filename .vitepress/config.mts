import { defineConfig } from 'vitepress';

export const customIcons = {
	share: {
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>'
	}
}

export default defineConfig({
	title: "OpenMCP",
	description: "为开发者和科研人员准备的MCP开发环境和SDK",
	head: [
		['link', { rel: 'icon', href: '/images/favicon.png' }]
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
							icon: 'a-yusuan2',
							link: '/plugin-tutorial/index'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'OpenMCP 使用手册',
							description: 'OpenMCP Client 的基本使用',
							icon: 'a-yusuan2',
							link: '/plugin-tutorial/usage/connect-mcp'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'MCP 服务器开发案例',
							description: '使用不同语言开发的不同模式的 MCP 服务器',
							icon: 'a-yusuan2',
							link: '/plugin-tutorial/examples/python-simple-stdio'
						}
					},
					{
						component: 'KNavItem',
						props: {
							title: 'FAQ',
							description: '为您答疑解惑，排忧解难',
							icon: 'a-yusuan2',
							link: '/plugin-tutorial/faq/help'
						}
					},
				]	
			},
			{ text: 'SDK', link: '/sdk-tutorial' },
			{
				text: 'Prewiew 0.1.0',
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
						{ text: '获取 OpenMCP', link: '/plugin-tutorial/acquire-openmcp' },
						{ text: 'MCP 基础概念', link: '/plugin-tutorial/concept' }
					]
				},
				{
					text: "OpenMCP 使用手册",
					items: [
						{ text: '连接 mcp 服务器', link: '/plugin-tutorial/usage/connect-mcp' },
						{ text: '调试 tools, resources 和 prompts', link: '/plugin-tutorial/usage/debug' },
						{ text: '连接大模型', link: '/plugin-tutorial/usage/connect-llm' },
						{ text: '用大模型测试您的 mcp', link: '/plugin-tutorial/usage/test-with-llm' },
						{ text: '分发您的实验结果', link: '/plugin-tutorial/usage/distribute-result' },
					]
				},
				{
					text: "MCP 服务器开发案例",
					items: [
						{ text: '例子 1. python 实现天气信息 mcp 服务器 (STDIO)', link: '/plugin-tutorial/examples/python-simple-stdio' },
						{ text: '例子 2. go 实现 neo4j 的只读 mcp 服务器 (SSE)', link: '/plugin-tutorial/examples/go-neo4j-sse' },
						{ text: '例子 3. java 实现文档数据库的只读 mcp (HTTP)', link: '/plugin-tutorial/examples/java-es-http' },
						{ text: '例子 4. typescript 实现基于 crawl4ai 的超级网页爬虫 mcp (STDIO)', link: '/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
						{ text: '例子 5. SSE 在线部署的鉴权器实现', link: '/plugin-tutorial/examples/sse-oauth2' },
					]
				},
				{
					text: 'FAQ',
					items: [
						{ text: '帮助', link: '/plugin-tutorial/faq/help' },
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
