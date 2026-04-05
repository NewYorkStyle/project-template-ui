# AGENTS.md — UI Kit (`@new_york_style/project-template-ui`)

Контекст для AI-агентов (Cursor, Copilot, ChatGPT): как добавлять и менять компоненты, не ломая публичный API и архитектуру библиотеки.

Стек: **React**, **TypeScript**, **antd v6**, **pnpm**, сборка **tsup** (`src/index.ts` → `dist/`), **Storybook 10**, **Vitest** + **Testing Library** (jsdom), **Vite 7**.

## Язык ответов

- Все ответы и предложения по коду формулируй на русском языке.
- Технические термины (API, HTTP, SQL и т.д.) оставляй на английском.

---

## 1. Архитектура UI kit

| Область                   | Назначение                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `src/components/<name>/`  | Один компонент = одна папка: реализация, `index.ts`, stories, при необходимости `__tests__/` |
| `src/components/index.ts` | Barrel: реэкспорт всех публичных компонентов                                                 |
| `src/theme/`              | `design-tokens.ts`, `get-antd-tokens.ts`, `ui-provider.tsx`                                  |
| `src/index.ts`            | Точка входа пакета: `export * from './components'; export * from './theme';`                 |

**Как устроены компоненты:** почти всегда тонкие **обёртки над antd**: импорт `X as AntdX` и `type XProps`, публичный тип `TXProps = XProps`, рендер `<AntdX {...props} />`. Исключения: `Icon` (SVG через svgr), составные API как у `Input` / `Typography`.

**Публичный API библиотеки:** всё, что попадает в сборку через `src/index.ts` (и далее в `dist/index.*` по `package.json` → `"."`). Потребители импортируют `import { Button, UiProvider } from '@new_york_style/project-template-ui'`.

---

## 2. Правила создания компонентов

**Где:** `src/components/<name>/` (имя папки в **kebab-case** как в проекте: `button`, `input`, `segmented`).

**Обязательные файлы:**

| Файл                        | Роль                                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `<name>.tsx`                | Реализация (имя файла = имя папки, **не** абстрактное `component.tsx`)                                               |
| `index.ts`                  | Обычно `export * from './<name>';`                                                                                   |
| `<name>.stories.tsx`        | Storybook для документации и регрессии визуала                                                                       |
| `__tests__/<name>.test.tsx` | Если есть логика, подкомпоненты, нестандартное поведение — пиши тесты (в репозитории тесты есть и у простых обёрток) |

**Паттерн wrapper над antd (минимальный):**

```tsx
import {Button as AntdButton, type ButtonProps} from 'antd';

export type TButtonProps = ButtonProps;

export const Button = (props: TButtonProps) => {
  return <AntdButton {...props} />;
};
```

Статические подкомпоненты antd — навешивать на экспортируемый компонент, как в `src/components/input/input.tsx` (`Input.TextArea`, `Input.Password`, …).

---

## 3. Работа с props и типами

- Базовый тип пропсов: **`TXProps =` соответствующий тип из `antd`** (`ButtonProps`, `InputProps`, …).
- **Новые пропсы** добавляй только если они реально обрабатываются в обёртке: расширяй `TXProps` через `& { ... }` или отдельный тип. Не «придумывай» пропсы без реализации.
- **Обратная совместимость:** не удаляй и не переименовывай поля публичных `T*Props`. Новые поля — **опциональные**. Не меняй обязательность существующих пропсов без крайней необходимости.

---

## 4. Публичный API

- Компонент становится публичным, если добавлен реэкспорт в **`src/components/index.ts`** (`export * from './<name>';`).
- **`src/index.ts`** только агрегирует модули; не добавляй сюда произвольные пути в обход `components`/`theme`.

**Запрещённые изменения (breaking):**

- Удаление или переименование экспортируемых компонентов/типов.
- Смена формы API (например было `Input`, стал только namespace без корневого поля).
- Удаление статических свойств у компонентов (`Input.TextArea` и т.д.).
- Изменение `package.json` `exports` так, что ломается разрешение `"."`.

---

## 5. Theme и дизайн-токены

