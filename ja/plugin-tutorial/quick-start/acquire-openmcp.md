---
layout: doc
---


# 获取 OpenMCP

## 在插件商城中安装 OpenMCP

你可以在主流 VLE 的插件商城直接获取 OpenMCP 插件。比如在 vscode 中，点击左侧的插件商城，然后在搜索框中输入 `OpenMCP` 即可找到 OpenMCP 插件。

![vscode 插件商城](./images/vscode-plugin-market.png)

## 离线安装

VLE 的插件本质是一个 zip 压缩包，后缀名为 vsix，全平台通用。我们的 CI/CD 机器人在每次版本发布后，会自动构建并上传 vsix 到 github release，你可以通过如下的链接访问到对应版本的 github release 页面：

```
https://github.com/LSTM-Kirigaya/openmcp-client/releases/tag/v{版本号}
```

比如对于 0.1.1 这个版本，它的 release 页面链接为：[https://github.com/LSTM-Kirigaya/openmcp-client/releases/tag/v0.1.1](https://github.com/LSTM-Kirigaya/openmcp-client/releases/tag/v0.1.1)

在 `Assets` 下面，你可以找到对应的 vsix 压缩包

![github release](./images/github-release.png)

除此之外，您还可以通过如下的商城网页来获取最新的 openmcp 的 vsix

- https://open-vsx.org/extension/kirigaya/openmcp
- https://marketplace.visualstudio.com/items?itemName=kirigaya.openmcp

点击 vsix 后缀名的文件下载，下载完成后，您就可以直接安装它了。在 VLE 中安装外部的 vsix 文件有两种方法。

### 方法一：在 VLE 中安装

VLE 的插件商城页面有一个三个点的按钮，点击它后，你能看到下面这个列表中被我标红的按钮

![vscode 插件商城](./images/vscode-plugin-market-install-from.png)

点击它后，找到刚刚下载的 vsix 文件，点击即可完成安装。

### 方法二：通过命令行

如果您的 VLE 是全局安装的，会自动存在一个命令行工具，命令如下：

::: code-group
```bash [vscode]
code --install-extension /path/to/openmcp-0.1.1.vsix
```

```bash [trae]
trae --install-extension /path/to/openmcp-0.1.1.vsix
```

```bash [cursor]
cursor --install-extension /path/to/openmcp-0.1.1.vsix
```
:::

`/path/to/openmcp-0.1.1.vsix` 代表你刚刚下载的 vsix 文件的绝对路径。这样也可以安装插件。