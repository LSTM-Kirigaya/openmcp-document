import lightbox from "vitepress-plugin-lightbox";

import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img';

import { transformHeadMeta } from '@nolebase/vitepress-plugin-meta';

import { contributors } from './contributors';
import { withMermaid } from "vitepress-plugin-mermaid";
import { customIcons } from './theme/hook/icons';

import enConfig from './i18n/en';
import zhConfig from './i18n/zh';
import jaConfig from './i18n/ja';

export const baseUrl = '/';

export default withMermaid({
    title: "OpenMCP",
    description: "OpenMCP - The Ultimate MCP Development Environment. Build, debug, and deploy MCP servers with ease. Open source MCP client for developers and AI researchers.",
    base: baseUrl,
    ignoreDeadLinks: true,
    lang: 'en-US',
    lastUpdated: true,

    sitemap: {
        hostname: 'https://openmcp.kirigaya.cn'
    },

    vite: {
        plugins: [
            GitChangelog({
                // 填写在此处填写您的仓库链接
                repoURL: () => 'https://gitea.3geeks.top/kirigaya/openmcp-document',
                mapAuthors: contributors
            }),
            GitChangelogMarkdownSection({
                excludes: [
                    'preview/contributors.md',
                    'zh/preview/contributors.md',
                    'ja/preview/contributors.md',
                    'index.md',
                    'zh/index.md',
                    'ja/index.md',
                    'pricing.md',
                    'zh/pricing.md',
                    'ja/pricing.md',
                    'blog.md',
                    'zh/blog.md',
                    'ja/blog.md'
                ]
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
                // 如果还有别的解析失败的依赖需要添加的话，并排填写和配置到这里即可 //
                '@nolebase/vitepress-plugin-inline-link-preview',
                '@unlazy/vue'
            ],
        },
        server: {
            port: 5177
        }
    },

    transformHead: async (ctx) => {
        // 拿到插件生成器
        const run = transformHeadMeta({
            length: 160,
            contentSelector: '#VPContent div.content main .vp-doc div',
            removeContentSelector: ['h1', '.nolebase-page-properties-container'],
            useTaglineForHomeLayout: true,
            async handleExcerpt(excerpt, context) {
                return excerpt.replace(/\s+/g, ' ').trim()
            }
        })

        // 传入 (head, ctx)，返回要追加的 HeadConfig[]
        const res = await run(ctx.head, ctx)
        return res ?? []
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
        ['link', { rel: 'icon', href: '/images/favicon.svg', type: 'image/svg+xml' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/favicon.svg' }],
        ['meta', { name: 'theme-color', content: '#0a0a0f' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['meta', { name: 'robots', content: 'index, follow' }],
        ['meta', { name: 'author', content: 'Kirigaya' }],
        ['meta', { name: 'keywords', content: 'OpenMCP, MCP, Model Context Protocol, LLM, AI, Agent, Development Environment, SDK, Debug, Chatbot, Open Source, AI Tools, LLM Integration' }],
        
        // Open Graph
        ['meta', { property: 'og:title', content: 'OpenMCP - The Ultimate MCP Development Environment' }],
        ['meta', { property: 'og:description', content: 'Build, debug, and deploy MCP servers with ease. Open source MCP client for developers and AI researchers.' }],
        ['meta', { property: 'og:url', content: 'https://openmcp.kirigaya.cn' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'OpenMCP' }],
        ['meta', { property: 'og:image', content: 'https://openmcp.kirigaya.cn/images/openmcp-preview.png' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        
        // Twitter Card
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@openmcp' }],
        ['meta', { name: 'twitter:creator', content: '@kirigaya' }],
        ['meta', { name: 'twitter:title', content: 'OpenMCP - The Ultimate MCP Development Environment' }],
        ['meta', { name: 'twitter:description', content: 'Build, debug, and deploy MCP servers with ease. Open source MCP client for developers and AI researchers.' }],
        ['meta', { name: 'twitter:image', content: 'https://openmcp.kirigaya.cn/images/openmcp-preview.png' }],
        
        // Canonical
        ['link', { rel: 'canonical', href: 'https://openmcp.kirigaya.cn' }],
        
        // Alternate languages
        ['link', { rel: 'alternate', hreflang: 'en', href: 'https://openmcp.kirigaya.cn/' }],
        ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://openmcp.kirigaya.cn/zh/' }],
        ['link', { rel: 'alternate', hreflang: 'ja', href: 'https://openmcp.kirigaya.cn/ja/' }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: 'https://openmcp.kirigaya.cn/' }],
    ],

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: enConfig
        },
        zh: {
            label: '简体中文',
            lang: 'zh',
            link: '/zh/',
            themeConfig: zhConfig
        },
        ja: {
            label: '日本語',
            lang: 'ja',
            link: '/ja/',
            themeConfig: jaConfig
        }
    },

    themeConfig: {

        socialLinks: [
            { icon: 'github', link: 'https://github.com/LSTM-Kirigaya/openmcp-client' },
            { icon: customIcons.share, link: 'https://kirigaya.cn/home' },
        ],

        search: {
            provider: 'local'
        },

        // 左上角的 logo
        logo: '/images/favicon.svg',
    }
})