| Файл                           | Содержимое                                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/theme/design-tokens.ts`   | `TColorsPalette`, объект `designTokens`, объект **`layoutTokens`** (spacing, radius, text sizes) — комментарий в коде: публично переопределяется в основном палитра цветов |
| `src/theme/get-antd-tokens.ts` | `getAntdThemeConfig(palette)` → `ThemeConfig` antd: `token` + `components.*`                                                                                               |
| `src/theme/ui-provider.tsx`    | `UiProvider`: `ConfigProvider` + `theme` из `getAntdThemeConfig` + `locale` ru/en                                                                                          |

**`UiProvider`:** пропсы `children`, опционально `tokens?: Partial<TColorsPalette>`, `language?: 'ru' | 'en'`. Слияние: `{ ...designTokens, ...tokens }` в `useMemo`.

**Новые токены цвета:** добавь ключ в **`TColorsPalette`**, значение по умолчанию в **`designTokens`**, использование в **`getAntdThemeConfig`** (поля `token` / `components`). Иначе потребители не смогут типобезопасно переопределять палитру.

**Не ломай тему:** не удаляй ключи из `TColorsPalette` без мажорной версии; правки в `getAntdThemeConfig` проверяй в Storybook (глобальный декоратор в `.storybook/preview.tsx` оборачивает в `UiProvider`).

---

## 6. Storybook

- Файлы: `src/components/<name>/<name>.stories.tsx` (см. `main.ts`: `../src/**/*.stories.*`).
- **Meta:** `Meta<typeof Component>`, поле **`title`**: `'Components/<Name>'`, **`component`**, при необходимости **`tags: ['autodocs']`**, **`argTypes`**, **`parameters.layout` / `backgrounds`**.
- **Story:** `type TStory = StoryObj<typeof Component>`; варианты через **`args`** или **`render`** для композиций.
- **Когда обязательна story:** для каждого нового публичного компонента — минимум одна story + по возможности `Playground` с `args`, как у `button.stories.tsx` / `input.stories.tsx`.

Глобально stories рендерятся внутри **`UiProvider`** (`.storybook/preview.tsx`).

---

## 7. Тестирование

- **Когда:** новый компонент с кастомной логикой, статическими подкомпонентами, обработчиками — добавь тесты. Ориентир: существующие `__tests__/*.test.tsx`.
- **Где:** `src/components/<name>/__tests__/<name>.test.tsx` (маски в `vitest.config.ts`: `src/**/__tests__/**/*.{ts,tsx}`, `src/**/*.{test,spec}.{ts,tsx}`).
- **Что проверять:** рендер по роли/тексту/placeholder, клики/ввод через `@testing-library/user-event`, наличие статических свойств у compound-компонентов, граничные пропсы (`disabled`, `loading`).

**Конфигурация:** `vitest.config.ts` (окружение `jsdom`, `globals: true`, плагин `@vitejs/plugin-react`), `vitest.setup.ts` — `@testing-library/jest-dom/vitest`, моки `MessageChannel` / `matchMedia` / `ResizeObserver` / `IntersectionObserver`.

**API:** моки и шпионы — **`vi`** из `vitest` (`vi.fn`, `vi.mock`, `vi.spyOn`, fake timers — `vi.useFakeTimers` и т.д.). Общие хелперы для моков (например частичная подмена `antd`) — по необходимости в `src/test/`.

**Команды:** `pnpm test` — один прогон (`vitest run`); `pnpm test:coverage` — с покрытием (V8); для watch вручную: `pnpm exec vitest`.

---

## 8. Code Generation Rules (строго)

1. Создавай **полный набор**: `<name>.tsx`, `index.ts`, `<name>.stories.tsx`; при необходимости `__tests__/<name>.test.tsx`.
2. **Не вводи** новую структуру папок и именования, отличную от существующих компонентов.
3. Копируй стиль с **ближайшего аналога** (простой wrapper → `Button` / `Flex`; с подкомпонентами → `Input` / `Typography`).
4. **Не дублируй** компонент, если достаточно экспортировать существующий antd-компонент через обёртку в том же стиле.
5. **Не добавляй** новые зависимости без необходимости; peer: `react`, `react-dom`, `antd`.

---

## 9. Reference Patterns

| Задача                                  | Смотреть пример                                                          | Зачем                                                          |
| --------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Простой wrapper + `TProps`              | `src/components/button/button.tsx`, `flex/flex.tsx`, `select/select.tsx` | Один в один паттерн spread пропсов antd                        |
| Подкомпоненты antd на статических полях | `src/components/input/input.tsx`                                         | `Input.TextArea`, `Input.Password`, …                          |
| Составной объект вместо одного тега     | `src/components/typography/typography.tsx`                               | Несколько мелких обёрток + `export const Typography = { ... }` |
| Прямой re-export                        | `src/components/form/form.tsx`                                           | `export {Form} from 'antd'`                                    |
| Не antd, кастомные пропсы               | `src/components/icon/icon.tsx` + `types.ts`                              | Свой `TIconProps`, карта `ICON_NAMES`                          |
| Провайдер темы                          | `src/theme/ui-provider.tsx` + `get-antd-tokens.ts`                       | Связка токенов с `ConfigProvider`                              |

---

## 10. Изменение существующего кода

- Не ломай публичный API: экспорты, имена компонентов и `T*Props`, статические поля.
- Не меняй сигнатуры пропсов без веской причины; предпочитай **опциональные** новые пропсы.
- Не удаляй существующие экспорты из `src/components/index.ts` / `src/index.ts`.

---

## 11. Decision Rules

Если вариантов несколько:

1. Следуй тому, как уже сделано в **самом похожем** компоненте.
2. Не добавляй библиотеки.
3. Не меняй общую архитектуру (`src/index.ts` → `components` + `theme`) без явной задачи.

---

## 12. Best Practices

**Делай так:**

- Экспортируй типы как `TComponentProps` рядом с компонентом.
- Пробрасывай `...props` в antd, если нет специальной логики.
- Добавляй story с `autodocs` и осмысленным `title`/`argTypes`.
- После изменений темы — проверяй Storybook.

**Не делай так:**

- Не экспортируй внутренние детали antd путями вроде deep imports, если в проекте для этого нет прецедента (в `Typography` используются точечные импорты типов — только там, где уже принято).
- Не создавай второй `Button` под другим именем с тем же поведением.
- Не ломай `sideEffects: false` у пакета без необходимости (сейчас `false` в `package.json`).

**Частые ошибки AI:**

- Имя файла `Component.tsx` вместо `<name>.tsx`.
- Использовать **`jest.*`** в тестах вместо **`vi`** из `vitest` (проект на Vitest).
- Забыть `export *` в `src/components/index.ts`.
- Добавить проп в тип, но не прокинуть его в antd.
- Удалить статическое свойство у `Input`/`Typography`.
- Поменять `TColorsPalette` без обновления `designTokens` и `getAntdThemeConfig`.

---

## 13. Примеры кода из репозитория

### Компонент (простой)

`src/components/button/button.tsx`:

```tsx
import {Button as AntdButton, type ButtonProps} from 'antd';

