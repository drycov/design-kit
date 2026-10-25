# Adoption — единый стиль платформы

Источник истины: **https://github.com/drycov/design-kit**

## Проекты

| Проект | Тип UI | Как подключено |
|--------|--------|----------------|
| **equipment-bot** | FastAPI + Jinja | `webapp/static/telegram-theme.css` + inline tokens в `base.html` |
| **cms** | React + Vite | vendor `frontend/src/vendor/design-kit/` |
| **optibudget** | React + Vite | vendor `src/vendor/design-kit/` |
| **ppr-system** | React + static | vendor `frontend/src/vendor/design-kit/` |
| **backup_tool** | static SPA | `scanner/static/css/design-kit.css` |

## Рекомендуемый способ (без npm github)

CI/Vercel часто ломают `github:drycov/design-kit`. Предпочтительно **vendor**:

```text
src/vendor/design-kit/
  css/tokens.css
  css/components.css
  css/layout.css
  css/index.css
  theme.ts   # optional for React
```

```ts
import "./vendor/design-kit/css/index.css";
// optional:
import { applyTelegramTheme } from "./vendor/design-kit/theme";
applyTelegramTheme();
```

## Токены (обязательные)

```css
--tg-bg, --tg-secondary, --tg-tertiary, --tg-surface
--tg-text, --tg-hint, --tg-link
--tg-button, --tg-button-text
--tg-success, --tg-danger, --tg-warning, --tg-purple
--tg-border, --tg-control-bg, --tg-focus
--radius, --radius-sm, --sidebar-w, --font-sans
```

Тема: `html[data-tg-theme="dark"|"light"]`.

## Классы

- Buttons: `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-danger`
- Cards: `.card` / `.tg-group`
- Badges: `.badge-online` / `.badge-offline` / `.badge-engineer` / …
- Layout: `.layout` / `.sidebar` / `.content` / `.page-head`
- Forms: `.dk-input` / `.form-group`

## Синхронизация

При смене палитры в этом репозитории — скопировать `css/` в vendor каждого проекта.
