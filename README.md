# @drycov/design-kit

Общий **Telegram-style design kit** для ops-платформы: токены, CSS-примитивы и лёгкие React-компоненты.

Профиль платформы: https://github.com/drycov#-ops-platform-ecosystem

## Установка

```bash
npm install github:drycov/design-kit
# или
npm install https://github.com/drycov/design-kit/archive/main.zip
```

Для Jinja / статики (equipment-bot):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/drycov/design-kit@main/css/index.css" />
```

Локально скопируйте `css/` в `webapp/static/design-kit/` или подключайте как git submodule / npm package files.

## CSS

```css
@import '@drycov/design-kit/css';
/* или по частям */
@import '@drycov/design-kit/css/tokens';
@import '@drycov/design-kit/css/components';
@import '@drycov/design-kit/css/layout';
```

Тема: `html[data-tg-theme="dark|light"]` (по умолчанию dark).

Telegram WebApp:

```js
import { applyTelegramTheme } from '@drycov/design-kit';
applyTelegramTheme();
```

## React

```tsx
import { Button, Badge, Card, StatCard } from '@drycov/design-kit';
import '@drycov/design-kit/css';

export function Dashboard() {
  return (
    <Card title="Статус">
      <StatCard label="Online" value={12} />
      <Button variant="primary">Обновить</Button>
      <Badge tone="online">online</Badge>
    </Card>
  );
}
```

## Структура

```text
css/
  tokens.css       # palette, radius, focus
  components.css   # btn, badge, form, table, alert
  layout.css       # sidebar, page-head, stats grid
  index.css        # all
src/
  tokens.ts        # JS/TS mirror of tokens
  theme.ts         # Telegram WebApp scheme helper
  components/      # React primitives
  index.ts
```

## Потребители

| Product | Как подключать |
| --- | --- |
| equipment-bot | CSS в Jinja (`base.html`) |
| cms | npm + React imports |
| backup_tool | CSS tokens / optional React later |

## Не входит

- Leaflet / map chrome (product-specific)
- Chart libraries
- Auth widgets