export type TButtonProps = ButtonProps;

export const Button = (props: TButtonProps) => {
  return <AntdButton {...props} />;
};
```

### Типизация + подкомпоненты

`src/components/input/input.tsx` (фрагмент):

```tsx
import {Input as AntdInput, type InputProps} from 'antd';

export type TInputProps = InputProps;

const {
  OTP: AntdOTP,
  Password: AntdPassword,
  Search: AntdSearch,
  TextArea: AntdTextArea,
} = AntdInput;

export const Input = (props: TInputProps) => {
  return <AntdInput {...props} />;
};

Input.TextArea = AntdTextArea;
Input.Search = AntdSearch;
Input.Password = AntdPassword;
Input.OTP = AntdOTP;
```

### Story (Meta / StoryObj)

`src/components/button/button.stories.tsx` (фрагмент):

```tsx
import type {Meta, StoryObj} from '@storybook/react-vite';

import {Button} from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes, parameters...
};

export default meta;
type TStory = StoryObj<typeof Button>;

export const Primary: TStory = {
  args: {
    children: 'Primary Button',
    type: 'primary',
  },
};
```

### Тест

`src/components/button/__tests__/button.test.tsx` (фрагмент):

```tsx
import {fireEvent, render, screen} from '@testing-library/react';
import {vi} from 'vitest';

import {Button} from '../button';

describe('Button', () => {
  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Provider

`src/theme/ui-provider.tsx` — обёртка `ConfigProvider` с `theme={getAntdThemeConfig(mergedPalette)}` и `locale` по `language`.

---

Контрольный список перед PR: `pnpm run build`, `pnpm test` (при необходимости `pnpm test:coverage`), `pnpm run storybook` (или `build-storybook`) для затронутых компонентов.
