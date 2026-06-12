# PULS Frontend Handoff Package

Tato složka je **design handoff balíček** pro developera. Není to produkční frontend, ale rozhodnutý balík HTML prototypů, názvů, pravidel a page blueprintů, podle kterého lze začít stavět UI bez dalších designových rozhodnutí.

## Source of truth

Používej tyto zdroje v tomto pořadí:

1. [component-library.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-library.html)  
   hlavní index celé knihovny
2. [day-content-view.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/day-content-view.html)  
   první složená reálná obrazovka z knihovny; nejrychlejší kontrola, že systém drží pohromadě
3. [component-primitives.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-primitives.html)  
   quiet core primitives a shared token logika
4. [component-brand-accents.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-brand-accents.html)  
   brand emphasis vrstva, glow, accent outlines, hero treatments
5. jednotlivé `component-*.html` soubory  
   detail konkrétního patternu
6. [page-blueprints.md](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/page-blueprints.md)  
   kompoziční návrhy pro reálné stránky
7. [references/studium-final (1).html](</Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/references/studium-final (1).html>)  
   hlavní vizuální reference původního studium UI
8. [references/parts web](</Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/references/parts web>)  
   screenshot reference aktuálních webových obrazovek

## Library structure

### Quiet Core

Quiet Core je default systém pro většinu aplikace:

- surface card
- surface panel
- meta label
- title / body hierarchy
- XP pill
- search input
- segmented tabs
- icon button
- list row patterns

Používej ho pro běžné obsahové a pracovní komponenty.

### Brand Accents

Brand Accents jsou opt-in vrstva:

- fialový glow
- accent outline
- hero gradient surface
- featured/selected emphasis

Používej ji jen tam, kde má být jasné zvýraznění:

- `DayHeader`
- aktivní top nav
- featured plan card
- selected day tile
- hlavní CTA shell

Nepoužívej ji jako default u:

- `TaskCard`
- `QuestRow`
- `GlossaryTermAccordion`
- běžných checklist items

## Oficiální terminologie

Používej tyto názvy konzistentně:

- `Primitives`
- `Brand Accents`
- `DayHeader`
- `TaskCard`
- `QuestRow`
- `GlossaryTermAccordion`
- `GlossaryDrawer`
- `TopAppShell`
- `SectionShell`
- `StatStrip`
- `ProgressDonutCard`
- `InfoMetricCard`
- `CoursePlanCard`
- `DayTile`
- `ChecklistPanel`
- `CalendarPanel`
- `TopicScoreCard`
- `PomodoroPanel`
- `AgendaPanel`
- `ToolIconBar`
- `MeetingLaunchPanel`

`QuestRow` je správný název. Není to karta, ale denní sidebar row pattern.

## Primitive -> component mapping

- `ui-surface-card`
  - `TaskCard`
  - `CoursePlanCard`
  - `DayTile`
  - `TopicScoreCard`
  - `InfoMetricCard`
- `ui-surface-panel`
  - `GlossaryDrawer`
  - `ChecklistPanel`
  - `CalendarPanel`
  - `PomodoroPanel`
  - `AgendaPanel`
  - `MeetingLaunchPanel`
- `ui-meta-label`
  - všechny overview a dashboard hlavičky
- `ui-xp-pill`
  - `QuestRow`
  - checklist/meta řádky
- `ui-search-input`
  - `GlossaryDrawer`
- `ui-segmented-tabs`
  - `GlossaryDrawer`
- `ui-icon-button`
  - `GlossaryDrawer`
  - `ToolIconBar`

## Similar patterns that must not be confused

- `TaskCard` vs `DayTile`  
  `TaskCard` je detailní obsah dne, `DayTile` je overview karta v roadmapě.

- `QuestRow` vs `ChecklistPanel item`  
  `QuestRow` je kompaktní denní row pattern, `ChecklistPanel` je širší dashboardový seznam.

- `DayHeader` vs `SectionShell hero`  
  `DayHeader` je special/hero komponenta pro detail dne, `SectionShell` je obecný page kontejner.

