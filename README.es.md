# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · **Español** · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

🌐 [Sitio web](https://gregorybabonaux.github.io/progressive-explainer/?lang=es)

**Explicaciones que de verdad puedes seguir: primero un resumen corto, luego eliges qué profundizar.**

progressive-explainer es una skill para agentes de IA (Claude, Claude Code, Codex, Cursor y otros). Cambia cómo explica el agente, no lo que sabe.

## El problema

Pregunta a un agente de IA cómo funciona algo y a menudo recibes un muro de texto: correcto, completo e imposible de seguir si te cuesta mantener la atención o la concentración. Pierdes el hilo a mitad de camino y la respuesta no sirve de nada.

## Qué hace

El agente responde en dos etapas.

**1. Un primer documento corto (250 a 400 palabras)**, siempre en el mismo orden:

| Parte | Qué te aporta |
|---|---|
| Respuesta en una frase | Lo esencial, en menos de 20 palabras, antes que nada |
| El marco | De qué se trata, por qué importa, quién decide |
| Cómo funciona | 2 a 4 secciones cortas, con una sola analogía de principio a fin |
| Un diagrama, si ayuda | 5 elementos como máximo, cada flecha con su etiqueta |
| Resumen en una frase | Algo que podrías repetirle a otra persona |

**2. Una checklist de progreso** que sustituye al típico "¿quieres que profundice?":

```markdown
**Para ir más allá**

🟢 fácil · 🟡 intermedio · 🔴 avanzado

- [x] **1. Visión general**: un hilo para el JS, trabajo lento delegado, bloqueo 🟢
- [ ] **2. Qué bloquea de verdad**: ¿qué funciones y patrones congelan el servidor? 🟢
- [ ] **3. La trampa del `await`**: ¿por qué una función `async` puede bloquearlo todo? 🟢
- [ ] **4. Orden de ejecución**: ¿quién va primero entre Promise, `nextTick` y `setTimeout`? 🟡
- [ ] **5. Worker threads**: ¿cómo sacar un cálculo pesado del hilo principal? 🟡
- [ ] **6. Configurar el thread pool**: ¿dónde y cómo añadir cocineros? 🟡

Responde con un número (o varios).
```

Responde con un número: el agente trata ese subtema con las mismas reglas y la misma analogía, y marca la casilla. Ves tu progreso.

Un ejemplo completo (en inglés): [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md).

## Las reglas principales

- **La conclusión primero**, en cada sección, en negrita. Leyendo solo los títulos y la negrita tienes lo esencial.
- **Una sola analogía para todo el tema.** Nada de malabares entre tres metáforas.
- **Ningún ajuste sin su ubicación.** Si se menciona un ajuste, el agente dice en qué archivo o herramienta está y cómo comprobar que funciona.
- **Una cifra por punto.** Los nombres y las fuentes van al final, no en mitad de una frase.
- **Tono relajado en el cuerpo, títulos neutros.** Sin ganchos, sin suspense, sin relleno.
- **Tu idioma.** El agente responde en el idioma en el que escribes.

Todas las reglas están en [`SKILL.md`](skills/progressive-explainer/SKILL.md). Edítalo para ajustarlas.

## Instalación

**Paso 1: instala la skill (elige una opción)**

| Dónde | Comando | Qué obtienes |
|---|---|---|
| **Claude Code** (recomendado) | `/plugin marketplace add GregoryBabonaux/progressive-explainer`, luego `/plugin install progressive-explainer@progressive-explainer` | La skill y un comando `/explain <tema>` |
| **Cualquier agente** (Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | La skill, en el proyecto o global con `-g` |
| **Sin skills.sh** | `npx progressive-explainer-cli skills --yes` | La skill copiada en `~/.agents/skills` y `~/.claude/skills` |
| **App de Claude** (claude.ai, escritorio) | Descarga la carpeta [`skills/progressive-explainer`](skills/progressive-explainer) en zip y súbela en la sección Skills de los ajustes de Claude | La skill, disponible en todas tus conversaciones |

**Paso 2 (opcional): úsala para todas las explicaciones de un proyecto**

Por defecto llamas a la skill cuando la necesitas (`/explain`, o "explícamelo de forma progresiva"). Para que el agente la use cada vez que pidas una explicación:

- `npx progressive-explainer-cli init` muestra lo que va a escribir. No se escribe nada hasta que confirmes.
- `npx progressive-explainer-cli init --yes` añade la regla a `AGENTS.md` (y a `CLAUDE.md` o `GEMINI.md` si tu proyecto los usa), entre marcadores, sin tocar el resto del archivo.

**Paso 3: comprueba**

```
npx progressive-explainer-cli doctor
```

Para actualizar más adelante: `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer` o `npx skills update`, según cómo la instalaste.

## Créditos

Construida a partir de pruebas con explicaciones reales y comparada con skills existentes:
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills): la respuesta en una frase, la analogía única y el resumen vienen de `eli5`; las reglas de diagramas, de `diagram-it`.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md): los párrafos cortos y la revisión antes de enviar.

## Licencia

MIT. Creado por Grégory Babonaux.
