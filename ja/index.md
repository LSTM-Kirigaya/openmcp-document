---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "OpenMCP"
  text: "エレガントな開発者向けのMCPデバッガーとSDK"
  tagline: 大規模言語モデルからエージェントまでの最後の一歩を埋める

  actions:
    - theme: brand
      text: OpenMCPプラグイン
      link: ./plugin-tutorial
    - theme: alt
      text: openmcp-sdk
      link: ./sdk-tutorial
    - theme: alt
      text: GitHub
      link: https://github.com/LSTM-Kirigaya/openmcp-client
features:
  - icon:
      src: /images/icons/vscode.svg
      height: 48px
      alt: 統合デバッグ環境
    title: 統合デバッグ環境
    details: インスペクターとMCPクライアント機能を組み合わせて、シームレスな開発とテストを実現します。
  - icon:
      src: /images/icons/openmcp-edge.svg
      height: 48px
      alt: 完全なプロジェクトレベルのコントロールパネルを提供する
    title: 包括的なプロジェクト管理
    details: 完全なプロジェクトレベルのコントロールパネルを提供し、効率的なMCPプロジェクトの監視を実現します。
  - icon:
      src: /images/icons/openmcp-sdk.svg
      height: 48px
      alt: 完全なプロジェクトレベルのコントロールパネルを提供する
    title: 完全なデプロイメントソリューション
    details: テストが完了したエージェントをopenmcp-sdkを通じてあなたのアプリケーションやサーバーにデプロイします。
---

<br><br>

<h2 id="home-0">
あなたのMCPエージェント開発のお手伝いをします
<br>
<span>MCPエージェント開発に楽しさと利便性をもたらす</span>
</h2>

<div class="bilibili-player-container" style="display:flex; width: 100%; justify-content: center;">
<iframe width="90%" height="580" src="https://www.youtube.com/embed/S7igsEhcLiw?si=6sqvbYJxSRoFS26g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br>

<h2 id="home-1">
OpenMCPは誰のためのものですか？
<br>
<span>OpenMCPの開発は...</span>
</h2>

<br>

<KTab class="home-tab">
<TwoSideLayout
  label="プロのソフトウェアエンジニア"
  :texts="[
    'テストを早期に行うことで、開発とテストを統合し、サードパーティのソフトウェアを開く必要がありません。非常に豊富な機能を提供します。',
    '左側のパネルで自由かつエレガントにあなたのエージェントを管理、デバッグ、テストします。',
    '大規模言語モデル呼び出しツールのすべての詳細が一目でわかります。不満な呼び出し結果はワンクリックで再現できます。',
    'すべての会話で各種パフォーマンス指標が表示され、コスト管理が容易になります。',
    'システムプロンプト管理パネルを使用すると、MCPサーバーとシステムプロンプトを使って簡単にエージェントアプリケーションを構築できます。',
  ]"
  image="./images/openmcp.xml.png"
/>
<TwoSideLayout
  label="オープンソースコミュニティの愛好家"
  :texts="[
    'テストを早期に行うことで、開発とテストを統合し、サードパーティのソフトウェアを開く必要がありません。非常に豊富な機能を提供します。',
    'OpenMCPは完全にオープンソースです。あなたはこの製品を無料で試用できるだけでなく、私たちに参加してエージェントに関するあなたの独創的なアイデアを実現することもできます。',
    '技術の詳細は完全に公開されているので、あなたのアイデアやトークンが盗用される心配はありません。',
    '永続化可能なシステムプロンプト管理パネルを使用すると、実際のMCPサーバーのシステムプロンプトをテストし、コミュニティ内で共有することができます。',
    'すべてのテストの詳細は100％Gitのバージョン管理に従い、あなたのテスト結果を簡単に共有し、他の人のMCPプロジェクトをゼロコストで再現することができます。'
  ]"
  image="./images/openmcp.chatbot.png"
