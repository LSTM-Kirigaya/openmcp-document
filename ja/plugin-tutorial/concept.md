# MCP 基本概念

## はじめに

[[what-is-mcp|前回の記事]]では、MCPの定義と基本的な組織構造について簡単に紹介しました。開発者として最も注目すべきは、自社の業務とシナリオに基づいて必要なMCPサーバーをカスタマイズ開発する方法です。これにより、任意のMCPクライアントに直接接続して、カスタマイズされたインタラクション能力を大規模モデルに提供できます。

MCPサーバーの開発方法を説明する前に、いくつかの基本概念を明確にしておく必要があると思います。

## Resources、Prompts、Tools

[MCPクライアントプロトコル](https://modelcontextprotocol.io/clients)では、MCPプロトコルの3つの重要な能力カテゴリについて説明されています：

- Resouces：ローカルリソースをカスタマイズしてリクエスト・アクセスする機能。ファイルシステム、データベース、現在のコードエディタ内のファイルなど、ウェブアプリでは通常アクセスできない**静的リソース**を指します。追加のresourcesは大規模モデルに送信されるコンテキストを豊富にし、AIからより正確な回答を得られます。
- Prompts：特定のシナリオでAIが採用可能なプロンプトをカスタマイズします。例えば、AIに特定のフォーマットで内容を返させる必要がある場合、カスタムプロンプトを提供できます。
- Tools：AIが使用できるツールで、関数である必要があります。ホテルの予約、ウェブページの開閉、照明のオンオフなどのカプセル化された関数がtoolとなります。大規模モデルはfunction callingの方法でこれらのtoolsを使用します。Toolsにより、AIが直接コンピュータを操作したり、現実世界とインタラクションしたりできるようになります。

フロントエンド・バックエンド開発経験のある方は、Resoucesを「大規模モデルに付与する追加の読み取り専用権限」、Toolsを「大規模モデルに付与する追加の読み書き権限」と考えることができます。

MCPクライアント（Claude Desktop、5ireなど）は既に上記のフロントエンドロジックを実装しています。具体的にどのようなリソースやツールを提供するかは、開発者の想像力次第です。つまり、多彩なMCP Serverを開発することで、大規模モデルにより興味深い作業を行わせることができます。

ただし、現在ほぼすべての大規模モデルはopenaiプロトコルをアクセスポイントとして採用している点に注意が必要です。openaiプロトコルとは何でしょうか？

## openaiプロトコル

PythonやTypeScriptでアプリを開発する際、通常はopenaiという名前のライブラリをインストールし、使用するモデルベンダー、モデルのベースURL、使用するモデルタイプを入力して大規模モデルに直接アクセスします。各モデルプロバイダーもこのライブラリとプロトコルをサポートする必要があります。

例えばPythonでdeepseekのサービスにアクセスする場合、次のようにできます：

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

このcreate関数の中身を見ると、openaiプロトコルが大規模モデルプロバイダーに要求する機能が非常に多いことがわかります：

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
        # 以下の引数は、kwargsを介して利用できない追加のAPIパラメータを渡す必要がある場合に使用します。
        # ここで指定された追加の値は、クライアントで定義された値やこのメソッドに渡された値よりも優先されます。
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

上記のシグネチャから、`temperature`や`top_p`など、いくつか見覚えのあるパラメータが確認できます。多くの大規模モデル使用ソフトウェアでは、このパラメータを調整できるようになっています。例えば5ireでは、コンテンツのランダム性は`temperature`パラメータのグラフィカル表示です。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-9f8544aa917e8c128fc194adeb7161cd_1440w.png" style="width: 100%;"/>
</div>

実際、ご覧の通り、普通の呼び出しに関わる調整可能なパラメータは非常に多岐にわたります。すべてのパラメータの中で、`tools`というパラメータに注目してください：

```python
    @overload
    def create(
        self,
        *,
        messages: Iterable[ChatCompletionMessageParam],
        model: Union[str, ChatModel],
        audio: Optional[ChatCompletionAudioParam] | NotGiven = NOT_GIVEN,

		# ここを見て
        tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

## tool_callsフィールド

上記のopenaiプロトコルには、toolsというパラメータがあります。toolsは、大規模モデルプロバイダーがfunction callingという特性をサポートする必要があることを意味します（MCPプロトコルと完全互換）。toolsが空でない場合、chat関数の戻り値には特別なフィールド`tool_calls`が含まれます。以下は、私が作成した天気を問い合わせるコードです：

```python
from openai import OpenAI

client = OpenAI(
	api_key="Deepseek API",
	base_url="https://api.deepseek.com"
)

# tools（関数/ツールリスト）を定義
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "指定された場所の天気を取得",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "都市、例えば杭州、北京、上海",
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
        {"role": "system", "content": "あなたは役立つAIです"},
        {"role": "user", "content": "今日の杭州の天気は？"},
    ],
    tools=tools,  # toolsパラメータを渡す
    tool_choice="auto",  # オプション：特定のツールの呼び出しを強制するかどうかを制御
    stream=False,
)

