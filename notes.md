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
