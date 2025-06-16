# Distributing Your Experiment Results

## Tab Restoration

OpenMCP automatically saves your experiment results in real-time. For each active server in the workspace, results are stored in `.openmcp/tabs.{server-name}.json`, where `{server-name}` matches the successfully connected MCP server's name.

Ensure your `.gitignore` file doesn't contain rules excluding the `.openmcp` folder. This way, when you:
- Commit code via Git
- Manage agent code
- Clone the project on another machine
- Share the project with others

...you can instantly restore your previous experiment context to continue development or debugging.

## Connection Recovery

Each MCP server's connection details are saved in `.openmcp/connection.json`. Example:

```json
{
  "items": [
    [
      {
        "connectionType": "STDIO",
        "command": "mcp",
        "args": [
          "run",
          "main.py"
        ],
        "url": "",
        "cwd": "{workspace}/simple-mcp",
        "oauth": "",
        "clientName": "openmcp.connect.STDIO",
        "clientVersion": "0.0.1",
        "env": {},
        "serverInfo": {
          "name": "Jinhui's MCP Server",
          "version": "1.9.2"
        },
        "filePath": "{workspace}/simple-mcp/main.py",
        "name": "Jinhui's MCP Server",
        "version": "1.9.2"
      }
    ]
  ]
}
```

When you:
- Open the left control panel, or
- Access a previously connected MCP server

OpenMCP automatically uses this information to:
1. Retrieve the workspace's server list
2. Attempt automatic reconnection

If OpenMCP encounters initialization or save errors during connection, you can:
1. Contact OpenMCP official support, or
2. Manually manage the `.openmcp/connection.json` file