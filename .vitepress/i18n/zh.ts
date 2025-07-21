export default {
    nav: [
        { text: '首页', link: '/zh/' },
        {
            text: '教程',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: '简介',
                        description: '关于 mcp 和 openmcp，阁下需要知道的 ...',
                        icon: 'openmcp',
                        link: '/zh/plugin-tutorial/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: '快速开始',
                        description: '通过一个例子快速了解 OpenMCP 的基本概念',
                        icon: 'quick-fill',
                        link: '/zh/plugin-tutorial/quick-start/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP 使用手册',
                        description: 'OpenMCP Client 的基本使用',
                        icon: 'shiyongshouce',
                        link: '/zh/plugin-tutorial/usage/connect-mcp'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'MCP 服务器开发案例',
                        description: '使用不同语言开发的不同模式的 MCP 服务器',
                        icon: 'yibangonggongyusuan',
                        link: '/zh/plugin-tutorial/examples/mcp-examples'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'FAQ',
                        description: '为您答疑解惑，排忧解难',
                        icon: 'yijianchuli',
                        link: '/zh/plugin-tutorial/faq/help'
                    }
                },
            ]
        },
        { text: 'SDK', link: '/zh/sdk-tutorial/' },
        {
            text: '更多',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: '更新日志',
                        description: '查看项目的更新历史记录',
                        icon: 'a-yusuan2',
                        link: '/zh/preview/changelog'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: '参与 OpenMCP',
                        description: '了解如何参与 OpenMCP 项目的开发和维护',
                        icon: 'shujuzhongxin',
                        link: '/zh/preview/join'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP 贡献者列表',
                        description: '关于参与 OpenMCP 的贡献者们',
                        icon: 'heike',
                        link: '/zh/preview/contributors'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: '资源频道',
                        description: '获取项目相关的资源和信息',
                        icon: 'xinxiang',
                        link: '/zh/preview/channel'
                    }
                }
            ]
        },
    ],
    sidebar: {
        '/zh/plugin-tutorial/': [
            {
                text: '简介',
                items: [
                    { text: 'OpenMCP 概述', link: '/zh/plugin-tutorial/index' },
                    { text: '什么是 MCP？', link: '/zh/plugin-tutorial/what-is-mcp' },
                    { text: 'MCP 基础概念', link: '/zh/plugin-tutorial/concept' },
                ]
            },
            {
                text: '快速开始',
                items: [
                    { text: '快速开始', link: '/zh/plugin-tutorial/quick-start' },
                    { text: '安装 OpenMCP', link: '/zh/plugin-tutorial/quick-start/acquire-openmcp' },
                    { text: '你的第一个 MCP', link: '/zh/plugin-tutorial/quick-start/first-mcp' },
                    { text: '快速调试 MCP', link: '/zh/plugin-tutorial/quick-start/quick-debug' },
                    { text: '扔进大模型里面测测好坏！', link: '/zh/plugin-tutorial/quick-start/put-into-llm' },
                ]
            },
            {
                text: '使用手册',
                items: [
                    { text: 'UI 配色', link: '/zh/plugin-tutorial/usage/ui-color' },
                    { text: '连接 MCP 服务器', link: '/zh/plugin-tutorial/usage/connect-mcp' },
                    { text: 'MCP 基础调试', link: '/zh/plugin-tutorial/usage/debug' },
                    { text: 'MCP 工具自检程序', link: '/zh/plugin-tutorial/usage/self-check' },
                    { text: '连接大模型', link: '/zh/plugin-tutorial/usage/connect-llm' },
                    { text: 'MCP 交互测试', link: '/zh/plugin-tutorial/usage/test-with-llm' },
                    { text: '连接多个 MCP 服务', link: '/zh/plugin-tutorial/usage/multi-server' },
                    { text: '分发实验结果', link: '/zh/plugin-tutorial/usage/distribute-result' },
                    { text: 'SSE 鉴权器实现', link: '/zh/plugin-tutorial/usage/sse-oauth2' },
                ]
            },
            {
                text: '开发案例',
                items: [
                    { text: 'MCP 服务器开发案例', link: '/zh/plugin-tutorial/examples/mcp-examples' },
                    // { text: '例子 1. python 实现天气信息 mcp 服务器 (STDIO)', link: '/zh/plugin-tutorial/examples/python-simple-stdio' },
                    // { text: '例子 2. go 实现 neo4j 的只读 mcp 服务器 (SSE)', link: '/zh/plugin-tutorial/examples/go-neo4j-sse' },
                    // { text: '例子 3. java 实现文档数据库的只读 mcp (HTTP)', link: '/zh/plugin-tutorial/examples/java-es-http' },
                    // { text: '例子 4. typescript 实现基于 crawl4ai 的超级网页爬虫 mcp (STDIO)', link: '/zh/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
                    // { text: '例子 5. python 实现进行通用表单填充 的 mcp (STDIO)', link: '/zh/plugin-tutorial/examples/python-form-stdio' },
                    // { text: '例子 6. python 实现基于 blender 的 mcp (STDIO)', link: '/zh/plugin-tutorial/examples/python-blender-stdio' },
                    // { text: '例子 7. python 实现 cadence EDA 的 mcp (STDIO)', link: '/zh/plugin-tutorial/examples/python-cadence-stdio' },
                ]
            },
            {
                text: 'FAQ',
                items: [
                    { text: '帮助', link: '/zh/plugin-tutorial/faq/help' },
                ]
            }
        ],
        '/zh/sdk-tutorial/': [
            {
                text: '简介',
                items: [
                    { text: 'openmcp‑sdk', link: '/zh/sdk-tutorial/' },
                    { text: '安装', link: '/zh/sdk-tutorial/install' },
                ]
            },
            {
                text: '基本使用',
                items: [
                    { text: '最简单的对话', link: '/zh/sdk-tutorial/usage/basic' },
                    { text: '多轮对话', link: '/zh/sdk-tutorial/usage/send-multi-message' },
                    { text: '设置对话参数', link: '/zh/sdk-tutorial/usage/setting' },
                ]
            },
            {
                text: 'MCP',
                items: [
                    { text: '极速部署', link: '/zh/sdk-tutorial/usage/fast-deploy' },
                    { text: '任务循环的控制', link: '/zh/sdk-tutorial/usage/task-loop' },
                    { text: '连接多个 MCP 服务器', link: '/zh/sdk-tutorial/usage/multi-server' },
                    { text: '人机交互', link: '/zh/sdk-tutorial/usage/hil' },
                ]
            }
        ]
    }
}