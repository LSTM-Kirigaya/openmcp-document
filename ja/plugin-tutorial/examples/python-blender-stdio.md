# Pythonで実装する天気情報MCPサーバー

## フック

待って、始める前に小さな例を見てみましょう。来週「アークナイツ」の「錆びた影、新生」コスプレイベントに行く予定なので、土曜日の杭州の天気を知りたいです。AIに土曜日の天気を聞くと、以下のような回答が返ってきました：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-4c623ac6897e12093535b0d9ed9cf242_1440w.png" style="width: 100%;"/>
</div>

これはダメですね。皆さんもよくあると思いますが、AIは「魚の釣り方を教える」ことが多く、時には単に結果が知りたいだけの退屈な日常の用事もあります。

実際、天気予報を実装するプログラムはたくさんあります。では、完成した天気予報プログラムをAIに接続し、実際の天気を教えてもらって、明日のコスプレイベントの服装を選ぶにはどうすればよいでしょうか？

直接関数を書いてfunction callingを使うのは少し面倒です。AIプロバイダーのAPI呼び出しやタスクループの構築、テキストレンダリングなど、多くの技術的な詳細を検討する必要があり、貴重な時間を浪費します。MCPは私たちに救いの道を与えてくれます。今日のチュートリアルでは、簡単なMCPサーバーを書いて、AIに天気予報を知る能力を与える方法を教えます。

## はじめに

