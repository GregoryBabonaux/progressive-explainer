# 🧭 progressive-explainer

[English](README.md) · [Français](README.fr.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어**

🌐 [웹사이트](https://gregorybabonaux.github.io/progressive-explainer/?lang=ko)

**정말 따라갈 수 있는 설명: 먼저 짧은 개요, 그다음 무엇을 더 파고들지 직접 고릅니다.**

progressive-explainer는 AI 에이전트(Claude, Claude Code, Codex, Cursor 등)를 위한 skill입니다. 에이전트가 아는 내용이 아니라 설명하는 방식을 바꿉니다.

## 문제

AI 에이전트에게 어떤 것이 어떻게 동작하는지 물으면 흔히 글의 벽이 돌아옵니다. 정확하고 빠짐없지만, 주의력이나 집중력이 쉽게 흐트러지는 사람에게는 따라가기 어렵습니다. 중간에 흐름을 놓치면 그 답변은 쓸모가 없어집니다.

## 하는 일

에이전트는 두 단계로 답합니다.

**1. 짧은 첫 문서(250~400단어)**, 항상 같은 순서입니다.

| 부분 | 얻는 것 |
|---|---|
| 한 문장 답 | 핵심을 20단어 이내로, 가장 먼저 |
| 맥락 | 무엇에 관한 것인지, 왜 중요한지, 누가 결정하는지 |
| 동작 방식 | 짧은 섹션 2~4개, 처음부터 끝까지 하나의 비유 |
| 도표(도움이 될 때만) | 요소는 최대 5개, 모든 화살표에 라벨 |
| 한 문장 요약 | 다른 사람에게 그대로 전할 수 있는 한 문장 |

**2. 진행 체크리스트**, 흔한 "더 자세히 설명해 드릴까요?" 대신입니다.

```markdown
**더 알아보기**

🟢 쉬움 · 🟡 중급 · 🔴 고급

- [x] **1. 개요**: JS는 스레드 하나, 느린 작업은 위임, 블로킹 🟢
- [ ] **2. 실제로 무엇이 막히나**: 어떤 함수와 패턴이 서버를 멈추게 하나? 🟢
- [ ] **3. `await`의 함정**: 왜 `async` 함수도 전부를 막을 수 있나? 🟢
- [ ] **4. 실행 순서**: Promise, `nextTick`, `setTimeout` 중 무엇이 먼저인가? 🟡
- [ ] **5. Worker threads**: 무거운 계산을 메인 스레드에서 어떻게 빼내나? 🟡
- [ ] **6. thread pool 설정**: 어디서, 어떻게 요리사를 늘리나? 🟡

번호로 답해 주세요(여러 개도 가능).
```

번호로 답하면 에이전트가 같은 규칙과 같은 비유로 그 하위 주제를 설명하고 상자에 체크합니다. 진행 상황이 눈에 보입니다.

전체 예시(영어): [`skills/progressive-explainer/references/example.md`](skills/progressive-explainer/references/example.md)

## 주요 규칙

- **결론 먼저.** 모든 섹션은 굵은 글씨의 결론으로 시작합니다. 제목과 굵은 글씨만 읽어도 핵심을 알 수 있습니다.
- **주제 전체에 비유는 하나.** 세 가지 비유를 오가지 않습니다.
- **설정에는 위치를 함께.** 설정을 언급하면 어느 파일이나 도구에 있는지, 동작을 어떻게 확인하는지 알려줍니다.
- **항목당 숫자는 하나.** 이름과 출처는 문장 중간이 아니라 끝에 둡니다.
- **본문은 편한 말투, 제목은 중립적으로.** 낚시, 뜸 들이기, 군더더기가 없습니다.
- **당신의 언어로.** 당신이 쓴 언어로 에이전트가 답합니다.

전체 규칙은 [`SKILL.md`](skills/progressive-explainer/SKILL.md)에 있습니다. 파일을 수정해 조정할 수 있습니다.

## 설치

**1단계: skill 설치(하나 선택)**

| 어디서 | 명령 | 얻는 것 |
|---|---|---|
| **Claude Code**(권장) | `/plugin marketplace add GregoryBabonaux/progressive-explainer` 다음 `/plugin install progressive-explainer@progressive-explainer` | skill과 `/explain <주제>` 명령 |
| **모든 에이전트**(Codex, Cursor, Gemini CLI, Copilot, OpenCode…) | `npx skills add GregoryBabonaux/progressive-explainer` | 프로젝트에, 또는 `-g`로 전역 설치되는 skill |
| **skills.sh 없이** | `npx progressive-explainer-cli skills --yes` | `~/.agents/skills`와 `~/.claude/skills`에 복사된 skill |
| **Claude 앱**(claude.ai, 데스크톱) | [`skills/progressive-explainer`](skills/progressive-explainer) 폴더를 zip으로 내려받아 Claude 설정의 Skills 섹션에 업로드 | 모든 대화에서 쓸 수 있는 skill |

**2단계(선택): 프로젝트의 모든 설명에 사용**

기본적으로는 필요할 때 skill을 호출합니다(`/explain` 또는 "단계적으로 설명해 줘"). 설명을 요청할 때마다 에이전트가 사용하게 하려면:

- `npx progressive-explainer-cli init`은 무엇을 쓸지 보여줍니다. 확인하기 전에는 아무것도 쓰지 않습니다.
- `npx progressive-explainer-cli init --yes`는 `AGENTS.md`에(프로젝트가 `CLAUDE.md`나 `GEMINI.md`를 쓰면 그 파일에도) 마커 사이에 규칙을 추가하며, 파일의 나머지 부분은 건드리지 않습니다.

**3단계: 확인**

```
npx progressive-explainer-cli doctor
```

나중에 업데이트하려면 설치 방식에 따라 `npx progressive-explainer-cli update`, `claude plugin update progressive-explainer@progressive-explainer`, `npx skills update` 중 하나를 사용하세요.

## 크레딧

실제 설명으로 테스트한 결과를 바탕으로 만들고, 기존 skill과 비교했습니다:
- [patrick204nqh/skills](https://github.com/patrick204nqh/skills): 한 문장 답, 단일 비유, 요약은 `eli5`에서, 도표 규칙은 `diagram-it`에서 가져왔습니다.
- [adhd-friendly-documentation](https://skillsmp.com/skills/rghamilton3-dotfiles-dot-claude-skills-adhd-friendly-documentation-skill-md): 짧은 단락과 보내기 전 점검.

## 라이선스

MIT. 제작: Grégory Babonaux.
