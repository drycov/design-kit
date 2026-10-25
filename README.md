# @drycov/design-kit

Единый **Telegram Dark/Light** design system для ops-платформы (equipment-bot, cms, optibudget, ppr-system, backup_tool).

**v0.3** — расширенные токены, forms/modal/tabs, ops-паттерны, utilities, React-примитивы.

## Установка

**Vendor (рекомендуется для CI):**

```bash
# скопировать css/ в src/vendor/design-kit/css/
```

**npm:**

```bash
npm install github:drycov/design-kit
```

```ts
import "@drycov/design-kit/css";
import { applyTelegramTheme, Button, Modal, Tabs } from "@drycov/design-kit";
applyTelegramTheme();
```

## Документация

- [ADOPTION.md](./ADOPTION.md) — подключение в репозиториях
- [COMPONENTS.md](./COMPONENTS.md) — классы и React API
- [CHANGELOG.md](./CHANGELOG.md)

## Токены (dark)

| Token | Value |
|-------|-------|
| `--tg-bg` | `#0e1621` |
| `--tg-secondary` | `#17212b` |
| `--tg-button` | `#2aabee` |
| `--tg-text` | `#f3f6f8` |
| `--tg-hint` | `#91a3b7` |
| `--tg-success` | `#53bd86` |
| `--tg-danger` | `#eb6570` |
