
# Svelte Starter Kit

Svelte 5 + Vite + TypeScript を使用した
Webフロントエンド開発用スターターキット。

## 技術構成

- Svelte 5
- Vite 8
- TypeScript 6
- ESLint
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

| コマンド | 内容 |
| --- | --- |
| npm run dev | 開発サーバー |
| npm run build | 本番ビルド |
| npm run preview | ビルド結果の確認 |
| npm run check | 型チェック |
| npm run lint | ESLint |
| npm run stylelint | Stylelint |
| npm run format:check | Prettier |
| npm run test | コンポーネントテスト |

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

## 補足

- SvelteKitは使用していません。
- ルーティング機能は未実装です。
- 画像の自動最適化は未導入です。