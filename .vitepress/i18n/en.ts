export default {
    nav: [
        { text: 'Home', link: '/' },
        {
            text: 'Tutorials',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Introduction',
                        description: 'What you need to know about MCP and OpenMCP...',
                        icon: 'openmcp',
                        link: '/en/plugin-tutorial/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Quick Start',
                        description: 'Understand the basic concept of OpenMCP through an example',
                        icon: 'quick-fill',
                        link: '/en/plugin-tutorial/quick-start/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP User Guide',
                        description: 'Basic usage of the OpenMCP Client',
                        icon: 'shiyongshouce',
                        link: '/en/plugin-tutorial/usage/connect-mcp'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'MCP Server Examples',
                        description: 'Examples of MCP servers developed in various languages and models',
                        icon: 'yibangonggongyusuan',
                        link: '/en/plugin-tutorial/examples/mcp-examples'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'FAQ',
                        description: 'Answers to your questions and solutions to your problems',
                        icon: 'yijianchuli',
                        link: '/en/plugin-tutorial/faq/help'
                    }
                },
            ]

        },
        { text: 'SDK', link: '/en/sdk-tutorial/' },
        {
            text: 'More',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Changelog',
                        description: 'View the project update history',
                        icon: 'a-yusuan2',
                        link: '/en/preview/changelog'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Join OpenMCP',
                        description: 'Learn how to participate in the development and maintenance of OpenMCP',
                        icon: 'shujuzhongxin',
                        link: '/en/preview/join'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP Contributors',
                        description: 'About the people who contributed to OpenMCP',
                        icon: 'heike',
                        link: '/en/preview/contributors'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Resource Channel',
                        description: 'Access resources and information related to the project',
                        icon: 'xinxiang',
                        link: '/en/preview/channel'
                    }
                }
            ]
        }
    ],
    sidebar: {
        '/en/plugin-tutorial/': [
            {
                text: 'Overview',
                items: [
                    { text: 'Introduction to OpenMCP', link: '/en/plugin-tutorial/index' },
                    { text: 'What is MCP?', link: '/en/plugin-tutorial/what-is-mcp' },
                    { text: 'Basic Concepts of MCP', link: '/en/plugin-tutorial/concept' }
                ]
            },
            {
                text: 'Quick Start',
                items: [
                    { text: 'Quick Start', link: '/en/plugin-tutorial/quick-start' },
                    { text: 'Install OpenMCP', link: '/en/plugin-tutorial/quick-start/acquire-openmcp' },
                    { text: 'Your First MCP', link: '/en/plugin-tutorial/quick-start/first-mcp' },
                    { text: 'Quick Debugging of MCP', link: '/en/plugin-tutorial/quick-start/quick-debug' },
                    { text: 'Throw it into an LLM and test it!', link: '/en/plugin-tutorial/quick-start/put-into-llm' }
                ]
            },
            {
                text: 'User Guide',
                items: [
                    { text: 'UI Color Settings', link: '/en/plugin-tutorial/usage/ui-color' },
                    { text: 'Connect to MCP Server', link: '/en/plugin-tutorial/usage/connect-mcp' },
                    { text: 'Debug tools, resources, and prompts', link: '/en/plugin-tutorial/usage/debug' },
                    { text: 'Connect to LLM', link: '/en/plugin-tutorial/usage/connect-llm' },
                    { text: 'Test Your MCP with an LLM', link: '/en/plugin-tutorial/usage/test-with-llm' },
                    { text: 'Connect to Multiple MCP Services', link: '/en/plugin-tutorial/usage/multi-server' },
                    { text: 'Distribute Experiment Results', link: '/en/plugin-tutorial/usage/distribute-result' },
                    { text: 'Implement SSE Authenticator', link: '/en/plugin-tutorial/usage/sse-oauth2' }
                ]
            },
            {
                text: 'Development Examples',
                items: [
                    { text: 'MCP Server Development Examples', link: '/en/plugin-tutorial/examples/mcp-examples' },
                    { text: 'Example 1: Weather Info MCP in Python (STDIO)', link: '/en/plugin-tutorial/examples/python-simple-stdio' },
                    { text: 'Example 2: Read-only Neo4j MCP in Go (SSE)', link: '/en/plugin-tutorial/examples/go-neo4j-sse' },
                    { text: 'Example 3: Read-only Document DB MCP in Java (HTTP)', link: '/en/plugin-tutorial/examples/java-es-http' },
                    { text: 'Example 4: Super Web Crawler MCP in TypeScript using crawl4ai (STDIO)', link: '/en/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
                    { text: 'Example 5: Generic Form Filling MCP in Python (STDIO)', link: '/en/plugin-tutorial/examples/python-form-stdio' },
                    { text: 'Example 6: Blender-based MCP in Python (STDIO)', link: '/en/plugin-tutorial/examples/python-blender-stdio' },
                    { text: 'Example 7: Cadence EDA MCP in Python (STDIO)', link: '/en/plugin-tutorial/examples/python-cadence-stdio' }
                ]
            },
            {
                text: 'FAQ',
                items: [
                    { text: 'Help', link: '/en/plugin-tutorial/faq/help' }
                ]
            }
        ],
        '/en/sdk-tutorial/': [
            {
                text: 'Overview',
                items: [
                    { text: 'openmcp‑sdk.js', link: '/en/sdk-tutorial/' }
                ]
            },
            {
                text: 'Basic Usage',
                items: [
                    { text: 'Simplest Conversation', link: '/en/sdk-tutorial/usage/greet' },
                    { text: 'Task Loop', link: '/en/sdk-tutorial/usage/task-loop' },
                    { text: 'Multiple Server Connections', link: '/en/sdk-tutorial/usage/multi-server' }
                ]
            }
        ]
    }
}
