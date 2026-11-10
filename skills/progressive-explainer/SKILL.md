---
name: progressive-explainer
description: Explains a topic, or writes a document someone has to understand, for a reader who loses focus in long or dense text. Short overview first, one running analogy, then a progress checklist the reader picks from to go deeper. Use when the user invokes /explain or progressive-explainer, asks for an explanation they can actually follow, or picks a number from a progress checklist this skill produced.
license: MIT
metadata:
  version: "0.1.0"
---

# Progressive explainer

The reader has trouble with attention and focus. A long or dense document makes them lose the thread, even when every sentence is correct. The goal: they understand the topic on the first read, then choose for themselves what to dig into.

Principle: a short first document gives the big picture. Details come afterwards, one piece at a time, on request, through a progress checklist.

Write in the language the user writes in. Address the reader informally (for example "tu" in French, "du" in German) unless the context clearly calls for formality.

See `references/example.md` for a complete first document.

## Before writing

1. **Pick the analogy.** One only, from everyday life, that covers the whole topic. If none fits cleanly, use one concrete example instead.
2. **List the subtopics** that will go into the final checklist, and sort them by difficulty.

## Structure of the first document

In this order:

1. **The answer in one sentence.** Under 20 words, no jargon, in bold.
2. **The frame.** Three short points: what this is about, why it matters, who decides or who uses it.
3. **How it works**, in 2 to 4 sections. The analogy runs from start to finish.
4. **A diagram**, only if a relationship is the heart of the topic (see the diagram rules below).
5. **The one-sentence recap**, something the reader could repeat to someone else.
6. **The progress checklist.**
7. **Sources**, at the very end.

Target length: 250 to 400 words, excluding code and the checklist. If the topic needs more, put the extra into the checklist instead of writing it.

## Progress checklist

It always ends the document.

```markdown
**Go further**

🟢 easy · 🟡 intermediate · 🔴 advanced

- [x] **1. Overview**: <what was just covered> 🟢
- [ ] **2. <Title>**: <the question this subtopic answers> 🟢
- [ ] **3. <Title>**: <question> 🟡
- [ ] **4. <Title>**: <question> 🔴

Reply with a number (or several).
```

Rules:
- Sort from easiest to most advanced.
- One line per subtopic: a bold title, then the question it answers.
- Tick what has already been covered.
- Include a "configuration" subtopic (where and how it is set) and a "diagnosis" subtopic (how to check it works) whenever the topic is technical and operational.
- Never end with a yes/no question like "want me to dig into X?". The checklist replaces that question.

## When the reader picks a number

- Cover that subtopic with the same rules: one-sentence answer, conclusion first in each section, same analogy, same target length.
- If several numbers are picked, cover them in order, each under its own heading.
- End with the updated checklist, with the new boxes ticked. Add subtopics if the deeper dive reveals new ones.

## Content rules

- **One analogy, running through.** Do not switch analogies midway and do not stack several.
- **Never mention a setting without saying where it is set.** Name the file, tool or screen, and explain how to check it works (command, metric, tab).
- **One number per point at most**, the one that carries the message.
- **Names and sources go at the end**, never in the body. They are there to source, not to understand.
- **Short code examples** when something is configured, rather than a description.
- **Unavoidable jargon is defined** in a few words the first time it appears. Technical terms stay in English (event loop, rollback, heartbeat...), even when writing in another language.

## Diagram rules

A diagram only if a relationship (flow, sequence, hierarchy, state transitions) is the heart of the explanation. Otherwise a sentence or a list is enough.

- 5 elements at most, one idea per diagram.
- Every arrow has a label.
- The heading above the diagram states the conclusion, not the topic.
- Mermaid by default, ASCII if rendering is not available.
- 2 to 4 lines of text after the diagram say what it does not show.
- No diagram for a comparison: use a table.

## Form rules

- **Informative, neutral headings.** "The 5 classic mistakes", not "The hall of horrors". The reader must be able to skim the document by its headings.
- **The conclusion is the first sentence of each section**, in bold, then the explanation.
- **Paragraphs of 2 or 3 lines**, one idea per sentence.
- **Bullets start with a bold phrase.**
- **Casual tone in the body**: informal address, spoken turns of phrase, a touch of humor when it helps. Headings stay neutral.
- No hook, no suspense, no empty transition.
- No condescension, no filler, no repeated "this is a simplification".
- No em dash (—): use a comma, a period or a colon instead.

## Check before sending

- [ ] The first line answers the question in under 20 words.
- [ ] The frame says what this is about, why it matters, who decides.
- [ ] One analogy, present from start to finish.
- [ ] Reading only the headings and the bold text gives the essentials.
- [ ] Every setting mentioned says where it is set and how to check it.
- [ ] No names in the body.
- [ ] The document ends with the recap, the checklist, then the sources.
- [ ] Under 400 words, excluding code and the checklist.
