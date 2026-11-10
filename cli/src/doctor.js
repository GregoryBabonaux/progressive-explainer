import fs from 'node:fs';
import path from 'node:path';
import { defaultTargets, STAMP } from './skills.js';
import { gitRoot, TARGETS } from './init.js';
import { hasBlock, blockVersion } from './writers.js';

export function diagnose({ root, env, version }) {
  const out = [];
  const ok = (message) => out.push({ level: 'ok', message });
  const warn = (message) => out.push({ level: 'warn', message });
  ok(`progressive-explainer-cli ${version}`);

  let skillFound = false;
  for (const target of defaultTargets(env)) {
    const dir = path.join(target, 'progressive-explainer');
    if (!fs.existsSync(path.join(dir, 'SKILL.md'))) continue;
    skillFound = true;
    const stampFile = path.join(dir, STAMP);
    if (!fs.existsSync(stampFile)) ok(`skill in ${target} (managed by another channel: plugin or skills.sh)`);
    else {
      const v = fs.readFileSync(stampFile, 'utf8').trim();
      if (v === version) ok(`skill ${v} in ${target}`);
      else warn(`skill ${v} in ${target}, CLI is ${version}: run progressive-explainer update`);
    }
  }
  if (!skillFound) warn('no progressive-explainer skill in ~/.agents/skills or ~/.claude/skills: fine if installed in the project or by the Claude Code plugin, otherwise run progressive-explainer skills --yes');

  if (!root) { warn('not inside a git repository: project checks skipped'); return out; }
  for (const projectSkills of ['.agents/skills', '.claude/skills', '.cursor/skills', '.github/skills']) {
    if (fs.existsSync(path.join(root, projectSkills, 'progressive-explainer', 'SKILL.md'))) ok(`skill in the project (${projectSkills})`);
  }
  let ruleFound = false;
  for (const t of TARGETS) {
    const file = path.join(root, t.file);
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (!hasBlock(text)) {
      if (t.always) ok(`${t.file} has no explainer rule (optional: run progressive-explainer init to use the skill for every explanation)`);
      continue;
    }
    ruleFound = true;
    const v = blockVersion(text);
    if (v === version) ok(`explainer rule ${v} in ${t.file}`);
    else warn(`explainer rule ${v ?? '(no version)'} in ${t.file}, CLI is ${version}: run progressive-explainer update`);
  }
  if (!ruleFound && !fs.existsSync(path.join(root, 'AGENTS.md'))) ok('no explainer rule in AGENTS.md (optional: run progressive-explainer init to use the skill for every explanation)');
  return out;
}

export function runDoctor(io, opts, version) {
  const results = diagnose({ root: gitRoot(io.cwd), env: io.env ?? process.env, version });
  for (const r of results) {
    if (r.level === 'ok' && opts.quiet) continue;
    io.stdout.write(`${r.level === 'ok' ? '✓' : '!'} ${r.message}\n`);
  }
  return 0;
}
