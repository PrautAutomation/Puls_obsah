# Claude Quickstarts - česká studentská verze

Tento repozitář obsahuje rychlé startovní projekty pro práci s Claude API. Na rozdíl od cookbooků nejde hlavně o jednotlivé výukové notebooky, ale o menší hotové aplikace a referenční implementace, které si můžete spustit, prozkoumat a upravit.

Česká verze je určená studentům, kteří nemluví anglicky. Technické názvy, příkazy, proměnné, API parametry, model IDs a konfigurační hodnoty zůstávají anglicky, aby projekty zůstaly funkční a odpovídaly dokumentaci i chybovým hláškám.

## Co je cílem této složky

Cílem je rychle ukázat, jak lze Claude použít v reálnějších aplikacích:

- agent, který používá nástroje,
- agent pro zákaznickou podporu,
- finanční analytik s vizualizací dat,
- ovládání prohlížeče,
- ovládání desktopového prostředí,
- autonomní coding agent.

## Dostupné quickstarty

### Customer Support Agent

[customer-support-agent](./customer-support-agent)

Webová aplikace pro zákaznickou podporu poháněná Claude. Ukazuje, jak propojit chat s knowledge base přes Amazon Bedrock Knowledge Bases a jak zobrazovat zdroje, ladicí informace a stav asistenta.

Vhodné pro studenty, kteří chtějí pochopit praktické použití RAG v aplikaci.

### Financial Data Analyst

[financial-data-analyst](./financial-data-analyst)

Next.js aplikace, která kombinuje Claude s interaktivní vizualizací dat. Uživatel nahraje finanční soubor nebo dokument a ptá se na data v chatu. Claude může generovat grafy a vysvětlovat trendy.

Vhodné jako první webová demo aplikace, protože má jasný účel a jednoduchý běh přes `npm run dev`.

### Agents

[agents](./agents)

Minimalistická výuková implementace LLM agenta. Ukazuje základní smyčku: model dostane úkol, zavolá nástroj, přečte výsledek a pokračuje. Nejde o SDK, ale o referenční implementaci základních konceptů.

Vhodné jako nejlepší start pro pochopení agentů.

### Browser Use Demo

[browser-use-demo](./browser-use-demo)

Docker/Streamlit demo, ve kterém Claude ovládá prohlížeč pomocí Playwrightu. Umí navigovat na weby, číst DOM, vyplňovat formuláře, extrahovat text a cílit elementy podle referencí.

Vhodné pro studenty, kteří už rozumí základům API a chtějí vidět automatizaci webu.

### Computer Use Demo

[computer-use-demo](./computer-use-demo)

Docker demo, ve kterém Claude ovládá desktopové prostředí přes computer use nástroje. Jde o výukovou ukázku běžící v izolovaném kontejneru.

Tento quickstart je pokročilejší a vyžaduje důraz na bezpečnost.

### Computer Use Best Practices

[computer-use-best-practices](./computer-use-best-practices)

Pokročilá referenční implementace pro macOS. Ukazuje doporučené postupy pro spolehlivější a levnější computer/browser use agenty: správné škálování screenshotů, dávkové nástroje, prompt caching, sandboxovaný shell a záznam trajektorie.

Spouštějte pouze v jednorázové macOS virtuální mašině. Agent může ovládat skutečnou myš, klávesnici a obrazovku.

### Autonomous Coding Agent

[autonomous-coding](./autonomous-coding)

Ukázka dlouho běžícího coding agenta postaveného nad Claude Agent SDK. Používá dva agenty: initializer agent vytvoří seznam funkcí a coding agent je postupně implementuje přes více relací.

Vhodné až pro pokročilé studenty. Demo může běžet velmi dlouho.

## Doporučené pořadí pro výuku

1. `agents/` - základní princip agentů a používání nástrojů.
2. `financial-data-analyst/` - srozumitelná webová aplikace s datovou analýzou.
3. `customer-support-agent/` - praktická aplikace zákaznické podpory s RAG.
4. `browser-use-demo/` - automatizace prohlížeče.
5. `computer-use-demo/` - ovládání desktopového prostředí v Dockeru.
6. `computer-use-best-practices/` - pokročilá macOS implementace.
7. `autonomous-coding/` - dlouho běžící autonomní coding agent.

## Obecný postup spuštění

Každý quickstart má vlastní README a vlastní postup. Obecně ale platí:

1. Otevřete složku konkrétního quickstartu.
2. Nainstalujte závislosti podle jeho README.
3. Nastavte `ANTHROPIC_API_KEY`.
4. Spusťte aplikaci nebo demo.
5. Otevřete lokální URL v prohlížeči, pokud ji projekt používá.

## Bezpečnostní poznámka

Quickstarty `browser-use-demo`, `computer-use-demo` a hlavně `computer-use-best-practices` mohou pracovat s webem, obrazovkou, myší nebo klávesnicí. Nepoužívejte osobní účty, hesla, citlivá data ani produkční prostředí. Pro computer use preferujte kontejner nebo virtuální mašinu.

## Další zdroje

- Claude API dokumentace: <https://docs.claude.com>
- Claude Cookbooks: <https://github.com/anthropics/claude-cookbooks>
- Claude API Fundamentals: <https://github.com/anthropics/courses/tree/master/anthropic_api_fundamentals>
