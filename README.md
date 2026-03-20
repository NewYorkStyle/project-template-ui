# project-template-ui

React UI kit на базе `antd` с экспортируемыми обертками компонентов и системой дизайн-токенов.

## Быстрый старт

```bash
npm install
npm run build
npm test
npm run storybook
```

### Доступные команды

- `npm run build` - сборка библиотеки (tsup)
- `npm run test` - запуск Jest
- `npm run storybook` - Storybook dev сервер (порт `6006`)
- `npm run build-storybook` - сборка Storybook
- `npm run prettier:format` / `npm run prettier:check` - форматирование/проверка

## Структура

- `src/components/*` - компоненты и их `*.stories.tsx` + тесты в `__tests__/`
- `src/theme/*` - дизайн-токены и `UiProvider`
- `src/index.ts` - публичные экспорты пакета

## Тема

Общий провайдер `UiProvider` поддерживает переопределение токенов через проп `tokens` (см. `src/theme/ui-provider.tsx`).
