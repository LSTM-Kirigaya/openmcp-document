# MCP Basic Concepts

## Foreword

In the [[what-is-mcp|previous article]], we briefly introduced the definition of MCP and its basic organizational structure. As developers, what we need to focus on is how to customize the development of the MCP server based on our own business and scenario needs. This way, after directly connecting to any MCP client, we can provide the large model with the customized interaction capabilities we have developed.

Before we officially start teaching you how to develop your own MCP server, I think it might be necessary to clarify a few basic concepts.

## Resources, Prompts, and Tools

In the [MCP Client Protocol](https://modelcontextprotocol.io/clients), three very important capability categories in the MCP protocol are mentioned:

* Resources: Customized requests and access to local resources, which can be file systems, databases, files in the current code editor, etc., essentially **static resources** that web apps cannot access. Additional resources will enrich the context sent to the large model, allowing AI to give us more accurate responses.
* Prompts: Customized prompts that AI can adopt in certain scenarios. For example, if AI needs to return certain formatted content, custom prompts can be provided.
* Tools: Tools available for AI use. These must be functions, such as booking a hotel, opening a webpage, or turning off a lamp—these encapsulated functions can be a tool. The large model will use these tools via function calling. Tools will allow AI to directly operate our computer and even interact with the real world.

For those with front-end and back-end development experience, you can think of Resources as "read-only permissions granted to the large model" and Tools as "read-write permissions granted to the large model."

MCP clients (such as Claude Desktop, 5ire, etc.) have already implemented the front-end logic for the above. However, what resources and tools to provide requires each developer’s imagination. In other words, we need to develop rich and diverse MCP Servers to enable the large model to perform more interesting tasks.

However, one thing to note is that almost all large models currently use the OpenAI protocol as the access point for connecting to the large model. What does the OpenAI protocol mean?

## OpenAI Protocol

When developing an app using Python or TypeScript, we often install a library named OpenAI, where you fill in the model vendor, base URL of the model, and the type of model to directly access the large model. The various model providers must also support this library and protocol.

For example, to access the Deepseek service in Python, we can do it like this:

```python
from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

If you go into the `create` function, you will see that the OpenAI protocol requires a lot of features to be supported by the model provider:

```python
    @overload
    def create(
        self,
        *,
        messages: Iterable[ChatCompletionMessageParam],
        model: Union[str, ChatModel],
        audio: Optional[ChatCompletionAudioParam] | NotGiven = NOT_GIVEN,
        frequency_penalty: Optional[float] | NotGiven = NOT_GIVEN,
        function_call: completion_create_params.FunctionCall | NotGiven = NOT_GIVEN,
        functions: Iterable[completion_create_params.Function] | NotGiven = NOT_GIVEN,
        logit_bias: Optional[Dict[str, int]] | NotGiven = NOT_GIVEN,
        logprobs: Optional[bool] | NotGiven = NOT_GIVEN,
        max_completion_tokens: Optional[int] | NotGiven = NOT_GIVEN,
        max_tokens: Optional[int] | NotGiven = NOT_GIVEN,
        metadata: Optional[Metadata] | NotGiven = NOT_GIVEN,
        modalities: Optional[List[Literal["text", "audio"]]] | NotGiven = NOT_GIVEN,
        n: Optional[int] | NotGiven = NOT_GIVEN,
        parallel_tool_calls: bool | NotGiven = NOT_GIVEN,
        prediction: Optional[ChatCompletionPredictionContentParam] | NotGiven = NOT_GIVEN,
        presence_penalty: Optional[float] | NotGiven = NOT_GIVEN,
        reasoning_effort: Optional[ReasoningEffort] | NotGiven = NOT_GIVEN,
        response_format: completion_create_params.ResponseFormat | NotGiven = NOT_GIVEN,
        seed: Optional[int] | NotGiven = NOT_GIVEN,
        service_tier: Optional[Literal["auto", "default"]] | NotGiven = NOT_GIVEN,
        stop: Union[Optional[str], List[str], None] | NotGiven = NOT_GIVEN,
        store: Optional[bool] | NotGiven = NOT_GIVEN,
        stream: Optional[Literal[False]] | NotGiven = NOT_GIVEN,
        stream_options: Optional[ChatCompletionStreamOptionsParam] | NotGiven = NOT_GIVEN,
        temperature: Optional[float] | NotGiven = NOT_GIVEN,
        tool_choice: ChatCompletionToolChoiceOptionParam | NotGiven = NOT_GIVEN,
        tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN,
        top_logprobs: Optional[int] | NotGiven = NOT_GIVEN,
        top_p: Optional[float] | NotGiven = NOT_GIVEN,
        user: str | NotGiven = NOT_GIVEN,
        web_search_options: completion_create_params.WebSearchOptions | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

From the above signature, you should see several familiar parameters like `temperature` and `top_p`. Many large model software expose these parameters for adjustment. For example, in 5ire, the content randomness is displayed graphically as the `temperature` parameter.

<div align=center>
<img src="https://picx.zhimg.com/80/v2-9f8544aa917e8c128fc194adeb7161cd_1440w.png" style="width: 100%;"/>
</div>

As you can see, a simple invocation involves many adjustable parameters. Among all these parameters, you can notice one called `tools`:

```python
    @overload
    def create(
        self,
        *,
        messages: Iterable[ChatCompletionMessageParam],
        model: Union[str, ChatModel],
        audio: Optional[ChatCompletionAudioParam] | NotGiven = NOT_GIVEN,

		# Look here
        tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

## tool\_calls Field

In the OpenAI protocol above, there is a parameter called `tools`. This requires the large model provider to support the function calling feature, i.e., we provide a description of a set of tools (which is fully compatible with the MCP protocol). When `tools` is not empty, the value returned by the chat function will include a special field `tool_calls`. We can run the code I wrote to allow the large model to query the weather:

```python
from openai import OpenAI

client = OpenAI(
	api_key="Deepseek API",
	base_url="https://api.deepseek.com"
)

# Define tools (functions/tool list)
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the weather for a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City, e.g., Hangzhou, Beijing, Shanghai",
                    }
                },
                "required": ["location"],
            },
        },
    }
]

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful AI"},
        {"role": "user", "content": "What’s the weather in Hangzhou today?"},
    ],
    tools=tools,  # Pass the tools parameter
    tool_choice="auto",  # Optional: control whether to force a specific tool call
    stream=False,
)

print(response.choices[0].message)
```

Running the above code, the return will be as follows:

```python
ChatCompletionMessage(
	content='',
	refusal=None,
	role='assistant',
	annotations=None,
	audio=None,
	function_call=None,
	tool_calls=[
		ChatCompletionMessageToolCall(
			id='call_0_baeaba2b-739d-40c2-aa6c-1e61c6d7e855',
			function=Function(
				arguments='{"location":"Hangzhou"}',
				name='get_current_weather'
			),
			type='function',
			index=0
		)
	]
)
```

As you can see, the `tool_calls` shows how the large model wants to use the tools we provided. One thing to note is that due to context limitations, the maximum number of tools a large model
