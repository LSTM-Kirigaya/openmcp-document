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
                        link: '/plugin-tutorial/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Quick Start',
                        description: 'Understand the basic concept of OpenMCP through an example',
                        icon: 'quick-fill',
                        link: '/plugin-tutorial/quick-start/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP User Guide',
                        description: 'Basic usage of the OpenMCP Client',
                        icon: 'shiyongshouce',
                        link: '/plugin-tutorial/usage/connect-mcp'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'MCP Server Examples',
                        description: 'Examples of MCP servers developed in various languages and models',
                        icon: 'yibangonggongyusuan',
                        link: '/plugin-tutorial/examples/mcp-examples'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'FAQ',
                        description: 'Answers to your questions and solutions to your problems',
                        icon: 'yijianchuli',
                        link: '/plugin-tutorial/faq/help'
                    }
                },
            ]

        },
        { text: 'SDK', link: '/sdk-tutorial/' },
        {
            text: 'More',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Changelog',
                        description: 'View the project update history',
                        icon: 'a-yusuan2',
                        link: '/preview/changelog'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Join OpenMCP',
                        description: 'Learn how to participate in the development and maintenance of OpenMCP',
                        icon: 'shujuzhongxin',
                        link: '/preview/join'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP Contributors',
                        description: 'About the people who contributed to OpenMCP',
                        icon: 'heike',
                        link: '/preview/contributors'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'Resource Channel',
                        description: 'Access resources and information related to the project',
                        icon: 'xinxiang',
                        link: '/preview/channel'
                    }
                }
            ]
        }
    ],
    sidebar: {
        '/plugin-tutorial/': [
            {
                text: 'Overview',
                items: [
                    { text: 'Introduction to OpenMCP', link: '/plugin-tutorial/index' },
                    { text: 'What is MCP?', link: '/plugin-tutorial/what-is-mcp' },
                    { text: 'Basic Concepts of MCP', link: '/plugin-tutorial/concept' }
                ]
            },
            {
                text: 'Quick Start',
                items: [
                    { text: 'Quick Start', link: '/plugin-tutorial/quick-start' },
                    { text: 'Install OpenMCP', link: '/plugin-tutorial/quick-start/acquire-openmcp' },
                    { text: 'Your First MCP', link: '/plugin-tutorial/quick-start/first-mcp' },
                    { text: 'Quick Debugging of MCP', link: '/plugin-tutorial/quick-start/quick-debug' },
                    { text: 'Throw it into an LLM and test it!', link: '/plugin-tutorial/quick-start/put-into-llm' }
                ]
            },
            {
                text: 'User Guide',
                items: [
                    { text: 'UI Color Settings', link: '/plugin-tutorial/usage/ui-color' },
                    { text: 'Connect to MCP Server', link: '/plugin-tutorial/usage/connect-mcp' },
                    { text: 'Debug tools, resources, and prompts', link: '/plugin-tutorial/usage/debug' },
                    { text: 'Connect to LLM', link: '/plugin-tutorial/usage/connect-llm' },
                    { text: 'Test Your MCP with an LLM', link: '/plugin-tutorial/usage/test-with-llm' },
                    { text: 'Connect to Multiple MCP Services', link: '/plugin-tutorial/usage/multi-server' },
                    { text: 'Distribute Experiment Results', link: '/plugin-tutorial/usage/distribute-result' },
                    { text: 'Implement SSE Authenticator', link: '/plugin-tutorial/usage/sse-oauth2' }
                ]
            },
            {
                text: 'Development Examples',
                items: [
                    { text: 'MCP Server Development Examples', link: '/plugin-tutorial/examples/mcp-examples' },
                    { text: 'Example 1: Weather Info MCP in Python (STDIO)', link: '/plugin-tutorial/examples/python-simple-stdio' },
                    { text: 'Example 2: Read-only Neo4j MCP in Go (SSE)', link: '/plugin-tutorial/examples/go-neo4j-sse' },
                    { text: 'Example 3: Read-only Document DB MCP in Java (HTTP)', link: '/plugin-tutorial/examples/java-es-http' },
                    { text: 'Example 4: Super Web Crawler MCP in TypeScript using crawl4ai (STDIO)', link: '/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
                    { text: 'Example 5: Generic Form Filling MCP in Python (STDIO)', link: '/plugin-tutorial/examples/python-form-stdio' },
                    { text: 'Example 6: Blender-based MCP in Python (STDIO)', link: '/plugin-tutorial/examples/python-blender-stdio' },
                    { text: 'Example 7: Cadence EDA MCP in Python (STDIO)', link: '/plugin-tutorial/examples/python-cadence-stdio' }
                ]
            },
            {
                text: 'FAQ',
                items: [
                    { text: 'Help', link: '/plugin-tutorial/faq/help' }
                ]
            }
        ],
        '/sdk-tutorial/': [
            {
                text: 'Introduction',
                items: [
                    { text: 'openmcp-sdk', link: '/sdk-tutorial/' },
                    { text: 'Installation', link: '/sdk-tutorial/install' },
                ]
            },
            {
                text: 'Basic Usage',
                items: [
                    { text: 'Simple Chat', link: '/sdk-tutorial/usage/basic' },
                    { text: 'Multi-turn Conversation', link: '/sdk-tutorial/usage/send-multi-message' },
                    { text: 'Setting Parameters', link: '/sdk-tutorial/usage/setting' },
                ]
            },
            {
                text: 'MCP',
                items: [
                    { text: 'Quick Deployment', link: '/sdk-tutorial/usage/fast-deploy' },
                    { text: 'Task Loop Control', link: '/sdk-tutorial/usage/task-loop' },
                    { text: 'Connect Multiple MCP Servers', link: '/sdk-tutorial/usage/multi-server' },
                    { text: 'Human-in-the-Loop (HIL)', link: '/sdk-tutorial/usage/hil' },
                ]
            }
        ]
    }
}
