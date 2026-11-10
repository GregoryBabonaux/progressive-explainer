# 🧭 progressive-explainer

**English** · [Français](README.fr.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [Website](https://gregorybabonaux.github.io/progressive-explainer/)

**Explanations you can actually follow: a short overview first, then you pick what to dig into.**

progressive-explainer is a skill for AI agents (Claude, Claude Code, Codex, Cursor and others). It changes how the agent explains things, not what it knows.

## The problem

Ask an AI agent how something works and you often get a wall of text: correct, complete, and impossible to follow if you have trouble with attention or focus. You lose the thread halfway, and the answer is wasted.

## What it does

The agent answers in two stages.

**1. A short first document (250 to 400 words)**, always in the same order:

| Part | What it gives you |
|---|---|
| One-sentence answer | The point, in under 20 words, before anything else |
| The frame | What this is about, why it matters, who decides |
| How it works | 2 to 4 short sections, with one analogy running through all of them |
| A diagram, if useful | 5 elements at most, every arrow labelled |
| One-sentence recap | Something you could repeat to someone else |

**2. A progress checklist** that replaces the usual "want me to go deeper?":

```markdown
**Go further**

🟢 easy · 🟡 intermediate · 🔴 advanced

- [x] **1. Overview**: one thread for JS, slow work handed off, blocking 🟢
- [ ] **2. What actually blocks**: which functions and patterns freeze the server? 🟢
- [ ] **3. The `await` trap**: why can an `async` function still block everything? 🟢
- [ ] **4. Execution order**: who goes first between Promise, `nextTick` and `setTimeout`? 🟡
- [ ] **5. Worker threads**: how do you move a heavy computation off the main thread? 🟡
- [ ] **6. Configuring the thread pool**: where and how do you add cooks? 🟡

Reply with a number (or several).
```

Reply with a number: the agent covers that subtopic with the same rules and the same analogy, then ticks the box. You see your progress.

A complete example: [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md).

## The main rules

- **The conclusion comes first**, in every section, in bold. Reading only the headings and the bold text gives you the essentials.
- **One analogy for the whole topic.** No juggling between three metaphors.
- **No setting without its location.** If a setting is mentioned, the agent says which file or tool it lives in, and how to check it works.
- **One number per point.** Names and sources go at the end, not in the middle of a sentence.
- **Casual tone in the body, neutral headings.** No hook, no suspense, no filler.
- **Your language.** The agent answers in the language you write in.

The full rules are in [`SKILL.md`](skills/progressive-explainer/SKILL.md). Edit it to tune them.

## Install

**Step 1: install the skill (pick one)**

| Where | Command | What you get |
|---|---|---|
| **Claude Code** (recommended) | `/plugin marketplace add GregoryBabonaux/progressive-explainer`, then `/plugin install progressive-explainer@progressive-explainer` | The skill and an `/explain <topic>` command |
| **Any agent** (Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | The skill, in the project or globally with `-g` |
| **No skills.sh** | `npx progressive-explainer-cli skills --yes` | The skill copied to `~/.agents/skills` and `~/.claude/skills` |
| **Claude app** (claude.ai, desktop) | Download the [`skills/progressive-explainer`](skills/progressive-explainer) folder as a zip, then upload it in the Skills section of Claude's settings | The skill, available in every chat |

**Step 2 (optional): use it for every explanation in a project**

By default you call the skill when you want it (`/explain`, or "explain this progressively"). To make the agent use it whenever you ask for an explanation:

- `npx progressive-explainer-cli init` shows what it will write. Nothing is written until you confirm.
- `npx progressive-explainer-cli init --yes` adds the rule to `AGENTS.md` (and `CLAUDE.md` or `GEMINI.md` if your project uses them), between markers, without touching the rest of the file.

**Step 3: check**

```
npx progressive-explainer-cli doctor
```

To update later: `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer` or `npx skills update`, depending on how you installed it.

## Credits

Built from tests on real explanations, then compared with existing skills:
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills): the one-sentence answer, the single analogy and the recap come from `eli5`, the diagram rules from `diagram-it`.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md): short paragraphs and the check before sending.

## License

MIT. Made by Grégory Babonaux.
