# niconico-like

ニコニコ動画風にコメントを流すelectronアプリ

## 動かし方

- node server.js でサーバを立ち上げ、ngrok で外部から接続可能なURLを発行する
- slackのアプリ設定（Event Subscriptions）のRequest URLに設定する
- slackのアプリ側のpermissionは User Token Scopesで channels:history を設定
- コード内のURLを書き換える
- npm start でElectronのアプリを立ち上げる

## 仕組み

- slack側で発生したEventから、Request URLへPOSTリクエストが送信されてくる
- イベントを受け取ったらSocket.io にメッセージを投げる
- メッセージを受け取ったElectronアプリはそれを画面に流す
- slackじゃない画面からの送信でも同様の動きを実現するように実装予定


# 参考

- https://qiita.com/tonio0720/items/bd6362d27084738bbfe2
- https://socket.io/get-started/chat/
