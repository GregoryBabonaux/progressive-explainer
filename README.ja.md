# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md)

🌐 [ウェブサイト](https://gregorybabonaux.github.io/progressive-explainer/?lang=ja)

**本当についていける説明：まず短い全体像、そのあと深掘りしたいところを自分で選ぶ。**

progressive-explainer は AI エージェント（Claude、Claude Code、Codex、Cursor など）向けの skill です。変わるのはエージェントの説明の仕方で、知識そのものではありません。

## 課題

AI エージェントに仕組みを聞くと、よく長い文章の壁が返ってきます。正確で網羅的でも、注意や集中が続きにくい人には追いきれません。途中で話を見失い、その回答は無駄になります。

## できること

エージェントは 2 段階で答えます。

**1. 短い最初のドキュメント（250〜400 語）**。順番はいつも同じです。

| パート | 得られるもの |
|---|---|
| 一文の答え | 要点を 20 語以内で、何よりも先に |
| 前提の整理 | 何の話か、なぜ重要か、誰が決めるか |
| 仕組み | 2〜4 個の短いセクション。最初から最後までひとつのたとえで通す |
| 図（役立つ場合のみ） | 要素は最大 5 つ、矢印にはすべてラベル付き |
| 一文のまとめ | 他の人にそのまま伝えられる一文 |

**2. 進捗チェックリスト**。よくある「もっと詳しく説明しましょうか？」の代わりです。

```markdown
**さらに深掘り**

🟢 やさしい · 🟡 中級 · 🔴 上級

- [x] **1. 全体像**：JS はひとつのスレッド、重い処理は委任、ブロッキング 🟢
- [ ] **2. 実際に何がブロックするか**：どの関数や書き方がサーバーを止める？ 🟢
- [ ] **3. `await` の落とし穴**：なぜ `async` 関数でも全体を止めてしまうのか？ 🟢
- [ ] **4. 実行順序**：Promise、`nextTick`、`setTimeout` のどれが先？ 🟡
- [ ] **5. Worker threads**：重い計算をメインスレッドから外すには？ 🟡
- [ ] **6. thread pool の設定**：どこで、どうやって料理人を増やす？ 🟡

番号で返信してください（複数可）。
```

番号で返信すると、エージェントは同じルールと同じたとえでそのサブトピックを説明し、チェックを入れます。進み具合がひと目でわかります。

完全な例（英語）：[`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md)

## 主なルール

- **結論が先**。各セクションは太字の結論から始まります。見出しと太字だけ読めば要点がつかめます。
- **トピック全体でたとえはひとつ。** 3 つの比喩を行き来しません。
- **設定には必ず場所を添える。** 設定に触れるときは、どのファイルやツールにあるか、どう動作を確認するかを書きます。
- **数字は 1 項目にひとつまで。** 人名や出典は最後にまとめ、文の途中には入れません。
- **本文はくだけた口調、見出しは中立。** 前置き、もったいぶり、水増しはしません。
- **あなたの言語で。** あなたが書いた言語でエージェントが答えます。

すべてのルールは [`SKILL.md`](skills/progressive-explainer/SKILL.md) にあります。編集して調整できます。

## インストール

**ステップ 1：skill をインストール（いずれかを選択）**

| どこで | コマンド | 得られるもの |
|---|---|---|
| **Claude Code**（推奨） | `/plugin marketplace add GregoryBabonaux/progressive-explainer` のあと `/plugin install progressive-explainer@progressive-explainer` | skill と `/explain <トピック>` コマンド |
| **任意のエージェント**（Codex、Cursor、Gemini CLI、Copilot、OpenCode…） | `npx skills add GregoryBabonaux/progressive-explainer` | skill（プロジェクト内、または `-g` でグローバル） |
| **skills.sh なし** | `npx progressive-explainer-cli skills --yes` | `~/.agents/skills` と `~/.claude/skills` にコピーされた skill |
| **Claude アプリ**（claude.ai、デスクトップ） | [`skills/progressive-explainer`](skills/progressive-explainer) フォルダを zip でダウンロードし、Claude の設定の Skills セクションでアップロード | すべてのチャットで使える skill |

**ステップ 2（任意）：プロジェクト内のすべての説明で使う**

通常は必要なときに skill を呼び出します（`/explain`、または「段階的に説明して」）。説明を頼むたびにエージェントに使わせたい場合は：

- `npx progressive-explainer-cli init` で書き込む内容を確認できます。確認するまで何も書き込まれません。
- `npx progressive-explainer-cli init --yes` で `AGENTS.md`（プロジェクトで使っていれば `CLAUDE.md` や `GEMINI.md` にも）にルールを追加します。マーカーの間に入れるので、ファイルの他の部分には触れません。

**ステップ 3：確認**

```
npx progressive-explainer-cli doctor
```

あとで更新するには、インストール方法に応じて `npx progressive-explainer-cli update`、`claude plugin update progressive-explainer@progressive-explainer`、`npx skills update` のいずれかを使います。

## クレジット

実際の説明でのテストをもとに作り、既存の skill と比較しました：
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills)：一文の答え、ひとつのたとえ、まとめは `eli5` から、図のルールは `diagram-it` から。
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md)：短い段落と送信前チェック。

## ライセンス

MIT。作者：Grégory Babonaux。
