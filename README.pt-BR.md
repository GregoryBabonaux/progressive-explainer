# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · [Español](README.es.md) · [Deutsch](README.de.md) · **Português** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [Site](https://gregorybabonaux.github.io/progressive-explainer/?lang=pt)

**Explicações que você consegue acompanhar de verdade: primeiro uma visão geral curta, depois você escolhe o que aprofundar.**

progressive-explainer é uma skill para agentes de IA (Claude, Claude Code, Codex, Cursor e outros). Ela muda a forma como o agente explica, não o que ele sabe.

## O problema

Pergunte a um agente de IA como algo funciona e muitas vezes você recebe um paredão de texto: correto, completo e impossível de acompanhar se você tem dificuldade de atenção ou concentração. Você perde o fio no meio do caminho, e a resposta não serve para nada.

## O que ela faz

O agente responde em duas etapas.

**1. Um primeiro documento curto (250 a 400 palavras)**, sempre na mesma ordem:

| Parte | O que ela te dá |
|---|---|
| Resposta em uma frase | O essencial, em menos de 20 palavras, antes de tudo |
| O contexto | Do que se trata, por que importa, quem decide |
| Como funciona | 2 a 4 seções curtas, com uma única analogia do início ao fim |
| Um diagrama, se ajudar | No máximo 5 elementos, cada seta com rótulo |
| Resumo em uma frase | Algo que você poderia repetir para outra pessoa |

**2. Uma checklist de progresso** no lugar do clássico "quer que eu aprofunde?":

```markdown
**Para ir além**

🟢 fácil · 🟡 intermediário · 🔴 avançado

- [x] **1. Visão geral**: uma thread para o JS, trabalho lento delegado, bloqueio 🟢
- [ ] **2. O que realmente bloqueia**: quais funções e padrões congelam o servidor? 🟢
- [ ] **3. A armadilha do `await`**: por que uma função `async` ainda pode bloquear tudo? 🟢
- [ ] **4. Ordem de execução**: quem vem primeiro entre Promise, `nextTick` e `setTimeout`? 🟡
- [ ] **5. Worker threads**: como tirar um cálculo pesado da thread principal? 🟡
- [ ] **6. Configurar o thread pool**: onde e como adicionar cozinheiros? 🟡

Responda com um número (ou vários).
```

Responda com um número: o agente trata esse subtema com as mesmas regras e a mesma analogia, e marca a caixa. Você vê seu progresso.

Um exemplo completo (em inglês): [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md).

## As principais regras

- **A conclusão primeiro**, em cada seção, em negrito. Lendo só os títulos e o negrito, você tem o essencial.
- **Uma única analogia para o tema inteiro.** Nada de malabarismo entre três metáforas.
- **Nenhuma configuração sem o lugar onde ela fica.** Se uma configuração é citada, o agente diz em qual arquivo ou ferramenta ela está e como verificar que funciona.
- **Um número por ponto.** Nomes e fontes vão no final, não no meio de uma frase.
- **Tom descontraído no texto, títulos neutros.** Sem gancho, sem suspense, sem enrolação.
- **Seu idioma.** O agente responde no idioma em que você escreve.

Todas as regras estão em [`SKILL.md`](skills/progressive-explainer/SKILL.md). Edite o arquivo para ajustá-las.

## Instalação

**Passo 1: instale a skill (escolha uma opção)**

| Onde | Comando | O que você ganha |
|---|---|---|
| **Claude Code** (recomendado) | `/plugin marketplace add GregoryBabonaux/progressive-explainer`, depois `/plugin install progressive-explainer@progressive-explainer` | A skill e um comando `/explain <tema>` |
| **Qualquer agente** (Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | A skill, no projeto ou global com `-g` |
| **Sem skills.sh** | `npx progressive-explainer-cli skills --yes` | A skill copiada para `~/.agents/skills` e `~/.claude/skills` |
| **App do Claude** (claude.ai, desktop) | Baixe a pasta [`skills/progressive-explainer`](skills/progressive-explainer) em zip e envie na seção Skills das configurações do Claude | A skill, disponível em todas as conversas |

**Passo 2 (opcional): use em todas as explicações de um projeto**

Por padrão, você chama a skill quando precisa (`/explain`, ou "me explica isso de forma progressiva"). Para o agente usá-la sempre que você pedir uma explicação:

- `npx progressive-explainer-cli init` mostra o que vai escrever. Nada é escrito antes da sua confirmação.
- `npx progressive-explainer-cli init --yes` adiciona a regra ao `AGENTS.md` (e ao `CLAUDE.md` ou `GEMINI.md`, se o seu projeto usar), entre marcadores, sem mexer no resto do arquivo.

**Passo 3: verifique**

```
npx progressive-explainer-cli doctor
```

Para atualizar depois: `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer` ou `npx skills update`, conforme a forma de instalação.

## Créditos

Construída a partir de testes com explicações reais e depois comparada com skills existentes:
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills): a resposta em uma frase, a analogia única e o resumo vêm de `eli5`; as regras de diagrama, de `diagram-it`.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md): os parágrafos curtos e a revisão antes de enviar.

## Licença

MIT. Feito por Grégory Babonaux.
