# 書き出し確認（2026-09-30）

- 公開版の画面ソースを維持。メディアの参照パスをGitHub Pages対応の相対パスに変更。
- ポートフォリオCSSと共通CSSを元ファイルとバイト比較し一致。
- 画像・動画・faviconを元の公開用ファイルとバイト比較し全件一致。
- 03動画24.000秒、05動画20.666667秒。現在の4回繰り返し収録済みファイルを維持。
- 静的HTML内のローカル画像・動画・CSS・JavaScript・内部リンクを検査し、全参照先が存在。
- リポジトリ名付きパスを模したHTTP配信でトップ、作品解説、CSS、JavaScript、画像の200応答と、動画のRangeリクエスト206応答を確認。
- AURELIAへのリンクURL、target="_blank"、rel="noopener noreferrer"を確認。
- 必要パッケージのみを使用して再ビルド成功。node_modulesはZIPに含めず、package-lock.jsonを同梱。
- この書き出しではブラウザからのローカル接続が利用できず、PC／モバイルの追加目視確認は未実施。現行の画面構造・CSS・メディアは保持しています。
- GitHubへの実際のアップロード・公開は実施していません。

## AURELIAリンク更新（2026-09-30）

- VIEW PROJECT（PC／モバイル）とサムネイルの遷移先を https://maya-washiya.github.io/aurelia-skin-lab/ へ更新。既存の作品解説ページのVIEW LIVE PROJECTも同じURLに更新。
- target="_blank" と rel="noopener noreferrer" を維持。
- 更新前後のHTMLを比較し、URL以外が完全に同一であることを確認。
- CSS、全画像、03・05・ディテール動画等を更新前とバイト比較し一致。
- 再ビルド成功。main /docs の公開構成を維持。