- `GlossaryDrawer` vs page sidebar  
  `GlossaryDrawer` je knowledge panel, ne layoutový sidebar pro obecný obsah.

## Day detail rules

Tato pravidla jsou závazná pro `Day Content View` a všechny další detailní dny:

- **Jedna informace = jeden nosič**  
  Neopakuj stejný stav v badge, metě, hero textu a zvláštním vizuálním prvku zároveň. Typ dne, den kurzu, stav splnění a výstup dne se mají na stránce objevit jen jednou jako primární signál.

- **DayHeader je operativní, ne marketingový**  
  Header detailu dne má říct:
  - kde uživatel je
  - co dnes udělá
  - jaký je hlavní výstup dne
  - jaká je hlavní další akce  
  Nemá být přetížený slovní vatou, opakovanými metadaty ani volně plovoucími hesly.

- **Primary CTA musí odpovídat stavu „už jsem uvnitř dne“**  
  Nepoužívej CTA typu `Začít lekci`. Preferuj workflow akce jako:
  - `Otevřít Claude`
  - `Pokračovat`
  - `Otevřít příručku`

- **Completion summary má mít jediný vstupní signál**  
  Pokud stránka obsahuje sekci dokončení, použij jeden accent label nebo pill a pod ním už jen checklist. Nevytvářej další duplicitní nadpisy se stejnou větou.

- **Sidebar detailu dne má nést pracovní pomoc, ne archiv referencí**  
  Patří sem:
  - `QuestRow`
  - habits
  - pokrok / předchozí a navazující dny
  - glossary utility  
  Nepatří sem obecné referenční zdroje jako výchozí obsah.

- **Empty states jsou součást systému**  
  U prvního dne je správné ukázat prázdný stav předchozích lekcí a vysvětlit, že se zde další den objeví pokrok. Empty state není nouzové řešení, ale navržený pattern.

## Main deliverables

### Core and docs

- [component-library.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-library.html)
- [component-primitives.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-primitives.html)
- [component-brand-accents.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-brand-accents.html)
- [page-blueprints.md](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/page-blueprints.md)
- [day-content-view.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/day-content-view.html)
- [references/studium-final (1).html](</Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/references/studium-final (1).html>)
- [references/parts web](</Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/references/parts web>)

### Day Content View components

- [component-day-header.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-day-header.html)
- [component-task-card.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-task-card.html)
- [component-quest-row.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-quest-row.html)
- [component-glossary-term-accordion.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-glossary-term-accordion.html)
- [component-glossary-drawer.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-glossary-drawer.html)

### Shared app components

- [component-top-app-shell.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-top-app-shell.html)
- [component-section-shell.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-section-shell.html)
- [component-stat-strip.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-stat-strip.html)
- [component-progress-donut-card.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-progress-donut-card.html)
- [component-info-metric-card.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-info-metric-card.html)
- [component-course-plan-card.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-course-plan-card.html)
- [component-day-tile.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-day-tile.html)
- [component-checklist-panel.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-checklist-panel.html)
- [component-calendar-panel.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-calendar-panel.html)
- [component-topic-score-card.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-topic-score-card.html)
- [component-pomodoro-panel.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-pomodoro-panel.html)
- [component-agenda-panel.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-agenda-panel.html)
- [component-tool-icon-bar.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-tool-icon-bar.html)
- [component-meeting-launch-panel.html](/Users/terezabrittasvanda/data4course/Data4Course/frontend/developer-handoff/component-meeting-launch-panel.html)

## Implementation defaults

- `Quiet Core` je výchozí vizuální systém.
- `Brand Accents` jsou opt-in special treatment.
- `DayHeader` je schválená výjimka a zůstává hero-like.
- HTML showcase soubory nejsou doslovná implementace, ale vizuální a strukturní contract.
- Produkční frontend může komponenty rozdělit do frameworkových souborů, ale musí zachovat:
  - účel patternu
  - hierarchii obsahu
  - quiet core vs brand accents logiku
  - rozdíl mezi podobnými komponentami
