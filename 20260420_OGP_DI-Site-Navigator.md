# OGP Image Prompt — DI Site Navigator
> サイズ：1200×630px（OGP標準）
> スタイル：近未来グラフィック・緑ベース
> 使用ツール：DALL-E 3 / Midjourney / NanobananaPro

---

## 🖼 プロンプト（英語・汎用）

```
A sleek near-future digital interface banner image for a Japanese medical information website.
Design concept: holographic data dashboard floating in dark space, glowing emerald green (#10b981) as the dominant color accent against a very dark background (#022c22 to #064e3b gradient).

Visual elements:
- Background: deep dark green-to-black gradient (radial, top-center glow)
- Central motif: transparent glass panel / frosted card with soft glow, subtle grid lines and circuit-trace patterns in low-opacity emerald green
- Floating data nodes: small glowing dots connected by thin luminous lines (like a medical network or molecule diagram)
- Light bloom / lens flare effect in upper-left corner, mint-green (#34d399)
- Soft bokeh particles scattered in background

Text elements (render clearly on the image):
1. Main title: "DI Site Navigator" — large, modern sans-serif, white with a subtle green glow/shadow, centered
2. Subtitle: "薬剤師・医療従事者向け 実務インデックス" — medium size, light gray-white (#ecfdf5), below main title
3. Small accent label top-left: "DI" inside a rounded square, gradient emerald green background

Color palette:
- Background: #022c22 → #064e3b (dark)
- Accent glow: #10b981, #34d399
- Text: #ffffff, #ecfdf5
- Panel surface: rgba(255,255,255,0.08) with frosted glass blur

Aspect ratio: 1.91:1 (1200×630px)
Style: near-future UI, cyberpunk-medical aesthetic, clean minimalist layout, no characters
No logos of real companies. No anime style. Pure graphic design.
```

---

## 🖼 プロンプト（日本語・NanobananaPro向け）

```
#命令：以下の条件で1枚のOGPバナー画像を生成してください。

【テーマ】
医療情報サイト「DI Site Navigator」のOGPバナー。薬剤師・医療従事者向けの実務インデックスサイト。

【デザインコンセプト】
近未来的なホログラフィックUI。暗いダークグリーンの空間に、緑色の発光するデータネットワークが浮かぶ医療DX的世界観。

【ビジュアル要素】
- 背景：深い暗緑色のグラデーション（中央上部に淡い緑の発光）
- メインオブジェクト：半透明フロストガラスパネル（ガラスモーフィズム）、緑のグロー
- アクセント：細い発光ラインで繋がるデータノード（分子・ネットワーク的モチーフ）
- 上部左に小さく「DI」と書かれた丸角アイコン（エメラルドグラデーション）
- ボケ感のある緑の光粒子を背景に散りばめる

【テキスト（必ず画像内に描画）】
1. メインタイトル：「DI Site Navigator」— 大きめ・白・グリーングロー
2. サブタイトル：「薬剤師・医療従事者向け 実務インデックス」— 小さめ・薄白

【カラーパレット】
- 背景：#022c22 → #064e3b
- 発光アクセント：#10b981、#34d399
- テキスト：#ffffff、#ecfdf5

【スタイル】
近未来UI、クリーンミニマル、グラフィックデザイン。キャラクターなし。アニメ調禁止。
アスペクト比：1200×630px（16:9近似）

命令：上記の内容を近未来グラフィックスタイルで1枚のバナー画像（1200×630px相当）として生成する。
```

---

## 使い方メモ

| ツール | 推奨プロンプト | 備考 |
|--------|--------------|------|
| DALL-E 3 | 英語版 | ChatGPT / API経由 |
| Midjourney | 英語版 + `--ar 1200:630 --v 6` | Discord |
| NanobananaPro (Gemini) | 日本語版 | |
| Grok | 英語版 | X Premium |

生成後は `og-image.png`（1200×630px）として保存し、`DI-site.html` の `<meta property="og:image">` に設定する。
