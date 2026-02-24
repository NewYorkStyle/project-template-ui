## semantic-release для `@NewYorkStyle/project-template-ui`

- Релизы собираются из ветки **`master`** по конвенции **Conventional Commits**.
- Конфиг лежит в файле `.releaserc.json` и:
  - анализирует типы коммитов (`feat`, `fix`, `docs`, `chore`, и т.д.);
  - генерирует заметки о релизе и обновляет `docs/CHANGELOG.md`;
  - обновляет версию в `package.json` / `package-lock.json`;
  - публикует пакет в GitHub Packages с учётом `publishConfig.registry`.

### Скрипты

- `npm run semantic-release` — полноценный релиз (используется в CI).
- `npm run semantic-release:dry-run` — прогон без записи изменений (для локальной проверки).

### Формат коммитов

- Используется стандартный пресет `conventionalcommits`, примеры:
  - `feat(button): add secondary variant`
  - `fix(input): correct placeholder color`
  - `docs(readme): describe UiProvider tokens`
  - `chore(release): 1.2.3 [skip ci]` — автоматический служебный коммит от `semantic-release`.
