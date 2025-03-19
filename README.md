# 11ty静的サイトプロジェクト

このプロジェクトは、[11ty (Eleventy)](https://www.11ty.dev/)を使用した静的サイトで、GitHub Pagesでホスティングされています。

## 機能

- Nunjucksテンプレートエンジン
- ブログ機能
- レスポンシブデザイン
- GitHub Actionsによる自動デプロイ

## 開発方法

### 前提条件

- [Node.js](https://nodejs.org/)（バージョン14以上）
- npm（Node.jsに同梱）

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
npm start
```

開発サーバーは http://localhost:8080 で起動します。

### ビルド

```bash
# 本番用ビルド
npm run build
```

ビルドされたファイルは `_site` ディレクトリに生成されます。

## デプロイ

このプロジェクトは、`main`ブランチにプッシュすると、GitHub Actionsによって自動的にGitHub Pagesにデプロイされます。

## プロジェクト構造

```
.
├── .eleventy.js         # 11ty設定ファイル
├── .github/             # GitHub Actions設定
├── package.json         # プロジェクト設定
├── src/                 # ソースファイル
│   ├── _data/           # グローバルデータ
│   ├── _includes/       # インクルードファイル
│   ├── _layouts/        # レイアウトテンプレート
│   ├── assets/          # 静的アセット（CSS、画像など）
│   ├── blog/            # ブログ記事
│   ├── about/           # 概要ページ
│   └── index.njk        # トップページ
└── _site/               # ビルド出力（gitignore）
``` 