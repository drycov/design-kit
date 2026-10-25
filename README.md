# @drycov/design-kit

Единый **Telegram Dark/Light** design system для ops-платформы:

- equipment-bot
- cms
- optibudget
- ppr-system
- backup_tool

## Быстрый старт

**Vendor (рекомендуется для CI):** скопируйте `css/` в проект — см. [ADOPTION.md](./ADOPTION.md).

**npm (локально):**

```bash
npm install github:drycov/design-kit
```

```ts
import "@drycov/design-kit/css";
import { applyTelegramTheme } from "@drycov/design-kit";
applyTelegramTheme();
```

## Токены

| Token | Dark |
|-------|------|
| `--tg-bg` | `#0e1621` |
| `--tg-secondary` | `#17212b` |
| `--tg-button` | `#2aabee` |
| `--tg-text` | `#f3f6f8` |
| `--tg-hint` | `#91a3b7` |

Полный список — `css/tokens.css`.
