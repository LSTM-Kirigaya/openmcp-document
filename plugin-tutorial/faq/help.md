
## layout: doc

# FAQ

## Error Code Explanation

### 32000 - MCP Connection Failed

MCP connection failure can have multiple causes. Here are some common situations:

• **Virtual Environment Path Mismatch**

A mismatch between the virtual environment (venv) and the entry file path is one of the common reasons for connection failure.

For detailed solutions, please refer to: [Configuration Guide](./venv-not-same-path.md)

---

• **Other Possible Causes**

* Port is occupied
* Environment variables are misconfigured
* Dependencies are not properly installed

> If you encounter the above issues, please first check the error logs for more details. If the problem persists, you can seek help on [GitHub Issues](https://github.com/LSTM-Kirigaya/openmcp-client/issues).
