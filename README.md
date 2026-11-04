# Svelte Starter Kit

Svelte 5 + Vite + TypeScript を使用した
Webフロントエンド開発用スターターキット。

## 技術構成

- Svelte 5
- Vite 8
- TypeScript 6
- Prettier
- Stylelint
- Vitest
- Svelte Testing Library

## 動作環境

- Node.js 24 推奨
- npm

## セットアップ

```bash
npm ci
npm run dev
```

## npm scripts

| コマンド             | 内容                           |
| -------------------- | ------------------------------ |
| npm run dev          | 開発サーバー                   |
| npm run build        | 本番ビルド                     |
| npm run preview      | ビルド結果の確認               |
| npm run check        | Svelte・TypeScriptの型チェック |
| npm run stylelint    | CSS・Svelteのスタイル検査      |
| npm run format:check | Prettierによる整形チェック     |
| npm run test         | コンポーネントテスト           |

## ディレクトリ

- src/components/common/ - 共通レイアウト
- src/components/ui/ - UIパーツ
- src/components/sections/ - ページセクション
- src/styles/ - 共通CSS
- src/types/ - 型定義
- src/utils/ - 共通関数
- public/ - 静的アセット

## サンプル

- Header / Footer
- Button / Card
- Hero / CTA
- カウンター

### 既知のセキュリティ上の注意事項

開発用依存パッケージ `@sveltejs/vite-plugin-svelte` が間接的に使用する `deepmerge` に、Low severityの脆弱性（CVE-2026-93753）が報告されています。

本パッケージは主に開発・ビルド時に使用され、`npm audit --omit=dev` では脆弱性は検出されていません。ただし、開発・ビルド環境におけるリスクが完全にないことを保証するものではありません。

2026年11月4日時点で修正版は提供されていないため、依存元パッケージの更新状況を確認し、修正が利用可能になり次第、対応を検討します。

## 補足

- SvelteKitは使用していません。
- ルーティング機能は未実装です。
- 画像の自動最適化は未導入です。
