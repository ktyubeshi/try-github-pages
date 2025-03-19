---
layout: base.njk
title: GitHub Actions テスト記事
date: 2024-03-19
tags: post
description: これはGitHub Actionsの動作確認用のテスト記事です。
---

# GitHub Actions テスト記事

この記事はGitHub Actionsを使ったデプロイフローをテストするために作成されました。GitHub Pagesへの自動デプロイが正しく機能するかを確認します。

## GitHub Actionsについて

GitHub Actionsは、GitHubリポジトリのイベントに基づいて自動的にワークフローを実行できる機能です。主な利点：

- CI/CDパイプラインの自動化
- コードのビルド、テスト、デプロイの自動化
- カスタムワークフローの作成が容易
- 様々なプラットフォームやツールとの連携

```yaml
# ワークフロー例
name: Example Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run a script
        run: echo "Hello, GitHub Actions!"
```

このテスト記事が正しくデプロイされれば、GitHub Actionsの設定は成功です！ 