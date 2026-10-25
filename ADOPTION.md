# Adoption — единый стиль платформы

Источник истины: **https://github.com/drycov/design-kit** (v0.3)

## Проекты

| Проект | Тип UI | Как подключено |
|--------|--------|----------------|
| **equipment-bot** | FastAPI + Jinja | `webapp/static/design-kit.css` + Telegram admin |
| **cms** | React + Vite | vendor `frontend/src/vendor/design-kit/` |
| **optibudget** | React + Vite | vendor `src/vendor/design-kit/` |
| **ppr-system** | React + static | vendor `frontend/src/vendor/design-kit/` |
| **backup_tool** | static SPA | `scanner/static/css/design-kit.css` |

## Vendor (рекомендуется)

```text
src/vendor/design-kit/css/
  index.css      # tokens + components + layout + utilities + ops
  tokens.css
  components.css
  layout.css
  utilities.css
  ops.css
```

```ts
import "./vendor/design-kit/css/index.css";
import { applyTelegramTheme } from "./vendor/design-kit/theme";
applyTelegramTheme();
```

После обновления upstream — перекопировать `css/` из design-kit.

## CSS entry points

| Import | Contents |
|--------|----------|
| `@drycov/design-kit/css` | all |
| `.../css/tokens` | variables only |
| `.../css/components` | UI controls |
| `.../css/layout` | shell / grids |
| `.../css/utilities` | spacing / text helpers |
| `.../css/ops` | equipment / map / status |

## React API (v0.3)

`Button`, `Badge`, `Card`, `StatCard`, `Alert`, `Input`, `Modal`, `Tabs`, `EmptyState`, `Spinner`, `Chip`, `Progress`, `applyTelegramTheme`.

См. [COMPONENTS.md](./COMPONENTS.md).
