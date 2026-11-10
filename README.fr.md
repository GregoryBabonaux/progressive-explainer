# 🧭 progressive-explainer

[English](README.md) · **Français** · [Español](README.es.md) · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [Site](https://gregorybabonaux.github.io/progressive-explainer/?lang=fr)

**Des explications que tu arrives vraiment à suivre : d'abord une vue d'ensemble courte, ensuite tu choisis ce que tu creuses.**

progressive-explainer est une skill pour agents IA (Claude, Claude Code, Codex, Cursor et les autres). Elle change la façon dont l'agent explique, pas ce qu'il sait.

## Le problème

Demande à un agent IA comment marche un truc, et tu reçois souvent un pavé : juste, complet, et impossible à suivre si tu as des difficultés d'attention ou de concentration. Tu décroches en route, et la réponse ne sert à rien.

## Ce qu'elle fait

L'agent répond en deux temps.

**1. Un premier document court (250 à 400 mots)**, toujours dans le même ordre :

| Partie | Ce qu'elle t'apporte |
|---|---|
| La réponse en une phrase | L'essentiel, en moins de 20 mots, avant tout le reste |
| Le cadre | De quoi on parle, pourquoi c'est important, qui décide |
| Le fonctionnement | 2 à 4 sections courtes, avec une seule analogie filée du début à la fin |
| Un schéma, si utile | 5 éléments maximum, chaque flèche a un libellé |
| Le récap en une phrase | Une phrase que tu pourrais répéter à quelqu'un |

**2. Une checklist de progression**, à la place du classique "tu veux que je creuse ?" :

```markdown
**Pour aller plus loin**

🟢 facile · 🟡 intermédiaire · 🔴 avancé

- [x] **1. Vue d'ensemble** : un thread pour le JS, délégation du travail lent, blocage 🟢
- [ ] **2. Ce qui bloque concrètement** : quelles fonctions et quels patterns gèlent le serveur ? 🟢
- [ ] **3. Le piège du `await`** : pourquoi une fonction `async` peut quand même tout bloquer ? 🟢
- [ ] **4. L'ordre d'exécution** : qui passe en premier entre Promise, `nextTick` et `setTimeout` ? 🟡
- [ ] **5. Les worker threads** : comment sortir un calcul lourd du thread principal ? 🟡
- [ ] **6. Configurer le thread pool** : où et comment ajouter des cuisiniers ? 🟡

Réponds avec un numéro (ou plusieurs).
```

Tu réponds avec un numéro : l'agent traite ce sous-sujet avec les mêmes règles et la même analogie, puis coche la case. Tu vois ta progression.

Un exemple complet (en anglais) : [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md).

## Les règles principales

- **La conclusion d'abord**, dans chaque section, en gras. En ne lisant que les titres et le gras, tu as l'essentiel.
- **Une seule analogie pour tout le sujet.** Pas de jonglage entre trois métaphores.
- **Pas de réglage sans son emplacement.** Si un réglage est mentionné, l'agent dit dans quel fichier ou quel outil il se trouve, et comment vérifier qu'il marche.
- **Un chiffre par point.** Les noms et les sources vont à la fin, pas au milieu d'une phrase.
- **Ton décontracté dans le corps, titres neutres.** Pas d'accroche, pas de suspense, pas de remplissage.
- **Ta langue.** L'agent répond dans la langue dans laquelle tu écris.

Toutes les règles sont dans [`SKILL.md`](skills/progressive-explainer/SKILL.md). Modifie-le pour les ajuster.

## Installation

**Étape 1 : installer la skill (au choix)**

| Où | Commande | Ce que tu obtiens |
|---|---|---|
| **Claude Code** (recommandé) | `/plugin marketplace add GregoryBabonaux/progressive-explainer`, puis `/plugin install progressive-explainer@progressive-explainer` | La skill et une commande `/explain <sujet>` |
| **N'importe quel agent** (Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | La skill, dans le projet ou globalement avec `-g` |
| **Sans skills.sh** | `npx progressive-explainer-cli skills --yes` | La skill copiée dans `~/.agents/skills` et `~/.claude/skills` |
| **App Claude** (claude.ai, desktop) | Télécharge le dossier [`skills/progressive-explainer`](skills/progressive-explainer) en zip, puis importe-le dans la section Skills des réglages de Claude | La skill, disponible dans toutes tes conversations |

**Étape 2 (optionnelle) : l'utiliser pour toutes les explications d'un projet**

Par défaut, tu appelles la skill quand tu en as besoin (`/explain`, ou "explique-moi ça de façon progressive"). Pour que l'agent l'utilise dès que tu demandes une explication :

- `npx progressive-explainer-cli init` affiche ce qu'il va écrire. Rien n'est écrit tant que tu ne confirmes pas.
- `npx progressive-explainer-cli init --yes` ajoute la règle dans `AGENTS.md` (et `CLAUDE.md` ou `GEMINI.md` si ton projet les utilise), entre des marqueurs, sans toucher au reste du fichier.

**Étape 3 : vérifier**

```
npx progressive-explainer-cli doctor
```

Pour mettre à jour plus tard : `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer` ou `npx skills update`, selon ta méthode d'installation.

## Crédits

Construite à partir de tests sur de vraies explications, puis comparée aux skills existantes :
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills) : la réponse en une phrase, l'analogie unique et le récap viennent d'`eli5`, les règles de schéma de `diagram-it`.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md) : les paragraphes courts et la vérification avant envoi.

## Licence

MIT. Réalisé par Grégory Babonaux.
