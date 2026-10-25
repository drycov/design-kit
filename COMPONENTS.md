# Components

## CSS classes

| Group | Classes |
|-------|---------|
| Buttons | `.dk-btn` / `.btn`, `--primary`, `--secondary`, `--danger`, `--ghost`, `--sm`, `--lg`, `--icon` |
| Badges | `.dk-badge--online/offline/maintenance/unknown/admin/engineer/installer/info` |
| Cards | `.dk-card`, `__head`, `__body`, `__foot` |
| Alerts | `.dk-alert--error/ok/warn/info` |
| Forms | `.dk-input`, `.dk-label`, `.dk-field`, `.dk-hint` |
| Tables | `.dk-table`, `.dk-table-wrap` |
| Switch | `.dk-switch` |
| Stats | `.dk-stat`, `.dk-stats` |
| Toolbar | `.dk-toolbar`, `.dk-search`, `.dk-chip` |
| Tabs | `.dk-tabs`, `.dk-tab.is-active` |
| Modal | `.dk-modal-backdrop`, `.dk-modal`, `__head/body/foot` |
| Empty / load | `.dk-empty`, `.dk-spinner`, `.dk-progress` |
| Rows | `.dk-row`, `__ico`, `__title`, `__hint` |
| Avatar | `.dk-avatar`, `--sm`, `--lg` |
| Layout | `.dk-layout`, `.dk-sidebar`, `.dk-content`, `.dk-page-head`, grids |
| Ops | `.dk-status-dot`, `.dk-map-legend`, `.dk-ip`, `.dk-quick-card` |
| Utils | `.dk-mt-*`, `.dk-text-hint`, `.dk-flex`, `.dk-truncate` |

## React

```tsx
import {
  Button, Badge, Card, StatCard, Alert,
  Input, Modal, Tabs, EmptyState, Spinner, Chip, Progress,
  applyTelegramTheme,
} from "@drycov/design-kit";
import "@drycov/design-kit/css";
```

Vendor path (CI-safe): copy `css/` into the app.
