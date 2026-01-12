# Ralph Iteration Prompt

You are running in a Ralph autonomous loop. Your memory persists through:
- Git history (your previous commits)
- `scripts/ralph/prd.json` (user stories with pass/fail status)
- `scripts/ralph/progress.txt` (learnings from previous iterations)

---

## Your Task This Iteration

1. **Read:** `scripts/ralph/prd.json` and `scripts/ralph/progress.txt`
2. **Find:** First story where `passes: false`
3. **Implement:** Make the code changes
4. **Verify:** Run tests, typecheck, visual checks
5. **If passes:**
   - Update `prd.json`: Set `passes: true`
   - Commit: `[Ralph] US-XXX: {title}`
   - Log learnings to `progress.txt`
6. **If fails:**
   - Log what went wrong to `progress.txt`
   - Attempt to fix or leave notes in story's `notes` field

---

## Verification

```bash
npm run typecheck || npx tsc --noEmit
npm test
npm run lint
```

---

## Completion

When ALL stories have `passes: true`, output:
```
<promise>COMPLETE</promise>
```
