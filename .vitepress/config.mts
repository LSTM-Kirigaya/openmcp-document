import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenMCP",
  description: "为开发者和科研人员准备的MCP开发环境和SDK",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '缩短LLM到Agent的最后一公里'
    },
    
    // 添加右侧图片配置
    logo: '/openmcp.png',  // 确保图片放在public目录下
  }
})