print(response.choices[0].message)
```

上記のコードを実行すると、次のような戻り値が得られます：

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
				arguments='{"location":"杭州"}',
				name='get_current_weather'
			),
			type='function',
			index=0
		)
	]
)
```

上記の`tool_calls`から、大規模モデルが提供されたツールをどのように使用したいかがわかります。注意点として、コンテキストの制限により、現在1つの質問で大規模モデルが呼び出せるツールの上限は通常100個を超えません。これは大規模モデルプロバイダーのコンテキストサイズに関係します。あ、そうそう、友情提示ですが、MCPクライアントで大規模モデルを使用して問題を解決する際、同時にアクティブなMCP Serverが多いほど、消費されるtokenも多くなりますよ :D

現在のopenaiプロトコルでは、toolsは関数クラスの呼び出しのみをサポートしています。関数クラスの呼び出しは、Resourcesの効果をシミュレートできる場合があります。例えばリソースを取得する場合、それをtoolとして記述できます。したがって、通常の場合、MCP Serverを開発する際は、Toolsのみを開発するのが最善です。他の2つの機能はまだ広くサポートされていません。

## Inspectorを使用したデバッグ

Claudeがネイティブで提供するMCPプロトコルは、公式が提供するInspectorでデバッグできます。[[first-mcp|最初のMCP]]の例では、次のようにデバッグできます。コマンドラインで次のコマンドを入力してInspectorを起動します：

```bash
mcp dev main.py
```

これによりフロントエンドサーバーが起動し、`http://localhost:5173/`を開くとinspectorのデバッグインターフェースが表示されます。まず左側の`Connect`をクリックしてserver.pyを実行し、stdioを通信パイプとして使用してwebと通信を確立します。

さあ、楽しくデバッグを始められます。Inspectorは主に3つのセクションを提供し、それぞれResources、Prompts、Toolsに対応しています。

まずResourcesを見てみましょう。「Resource Templates」をクリックすると、登録されているすべてのResourceがリスト表示されます。例えば上記で定義した`get_greeting`は、パラメータを入力して実行することで、この関数が正常に動作するかどうかを確認できます。（通常、このリソースプロトコルはリモートデータベースまたはマイクロサービスにアクセスします）

<div align=center>
<img src="https://picx.zhimg.com/80/v2-71fc1ad813cdbf7ecec24d878c343b96_1440w.png" style="width: 100%;"/>
</div>

Prompts側は比較的シンプルで、定義済みパラメータを入力するだけで正常な戻り値を取得できます。

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-4f42899ba1163922ac2347f7cebe5362_1440w.png" style="width: 100%;"/>
</div>

Tools側は、これからデバッグの中心となる部分です。前の章で説明したように、MCPプロトコルのPromptsとResourcesは現在openaiプロトコルや主要なMCPクライアントで広くサポートされていないため、サーバー側の主要なビジネスはtoolsの作成に集中すべきです。

ここで提供するtoolは、簡単な加算を実装するものです。非常にシンプルで、1と2を入力すると、結果が3であることが直接確認できます。今後、天気予報にアクセスできるtoolを開発する予定ですので、その際はこのようなウィンドウが天気情報の取得が正常かどうかをデバッグするのに非常に役立ちます。

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-4164a900198a70a158ae441f9e441d07_1440w.png" style="width: 100%;"/>
</div>

## まとめ

この記事では、MCP内部のいくつかの基本概念について簡単に理解しました。これらの概念は、MCPサーバーを開発する上で非常に有益だと思いますので、まず説明する必要があると考えました。

次の記事では、MCPの不思議な世界を探求し、AI Agentの時代がまもなく到来することをお伝えします。