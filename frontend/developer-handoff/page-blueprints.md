# PULS Page Blueprints

Tento soubor obsahuje rozhodnuté kompoziční návrhy pro hlavní stránky aplikace. Nejde o produkční implementaci, ale o layout a pattern contract.

## Day Content View

### Layout
- nahoře `DayHeader`
- hlavní sloupec: stack `TaskCard`
- pravý sticky sidebar: `QuestRow` panel
- glossary:
  - desktop: levý pomocný list nebo pravý `GlossaryDrawer` podle obrazovky
  - mobile: `GlossaryDrawer` jako overlay

### Rules
- `TaskCard` je primary content
- `QuestRow` je sekundární supporting progress layer
- `GlossaryDrawer` je knowledge utility, ne hlavní obsah
- brand accent smí být v `DayHeader`, ne v task listu
- `DayHeader` má být operativní: kde jsem, co dnes udělám, jaký je výstup a jaká je hlavní akce
- primary CTA nesmí znít jako vstup do lekce; uživatel už v detailu dne je
- jedna informace se nesmí opakovat v několika vrstvách současně
- completion summary má mít jeden vstupní label a pod ním už jen checklist
- pravý sidebar drží questy, habits, pokrok a glossary utility; ne obecné referenční zdroje
- Den 1 používá validní empty state pro předchozí lekce a pokrok, další dny přechází do reálného progress panelu

## Planner Overview

### Layout
- `TopAppShell`
- hlavní hero/overview panel
- `StatStrip`
- `ChecklistPanel` a `PomodoroPanel`
- pravý sloupec:
  - `ProgressDonutCard`
  - `CalendarPanel`

### Rules
- primární fokus je overview a workflow listy
- utility panely musí být vizuálně sekundární vůči hlavnímu checklist contentu

## Study Plan Overview

### Layout
- `TopAppShell`
- `SectionShell`
- overview `CoursePlanCard` row
- `InfoMetricCard` strip
- week sections
- uvnitř week sections grid `DayTile`

### Rules
- `DayTile` je roadmap overview, ne detailní task component
- vybraný den může použít brand accent vrstvu
- zamčené dny musí být čitelné, ale vizuálně utlumené

## Profile Topics Overview

### Layout
- `TopAppShell`
- `SectionShell`
- grid `TopicScoreCard`

### Rules
- cards musí být scan-friendly
- body a název oblasti jsou primární
- brand accent jen velmi střídmě, spíš na číslech nebo featured stavu

## Meets Control View

### Layout
- `TopAppShell`
- `SectionShell`
- horní `MeetingLaunchPanel`
- vnitřní dvousloupcový layout:
  - levý sloupec: `AgendaPanel`, room info, pomocné bloky
  - pravý sloupec: hlavní meet area + `ToolIconBar`

### Rules
- CTA na spuštění schůzky je primární akce
- `ToolIconBar` má být kompaktní utility pattern
- room a agenda bloky mají být stabilní supporting panels
