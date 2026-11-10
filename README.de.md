# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · [Español](README.es.md) · **Deutsch** · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [Website](https://gregorybabonaux.github.io/progressive-explainer/?lang=de)

**Erklärungen, denen du wirklich folgen kannst: zuerst ein kurzer Überblick, dann wählst du, was du vertiefst.**

progressive-explainer ist eine Skill für KI-Agenten (Claude, Claude Code, Codex, Cursor und andere). Sie ändert, wie der Agent erklärt, nicht was er weiß.

## Das Problem

Frag einen KI-Agenten, wie etwas funktioniert, und du bekommst oft eine Textwand: korrekt, vollständig und unmöglich zu verfolgen, wenn dir Aufmerksamkeit oder Konzentration schwerfallen. Du verlierst auf halber Strecke den Faden, und die Antwort ist verschenkt.

## Was sie macht

Der Agent antwortet in zwei Schritten.

**1. Ein kurzes erstes Dokument (250 bis 400 Wörter)**, immer in derselben Reihenfolge:

| Teil | Was er dir bringt |
|---|---|
| Antwort in einem Satz | Das Wesentliche, in unter 20 Wörtern, vor allem anderen |
| Der Rahmen | Worum es geht, warum es wichtig ist, wer entscheidet |
| Wie es funktioniert | 2 bis 4 kurze Abschnitte, mit einer einzigen Analogie von Anfang bis Ende |
| Ein Diagramm, wenn es hilft | Höchstens 5 Elemente, jeder Pfeil beschriftet |
| Zusammenfassung in einem Satz | Etwas, das du jemand anderem wiederholen könntest |

**2. Eine Fortschritts-Checkliste** statt des üblichen „Soll ich tiefer einsteigen?“:

```markdown
**Weiter vertiefen**

🟢 leicht · 🟡 mittel · 🔴 fortgeschritten

- [x] **1. Überblick**: ein Thread für JS, langsame Arbeit ausgelagert, Blockieren 🟢
- [ ] **2. Was wirklich blockiert**: welche Funktionen und Muster frieren den Server ein? 🟢
- [ ] **3. Die `await`-Falle**: warum kann eine `async`-Funktion trotzdem alles blockieren? 🟢
- [ ] **4. Ausführungsreihenfolge**: wer kommt zuerst, Promise, `nextTick` oder `setTimeout`? 🟡
- [ ] **5. Worker Threads**: wie lagerst du eine schwere Berechnung aus dem Hauptthread aus? 🟡
- [ ] **6. Thread Pool konfigurieren**: wo und wie fügst du Köche hinzu? 🟡

Antworte mit einer Nummer (oder mehreren).
```

Antworte mit einer Nummer: Der Agent behandelt dieses Unterthema mit denselben Regeln und derselben Analogie und hakt das Kästchen ab. Du siehst deinen Fortschritt.

Ein vollständiges Beispiel (auf Englisch): [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md).

## Die wichtigsten Regeln

- **Das Fazit zuerst**, in jedem Abschnitt, fett. Wer nur die Überschriften und das Fettgedruckte liest, hat das Wesentliche.
- **Eine einzige Analogie für das ganze Thema.** Kein Jonglieren mit drei Metaphern.
- **Keine Einstellung ohne Ort.** Wird eine Einstellung erwähnt, sagt der Agent, in welcher Datei oder welchem Tool sie liegt und wie man prüft, dass sie wirkt.
- **Eine Zahl pro Punkt.** Namen und Quellen kommen ans Ende, nicht mitten in einen Satz.
- **Lockerer Ton im Text, neutrale Überschriften.** Kein Aufhänger, keine Spannung, kein Füllstoff.
- **Deine Sprache.** Der Agent antwortet in der Sprache, in der du schreibst.

Alle Regeln stehen in [`SKILL.md`](skills/progressive-explainer/SKILL.md). Bearbeite die Datei, um sie anzupassen.

## Installation

**Schritt 1: Skill installieren (eine Option wählen)**

| Wo | Befehl | Was du bekommst |
|---|---|---|
| **Claude Code** (empfohlen) | `/plugin marketplace add GregoryBabonaux/progressive-explainer`, dann `/plugin install progressive-explainer@progressive-explainer` | Die Skill und einen Befehl `/explain <Thema>` |
| **Jeder Agent** (Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | Die Skill, im Projekt oder global mit `-g` |
| **Ohne skills.sh** | `npx progressive-explainer-cli skills --yes` | Die Skill, kopiert nach `~/.agents/skills` und `~/.claude/skills` |
| **Claude-App** (claude.ai, Desktop) | Lade den Ordner [`skills/progressive-explainer`](skills/progressive-explainer) als ZIP herunter und lade ihn im Bereich Skills der Claude-Einstellungen hoch | Die Skill, in jedem Chat verfügbar |

**Schritt 2 (optional): für alle Erklärungen in einem Projekt nutzen**

Standardmäßig rufst du die Skill auf, wenn du sie brauchst (`/explain` oder „erklär mir das schrittweise“). Damit der Agent sie bei jeder Erklärung nutzt:

- `npx progressive-explainer-cli init` zeigt, was geschrieben wird. Nichts wird geschrieben, bevor du bestätigst.
- `npx progressive-explainer-cli init --yes` fügt die Regel in `AGENTS.md` ein (und in `CLAUDE.md` oder `GEMINI.md`, falls dein Projekt sie nutzt), zwischen Markierungen, ohne den Rest der Datei anzufassen.

**Schritt 3: prüfen**

```
npx progressive-explainer-cli doctor
```

Später aktualisieren: `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer` oder `npx skills update`, je nach Installationsweg.

## Danksagung

Entstanden aus Tests mit echten Erklärungen, dann mit bestehenden Skills verglichen:
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills): Antwort in einem Satz, einzige Analogie und Zusammenfassung stammen aus `eli5`, die Diagrammregeln aus `diagram-it`.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md): kurze Absätze und die Prüfung vor dem Senden.

## Lizenz

MIT. Erstellt von Grégory Babonaux.
