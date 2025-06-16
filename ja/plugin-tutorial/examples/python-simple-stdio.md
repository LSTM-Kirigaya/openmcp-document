# Pythonで天気情報MCPサーバーを実装

[今回のチュートリアル動画](https://www.bilibili.com/video/BV1zYGozgEHc)

## フック

さて、始める前に小さな例を見てみましょう。来週「アークナイツ」の「錆影新生」コスプレイベントに行く予定なので、土曜日の杭州の天気を知りたいと思い、AIに土曜日の天気を聞きました。するとAIは以下のような返答をしました：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-4c623ac6897e12093535b0d9ed9cf242_1440w.png" style="width: 100%;"/>
</div>

これは困ります。皆さんもよくあると思いますが、AIは「魚の釣り方を教える」ことが多く、時には単に最終結果を知りたいだけのとき、特に些細な日常の質問に対してはそう感じます。

実際、天気予報を実装するプログラムはたくさんあります。では、作成した天気予報プログラムをAIに接続し、実際の天気を教えてもらい、明日のコスプレイベントの服装を決める方法はないでしょうか？

直接関数を書いてfunction callingを使うのは少し面倒です。AIプロバイダーのAPI呼び出しやタスクループの構築、テキストレンダリングなど、多くの技術的な詳細を検討する必要があり、貴重な時間を浪費します。MCPは私たちに救いの道を与えてくれました。今回のチュートリアルでは、簡単なMCPサーバーを作成し、AIに天気予報を知る能力を与える方法を教えます。

## はじめに

👉 [前回のナビゲーション](https://zhuanlan.zhihu.com/p/32593727614)

前回はMCPの基礎を簡単に説明しました。今回は、独自のMCPサーバーの開発を開始し、既存のアプリケーション、サービス、ハードウェアなどをAIに接続します。これにより、AIからエンドユーザーアプリケーションへの最後の1キロメートルを完了します。

「工欲善其事、必先利其器」。よりエレガントで楽しいMCPサーバー開発のために、開発プロセスでプログラムの変更を確認し、直接AIに接続してツールの有効性を検証できる優れたテストツールが必要です。

そこで、私は最近、統合型MCPテスト開発ツール「OpenMCP」をオープンソース化しました。[初のMCPサーバー統合開発テストソフトウェアOpenMCPリリース！](https://zhuanlan.zhihu.com/p/1894785817186121106)

> OpenMCP QQグループ 782833642

OpenMCPオープンソースリンク：https://github.com/LSTM-Kirigaya/openmcp-client

スターをお願いします :D

### 最初のMCPプロジェクト

前置きはこのくらいにして、コーディングを始めましょう :D

vscodeやtraeを開く前に、基本的なuvツールをインストールします。uvはコミュニティで人気のバージョン管理ツールで、性能の良いcondaと理解してください。

まずuvをインストールします。anacondaを使用している場合は、必ずbase環境に切り替えてからインストールしてください：

```bash
pip install uv
```

インストールが完了したら、uvを実行します：

```bash
uv
```

エラーがなければ成功です。uvは再利用不可能な依存関係のみをローカルにインストールするため、anacondaを使用している方は心配ありません。uvがインストールするライブラリがbaseを汚染することはありません。次に、uvを使用して基本的なpythonプロジェクトを作成します：

```bash
mkdir simple-mcp && cd simple-mcp
uv init
uv add mcp "mcp[cli]"
```

次にvscodeまたはtraeを開き、プラグイン市場でOpenMCPプラグインを探してダウンロードします：

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
    description='2つの数値の実数領域での加算'
)
def add(a: int, b: int) -> int:
    return a + b

@mcp.resource(
    uri="greeting://{name}",
    name='greeting',
    description='デモンストレーション用のリソースプロトコル'
)
def get_greeting(name: str) -> str:
    # greeting://{name}リソースアクセスプロトコルを処理し、返す
    # ここでは簡単のため、直接Helloを返す
    return f"Hello, {name}!"

@mcp.prompt(
    name='translate',
    description='翻訳用のプロンプト'
)
def translate(message: str) -> str:
    return f'以下の文章を中国語に翻訳してください：\n\n{message}'

@mcp.tool(
    name='weather',
    description='指定都市の天気情報を取得'
)
def get_weather(city: str) -> str:
    """天気予報プロトコルをシミュレートし、フォーマットされた文字列を返す"""
    return f"Weather in {city}: Sunny, 25°C"

@mcp.resource(
    uri="user://{user_id}",
    name='user_profile',
    description='ユーザー基本情報を取得'
)
def get_user_profile(user_id: str) -> dict:
    """ユーザープロトコルをシミュレートし、辞書データを返す"""
    return {
        "id": user_id,
        "name": "張三",
        "role": "developer"
    }

@mcp.resource(
    uri="book://{isbn}",
    name='book_info',
    description='ISBNで書籍情報を検索'
)
def get_book_info(isbn: str) -> dict:
    """書籍プロトコルをシミュレートし、構造化データを返す"""
    return {
        "isbn": isbn,
        "title": "Pythonプログラミング：入門から実践まで",
        "author": "Eric Matthes"
    }

@mcp.prompt(
    name='summarize',
    description='テキスト要約のプロンプトテンプレート'
)
def summarize(text: str) -> str:
    """要約生成プロンプトを返す"""
    return f"以下の内容を一言で要約してください：\n\n{text}"
```

実行してみます：

```bash
uv run mcp run simple_mcp.py
```

エラーがなく、止まっている場合は、依存関係のインストールに問題がないことを意味します。ctrl cまたはctrl zで終了してください。

これらの関数は単純で意味がないように見えるかもしれませんが、最終的なシステムに到達するためには、簡単な例が必要です。

### リンク、スタート！

OpenMCPプラグインをダウンロードした場合、pythonエディタの右上にOpenMCPの紫色のアイコンが表示されます。クリックするとOpenMCPが起動し、現在のMCPをデバッグできます。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-f67e000371095a755d2f0d613706d61c_1440w.png" style="width: 100%;"/>
</div>

デフォルトではSTDIOモードで起動し、以下のコマンドを実行します：

```bash
uv run mcp run <現在開いているpythonファイルの相対パス>
```

したがって、mcpスキャフォールド（`uv add mcp "mcp[cli]"`）がインストールされていることを確認してください。

開いたらまず左下の接続状態を確認し、緑色であることを確認します。これはOpenMCPとMCPサーバーが正常にハンドシェイクしたことを示します。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-c4ebbbfe98d51e8b6e7de6c6d1bceb2e_1440w.png" style="width: 100%;"/>
</div>

接続に成功すると、接続の上に現在のMCPサーバーの名前が表示され、カーソルを合わせるとバージョン番号が表示されます。この情報は以下のコードで定義されます：

```python
mcp = FastMCP('錦恢の MCP Server', version="11.45.14")
```

これはバージョン管理時に非常に便利です。このシステムを活用してください。

接続に失敗した場合は、左側のツールバーの2番目のボタンをクリックして接続コンソールに入り、エラーメッセージを確認するか、手動で接続コマンドを調整します：

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

最初の3つ、リソース、プロンプト、ツールは、MCP内の対応する項目（Resources、Prompts、Tools）をデバッグするために使用されます。これらの部分の使用法は基本的にMCP公式のInspectorツールと同じです。もちろん、私はこれらを参考にしました。

<div align=center>
<img src="https://pica.zhimg.com/80/v2-d767e782f667161442ea183f55ca49b1_1440w.png" style="width: 100%;"/>
</div>

4番目のボタン「インタラクティブテスト」は、私が開発したMCPクライアントで、基本的にはダイアログウィンドウです。現在のMCPサーバーの機能関数をAIで直接テストできます。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-b59ee2d290e096343fb4659baf34cf57_1440w.png" style="width: 100%;"/>
</div>

現在はツールのサポートのみを提供しています。プロンプトとリソースについてはまだ考えがまとまっていません（リソースはツールとして扱えると思います）。グループで一緒に議論しましょう：QQグループ 782833642

## 天気関数のデバッグを開始

### ツールデバッグ

最初に示したMCPの例を覚えていますか？OpenMCPを使用して、これらの関数を迅速にデバッグできます。今回の目標は、天気予報MCPを作成することです。天気予報関数がすでに作成されていると仮定し、それをツールとしてカプセル化します：

```python
@mcp.tool(
    name='weather',
    description='指定都市の天気情報を取得'
)
def get_weather(city: str) -> str:
    """天気予報プロトコルをシミュレートし、フォーマットされた文字列を返す"""
    return f"Weather in {city}: Sunny, 25°C"
```

もちろん、今のところ意味はありません。黒龍江省の都市IDを入力しても25度を返しますが、これは重要ではありません。まず全体のプロセスを理解することが重要です。詳細にこだわるよりも、トップダウンで感覚的な理解を構築する方がユーザーにとって学びやすいです。

この関数をデバッグするには、OpenMCPを開き、新しい「ツール」デバッグプロジェクトを作成します：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-1c67ab54d67023e408413484768377cf_1440w.png" style="width: 100%;"/>
</div>

左側のリストにweatherツールが表示されます。それを選択し、右側の入力ボックスに何かを入力してEnter（または「実行」をクリック）を押すと、以下の応答が表示されます：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-d32a9c0d9fcab497dc03152a72c4c62b_1440w.png" style="width: 100%;"/>
</div>

関数が返す文字列が表示され、問題なくリンクが機能していることがわかります。

### インタラクティブテスト

プログラミングは得意かもしれませんが、天気予報クローラーを素早く作成する前に、作成したツールをAIダイアログに注入する方法を見てみましょう。AIを使用するには、まずAIモデルと対応するAPIを選択する必要があります。左側のツールバーの3番目のボタンをクリックしてAPIモジュールに入り、使用するAIモデルプロバイダー、モデルを選択し、APIトークンを入力して「保存」をクリックします：

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-367780b204d2aa50354585272b71af20_1440w.png" style="width: 100%;"/>
</div>

新しいタブを作成し、「インタラクティブテスト」を選択します。これで直接AIと対話できます。まずツールを注入せずにAIが天気予報の質問にどのように応答するかを見てみましょう。下部のツールバーの左から3番目のボタンをクリックしてツール選択インターフェースに入り、「すべてのツールを無効にする」を選択します：

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

AIは記事の冒頭と同じ回答をしました。非常に形式的で、実際には知らないからです。

ここで、「weather」ツールを個別に有効にします：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

同じ質問をします：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-e934d386e20b1de43fb5e0dd426de86e_1440w.png" style="width: 100%;"/>
</div>

AIは25度と回答し、追加の推論情報も提供しました。

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

これに基づいて、AIは最終的な回答を提供します。つまり、このプロセスでは実際に2回AIサービスを呼び出しています。また、2回の呼び出しの入力トークン数が非常に多いことがわかります。これはOpenMCPが関数呼び出しをJSONスキーマ形式でリクエストパラメータに注入するためです。weatherツールのJSONスキーマは以下の図の右側のjsonのようになります：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

openaiプロトコルをサポートするAIプロバイダーは、このような情報に対してfunction callingを実行します。そのため、ツールを使用するAIリクエストの入力トークン数は大きくなります。ただし、心配する必要はありません。ほとんどのプロバイダーはKVキャッシュを実装しており、同じプレフィックスの入力に対してキャッシュがあり、キャッシュヒット部分のコストは通常の入力出力トークン価格よりも大幅に低くなります。OpenMCPは各回答の下に、現在のリクエストの