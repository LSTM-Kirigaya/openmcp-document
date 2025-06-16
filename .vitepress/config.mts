import lightbox from "vitepress-plugin-lightbox";

import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite';
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links';
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img';

import { contributors } from './contributors';
import { withMermaid } from "vitepress-plugin-mermaid";
import { customIcons } from './theme/hook/icons';

import enConfig from './i18n/en';
import zhConfig from './i18n/zh';
import jaConfig from './i18n/ja';

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
                excludes: [
                    'preview/contributors.md',
                    'zh/preview/contributors.md',
                    'ja/preview/contributors.md',
                    'index.md',
                    'zh/index.md',
                    'ja/index.md'
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
        ['link', { rel: 'icon', href: baseUrl + '/images/favicon.svg' }]
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
