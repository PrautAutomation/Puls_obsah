# Claude Financial Data Analyst - český přehled

Tato složka obsahuje Next.js aplikaci pro finanční analýzu pomocí Claude. Uživatel může nahrát data nebo dokumenty, ptát se na ně v chatu a nechat Claude vytvořit vysvětlení nebo grafy.

## Co aplikace ukazuje

- Analýzu finančních dat pomocí Claude.
- Nahrávání souborů v různých formátech.
- Zpracování textových souborů, CSV, PDF a obrázků.
- Generování interaktivních grafů.
- Kombinaci chatu, datové analýzy a vizualizací v jedné webové aplikaci.

## Podporované vizualizace

Claude může podle dat vytvořit například:

- line charts pro časové řady,
- bar charts pro porovnání metrik,
- multi-bar charts pro více metrik,
- area charts pro objem v čase,
- stacked area charts pro rozpad na části,
- pie charts pro distribuci hodnot.

## Spuštění

### Požadavky

- Node.js 18 nebo novější.
- Claude API klíč.

### Instalace

```bash
cd financial-data-analyst
npm install
```

Vytvořte soubor `.env.local`:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Spusťte vývojový server:

```bash
npm run dev
```

Potom otevřete:

```text
http://localhost:3000
```

## Technologie

- Next.js 14
- React
- TailwindCSS
- shadcn/ui
- Recharts
- PDF.js
- Next.js API Routes
- Anthropic SDK

## Příklady použití

Studenti mohou zkoušet:

- nahrát CSV s finančními daty,
- požádat o hlavní trendy,
- nechat vytvořit graf,
- porovnat více metrik,
- požádat o vysvětlení výsledků pro netechnické publikum.

## Doporučení pro výuku

Tento quickstart je vhodný jako první větší webová aplikace. Má jasný cíl, běží lokálně přes `npm run dev` a studenti rychle uvidí výsledek v prohlížeči.