👉 [前回のナビゲーション](https://zhuanlan.zhihu.com/p/32593727614)

前回はMCPの基礎を簡単に説明しました。今回は、自分たちのMCPサーバーを開発し、既存のアプリケーション、サービス、ハードウェアなどをAIに接続します。これにより、AIからエンドアプリケーションへの最後の1キロメートルを完了します。

「工欲善其事、必先利其器」。よりエレガントで楽しくMCPサーバーを開発するために、開発プロセスでプログラムの変更を確認し、直接AIに接続してツールの有効性を検証できる優れたテストツールが必要です。

そこで、私は最近オールインワンのMCPテスト開発ツール「OpenMCP」をオープンソース化しました。[全网第一个 MCP 服务器一体化开发测试软件 OpenMCP 发布！](https://zhuanlan.zhihu.com/p/1894785817186121106)

> OpenMCP QQグループ 782833642

OpenMCPオープンソースリンク：https://github.com/LSTM-Kirigaya/openmcp-client

スターをお願いします :D

### 最初のMCPプロジェクト

前置きはこのくらいにして、コーディングを始めましょう :D

vscodeやtraeを開く前に、基本的なuvツールをインストールします。uvはコミュニティで人気のバージョン管理ツールで、性能の良いcondaと考えてください。

まずuvをインストールします。anacondaを使用している場合は、必ずbase環境に切り替えてからインストールしてください：

```bash
pip install uv
```

インストールが完了したら、uvを実行します：

```bash
uv
```

エラーがなければ成功です。uvは再利用不可能な依存関係のみをローカルにインストールするので、anacondaユーザーは心配ありません。uvがインストールするライブラリがbaseを汚染することはありません。次にuvを使用して基本的なPythonプロジェクトを作成します：

```bash
mkdir simple-mcp && cd simple-mcp
uv init
uv add mcp "mcp[cli]"
```

次にvscodeまたはtraeを開き、プラグインストアでOpenMCPプラグインを探してダウンロードします：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-525c4576398078547fdd6eeef26532aa_1440w.png" style="width: 100%;"/>
</div>

まずMCPの最小プログラムを作成します：

ファイル名：simple_mcp.py

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP('錦恢の MCP Server', version="11.45.14")

@mcp.tool(
    name='add',
    description='对两个数字进行实数域的加法'
)
def add(a: int, b: int) -> int:
    return a + b

@mcp.resource(
    uri="greeting://{name}",
    name='greeting',
    description='用于演示的一个资源协议'
)
def get_greeting(name: str) -> str:
    # 访问处理 greeting://{name} 资源访问协议，然后返回
    # 此处方便起见，直接返回一个 Hello，balabala 了
    return f"Hello, {name}!"

@mcp.prompt(
    name='translate',
    description='进行翻译的prompt'
)
def translate(message: str) -> str:
    return f'请将下面的话语翻译成中文：\n\n{message}'

@mcp.tool(
    name='weather',
    description='获取指定城市的天气信息'
)
def get_weather(city: str) -> str:
    """模拟天气查询协议，返回格式化字符串"""
    return f"Weather in {city}: Sunny, 25°C"

@mcp.resource(
    uri="user://{user_id}",
    name='user_profile',
    description='获取用户基本信息'
)
def get_user_profile(user_id: str) -> dict:
    """模拟用户协议，返回字典数据"""
    return {
        "id": user_id,
        "name": "张三",
        "role": "developer"
    }

@mcp.resource(
    uri="book://{isbn}",
    name='book_info',
    description='通过ISBN查询书籍信息'
)
def get_book_info(isbn: str) -> dict:
    """模拟书籍协议，返回结构化数据"""
    return {
        "isbn": isbn,
        "title": "Python编程：从入门到实践",
        "author": "Eric Matthes"
    }

@mcp.prompt(
    name='summarize',
    description='生成文本摘要的提示词模板'
)
def summarize(text: str) -> str:
    """返回摘要生成提示词"""
    return f"请用一句话总结以下内容：\n\n{text}"
```

実行してみます：

```bash
uv run mcp run simple_mcp.py
```

エラーがなく、止まっている場合は、依存関係のインストールに問題がないことを意味します。Ctrl+CまたはCtrl+Zで終了します。

これらの関数は単純で意味がないように見えるかもしれませんが、最終的なシステムに至るまでには簡単な例が必要です。

### リンク、スタート！

OpenMCPプラグインをダウンロードした場合、Pythonエディターの右上にOpenMCPの紫色のアイコンが表示されます。クリックするとOpenMCPが起動し、現在のMCPをデバッグできます。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-f67e000371095a755d2f0d613706d61c_1440w.png" style="width: 100%;"/>
</div>

デフォルトではSTDIOモードで起動し、以下のコマンドを実行します：

```bash
uv run mcp run <現在開いているPythonファイルの相対パス>
```

したがって、mcpスキャフォールディング（`uv add mcp "mcp[cli]"`）がインストールされていることを確認する必要があります。

開いたらまず左下の接続状態を確認し、緑色であることを確認します。これはOpenMCPとMCPサーバーが正常にハンドシェイクしたことを意味します。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-c4ebbbfe98d51e8b6e7de6c6d1bceb2e_1440w.png" style="width: 100%;"/>
</div>

接続に成功すると、接続の上に現在のMCPサーバーの名前が表示され、カーソルを合わせるとバージョン番号が表示されます。この情報は以下のコードで定義されています：

```python
mcp = FastMCP('錦恢の MCP Server', version="11.45.14")
```

バージョン管理時に非常に便利です。このシステムを活用してください。

接続に失敗した場合は、左側のツールバーの2番目のボタンをクリックして接続コンソールに入り、エラー情報を確認するか、手動で接続コマンドを調整します：

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-684190b98dbbb9a7bf0e8c8048bd1277_1440w.png" style="width: 100%;"/>
</div>

### OpenMCPの紹介

次に、OpenMCPの基本機能モジュールを簡単に紹介します。最初に画面に何も表示されていない場合は、上のプラス記号をクリックして新しいタブを作成します。このページには以下の4つのボタンが表示されます：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-3a4e8aa1ddaac632601532bb757a15ad_1440w.png?source=d16d100b" style="width: 100%;"/>
</div>

拡大：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-ecc0705ed534e2cf0bc748ecd95f5f22_1440w.png" style="width: 100%;"/>
</div>

最初の3つ（リソース、プロンプト、ツール）は、MCPの3つの対応する項目（Resources、Prompts、Tools）をデバッグするために使用されます。これらの部分の使用法は基本的にMCP公式のInspectorツールと同じです。もちろん、私はこれらを参考にしました、えへ。

<div align=center>
<img src="https://pica.zhimg.com/80/v2-d767e782f667161442ea183f55ca49b1_1440w.png" style="width: 100%;"/>
</div>

4番目のボタン「インタラクティブテスト」は、私が開発したMCPクライアントで、基本的にはチャットウィンドウです。現在のMCPサーバーの機能関数をAIでシームレスにテストできます。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-b59ee2d290e096343fb4659baf34cf57_1440w.png" style="width: 100%;"/>
</div>

現在はツールのサポートのみを一時的に提供しています。プロンプトとリソースについてはまだ考えがまとまっていません（リソースはツールとして扱えると思います）。グループで一緒に議論しましょう：QQグループ 782833642

## 天気関数のデバッグを開始

### ツールのデバッグ

最初に示したMCPの例を覚えていますか？OpenMCPを使用してこれらの関数を迅速にデバッグできます。今回の目標は天気予報MCPを作成することです。天気予報関数がすでに完成していると仮定し、それをツールとしてカプセル化します：

```python
@mcp.tool(
    name='weather',
    description='获取指定城市的天气信息'
)
def get_weather(city: str) -> str:
    """模拟天气查询协议，返回格式化字符串"""
    return f"Weather in {city}: Sunny, 25°C"
```

もちろん、今のところ意味はありません。黒龍江省の都市IDを入力しても25度と返しますが、これらの詳細は重要ではありません。まずはプロセス全体を体験し、トップダウンの理解を構築することがユーザーにとって学びやすいです。

この関数をデバッグする必要があります。OpenMCPを開き、新しい「ツール」デバッグプロジェクトを作成します：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-1c67ab54d67023e408413484768377cf_1440w.png" style="width: 100%;"/>
</div>

左側のリストにweatherツールが表示されます。選択し、右側の入力ボックスに何かを入力し、Enter（または「実行」をクリック）を押すと、以下の応答が表示されます：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-d32a9c0d9fcab497dc03152a72c4c62b_1440w.png" style="width: 100%;"/>
</div>

関数が返す文字列が表示され、問題なくリンクが機能していることがわかります。

### インタラクティブテスト

プログラミングは得意かもしれませんが、天気予報クローラーを素早く作成する前に、作成したツールをAIチャットに注入する方法を見てみましょう。AIを使用するには、まずAIプロバイダーと対応するAPIを選択する必要があります。左側のツールバーの3番目のボタンをクリックしてAPIモジュールに入り、使用するAIプロバイダーとモデルを選択し、APIトークンを入力して「保存」をクリックします：

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-367780b204d2aa50354585272b71af20_1440w.png" style="width: 100%;"/>
</div>

新しいタブを作成し、「インタラクティブテスト」を選択します。これで直接AIとチャットできます。まずツールを注入しないAIが天気予報の質問にどのように応答するか見てみましょう。下部のツールバーの左から3番目のボタンをクリックしてツール選択インターフェースに入り、「すべてのツールを無効にする」を選択します：

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-977a53ea14eae5e1a646fc73d379a422_1440w.png" style="width: 100%;"/>
</div>

「閉じる」をクリックした後、AIに質問します：

```
杭州の気温は何度ですか？
```

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-d3aa56602f574a6968295f9a5c93438f_1440w.png" style="width: 100%;"/>
</div>

冒頭と同じ回答が返ってきました。非常に形式的で、実際には知らないからです。

ここで、「weather」ツールを単独で有効にします：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

同じ質問をします：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-e934d386e20b1de43fb5e0dd426de86e_1440w.png" style="width: 100%;"/>
</div>

25度という回答と追加の推論情報が返ってきました。

いくつかの詳細に注目しましょう。まず、AIは直接質問に答えず、weatherツールを呼び出します。呼び出しパラメータは：

```json
{
  "city": "杭州"
}
```

そして、MCPサーバーは以下の応答を返します：

```
Weather in 杭州: Sunny, 25°C
```

最終的にAIはこの情報に基づいて回答を生成します。つまり、このプロセスでは実際に2回AIサービスを呼び出しています。また、2回の呼び出しの入力トークン数が非常に多いことがわかります。これはOpenMCPが関数呼び出しをJSONスキーマとしてリクエストパラメータに注入するためです。weatherツールのJSONスキーマは以下の図の右側のjsonのようになります：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

OpenAIプロトコルをサポートするAIプロバイダーは、このような情報に対してfunction callingを行います。そのため、ツールを使用するAIリクエストの入力トークン数は多くなります。しかし、心配する必要はありません。ほとんどのプロバイダーはKVキャッシュを実装しており、同じプレフィックスの入力に対してキャッシュがあり、キャッシュヒット部分のコストは通常の入力出力トークン価格よりも大幅に低くなります。OpenMCPは各回答の下に、現在のリクエストの入力トークン、出力トークン、総トークン、キャッシュヒット率を示しています。

ここで：

- 「総トークン」=「入力トークン」+「出力トークン」

- 「キャッシュヒット率」=「キャッシュヒットトークン」/「入力トークン」

> はい、キャッシュヒット率は入力トークンの概念で、出力トークンにはキャッシュヒット率という概念はありません。

今後の開発では、この情報に基づいてサービスやプロンプトを最適化できます。

### 実際の天気予報を完成させましょう！

もちろん、このコードも非常に簡単で、直接AIに生成させることができます（