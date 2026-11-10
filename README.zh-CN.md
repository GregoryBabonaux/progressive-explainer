# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [网站](https://gregorybabonaux.github.io/progressive-explainer/?lang=zh)

**真正跟得上的解释：先给一个简短的概览，再由你决定深入哪一部分。**

progressive-explainer 是一个面向 AI 代理（Claude、Claude Code、Codex、Cursor 等）的 skill。它改变的是代理解释问题的方式，而不是它掌握的知识。

## 问题

问 AI 代理某个东西是怎么运作的，你常常会收到一大段文字：内容正确、信息完整，但如果你注意力或专注力不太好，就根本读不下去。读到一半就跟丢了，这个回答也就白费了。

## 它做什么

代理分两步回答。

**1. 一份简短的初始文档（250 到 400 词）**，顺序始终相同：

| 部分 | 给你的内容 |
|---|---|
| 一句话回答 | 先给出要点，不超过 20 个词 |
| 背景框架 | 这是什么、为什么重要、由谁决定 |
| 运作方式 | 2 到 4 个短小节，全程只用一个类比 |
| 图示（如有帮助） | 最多 5 个元素，每个箭头都有标注 |
| 一句话总结 | 你可以转述给别人的一句话 |

**2. 一份进度清单**，取代常见的"要我再深入讲讲吗？"：

```markdown
**继续深入**

🟢 简单 · 🟡 中级 · 🔴 进阶

- [x] **1. 概览**：JS 只用一个线程、慢任务交给别人、阻塞 🟢
- [ ] **2. 到底什么会阻塞**：哪些函数和写法会让服务器卡住？ 🟢
- [ ] **3. `await` 的陷阱**：为什么 `async` 函数仍然可能阻塞一切？ 🟢
- [ ] **4. 执行顺序**：Promise、`nextTick` 和 `setTimeout` 谁先执行？ 🟡
- [ ] **5. Worker threads**：如何把繁重的计算移出主线程？ 🟡
- [ ] **6. 配置 thread pool**：在哪里、如何增加"厨师"？ 🟡

回复一个编号（或多个）。
```

回复一个编号：代理会用同样的规则和同一个类比讲解这个子主题，然后勾选对应的方框。你能看到自己的进度。

完整示例（英文）：[`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md)。

## 主要规则

- **结论先行**：每一节都以加粗的结论开头。只读标题和加粗内容，就能掌握要点。
- **整个主题只用一个类比。** 不在三个比喻之间来回切换。
- **提到配置就说明位置。** 只要提到某项配置，代理就会说明它在哪个文件或工具里，以及如何验证它生效。
- **每个要点最多一个数字。** 人名和来源放在最后，不夹在句子中间。
- **正文语气轻松，标题保持中性。** 不卖关子、不制造悬念、不说废话。
- **使用你的语言。** 你用什么语言写，代理就用什么语言回答。

全部规则见 [`SKILL.md`](skills/progressive-explainer/SKILL.md)。可以直接修改它来调整规则。

## 安装

**第 1 步：安装 skill（任选其一）**

| 在哪里 | 命令 | 你会得到 |
|---|---|---|
| **Claude Code**（推荐） | `/plugin marketplace add GregoryBabonaux/progressive-explainer`，然后 `/plugin install progressive-explainer@progressive-explainer` | 这个 skill 和一个 `/explain <主题>` 命令 |
| **任意代理**（Codex、Cursor、Gemini CLI、Copilot、OpenCode…） | `npx skills add GregoryBabonaux/progressive-explainer` | 这个 skill，安装在项目中，或用 `-g` 全局安装 |
| **不使用 skills.sh** | `npx progressive-explainer-cli skills --yes` | 将 skill 复制到 `~/.agents/skills` 和 `~/.claude/skills` |
| **Claude 应用**（claude.ai、桌面版） | 将 [`skills/progressive-explainer`](skills/progressive-explainer) 文件夹下载为 zip，然后在 Claude 设置的 Skills 部分上传 | 这个 skill，在所有对话中可用 |

**第 2 步（可选）：在项目中的所有解释都使用它**

默认情况下，你在需要时调用这个 skill（`/explain`，或"用渐进的方式给我解释一下"）。如果希望每次请求解释时代理都自动使用它：

- `npx progressive-explainer-cli init` 会显示将要写入的内容。在你确认之前不会写入任何东西。
- `npx progressive-explainer-cli init --yes` 会把规则写入 `AGENTS.md`（如果项目使用 `CLAUDE.md` 或 `GEMINI.md`，也会写入），放在标记之间，不改动文件的其他部分。

**第 3 步：检查**

```
npx progressive-explainer-cli doctor
```

以后更新：根据安装方式，使用 `npx progressive-explainer-cli update`、`claude plugin update progressive-explainer@progressive-explainer` 或 `npx skills update`。

## 致谢

基于对真实解释的测试构建，并与现有 skill 做了对比：
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills)：一句话回答、单一类比和总结来自 `eli5`，图示规则来自 `diagram-it`。
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md)：短段落和发送前检查。

## 许可证

MIT。作者：Grégory Babonaux。
