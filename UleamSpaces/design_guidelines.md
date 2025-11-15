# ULEAM Space Reservation System - Design Guidelines

## Design Approach
This is a utility-focused administrative system with role-based interfaces. Follow a clean, modern design system approach (Material/Fluent-inspired) with institutional branding through the ULEAM color palette.

## Color System (EXACT - Non-Negotiable)
```
Primary Red: #E63946 (buttons, links, accents)
Dark Red: #C1121F (hover states, dark mode accents)
Light Red: #FFE5E8 (backgrounds, badges, alerts)
Gray: #8D99AE (secondary text, borders)
Dark Gray: #2B2D42 (text, dark backgrounds)
Light Gray: #EDF2F4 (backgrounds, cards)
```

**Status Colors:**
- Pending: Yellow (#F59E0B)
- Approved: Green (#10B981)
- Rejected: Red (#E63946)
- Completed: Blue (#3B82F6)
- Cancelled: Gray (#6B7280)
- In Progress: Bright Green (#22C55E)

## Layout System
**Spacing Scale:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Card padding: p-6
- Section spacing: py-8 to py-12
- Component gaps: gap-4 to gap-6
- Container max-width: max-w-7xl

## Typography
**Font Family:** Inter or similar clean sans-serif via Google Fonts

**Hierarchy:**
- Page Titles: text-3xl font-bold text-gray-900
- Section Headers: text-2xl font-semibold text-gray-800
- Card Titles: text-xl font-semibold text-gray-900
- Body Text: text-base text-gray-700
- Secondary Text: text-sm text-gray-500
- Captions: text-xs text-gray-400

## Navigation & Sidebar

**Conditional Sidebar (280px width):**
- Background: white with subtle shadow
- Active item: red background (#E63946) with white text
- Inactive items: gray text with red hover effect
- Section divider: gray horizontal line (border-gray-200)
- Icons: 20px, left-aligned with 12px gap to text

**User Sidebar Items:**
🏠 Inicio | 🏢 Explorar Espacios | 📅 Mis Reservas | ➕ Nueva Reserva | 📆 Calendario | 🔔 Notificaciones | 👤 Mi Perfil

**Admin-Only Items (below divider):**
🛡️ Panel de Administración | 👥 Gestión Usuarios | 🏢 Gestión Espacios | 📋 Gestión Categorías | 🎯 Tipos de Evento | ⏸️ Bloqueos | ✅ Aprobar Reservas | 📊 Reportes | ⚙️ Configuración

## Navbar
- Height: 64px
- Background: dark gray (#2B2D42)
- Logo left, user menu right
- Admin badge: yellow shield icon + "Modo Admin" text when logged in as admin

## Component Library

### Cards
- White background, rounded-lg, shadow-sm
- Hover: shadow-md transition
- Border: 1px solid light gray or none
- Image aspect ratio: 16:9 for space cards

### Buttons
**Primary:** Red background, white text, rounded-lg, px-6 py-3
**Outline:** Red border and text, white background, hover fills red
**Secondary:** Gray background, dark text
**Icon Buttons:** Circular or square, 40px, subtle hover

### Tables
- Zebra striping: alternate rows with light gray (#EDF2F4)
- Header: dark gray background, white text, font-semibold
- Row height: 56px minimum
- Action buttons: small, icon-based, in rightmost column

### Forms
- Input height: 44px
- Border: 1px gray, focus: 2px red outline
- Labels: text-sm font-medium, mb-2
- Select dropdowns: custom styled with red accent
- Toggles/Switches: red when active

### Modals
- Overlay: black with 50% opacity
- Modal: white, rounded-lg, max-width based on content
- Header: borderBottom, with close X button (gray)
- Footer: right-aligned action buttons with gap-3

### Badges
- Pill-shaped, rounded-full
- Small: px-3 py-1 text-xs
- Color-coded by status (use status colors above)

### Metric Cards (Admin Dashboard)
- Large prominent number: text-4xl font-bold
- Label below: text-sm text-gray-500
- Icon: top-right, 48px, light red background circle
- Subtle gradient or solid white background

## Page-Specific Layouts

### Dashboard (User & Admin)
- 4-column grid for metric cards (responsive: 1-col mobile, 2-col tablet)
- Charts section: full-width cards with py-8
- Recent activity: table format with action buttons

### Space Exploration
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Card: image top, content below, badge overlays for category
- Filter sidebar: 240px, collapsible on mobile
- Search bar: prominent, full-width with icon

### Space Detail
- Hero image: full-width, 400px height, with gradient overlay
- Title over image: text-4xl font-bold text-white
- Info grid: 2-column layout for specifications
- Availability calendar: embedded, full-width
- CTA buttons: large, fixed bottom on mobile

### Reservation Form
- Multi-step wizard OR single page with clear sections
- Date/time pickers: custom styled with red accents
- Space preview: sidebar card (desktop) or top card (mobile)
- Confirmation screen: summary table before submit

### Admin: Gestión de Usuarios
- Table with avatar column (48px circular)
- Role badge: inline, colored (Admin: red, User: gray)
- Status toggle: inline switch (green active, gray inactive)
- Action dropdown: 3-dot menu, right-aligned

### Admin: Aprobar Reservas
- Card-based layout (not table)
- Each card: 2-column layout - reservation info left, action buttons right
- Action buttons: large, ✅ Aprobar (green) and ❌ Rechazar (red)
- Comment textarea: expandable below

### Admin: Reportes
- Date range picker: prominent header
- Chart containers: white cards, shadow, rounded, p-6
- Export button: outline red, top-right
- Charts: Use red (#E63946) as primary color in all visualizations

## Interactions & States

**Loading States:**
- Skeleton screens for content
- Spinner: red circular spinner for actions

**Empty States:**
- Centered illustration + message
- CTA button below

**Confirmations:**
- Modal with warning icon
- Clear "Cancel" (gray) and "Confirm" (red) buttons

**Toasts/Notifications:**
- Top-right corner, stack vertically
- Success: green left border | Error: red | Info: blue | Warning: yellow
- Auto-dismiss after 5 seconds, with close X

## Images
**Space Photos:** Use realistic institutional building/room images
- Hero sections for space detail pages: wide-angle interior shots
- Card thumbnails: well-lit, professional photos
- Fallback: ULEAM red placeholder with icon

**No large marketing hero** - this is a functional app. Focus on clean data presentation and efficient workflows.

## Accessibility
- All interactive elements: minimum 44px touch target
- Color contrast: WCAG AA minimum
- Focus indicators: 2px red outline on all focusable elements
- Form labels: always visible (no placeholder-only)
- Alt text for all images

## Responsive Breakpoints
- Mobile: < 640px (single column, hamburger menu)
- Tablet: 640px - 1024px (2 columns, collapsible sidebar)
- Desktop: > 1024px (3+ columns, persistent sidebar)