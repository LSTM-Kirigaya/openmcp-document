// .vitepress/config.mts
import lightbox from "file:///C:/Users/K/project/openmcp-document/node_modules/vitepress-plugin-lightbox/dist/index.js";
import { GitChangelog, GitChangelogMarkdownSection } from "file:///C:/Users/K/project/openmcp-document/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///C:/Users/K/project/openmcp-document/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import { ThumbnailHashImages } from "file:///C:/Users/K/project/openmcp-document/node_modules/@nolebase/vitepress-plugin-thumbnail-hash/dist/vite/index.mjs";
import { BiDirectionalLinks } from "file:///C:/Users/K/project/openmcp-document/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { UnlazyImages } from "file:///C:/Users/K/project/openmcp-document/node_modules/@nolebase/markdown-it-unlazy-img/dist/index.mjs";

// .vitepress/contributors.ts
var contributors = [
  {
    name: "\u9526\u6062",
    nameAliases: ["LSTM-Kirigaya", "Kirigaya"],
    mapByEmailAliases: ["1193466151@qq.com"],
    links: [{ type: "", link: "https://www.zhihu.com/people/can-meng-zhong-de-che-xian" }]
  },
  {
    name: "PeaceSheep",
    nameAliases: ["li1553770945"],
    avatar: "https://avatars.githubusercontent.com/u/55867654?v=4",
    mapByEmailAliases: ["1553770945@qq.com"],
    links: [{ type: "", link: "https://peacesheep.cn/home" }]
  },
  {
    name: "\u661F\u5F27\u68A6\u5F71",
    nameAliases: ["StarArc"],
    avatar: "https://avatars.githubusercontent.com/u/115577936?v=4",
    mapByEmailAliases: ["3951001763@qq.com"],
    links: [{ type: "", link: "https://b23.tv/bqflzuJ" }]
  }
];

// .vitepress/config.mts
import { withMermaid } from "file:///C:/Users/K/project/openmcp-document/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";

// .vitepress/theme/hook/icons.ts
var customIcons = {
  share: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>'
  },
  bilibili: {
    svg: '<svg t="1748584827072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5040" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="5041"></path></svg>'
  },
  blog: {
    svg: '<svg t="1748584860211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8850" width="200" height="200"><path d="M344.407934 453.627004c-29.198618-5.799725-56.39733 17.799157-56.39733 47.597746V602.019978c0 20.399034 14.199328 36.798258 33.398419 43.997917 36.398277 13.599356 62.597036 48.79769 62.597037 89.995739 0 52.997491-42.997964 95.995455-95.995456 95.995456s-95.995455-42.997964-95.995455-95.995456V240.037116c0-26.598741-21.398987-47.997728-47.997727-47.997728H48.021966c-26.598741 0-47.997728 21.398987-47.997727 47.997728v495.976518c0 178.991526 164.192227 320.384832 349.98343 281.386678 108.794849-22.798921 196.590693-110.794755 219.389614-219.389613 34.798353-165.792151-73.996497-314.385116-224.989349-344.383695zM418.00445 0.048478c-18.399129-0.999953-33.99839 13.599356-33.99839 31.998485v63.197008c0 16.999195 13.199375 30.998532 29.998579 31.798494 258.787748 13.999337 466.777901 223.989396 481.777191 482.977134 0.999953 16.799205 14.99929 29.99858 31.798495 29.99858h64.196961c18.399129 0 32.998438-15.599261 31.998485-33.99839C1006.776575 279.635241 744.388998 17.247663 418.00445 0.048478z m0.599972 191.99091c-18.599119-1.399934-34.598362 13.399366-34.598362 32.198476v64.19696c0 16.799205 12.999385 30.598551 29.598598 31.798495 153.592728 12.599403 275.986934 136.393543 289.786281 290.386252 1.599924 16.599214 15.19928 29.398608 31.798494 29.398608h64.396952c18.599119 0 33.598409-15.999243 32.198475-34.598362-16.799205-220.189575-192.990863-396.381234-413.180438-413.380429z" p-id="8851"></path></svg>'
  }
};

