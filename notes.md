# 📝 Conventional Commits — Quick Reference

This document summarizes the commit types used in the **Domínio Fullstack** project,
following the _Conventional Commits_ standard.

---

## 🔧 Main Commit Types

| Type         | Meaning       | When to Use                                                                        |
| ------------ | ------------- | ---------------------------------------------------------------------------------- |
| **feat**     | Feature       | When adding a new functionality or capability.                                     |
| **fix**      | Bug Fix       | When correcting a bug or unexpected behavior.                                      |
| **docs**     | Documentation | Changes to documentation: README, comments, notes.                                 |
| **style**    | Code Style    | Changes that do not affect behavior: formatting, spacing, semicolons, indentation. |
| **refactor** | Refactoring   | Internal code changes that do not modify behavior.                                 |
| **perf**     | Performance   | Changes that improve performance.                                                  |
| **test**     | Tests         | Adding, updating or removing automated tests.                                      |
| **build**    | Build System  | Changes to Webpack, Vite, Babel, dependencies, or packaging.                       |
| **ci**       | CI/CD         | Adjustments to pipelines, GitHub Actions, deploy scripts.                          |
| **chore**    | Maintenance   | Tasks that do not affect logic: moving folders, updating configs, installing deps. |
| **revert**   | Revert        | Reverts a previous commit.                                                         |

---

## 📌 Quick Examples

- `feat: add dark mode toggle to navbar`
- `fix: correct API url causing 404 error`
- `docs: update README with new instructions`
- `style: format project using prettier`
- `refactor: extract card component into its own file`
- `perf: reduce API calls in filters`
- `test: add tests for string utilities`
- `build: update webpack config`
- `ci: fix node version in deploy workflow`
- `chore: reorganize modules folder`

---

## 🧠 General Tips

- Always write the commit in **imperative form** (add, fix, update, remove).
- Keep the title around **50 characters** if possible.
- The commit should explain **WHAT** and **WHY**, not **HOW**.
- For detailed commits, use a longer body:

## 🧩 Git Shortcuts — Daily Workflow

### 🔹 Basic Commands

- `git status` — check changes
- `git add .` — stage all changes
- `git commit -m "message"` — create a commit
- `git push` — send changes to remote
- `git pull` — update your branch from remote
- `git log --oneline` — show clean commit history

### 🔹 Branching

- `git branch` — list branches
- `git switch -c <branch>` — create + switch to a new branch
- `git switch <branch>` — switch to an existing branch
- `git merge <branch>` — merge into current branch
- `git rebase <branch>` — rewrite commits on top of another branch

### 🔹 Fixing Mistakes

- `git restore <file>` — undo changes in a file
- `git reset HEAD~1` — undo last commit (keep changes unstaged)
- `git reset --hard HEAD~1` — delete last commit + changes
- `git stash` — temporarily save work
- `git stash pop` — restore stashed work

### 🔹 Useful Extras

- `git diff` — see differences
- `git remote -v` — list remote URLs
- `git clean -fd` — remove untracked files/folders
- `git tag -a v1.0.0 -m "Release"` — create version tag

## 📁 Recommended Project Structure

### 🔹 JavaScript / Frontend (Vanilla or DOM Practice)

project/
│── index.html
│── global.css
│── app.js
│── assets/
│ ├── images/
│ ├── fonts/
│── modules/
│ ├── utils/
│ ├── services/
│── notes.md
│── README.md

### 🔹 React Project (CRA, Vite or Next.js)

src/
│── components/
│── pages/ or routes/
│── hooks/
│── context/
│── services/ (API clients)
│── utils/
│── assets/
│── styles/
│── App.jsx
│── main.jsx
│── index.css

public/
│── assets/

### 🔹 Fullstack (Node + API + Front)

backend/
│── src/
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── middlewares/
│ ├── config/
│ ├── database/
│── tests/
│── package.json

frontend/
│── src/
│── public/

docs/
notes.md
README.md

## 🧼 Code Conventions — Clean Development

### 🔹 Naming

- Use **camelCase** → `userName`, `getUserData`
- Components in **PascalCase** → `HeaderMenu.jsx`
- Constants in **UPPER_CASE** → `API_BASE_URL`

### 🔹 Folder Naming

- Use **kebab-case** or **lowercase no spaces**
  - `user-profile`
  - `string-utils`
  - `api-client`

### 🔹 Functions

- Keep functions **pure when possible**
- One function = one responsibility
- Name functions starting with verbs:
  - `getUsers()`
  - `createCard()`
  - `validateEmail()`

### 🔹 Files

- One component per file
- One class per file
- Keep files short and focused

### 🔹 Comments

- Avoid redundant comments:
  - ❌ `// this adds 1 to i`
- Use comments to explain **why**, not “what”.

### 🔹 Formatting

- Always run Prettier (even manually)
- Use ESLint when possible
- Keep indentation consistent (2 spaces or 4 spaces)

### 🔹 API / Fetch

- Always handle errors
- Prefer async/await for readability
- Extract API calls into a `services/` folder when using React or Node

### 🔹 Git Commits

- Always use Conventional Commits:
  - `feat:`
  - `fix:`
  - `chore:`
  - `docs:`
  - `refactor:`
