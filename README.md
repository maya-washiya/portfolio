# MAYA WASHIYA — GitHub Pages用プロジェクト

公開中のポートフォリオを、GitHub Pagesで配信できる静的サイトとして書き出した一式です。HTMLは生成済みなので、公開するだけならNode.jsやビルド作業は不要です。

## そのまま公開する

1. ZIPを展開します。
2. `maya-washiya-github-pages` フォルダの**中身**をGitHubリポジトリのルートに追加し、`main`ブランチへコミット／pushします。ZIPそのものをアップロードするのではありません。
3. GitHubのリポジトリで **Settings → Pages** を開きます。
4. Sourceを **Deploy from a branch**、Branchを **main**、Folderを **/docs** に設定して **Save** を押します。
5. 公開処理が完了したら、GitHubが表示するURLを開きます。

`docs/index.html` が公開トップページです。独自ドメイン・ユーザーサイト・リポジトリ名付きのプロジェクトサイトに対応する相対パスを使用しています。リポジトリ名に合わせたコード変更は不要です。`.nojekyll` も含めて追加してください。

GitHub公式手順: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 収録内容

- `docs/`: そのまま公開できるHTML、CSS、JavaScript、画像、動画、favicon。
- `src/Home.tsx`: 現行のポートフォリオ画面と動画再生・モバイルメニューの動作。
- `src/data/portfolio.ts`: 作品の追加・削除・並び替え、ツール、リンク先、問い合わせ先の設定。
- `src/portfolio.css`: 現行のポートフォリオのレスポンシブCSS。
- `src/base.css`: 現行サイトのビルド済み共通CSSを移植したもの。
- `src/Aurelia.tsx`: 既存のローカル作品解説ページ。`docs/aurelia/index.html` として保持。
- `src/client.tsx` / `src/render.tsx`: ブラウザ動作と静的HTML生成。
- `scripts/`: 再ビルドとローカル確認用スクリプト。
- `reference-original/`: 移植前の画面・レイアウト・CSSの参照コピー。ビルドには使用しません。
- `ASSET-SHA256.json`: 収録アセットのチェックサム。
- `QA.md`: 書き出し時の確認内容。

## 維持した仕様

- デザイン、本文、順番、余白、レスポンシブCSS、メニュー、動画再生操作。
- 01 BEAUTY RETOUCH = **05_before_after.mp4**、02 VIDEO RETOUCH = **03_before_after.mp4**。いずれも現行の4回繰り返しを収録した動画ファイルをそのまま使用。動画の再圧縮や差し替えはしていません。
- ディテール比較動画、各ポスター画像、AURELIAのスクリーンショットも同一ファイル。
- AURELIAのVIEW PROJECT・サムネイルは `https://maya-washiya.github.io/aurelia-skin-lab/` を新しいタブで開きます。
- 現行どおり、問い合わせメール未設定のためCONTACTは「お問い合わせ先は準備中です。」の状態です。

AURELIAは別サイトへの外部リンクです。このZIPでAURELIA本体を移転することはありません。リンク先のログインや公開範囲はAURELIA側の設定に依存します。GitHub Pages側にSitesのアクセス制限は移植されません。

## 内容を編集して再ビルドする

Node.js 20以上とnpmを使用します。初回の依存パッケージ取得にはインターネット接続が必要です。

```sh
npm ci
npm run build
npm run preview
```

プレビューは `http://localhost:4173/` です。停止はCtrl+C。HTMLを直接ダブルクリックする方法では、ブラウザの制約によりJavaScriptの動作を確認できません。

画像・動画の元ファイルは `docs/` に置きます。ビルドはメディアを削除せず、HTMLと`docs/assets/`のコードを更新します。編集後は更新した`docs/`もGitHubへpushしてください。

`src/base.css` は配信済みCSSそのものを基準にしています。参照用の`reference-original/`を編集しても反映されません。現在の画面を調整する場合は`src/portfolio.css`または`src/base.css`を編集してください。

この版は静的Reactサイトです。元のCloudflare/Vinextサーバー、認証基盤、機密設定、node_modulesはZIPに含みません。ブラウザでの閲覧には外部のJavaScript CDNやサーバーAPIを必要としません。