/>
<TwoSideLayout
  label="AI研究開発科学者"
  :texts="[
    'テストを早期に行うことで、開発とテストを統合し、サードパーティのソフトウェアを開く必要がありません。非常に豊富な機能を提供します。',
    '数行のコードで、あなたの研究成果をすぐにMCPサーバーに変換し、任意の大規模言語モデルに接続して、ユーザーフレンドリーなインターフェースを実現できます。',
    'すべての実験データと設定パラメータは自動的にGitバージョン管理システムに組み込まれ、研究成果の追跡と再現が可能になり、学術交流や論文の再現が容易になります。',
    'OpenMCPをベースにしてあなたのデモをすばやく完成させ、イノベーションから実現までの距離を短縮します。',
  ]"
  image="./images/openmcp.resource.png"
/>
</KTab>

<br>

<h2 id="home-2">
よくある質問
<br>
<span>あなたの質問をお待ちしています</span>
</h2>

<el-collapse>
  <el-collapse-item title="OpenMCPは何に適していますか？" name="1">
    その名前の通り、OpenMCPは開発者向けのMCPデバッガーとSDKであり、AIエージェントの全工程の開発コストと開発者の負担を軽減することに取り組んでいます。OpenMCPを通じて、実生活のシーンで問題を解決し、作業時間を短縮できるMCPツールを作成したり、エンジニアや研究開発科学者がより早くデモを提供し、このビジョンを一般に知らしめることが私たちの使命です。
  </el-collapse-item>
  <el-collapse-item title="OpenMCPは無料ですか？" name="2">
    はい、OpenMCPは完全にオープンソースです。あなたはこの製品を無料で使用できるだけでなく、私たちに参加してエージェントに関するあなたの独創的なアイデアを実現することもできます。OpenMCPのタスクは、MCPに関するエコシステムを構築することです。私たちは、MCPの開発は今後しばらくの間高度にカスタマイズされた作業になると考えているため、現在の重点はすぐに何でもできるようなエージェントを作ることではなく、着実に関連するエコシステムやインフラストラクチャを構築することです。
  </el-collapse-item>
  <el-collapse-item title="OpenMCPは何に適さないですか？" name="3">
    OpenMCPを使って何でもできる汎用的なAIエージェントを開発しようとする場合は、このサイトを開くのではなく、すべての資金を量子コンピュータの研究開発に投資するべきです。この時代に全分野の汎用AIエージェントを作ることは、確率的に電話詐欺に収束することを忘れないでください。
  </el-collapse-item>
  <el-collapse-item title="OpenMCPは誰が開発していますか？" name="4">
    <p>OpenMCPは、LSTM-Kirigaya(錦恢)によって最初に主導され、3D関連の作業用のMCPテストツールを構築するために開発されました。その主な参加者は、大手企業の従業員、大学のコンピュータ関連学科の学生、およびいくつかのオープンソースコミュニティの積極的な貢献者です。</p>
    <p>身元は重要ではありません。私がとても好きな一言をあなたに贈ります：「できるかどうかを答えるのではなく、好きかどうかを答えてください」。</p>
    <img src="https://pica.zhimg.com/80/v2-3666e84b2f92bf444a5eb64fb9d08e71_1440w.png" style="max-width: 500px;margin-top:10px;"/>
  </el-collapse-item>
  <el-collapse-item title="私たちに参加したり、議論に参加するにはどうすればいいですか？" name="5">
    <a href="https://kirigaya.cn/openmcp/preview/join.html" target="_blank">OpenMCPに参加する</a> を通じて、OpenMCPのメンテナンスと開発に参加する方法を学ぶことができます。<a href="https://kirigaya.cn/openmcp/preview/channel.html" target="_blank">リソースチャンネル</a> を通じて私たちの連絡先を取得できます。現在主なコミュニティは3つあります。QQグループ：782833642 、 <a href="https://discord.com/invite/SKTZRf6NzU" target="_blank">OpenMCP Discordチャンネル</a> 、 <a href="https://www.zhihu.com/ring/host/1911121615279849840" target="_blank">知乎サークル【OpenMCP博物館】</a>
  </el-collapse-item>
  <el-collapse-item title="協力を希望する場合はどうすれば連絡できますか？" name="6">
    協力に関しては、錦恢の個人メール：1193466151@qq.comまでご連絡ください。
  </el-collapse-item>
</el-collapse>