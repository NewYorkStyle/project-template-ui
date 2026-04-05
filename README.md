# project-template-ui

React UI kit на базе `antd` с экспортируемыми обертками компонентов и системой дизайн-токенов.

## Быстрый старт

Менеджер пакетов — **pnpm** (версия задаётся полем `packageManager` в `package.json`; при необходимости: `corepack enable`).

```bash
pnpm install
pnpm run build
pnpm test
pnpm run storybook
```

### Доступные команды

- `pnpm run build` — сборка библиотеки (tsup)
- `pnpm test` / `pnpm run test` — один прогон unit-тестов (Vitest, `vitest run`)
- `pnpm run test:coverage` — те же тесты с отчётом покрытия (V8)
- `pnpm exec vitest` — интерактивный watch-режим Vitest
- `pnpm run storybook` — Storybook dev сервер (порт `6006`)
- `pnpm run build-storybook` — сборка Storybook
- `pnpm run prettier:format` / `pnpm run prettier:check` — форматирование/проверка

## Структура

- `src/components/*` - компоненты и их `*.stories.tsx` + тесты в `__tests__/`
- `src/theme/*` - дизайн-токены и `UiProvider`
- `src/index.ts` - публичные экспорты пакета

## Тема

Общий провайдер `UiProvider` поддерживает переопределение токенов через проп `tokens` (см. `src/theme/ui-provider.tsx`).
