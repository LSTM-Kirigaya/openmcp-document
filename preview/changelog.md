
# Change Log

## [main] 0.1.1

* Fixed some bugs when connecting to Ubuntu via SSH
* Fixed the issue where the initialization parameters were incorrect when clicking openmcp to connect to a Python project
* Removed the service-level MCP connection reuse technique to prevent connection refresh issues
* Fixed a bug where debug options could not be selected on the welcome screen after connection

## [main] 0.1.0

* New Feature: Support for connecting to multiple MCP servers simultaneously
* New Feature: Updated protocol to support Streamable HTTP, which will gradually replace SSE connection method
* Implemented issue #16: Special support for Python projects created by uv, automatically initializing the project and directing MCP to `.venv/bin/mcp` so that global MCP installation is no longer required
* Special support for npm-created js/ts projects: Automatically initializes the project
* Removed the "websearch" setting, added the "parallel\_tool\_calls" setting, with the default set to true, allowing the model to call multiple tools in a single round of response
* Refactored the OpenMCP connection module infrastructure, creating a more detailed logging system for connection modules
* Implemented issue #15: Unable to copy
* Implemented issue #14: Added a log clearing button

## [main] 0.0.9

* Fixed the bug introduced in version 0.0.8 where the system prompt returned an index instead of the real content
* Tested the new release pipeline

## [main] 0.0.8

* More complete error reporting when testing large model APIs
* Fixed the bug introduced in version 0.0.7 where conversation messages could not be sent
* Fixed the bug where rich-text editor pasted content retained styles
* Fixed the bug where sending a character with an empty prefix in the rich-text editor resulted in the content being empty
* Fixed the bug where function calling in streamable transfers caused JSON schema deserialization failure due to multi-tool index streaming
* Fixed the bug where large models returned a lot of repeated error messages
* New Feature: Support calling multiple tools in a single conversation
* UI: Optimized the code highlighting scrollbar
* New Feature: Resources/list protocol content now renders directly upon click without needing to be resent
* New Feature: JSON format support for highlighting results from resources, prompts, and tools

## [main] 0.0.7

* Optimized page layout to display more content in the debug window
* Increased default context length from 10 to 20
* Added "General Options" -> "MCP Tool Max Call Duration (sec)"
* Added support for rich-text input, allowing prompts and resources to be embedded for large-scale prompt engineering debugging

## [main] 0.0.6

* Fixed the issue of saving failure caused by special characters in the server name
* In plugin mode, the "MCP Connections (Workspace)" view in the left management panel now supports CRUD operations
* Added "Installed MCP Servers" for installing global MCP servers
* Added a guide page
* Fixed the issue of offline OCR not working
* Fixed the issue of global MCP server name not updating

## [main] 0.0.5

* Supported managing already opened file projects
* Supported saving debugging work related to user servers
* Supported continuous tool calls and error warnings display
* Implemented a small local object database for persisting multimedia data generated during conversations
* Supported one-click reproduction of call results
* Supported modifying intermediate results
* Supported saving and modifying system prompts

## [main] 0.0.4

* Fixed the bug where selecting a model and clicking confirm would revert back to DeepSeek
* Fixed the bug where MCP project initialization clicked tools were all empty
* Fixed the bug where reconnection was not possible
* Supported custom third-party OpenAI-compatible model services

## [main] 0.0.3

* Added cost statistics for each message
* Fixed the bug where the initial page route not being set to "debug" led to a blank page

## [main] 0.0.2

* Optimized page layout
* Fixed the bug where tabs would not display after update
* Fixed the bug where pressing Enter in input components led to a black screen
* Made development scripts more complete and convenient

## [main] 0.0.1

* Completed basic OpenMCP inspector functionality
* Completed configuration loading, saving, and large model settings
* Completed automatic tab saving
* Completed large model conversation window and tool calls
* Completed support for VSCode and Trae
