# Implementing OAuth Authentication for MCP Servers

When using **SSE** or **Streamable HTTP** connections, implementing authentication mechanisms is recommended for enhanced security. MCP officially recommends using the OAuth protocol. This guide demonstrates how to debug OAuth-authenticated APIs using openmcp-client, using GitHub user information as an example.

## 1. Obtain GitHub OAuth Credentials

To access GitHub user APIs, you'll need to create an OAuth application:

1. Visit [GitHub Developers](https://github.com/settings/developers)
2. Click `New OAuth App`
3. Enter any application name
4. Set `Homepage URL` to `http://localhost:8000`
5. Set `Authorization callback URL` to `http://localhost:8000/github/callback`
6. Click `Register application`

![](images/oauth-github-new-application.png)

After registration:
- Save your `Client ID`
- Click `Generate a new client secret` (note: secrets are only visible once at generation)

## 2. Configure Environment Variables

Set your credentials as environment variables:

::: code-group
```bash [bash]
export MCP_GITHUB_CLIENT_ID={{Client ID}}
export MCP_GITHUB_CLIENT_SECRET={{secret}}
```

```powershell [PowerShell]
$env:MCP_GITHUB_CLIENT_ID = "your_id"
$env:MCP_GITHUB_CLIENT_SECRET = "your_secret"
```

```cmd [CMD]
set MCP_GITHUB_CLIENT_ID={{Client ID}}
set MCP_GITHUB_CLIENT_SECRET={{secret}}
:::

> Note: Avoid quotes when setting variables in CMD

## 3. Clone Reference Implementation

Deploy an OAuth-enabled MCP server using the [official Python example](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-auth):

```bash
git clone https://github.com/modelcontextprotocol/python-sdk/
cd examples/servers/simple-auth
```

## 4. Launch MCP Server

1. Create a virtual environment
2. Install dependencies
3. Run with `uv` or `python main.py`

> Important: Environment variables must be set first to avoid `2 validation errors for ServerSettings`

## 5. Connect with openmcp-client

Connect to your server via web or VSCode:

1. Click "+" to add connection
2. Set URL based on server's transport:
   - SSE: `http://localhost:8000/sse`
   - Streamable HTTP: `http://localhost:8000/mcp`
3. Leave auth signature blank

On first connection, a browser window will open for OAuth authentication. After successful auth, the window will automatically close.

![](images/oauth-github-success.png)

Once authenticated, access the `get_user_profile` tool to retrieve your GitHub profile:

![](images/oauth-github-tool.png)