// .vitepress/config.mts
var baseUrl = "/openmcp";
var config_default = withMermaid({
  title: "OpenMCP",
  description: "\u4E3A\u5F00\u53D1\u8005\u548C\u79D1\u7814\u4EBA\u5458\u51C6\u5907\u7684MCP\u5F00\u53D1\u73AF\u5883\u548CSDK",
  base: baseUrl,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: "https://kirigaya.cn/" + baseUrl
  },
  vite: {
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => "https://gitea.3geeks.top/kirigaya/openmcp-document",
        mapAuthors: contributors
      }),
      GitChangelogMarkdownSection({
        excludes: ["preview/contributors.md", "index.md"]
      }),
      ThumbnailHashImages()
    ],
    optimizeDeps: {
      include: [
        "mermaid",
        "gsap",
        "gsap/ScrollTrigger"
      ],
      exclude: [
        "@nolebase/vitepress-plugin-inline-link-preview/client"
      ]
    },
    ssr: {
      noExternal: [
        // 如果还有别的解析失败的依赖需要添加的话，并排填写和配置到这里即可 //
        "@nolebase/vitepress-plugin-inline-link-preview",
        "@unlazy/vue"
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(lightbox);
      md.use(InlineLinkPreviewElementTransform);
      md.use(BiDirectionalLinks());
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg"
      });
    }
  },
  head: [
    ["link", { rel: "icon", href: baseUrl + "/images/favicon.png" }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u6559\u7A0B",
        items: [
          {
            component: "KNavItem",
            props: {
              title: "\u7B80\u4ECB",
              description: "\u5173\u4E8E mcp \u548C openmcp\uFF0C\u9601\u4E0B\u9700\u8981\u77E5\u9053\u7684 ...",
              icon: "openmcp",
              link: "/plugin-tutorial/"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "\u5FEB\u901F\u5F00\u59CB",
              description: "\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u5FEB\u901F\u4E86\u89E3 OpenMCP \u7684\u57FA\u672C\u6982\u5FF5",
              icon: "quick-fill",
              link: "/plugin-tutorial/quick-start/"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "OpenMCP \u4F7F\u7528\u624B\u518C",
              description: "OpenMCP Client \u7684\u57FA\u672C\u4F7F\u7528",
              icon: "shiyongshouce",
              link: "/plugin-tutorial/usage/connect-mcp"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "MCP \u670D\u52A1\u5668\u5F00\u53D1\u6848\u4F8B",
              description: "\u4F7F\u7528\u4E0D\u540C\u8BED\u8A00\u5F00\u53D1\u7684\u4E0D\u540C\u6A21\u5F0F\u7684 MCP \u670D\u52A1\u5668",
              icon: "yibangonggongyusuan",
              link: "/plugin-tutorial/examples/mcp-examples"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "FAQ",
              description: "\u4E3A\u60A8\u7B54\u7591\u89E3\u60D1\uFF0C\u6392\u5FE7\u89E3\u96BE",
              icon: "yijianchuli",
              link: "/plugin-tutorial/faq/help"
            }
          }
        ]
      },
      { text: "SDK", link: "/sdk-tutorial" },
      {
        text: "\u66F4\u591A",
        items: [
          {
            component: "KNavItem",
            props: {
              title: "\u66F4\u65B0\u65E5\u5FD7",
              description: "\u67E5\u770B\u9879\u76EE\u7684\u66F4\u65B0\u5386\u53F2\u8BB0\u5F55",
              icon: "a-yusuan2",
              link: "/preview/changelog"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "\u53C2\u4E0E OpenMCP",
              description: "\u4E86\u89E3\u5982\u4F55\u53C2\u4E0E OpenMCP \u9879\u76EE\u7684\u5F00\u53D1\u548C\u7EF4\u62A4",
              icon: "shujuzhongxin",
              link: "/preview/join"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "OpenMCP \u8D21\u732E\u8005\u5217\u8868",
              description: "\u5173\u4E8E\u53C2\u4E0E OpenMCP \u7684\u8D21\u732E\u8005\u4EEC",
              icon: "heike",
              link: "/preview/contributors"
            }
          },
          {
            component: "KNavItem",
            props: {
              title: "\u8D44\u6E90\u9891\u9053",
              description: "\u83B7\u53D6\u9879\u76EE\u76F8\u5173\u7684\u8D44\u6E90\u548C\u4FE1\u606F",
              icon: "xinxiang",
              link: "/preview/channel"
            }
          }
        ]
      }
    ],
    sidebar: {
      "/plugin-tutorial/": [
        {
          text: "\u7B80\u4ECB",
          items: [
            { text: "OpenMCP \u6982\u8FF0", link: "/plugin-tutorial/index" },
            { text: "\u4EC0\u4E48\u662F MCP\uFF1F", link: "/plugin-tutorial/what-is-mcp" },
            { text: "MCP \u57FA\u7840\u6982\u5FF5", link: "/plugin-tutorial/concept" }
          ]
        },
        {
          text: "\u5FEB\u901F\u5F00\u59CB",
          items: [
            { text: "\u5FEB\u901F\u5F00\u59CB", link: "/plugin-tutorial/quick-start" },
            { text: "\u5B89\u88C5 OpenMCP", link: "/plugin-tutorial/quick-start/acquire-openmcp" },
            { text: "\u4F60\u7684\u7B2C\u4E00\u4E2A MCP", link: "/plugin-tutorial/quick-start/first-mcp" },
            { text: "\u5FEB\u901F\u8C03\u8BD5 MCP", link: "/plugin-tutorial/quick-start/quick-debug" },
            { text: "\u6254\u8FDB\u5927\u6A21\u578B\u91CC\u9762\u6D4B\u6D4B\u597D\u574F\uFF01", link: "/plugin-tutorial/quick-start/put-into-llm" }
          ]
        },
        {
          text: "OpenMCP \u4F7F\u7528\u624B\u518C",
          items: [
            { text: "UI \u914D\u8272", link: "/plugin-tutorial/usage/ui-color" },
            { text: "\u8FDE\u63A5 mcp \u670D\u52A1\u5668", link: "/plugin-tutorial/usage/connect-mcp" },
            { text: "\u8C03\u8BD5 tools, resources \u548C prompts", link: "/plugin-tutorial/usage/debug" },
            { text: "\u8FDE\u63A5\u5927\u6A21\u578B", link: "/plugin-tutorial/usage/connect-llm" },
            { text: "\u7528\u5927\u6A21\u578B\u6D4B\u8BD5\u60A8\u7684 mcp", link: "/plugin-tutorial/usage/test-with-llm" },
            { text: "\u8FDE\u63A5\u591A\u4E2A MCP \u670D\u52A1\u5668", link: "/plugin-tutorial/usage/multi-server" },
            { text: "\u5206\u53D1\u60A8\u7684\u5B9E\u9A8C\u7ED3\u679C", link: "/plugin-tutorial/usage/distribute-result" },
            { text: "SSE \u5728\u7EBF\u90E8\u7F72\u7684\u9274\u6743\u5668\u5B9E\u73B0", link: "/plugin-tutorial/usage/sse-oauth2" }
          ]
        },
        {
          text: "MCP \u670D\u52A1\u5668\u5F00\u53D1\u6848\u4F8B",
          items: [
            { text: "MCP \u670D\u52A1\u5668\u5F00\u53D1\u6848\u4F8B", link: "/plugin-tutorial/examples/mcp-examples" },
            { text: "\u4F8B\u5B50 1. python \u5B9E\u73B0\u5929\u6C14\u4FE1\u606F mcp \u670D\u52A1\u5668 (STDIO)", link: "/plugin-tutorial/examples/python-simple-stdio" },
            { text: "\u4F8B\u5B50 2. go \u5B9E\u73B0 neo4j \u7684\u53EA\u8BFB mcp \u670D\u52A1\u5668 (SSE)", link: "/plugin-tutorial/examples/go-neo4j-sse" },
            { text: "\u4F8B\u5B50 3. java \u5B9E\u73B0\u6587\u6863\u6570\u636E\u5E93\u7684\u53EA\u8BFB mcp (HTTP)", link: "/plugin-tutorial/examples/java-es-http" },
            { text: "\u4F8B\u5B50 4. typescript \u5B9E\u73B0\u57FA\u4E8E crawl4ai \u7684\u8D85\u7EA7\u7F51\u9875\u722C\u866B mcp (STDIO)", link: "/plugin-tutorial/examples/typescript-crawl4ai-stdio" },
            { text: "\u4F8B\u5B50 5. python \u5B9E\u73B0\u8FDB\u884C\u901A\u7528\u8868\u5355\u586B\u5145 \u7684 mcp (STDIO)", link: "/plugin-tutorial/examples/python-form-stdio" },
            { text: "\u4F8B\u5B50 6. python \u5B9E\u73B0\u57FA\u4E8E blender \u7684 mcp (STDIO)", link: "/plugin-tutorial/examples/python-blender-stdio" },
            { text: "\u4F8B\u5B50 7. python \u5B9E\u73B0 cadence EDA \u7684 mcp (STDIO)", link: "/plugin-tutorial/examples/python-cadence-stdio" }
          ]
        },
        {
          text: "FAQ",
          items: [
            { text: "\u5E2E\u52A9", link: "/plugin-tutorial/faq/help" }
          ]
        }
      ],
      "/sdk-tutorial/": [
        {
          text: "\u7B80\u4ECB",
          items: [
            { text: "openmcp-sdk.js", link: "/sdk-tutorial/" }
          ]
        },
        {
          text: "\u57FA\u672C\u4F7F\u7528",
          items: [
            { text: "\u6700\u7B80\u5355\u7684\u5BF9\u8BDD", link: "/sdk-tutorial/usage/greet" },
            { text: "\u4EFB\u52A1\u5FAA\u73AF", link: "/sdk-tutorial/usage/task-loop" },
            { text: "\u591A\u670D\u52A1\u5668\u8FDE\u63A5", link: "/sdk-tutorial/usage/multi-server" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/LSTM-Kirigaya/openmcp-client" },
      { icon: customIcons.share, link: "https://kirigaya.cn/home" }
    ],
    footer: {
      message: "\u7F29\u77EDLLM\u5230Agent\u7684\u6700\u540E\u4E00\u516C\u91CC",
      copyright: "OpenMCP All rights reserved"
    },
    // 左上角的 logo
    logo: "/images/openmcp.png"
  }
});
export {
  baseUrl,
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvY29udHJpYnV0b3JzLnRzIiwgIi52aXRlcHJlc3MvdGhlbWUvaG9vay9pY29ucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtcXFxccHJvamVjdFxcXFxvcGVubWNwLWRvY3VtZW50XFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtcXFxccHJvamVjdFxcXFxvcGVubWNwLWRvY3VtZW50XFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSy9wcm9qZWN0L29wZW5tY3AtZG9jdW1lbnQvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IGxpZ2h0Ym94IGZyb20gXCJ2aXRlcHJlc3MtcGx1Z2luLWxpZ2h0Ym94XCI7XHJcblxyXG5pbXBvcnQgeyBHaXRDaGFuZ2Vsb2csIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbiB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cvdml0ZSc7XHJcbmltcG9ydCB7IElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvbWFya2Rvd24taXQnO1xyXG5pbXBvcnQgeyBUaHVtYm5haWxIYXNoSW1hZ2VzIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tdGh1bWJuYWlsLWhhc2gvdml0ZSc7XHJcbmltcG9ydCB7IEJpRGlyZWN0aW9uYWxMaW5rcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC1iaS1kaXJlY3Rpb25hbC1saW5rcyc7XHJcbmltcG9ydCB7IFVubGF6eUltYWdlcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC11bmxhenktaW1nJztcclxuXHJcbmltcG9ydCB7IGNvbnRyaWJ1dG9ycyB9IGZyb20gJy4vY29udHJpYnV0b3JzJztcclxuaW1wb3J0IHsgd2l0aE1lcm1haWQgfSBmcm9tIFwidml0ZXByZXNzLXBsdWdpbi1tZXJtYWlkXCI7XHJcbmltcG9ydCB7IGN1c3RvbUljb25zIH0gZnJvbSAnLi90aGVtZS9ob29rL2ljb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gJy9vcGVubWNwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhNZXJtYWlkKHtcclxuXHR0aXRsZTogXCJPcGVuTUNQXCIsXHJcblx0ZGVzY3JpcHRpb246IFwiXHU0RTNBXHU1RjAwXHU1M0QxXHU4MDA1XHU1NDhDXHU3OUQxXHU3ODE0XHU0RUJBXHU1NDU4XHU1MUM2XHU1OTA3XHU3Njg0TUNQXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU1NDhDU0RLXCIsXHJcblx0YmFzZTogYmFzZVVybCxcclxuXHRpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcblxyXG5cdHNpdGVtYXA6IHtcclxuXHRcdGhvc3RuYW1lOiAnaHR0cHM6Ly9raXJpZ2F5YS5jbi8nICsgYmFzZVVybFxyXG5cdH0sXHJcblxyXG5cdHZpdGU6IHtcclxuXHRcdHBsdWdpbnM6IFtcclxuXHRcdFx0R2l0Q2hhbmdlbG9nKHtcclxuXHRcdFx0XHQvLyBcdTU4NkJcdTUxOTlcdTU3MjhcdTZCNjRcdTU5MDRcdTU4NkJcdTUxOTlcdTYwQThcdTc2ODRcdTRFRDNcdTVFOTNcdTk0RkVcdTYzQTVcclxuXHRcdFx0XHRyZXBvVVJMOiAoKSA9PiAnaHR0cHM6Ly9naXRlYS4zZ2Vla3MudG9wL2tpcmlnYXlhL29wZW5tY3AtZG9jdW1lbnQnLFxyXG5cdFx0XHRcdG1hcEF1dGhvcnM6IGNvbnRyaWJ1dG9yc1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0R2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uKHtcclxuXHRcdFx0XHRleGNsdWRlczogWydwcmV2aWV3L2NvbnRyaWJ1dG9ycy5tZCcsICdpbmRleC5tZCddXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRUaHVtYm5haWxIYXNoSW1hZ2VzKCksXHJcblx0XHRdLFxyXG5cdFx0b3B0aW1pemVEZXBzOiB7XHJcblx0XHRcdGluY2x1ZGU6IFtcclxuXHRcdFx0XHQnbWVybWFpZCcsXHJcbiAgICAgICAgICAgICAgICBcImdzYXBcIixcclxuICAgICAgICAgICAgICAgIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCJcclxuXHRcdFx0XSxcclxuXHRcdFx0ZXhjbHVkZTogW1xyXG5cdFx0XHRcdCdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1pbmxpbmUtbGluay1wcmV2aWV3L2NsaWVudCcsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0c3NyOiB7XHJcblx0XHRcdG5vRXh0ZXJuYWw6IFtcclxuXHRcdFx0XHQvLyBcdTU5ODJcdTY3OUNcdThGRDhcdTY3MDlcdTUyMkJcdTc2ODRcdTg5RTNcdTY3OTBcdTU5MzFcdThEMjVcdTc2ODRcdTRGOURcdThENTZcdTk3MDBcdTg5ODFcdTZERkJcdTUyQTBcdTc2ODRcdThCRERcdUZGMENcdTVFNzZcdTYzOTJcdTU4NkJcdTUxOTlcdTU0OENcdTkxNERcdTdGNkVcdTUyMzBcdThGRDlcdTkxQ0NcdTUzNzNcdTUzRUYgLy9cclxuXHRcdFx0XHQnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4taW5saW5lLWxpbmstcHJldmlldycsXHJcblx0XHRcdFx0J0B1bmxhenkvdnVlJ1xyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRtYXJrZG93bjoge1xyXG5cdFx0Y29uZmlnOiAobWQpID0+IHtcclxuXHRcdFx0bWQudXNlKGxpZ2h0Ym94KTtcclxuXHRcdFx0bWQudXNlKElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSk7XHJcblx0XHRcdG1kLnVzZShCaURpcmVjdGlvbmFsTGlua3MoKSk7XHJcblx0XHRcdG1kLnVzZShVbmxhenlJbWFnZXMoKSwgeyBcclxuXHRcdFx0XHRpbWdFbGVtZW50VGFnOiAnTm9sZWJhc2VVbmxhenlJbWcnLCBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0aGVhZDogW1xyXG5cdFx0WydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogYmFzZVVybCArICcvaW1hZ2VzL2Zhdmljb24ucG5nJyB9XVxyXG5cdF0sXHJcblx0dGhlbWVDb25maWc6IHtcclxuXHRcdC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcclxuXHRcdG5hdjogW1xyXG5cdFx0XHR7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRleHQ6ICdcdTY1NTlcdTdBMEInLFxyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ0tOYXZJdGVtJyxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1x1N0I4MFx1NEVDQicsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdcdTUxNzNcdTRFOEUgbWNwIFx1NTQ4QyBvcGVubWNwXHVGRjBDXHU5NjAxXHU0RTBCXHU5NzAwXHU4OTgxXHU3N0U1XHU5MDUzXHU3Njg0IC4uLicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ29wZW5tY3AnLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsLydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiAnS05hdkl0ZW0nLFxyXG5cdFx0XHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyxcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ1x1OTAxQVx1OEZDN1x1NEUwMFx1NEUyQVx1NEY4Qlx1NUI1MFx1NUZFQlx1OTAxRlx1NEU4Nlx1ODlFMyBPcGVuTUNQIFx1NzY4NFx1NTdGQVx1NjcyQ1x1Njk4Mlx1NUZGNScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3F1aWNrLWZpbGwnLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3F1aWNrLXN0YXJ0LydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiAnS05hdkl0ZW0nLFxyXG5cdFx0XHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnT3Blbk1DUCBcdTRGN0ZcdTc1MjhcdTYyNEJcdTUxOEMnLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnT3Blbk1DUCBDbGllbnQgXHU3Njg0XHU1N0ZBXHU2NzJDXHU0RjdGXHU3NTI4JyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnc2hpeW9uZ3Nob3VjZScsXHJcblx0XHRcdFx0XHRcdFx0bGluazogJy9wbHVnaW4tdHV0b3JpYWwvdXNhZ2UvY29ubmVjdC1tY3AnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ0tOYXZJdGVtJyxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ01DUCBcdTY3MERcdTUyQTFcdTU2NjhcdTVGMDBcdTUzRDFcdTY4NDhcdTRGOEInLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnXHU0RjdGXHU3NTI4XHU0RTBEXHU1NDBDXHU4QkVEXHU4QTAwXHU1RjAwXHU1M0QxXHU3Njg0XHU0RTBEXHU1NDBDXHU2QTIxXHU1RjBGXHU3Njg0IE1DUCBcdTY3MERcdTUyQTFcdTU2NjgnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICd5aWJhbmdvbmdnb25neXVzdWFuJyxcclxuXHRcdFx0XHRcdFx0XHRsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC9leGFtcGxlcy9tY3AtZXhhbXBsZXMnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ0tOYXZJdGVtJyxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0ZBUScsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdcdTRFM0FcdTYwQThcdTdCNTRcdTc1OTFcdTg5RTNcdTYwRDFcdUZGMENcdTYzOTJcdTVGRTdcdTg5RTNcdTk2QkUnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICd5aWppYW5jaHVsaScsXHJcblx0XHRcdFx0XHRcdFx0bGluazogJy9wbHVnaW4tdHV0b3JpYWwvZmFxL2hlbHAnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7IHRleHQ6ICdTREsnLCBsaW5rOiAnL3Nkay10dXRvcmlhbCcgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRleHQ6ICdcdTY2RjRcdTU5MUEnLFxyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ0tOYXZJdGVtJyxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdcdTY3RTVcdTc3MEJcdTk4NzlcdTc2RUVcdTc2ODRcdTY2RjRcdTY1QjBcdTUzODZcdTUzRjJcdThCQjBcdTVGNTUnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdhLXl1c3VhbjInLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6ICcvcHJldmlldy9jaGFuZ2Vsb2cnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ0tOYXZJdGVtJyxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1x1NTNDMlx1NEUwRSBPcGVuTUNQJyxcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ1x1NEU4Nlx1ODlFM1x1NTk4Mlx1NEY1NVx1NTNDMlx1NEUwRSBPcGVuTUNQIFx1OTg3OVx1NzZFRVx1NzY4NFx1NUYwMFx1NTNEMVx1NTQ4Q1x1N0VGNFx1NjJBNCcsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3NodWp1emhvbmd4aW4nLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6ICcvcHJldmlldy9qb2luJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6ICdLTmF2SXRlbScsXHJcblx0XHRcdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdPcGVuTUNQIFx1OEQyMVx1NzMyRVx1ODAwNVx1NTIxN1x1ODg2OCcsXHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdcdTUxNzNcdTRFOEVcdTUzQzJcdTRFMEUgT3Blbk1DUCBcdTc2ODRcdThEMjFcdTczMkVcdTgwMDVcdTRFRUMnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdoZWlrZScsXHJcblx0XHRcdFx0XHRcdFx0bGluazogJy9wcmV2aWV3L2NvbnRyaWJ1dG9ycydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiAnS05hdkl0ZW0nLFxyXG5cdFx0XHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnXHU4RDQ0XHU2RTkwXHU5ODkxXHU5MDUzJyxcclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ1x1ODNCN1x1NTNENlx1OTg3OVx1NzZFRVx1NzZGOFx1NTE3M1x1NzY4NFx1OEQ0NFx1NkU5MFx1NTQ4Q1x1NEZFMVx1NjA2RicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3hpbnhpYW5nJyxcclxuXHRcdFx0XHRcdFx0XHRsaW5rOiAnL3ByZXZpZXcvY2hhbm5lbCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblxyXG5cdFx0c2lkZWJhcjoge1xyXG5cdFx0XHQnL3BsdWdpbi10dXRvcmlhbC8nOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ1x1N0I4MFx1NEVDQicsXHJcblx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdPcGVuTUNQIFx1Njk4Mlx1OEZGMCcsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL2luZGV4JyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRFQzBcdTRFNDhcdTY2MkYgTUNQXHVGRjFGJywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvd2hhdC1pcy1tY3AnIH0sXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ01DUCBcdTU3RkFcdTc4NDBcdTY5ODJcdTVGRjUnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC9jb25jZXB0JyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyxcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3F1aWNrLXN0YXJ0JyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTVCODlcdTg4QzUgT3Blbk1DUCcsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3F1aWNrLXN0YXJ0L2FjcXVpcmUtb3Blbm1jcCcgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU0RjYwXHU3Njg0XHU3QjJDXHU0RTAwXHU0RTJBIE1DUCcsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3F1aWNrLXN0YXJ0L2ZpcnN0LW1jcCcgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU4QzAzXHU4QkQ1IE1DUCcsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3F1aWNrLXN0YXJ0L3F1aWNrLWRlYnVnJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTYyNTRcdThGREJcdTU5MjdcdTZBMjFcdTU3OEJcdTkxQ0NcdTk3NjJcdTZENEJcdTZENEJcdTU5N0RcdTU3NEZcdUZGMDEnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC9xdWljay1zdGFydC9wdXQtaW50by1sbG0nIH0sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIk9wZW5NQ1AgXHU0RjdGXHU3NTI4XHU2MjRCXHU1MThDXCIsXHJcblx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdVSSBcdTkxNERcdTgyNzInLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC91c2FnZS91aS1jb2xvcicgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU4RkRFXHU2M0E1IG1jcCBcdTY3MERcdTUyQTFcdTU2NjgnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC91c2FnZS9jb25uZWN0LW1jcCcgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU4QzAzXHU4QkQ1IHRvb2xzLCByZXNvdXJjZXMgXHU1NDhDIHByb21wdHMnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC91c2FnZS9kZWJ1ZycgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU4RkRFXHU2M0E1XHU1OTI3XHU2QTIxXHU1NzhCJywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvdXNhZ2UvY29ubmVjdC1sbG0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NzUyOFx1NTkyN1x1NkEyMVx1NTc4Qlx1NkQ0Qlx1OEJENVx1NjBBOFx1NzY4NCBtY3AnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC91c2FnZS90ZXN0LXdpdGgtbGxtJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdThGREVcdTYzQTVcdTU5MUFcdTRFMkEgTUNQIFx1NjcwRFx1NTJBMVx1NTY2OCcsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL3VzYWdlL211bHRpLXNlcnZlcicgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU1MjA2XHU1M0QxXHU2MEE4XHU3Njg0XHU1QjlFXHU5QThDXHU3RUQzXHU2NzlDJywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvdXNhZ2UvZGlzdHJpYnV0ZS1yZXN1bHQnIH0sXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1NTRSBcdTU3MjhcdTdFQkZcdTkwRThcdTdGNzJcdTc2ODRcdTkyNzRcdTY3NDNcdTU2NjhcdTVCOUVcdTczQjAnLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC91c2FnZS9zc2Utb2F1dGgyJyB9LFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogXCJNQ1AgXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU1M0QxXHU2ODQ4XHU0RjhCXCIsXHJcblx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdNQ1AgXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU1M0QxXHU2ODQ4XHU0RjhCJywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvZXhhbXBsZXMvbWNwLWV4YW1wbGVzJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRGOEJcdTVCNTAgMS4gcHl0aG9uIFx1NUI5RVx1NzNCMFx1NTkyOVx1NkMxNFx1NEZFMVx1NjA2RiBtY3AgXHU2NzBEXHU1MkExXHU1NjY4IChTVERJTyknLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC9leGFtcGxlcy9weXRob24tc2ltcGxlLXN0ZGlvJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRGOEJcdTVCNTAgMi4gZ28gXHU1QjlFXHU3M0IwIG5lbzRqIFx1NzY4NFx1NTNFQVx1OEJGQiBtY3AgXHU2NzBEXHU1MkExXHU1NjY4IChTU0UpJywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvZXhhbXBsZXMvZ28tbmVvNGotc3NlJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRGOEJcdTVCNTAgMy4gamF2YSBcdTVCOUVcdTczQjBcdTY1ODdcdTY4NjNcdTY1NzBcdTYzNkVcdTVFOTNcdTc2ODRcdTUzRUFcdThCRkIgbWNwIChIVFRQKScsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL2V4YW1wbGVzL2phdmEtZXMtaHR0cCcgfSxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU0RjhCXHU1QjUwIDQuIHR5cGVzY3JpcHQgXHU1QjlFXHU3M0IwXHU1N0ZBXHU0RThFIGNyYXdsNGFpIFx1NzY4NFx1OEQ4NVx1N0VBN1x1N0Y1MVx1OTg3NVx1NzIyQ1x1ODY2QiBtY3AgKFNURElPKScsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL2V4YW1wbGVzL3R5cGVzY3JpcHQtY3Jhd2w0YWktc3RkaW8nIH0sXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NEY4Qlx1NUI1MCA1LiBweXRob24gXHU1QjlFXHU3M0IwXHU4RkRCXHU4ODRDXHU5MDFBXHU3NTI4XHU4ODY4XHU1MzU1XHU1ODZCXHU1MTQ1IFx1NzY4NCBtY3AgKFNURElPKScsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL2V4YW1wbGVzL3B5dGhvbi1mb3JtLXN0ZGlvJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRGOEJcdTVCNTAgNi4gcHl0aG9uIFx1NUI5RVx1NzNCMFx1NTdGQVx1NEU4RSBibGVuZGVyIFx1NzY4NCBtY3AgKFNURElPKScsIGxpbms6ICcvcGx1Z2luLXR1dG9yaWFsL2V4YW1wbGVzL3B5dGhvbi1ibGVuZGVyLXN0ZGlvJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRGOEJcdTVCNTAgNy4gcHl0aG9uIFx1NUI5RVx1NzNCMCBjYWRlbmNlIEVEQSBcdTc2ODQgbWNwIChTVERJTyknLCBsaW5rOiAnL3BsdWdpbi10dXRvcmlhbC9leGFtcGxlcy9weXRob24tY2FkZW5jZS1zdGRpbycgfSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdGQVEnLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU1RTJFXHU1MkE5JywgbGluazogJy9wbHVnaW4tdHV0b3JpYWwvZmFxL2hlbHAnIH0sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cclxuXHRcdFx0Jy9zZGstdHV0b3JpYWwvJzogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdcdTdCODBcdTRFQ0InLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnb3Blbm1jcC1zZGsuanMnLCBsaW5rOiAnL3Nkay10dXRvcmlhbC8nIH0sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnXHU1N0ZBXHU2NzJDXHU0RjdGXHU3NTI4JyxcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NjcwMFx1N0I4MFx1NTM1NVx1NzY4NFx1NUJGOVx1OEJERCcsIGxpbms6ICcvc2RrLXR1dG9yaWFsL3VzYWdlL2dyZWV0JyB9LFxyXG5cdFx0XHRcdFx0XHR7IHRleHQ6ICdcdTRFRkJcdTUyQTFcdTVGQUFcdTczQUYnLCBsaW5rOiAnL3Nkay10dXRvcmlhbC91c2FnZS90YXNrLWxvb3AnIH0sXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NTkxQVx1NjcwRFx1NTJBMVx1NTY2OFx1OEZERVx1NjNBNScsIGxpbms6ICcvc2RrLXR1dG9yaWFsL3VzYWdlL211bHRpLXNlcnZlcicgfSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblxyXG5cdFx0c29jaWFsTGlua3M6IFtcclxuXHRcdFx0eyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9MU1RNLUtpcmlnYXlhL29wZW5tY3AtY2xpZW50JyB9LFxyXG5cdFx0XHR7IGljb246IGN1c3RvbUljb25zLnNoYXJlLCBsaW5rOiAnaHR0cHM6Ly9raXJpZ2F5YS5jbi9ob21lJyB9LFxyXG5cdFx0XSxcclxuXHJcblx0XHRmb290ZXI6IHtcclxuXHRcdFx0bWVzc2FnZTogJ1x1N0YyOVx1NzdFRExMTVx1NTIzMEFnZW50XHU3Njg0XHU2NzAwXHU1NDBFXHU0RTAwXHU1MTZDXHU5MUNDJyxcclxuXHRcdFx0Y29weXJpZ2h0OiAnT3Blbk1DUCBBbGwgcmlnaHRzIHJlc2VydmVkJ1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBcdTVERTZcdTRFMEFcdTg5RDJcdTc2ODQgbG9nb1xyXG5cdFx0bG9nbzogJy9pbWFnZXMvb3Blbm1jcC5wbmcnLFxyXG5cdH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLXFxcXHByb2plY3RcXFxcb3Blbm1jcC1kb2N1bWVudFxcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLXFxcXHByb2plY3RcXFxcb3Blbm1jcC1kb2N1bWVudFxcXFwudml0ZXByZXNzXFxcXGNvbnRyaWJ1dG9ycy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSy9wcm9qZWN0L29wZW5tY3AtZG9jdW1lbnQvLnZpdGVwcmVzcy9jb250cmlidXRvcnMudHNcIjtpbnRlcmZhY2UgU29jaWFsRW50cnkge1xyXG4gICAgdHlwZTogJ2dpdGh1YicgfCAndHdpdHRlcicgfCAnZW1haWwnIHwgc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29udHJpYnV0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3ZlcnJpZGluZyBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbnRyaWJ1dG9yIGluIGRlZmF1bHQgbG9jYWxlXHJcbiAgICAgKi9cclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdmVycmlkaW5nIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29udHJpYnV0b3IgaW4gb3RoZXIgbG9jYWxlcyBpZiBuZWVkZWRcclxuICAgICAqL1xyXG4gICAgaTE4bj86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdmVycmlkaW5nIEdpdEh1YiwgR2l0TGFiLCBHaXRlYSB1c2VybmFtZSBvZiB0aGUgY29udHJpYnV0b3JcclxuICAgICAqL1xyXG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdmVycmlkaW5nIGF2YXRhciBvZiB0aGUgY29udHJpYnV0b3JcclxuICAgICAqL1xyXG4gICAgYXZhdGFyPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIGFkZCBhIGxpbmsgdG8gdGhlIGNvbnRyaWJ1dG9yJ3MgcHJvZmlsZVxyXG4gICAgICovXHJcbiAgICBsaW5rcz86IHN0cmluZyB8IFNvY2lhbEVudHJ5W107XHJcbiAgICAvKipcclxuICAgICAqIE1vcmUgbmFtZXMgdG8gYmUgcmVjb2duaXplZCBhcyB0aGUgc2FtZSBjb250cmlidXRvci5cclxuICAgICAqXHJcbiAgICAgKiBVc2VmdWwgd2hlbiB5b3UgY2hhbmdlZCB5b3VyIG5hbWUgb3IgZW1haWwgYWRkcmVzcyBpbiB0aGUgcGFzdC5cclxuICAgICAqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYG1hcEJ5TmFtZUFsaWFzZXNgIGluc3RlYWRcclxuICAgICAqIEBzZWUgbWFwQnlOYW1lQWxpYXNlc1xyXG4gICAgICovXHJcbiAgICBuYW1lQWxpYXNlcz86IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb3JlIG5hbWVzIHRvIGJlIHJlY29nbml6ZWQgYXMgdGhlIHNhbWUgY29udHJpYnV0b3IuXHJcbiAgICAgKlxyXG4gICAgICogVXNlZnVsIHdoZW4geW91IGNoYW5nZWQgeW91ciBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgaW4gdGhlIHBhc3QuXHJcbiAgICAgKi9cclxuICAgIG1hcEJ5TmFtZUFsaWFzZXM/OiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogTW9yZSBlbWFpbHMgdG8gYmUgcmVjb2duaXplZCBhcyB0aGUgc2FtZSBjb250cmlidXRvci5cclxuICAgICAqXHJcbiAgICAgKiBVc2VmdWwgd2hlbiB5b3UgY2hhbmdlZCB5b3VyIGVtYWlsIGFkZHJlc3MgaW4gdGhlIHBhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGBtYXBCeUVtYWlsQWxpYXNlc2AgaW5zdGVhZFxyXG4gICAgICogQHNlZSBtYXBCeUVtYWlsQWxpYXNlc1xyXG4gICAgICovXHJcbiAgICBlbWFpbEFsaWFzZXM/OiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogTW9yZSBlbWFpbHMgdG8gYmUgcmVjb2duaXplZCBhcyB0aGUgc2FtZSBjb250cmlidXRvci5cclxuICAgICAqXHJcbiAgICAgKiBVc2VmdWwgd2hlbiB5b3UgY2hhbmdlZCB5b3VyIGVtYWlsIGFkZHJlc3MgaW4gdGhlIHBhc3QuXHJcbiAgICAgKi9cclxuICAgIG1hcEJ5RW1haWxBbGlhc2VzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250cmlidXRvcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1x1OTUyNlx1NjA2MicsXHJcbiAgICAgICAgbmFtZUFsaWFzZXM6IFsnTFNUTS1LaXJpZ2F5YScsICdLaXJpZ2F5YSddLFxyXG4gICAgICAgIG1hcEJ5RW1haWxBbGlhc2VzOiBbJzExOTM0NjYxNTFAcXEuY29tJ10sXHJcbiAgICAgICAgbGlua3M6IFt7IHR5cGU6ICcnLCBsaW5rOiAnaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9jYW4tbWVuZy16aG9uZy1kZS1jaGUteGlhbicgfV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1BlYWNlU2hlZXAnLFxyXG4gICAgICAgIG5hbWVBbGlhc2VzOiBbJ2xpMTU1Mzc3MDk0NSddLFxyXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS81NTg2NzY1ND92PTQnLFxyXG4gICAgICAgIG1hcEJ5RW1haWxBbGlhc2VzOiBbJzE1NTM3NzA5NDVAcXEuY29tJ10sXHJcbiAgICAgICAgbGlua3M6IFt7IHR5cGU6ICcnLCBsaW5rOiAnaHR0cHM6Ly9wZWFjZXNoZWVwLmNuL2hvbWUnIH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdcdTY2MUZcdTVGMjdcdTY4QTZcdTVGNzEnLFxyXG4gICAgICAgIG5hbWVBbGlhc2VzOiBbJ1N0YXJBcmMnXSxcclxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTE1NTc3OTM2P3Y9NCcsXHJcbiAgICAgICAgbWFwQnlFbWFpbEFsaWFzZXM6IFsnMzk1MTAwMTc2M0BxcS5jb20nXSxcclxuICAgICAgICBsaW5rczogW3sgdHlwZTogJycsIGxpbms6ICdodHRwczovL2IyMy50di9icWZsenVKJyB9XVxyXG4gICAgfVxyXG5dIGFzIENvbnRyaWJ1dG9yW107IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLXFxcXHByb2plY3RcXFxcb3Blbm1jcC1kb2N1bWVudFxcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXGhvb2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtcXFxccHJvamVjdFxcXFxvcGVubWNwLWRvY3VtZW50XFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcaG9va1xcXFxpY29ucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSy9wcm9qZWN0L29wZW5tY3AtZG9jdW1lbnQvLnZpdGVwcmVzcy90aGVtZS9ob29rL2ljb25zLnRzXCI7ZXhwb3J0IGNvbnN0IGN1c3RvbUljb25zID0ge1xyXG5cdHNoYXJlOiB7XHJcblx0XHRzdmc6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTggMTYuMDhjLS43NiAwLTEuNDQuMy0xLjk2Ljc3TDguOTEgMTIuN2MuMDUtLjIzLjA5LS40Ni4wOS0uN3MtLjA0LS40Ny0uMDktLjdsNy4wNS00LjExYy41NC41IDEuMjUuODEgMi4wNC44MSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtMy0zIDEuMzQtMyAzYzAgLjI0LjA0LjQ3LjA5LjdMOC4wNCA5LjgxQzcuNSA5LjMxIDYuNzkgOSA2IDljLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDNjLjc5IDAgMS41LS4zMSAyLjA0LS44MWw3LjEyIDQuMTZjLS4wNS4yMS0uMDguNDMtLjA4LjY1IDAgMS42MSAxLjMxIDIuOTIgMi45MiAyLjkyIDEuNjEgMCAyLjkyLTEuMzEgMi45Mi0yLjkycy0xLjMxLTIuOTItMi45Mi0yLjkyelwiLz48L3N2Zz4nXHJcblx0fSxcclxuICAgIGJpbGliaWxpOiB7XHJcbiAgICAgICAgc3ZnOiAnPHN2ZyB0PVwiMTc0ODU4NDgyNzA3MlwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiNTA0MFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PHBhdGggZD1cIk03NzcuNTE0NjY3IDEzMS42NjkzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMSAwIDc1LjQzNDY2N0w3MjguNzQ2NjY3IDI1NS44MjkzMzNoNDkuOTJBMTYwIDE2MCAwIDAgMSA5MzguNjY2NjY3IDQxNS44NzJ2MzIwYTE2MCAxNjAgMCAwIDEtMTYwIDE2MEgyNDUuMzMzMzMzQTE2MCAxNjAgMCAwIDEgODUuMzMzMzMzIDczNS44NzJ2LTMyMGExNjAgMTYwIDAgMCAxIDE2MC0xNjBoNDkuNzQ5MzM0TDI0Ni40IDIwNy4xNDY2NjdhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMSA3NS4zOTItNzUuNDM0NjY3bDExMy4xNTIgMTEzLjE1MmMzLjM3MDY2NyAzLjM3MDY2NyA2LjE4NjY2NyA3LjA0IDguNDQ4IDEwLjk2NTMzM2gxMzcuMDg4YzIuMjYxMzMzLTMuOTI1MzMzIDUuMTItNy42OCA4LjQ5MDY2Ny0xMS4wMDhsMTEzLjEwOTMzMy0xMTMuMTUyYTUzLjMzMzMzMyA1My4zMzMzMzMgMCAwIDEgNzUuNDM0NjY3IDB6IG0xLjE1MiAyMzEuMjUzMzM0SDI0NS4zMzMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMC01My4yMDUzMzMgNDkuMzY1MzMzbC0wLjEyOCA0LjAxMDY2N3YzMjBjMCAyOC4xMTczMzMgMjEuNzYgNTEuMTU3MzMzIDQ5LjM2NTMzMyA1My4xNjI2NjZsMy45NjggMC4xNzA2NjdoNTMzLjMzMzMzNGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAwIDUzLjIwNTMzMy00OS4zNjUzMzNsMC4xMjgtMy45Njh2LTMyMGMwLTI5LjQ0LTIzLjg5MzMzMy01My4zMzMzMzMtNTMuMzMzMzMzLTUzLjMzMzMzNHogbS00MjYuNjY2NjY3IDEwNi42NjY2NjZjMjkuNDQgMCA1My4zMzMzMzMgMjMuODkzMzMzIDUzLjMzMzMzMyA1My4zMzMzMzR2NTMuMzMzMzMzYTUzLjMzMzMzMyA1My4zMzMzMzMgMCAxIDEtMTA2LjY2NjY2NiAwdi01My4zMzMzMzNjMC0yOS40NCAyMy44OTMzMzMtNTMuMzMzMzMzIDUzLjMzMzMzMy01My4zMzMzMzR6IG0zMjAgMGMyOS40NCAwIDUzLjMzMzMzMyAyMy44OTMzMzMgNTMuMzMzMzMzIDUzLjMzMzMzNHY1My4zMzMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMS0xMDYuNjY2NjY2IDB2LTUzLjMzMzMzM2MwLTI5LjQ0IDIzLjg5MzMzMy01My4zMzMzMzMgNTMuMzMzMzMzLTUzLjMzMzMzNHpcIiBwLWlkPVwiNTA0MVwiPjwvcGF0aD48L3N2Zz4nXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICAgIHN2ZzogJzxzdmcgdD1cIjE3NDg1ODQ4NjAyMTFcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjg4NTBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiPjxwYXRoIGQ9XCJNMzQ0LjQwNzkzNCA0NTMuNjI3MDA0Yy0yOS4xOTg2MTgtNS43OTk3MjUtNTYuMzk3MzMgMTcuNzk5MTU3LTU2LjM5NzMzIDQ3LjU5Nzc0NlY2MDIuMDE5OTc4YzAgMjAuMzk5MDM0IDE0LjE5OTMyOCAzNi43OTgyNTggMzMuMzk4NDE5IDQzLjk5NzkxNyAzNi4zOTgyNzcgMTMuNTk5MzU2IDYyLjU5NzAzNiA0OC43OTc2OSA2Mi41OTcwMzcgODkuOTk1NzM5IDAgNTIuOTk3NDkxLTQyLjk5Nzk2NCA5NS45OTU0NTUtOTUuOTk1NDU2IDk1Ljk5NTQ1NnMtOTUuOTk1NDU1LTQyLjk5Nzk2NC05NS45OTU0NTUtOTUuOTk1NDU2VjI0MC4wMzcxMTZjMC0yNi41OTg3NDEtMjEuMzk4OTg3LTQ3Ljk5NzcyOC00Ny45OTc3MjctNDcuOTk3NzI4SDQ4LjAyMTk2NmMtMjYuNTk4NzQxIDAtNDcuOTk3NzI4IDIxLjM5ODk4Ny00Ny45OTc3MjcgNDcuOTk3NzI4djQ5NS45NzY1MThjMCAxNzguOTkxNTI2IDE2NC4xOTIyMjcgMzIwLjM4NDgzMiAzNDkuOTgzNDMgMjgxLjM4NjY3OCAxMDguNzk0ODQ5LTIyLjc5ODkyMSAxOTYuNTkwNjkzLTExMC43OTQ3NTUgMjE5LjM4OTYxNC0yMTkuMzg5NjEzIDM0Ljc5ODM1My0xNjUuNzkyMTUxLTczLjk5NjQ5Ny0zMTQuMzg1MTE2LTIyNC45ODkzNDktMzQ0LjM4MzY5NXpNNDE4LjAwNDQ1IDAuMDQ4NDc4Yy0xOC4zOTkxMjktMC45OTk5NTMtMzMuOTk4MzkgMTMuNTk5MzU2LTMzLjk5ODM5IDMxLjk5ODQ4NXY2My4xOTcwMDhjMCAxNi45OTkxOTUgMTMuMTk5Mzc1IDMwLjk5ODUzMiAyOS45OTg1NzkgMzEuNzk4NDk0IDI1OC43ODc3NDggMTMuOTk5MzM3IDQ2Ni43Nzc5MDEgMjIzLjk4OTM5NiA0ODEuNzc3MTkxIDQ4Mi45NzcxMzQgMC45OTk5NTMgMTYuNzk5MjA1IDE0Ljk5OTI5IDI5Ljk5ODU4IDMxLjc5ODQ5NSAyOS45OTg1OGg2NC4xOTY5NjFjMTguMzk5MTI5IDAgMzIuOTk4NDM4LTE1LjU5OTI2MSAzMS45OTg0ODUtMzMuOTk4MzlDMTAwNi43NzY1NzUgMjc5LjYzNTI0MSA3NDQuMzg4OTk4IDE3LjI0NzY2MyA0MTguMDA0NDUgMC4wNDg0Nzh6IG0wLjU5OTk3MiAxOTEuOTkwOTFjLTE4LjU5OTExOS0xLjM5OTkzNC0zNC41OTgzNjIgMTMuMzk5MzY2LTM0LjU5ODM2MiAzMi4xOTg0NzZ2NjQuMTk2OTZjMCAxNi43OTkyMDUgMTIuOTk5Mzg1IDMwLjU5ODU1MSAyOS41OTg1OTggMzEuNzk4NDk1IDE1My41OTI3MjggMTIuNTk5NDAzIDI3NS45ODY5MzQgMTM2LjM5MzU0MyAyODkuNzg2MjgxIDI5MC4zODYyNTIgMS41OTk5MjQgMTYuNTk5MjE0IDE1LjE5OTI4IDI5LjM5ODYwOCAzMS43OTg0OTQgMjkuMzk4NjA4aDY0LjM5Njk1MmMxOC41OTkxMTkgMCAzMy41OTg0MDktMTUuOTk5MjQzIDMyLjE5ODQ3NS0zNC41OTgzNjItMTYuNzk5MjA1LTIyMC4xODk1NzUtMTkyLjk5MDg2My0zOTYuMzgxMjM0LTQxMy4xODA0MzgtNDEzLjM4MDQyOXpcIiBwLWlkPVwiODg1MVwiPjwvcGF0aD48L3N2Zz4nXHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVSxPQUFPLGNBQWM7QUFFclYsU0FBUyxjQUFjLG1DQUFtQztBQUMxRCxTQUFTLHlDQUF5QztBQUNsRCxTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLG9CQUFvQjs7O0FDb0R0QixJQUFNLGVBQWU7QUFBQSxFQUN4QjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sYUFBYSxDQUFDLGlCQUFpQixVQUFVO0FBQUEsSUFDekMsbUJBQW1CLENBQUMsbUJBQW1CO0FBQUEsSUFDdkMsT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUFJLE1BQU0sMERBQTBELENBQUM7QUFBQSxFQUN6RjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLGFBQWEsQ0FBQyxjQUFjO0FBQUEsSUFDNUIsUUFBUTtBQUFBLElBQ1IsbUJBQW1CLENBQUMsbUJBQW1CO0FBQUEsSUFDdkMsT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUFJLE1BQU0sNkJBQTZCLENBQUM7QUFBQSxFQUM1RDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLGFBQWEsQ0FBQyxTQUFTO0FBQUEsSUFDdkIsUUFBUTtBQUFBLElBQ1Is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
