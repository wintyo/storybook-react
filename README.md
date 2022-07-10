# React storybook

React の storybook の検証リポジトリ

## 画像のスナップショット方法

画像の内容が環境ごとに微妙にずれてしまうため、docker を通してスナップショットを行う。docker の実行は npm scripts で吸収しているため普段通り`yarn ~`でコマンドを実行して良いが、docker のインストールは事前にしておく必要がある。

画像のスナップショットの方法は以下の 2 つ方法あり、次のセクションから説明する。

- ローカルで起動している storybook を参照する
- ビルドした storybook ファイルを参照する

### ローカルで起動している storybook を参照する

ローカルで起動した storybook を見てスナップショットを撮る場合は、`storybook-url.js`に以下のようなコードを配置する。

```javascript
// storybook-url.js
module.exports = 'http://192.168.0.3:6006/';
```

この URL は storybook 起動時に出てくる`On your network`のものである。

```
╭──────────────────────────────────────────────────╮
│                                                  │
│   Storybook 6.5.9 for React started              │
│   6.15 s for manager and 7.81 s for preview      │
│                                                  │
│    Local:            http://localhost:6006/      │
│    On your network:  http://192.168.0.3:6006/    │
│                                                  │
╰──────────────────────────────────────────────────╯
```

### ビルドした storybook ファイルを見る場合

事前に`yarn storybook:build`で出力している場合は、`yarn snapshot-image:static`を実行するだけでスナップショットが撮れる。ただし、storybook の更新があるたびに storybook をビルドしてからスナップショットを撮る必要があることに注意すること。
