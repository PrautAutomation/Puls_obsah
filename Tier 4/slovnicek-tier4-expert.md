# Slovníček pojmů — Tier 4: Expert

> **Slovníček pro Tier 4.** Obsahuje pojmy z MCP architektury, agentních vzorů, testování a produkčního nasazení.
> Pokud neznáš pojmy z předchozích tierů, podívej se do příslušných slovníčků.
> Přidávej vlastní pojmy dole.

---

## MCP

**MCP (Model Context Protocol)** — standardizovaný protokol, kterým Claude komunikuje s externími systémy. Jako USB pro AI: jeden konektor, který funguje se vším.

**MCP server** — program, který rozumí MCP protokolu a nabízí Claudovi nástroje (tools), data (resources) a šablony (prompts). Třeba MCP server pro kalendář nabízí: přečti události, vytvoř událost, smaž událost.

**MCP klient** — aplikace, která posílá požadavky MCP serveru. Claude (nebo tvoje aplikace) je klient.

**Tool (MCP)** — akce, kterou MCP server nabízí. Claude ji může zavolat: „přečti soubor", „vytvoř poznámku", „najdi zákazníka".

**Resource (MCP)** — data, ke kterým MCP server dává přístup. Na rozdíl od toolu nejde o akci, ale o přečtení statických dat.

**Prompt (MCP)** — předpřipravená šablona v MCP serveru pro typický dotaz. Usnadňuje opakované úkoly.

**Handler** — funkce v MCP serveru, která zpracuje požadavek na konkrétní tool. Když Claude zavolá `read_note`, handler přečte poznámku a vrátí ji.

**Manifest** — popis MCP serveru: název, verze, jaké tools nabízí. Slouží k registraci a discovery.

**MCP Registry** — registr existujících MCP serverů. Místo, kde najdeš hotové servery pro různé služby — nemusíš všechno stavět od nuly.

## Agentní vzory

**AI agent** — Claude, který nejen odpovídá, ale sám plánuje a jedná. Rozhoduje, jaké kroky udělat, jaké tools zavolat, a vyhodnocuje výsledky.

**ReAct pattern (Reasoning + Acting)** — agentní vzor, kde Claude střídá přemýšlení (Thought) a jednání (Action). Cyklus: pozoruj → přemýšlej → jednej → vyhodnoť → opakuj.

**Planning** — fáze, kdy agent nejdřív naplánuje postup, než začne jednat. Snižuje riziko zbytečných kroků.

**Fallback** — záložní plán, když hlavní cesta selže. Agent zkusí jinou strategii místo toho, aby skončil chybou.

**Multi-agent** — vzor, kde více AI agentů spolupracuje na jednom úkolu. Každý má jinou specializaci.

**Tool use** — schopnost Clauda volat externí funkce (tools) během generování odpovědi. Základ pro agentní architekturu.

## Testování a evaluace

**Funkční testy** — ověření, že kód dělá to, co má. Vstup A → očekávaný výstup B.

**Kvalitativní evaluace** — hodnocení kvality AI výstupů podle kritérií (přesnost, relevance, tón, formát). Protože AI nedává vždy stejný výstup, potřebuješ jiný přístup než klasické testy.

**Regresní test** — ověření, že změna v kódu nerozbila něco, co předtím fungovalo.

**Bezpečnostní test** — ověření odolnosti proti prompt injection, úniku dat a neočekávaným vstupům.

**Evaluační kritéria (rubrika)** — definované měřítko kvality. Třeba: přesnost 1-5, relevance 1-5, formát 1-5. Umožňuje systematické hodnocení.

**Test suite** — sada testů spustitelná jedním příkazem. Řekne ti: kolik prošlo, kolik selhalo, kde jsou problémy.

**pytest** — populární testovací framework pro Python.

## Produkce a deployment

**Deployment (nasazení)** — proces, kdy svůj server/aplikaci zpřístupníš pro ostatní. Z „běží na mém počítači" na „běží na serveru a kdokoliv ho může použít".

**Produkce** — prostředí, kde aplikaci používají reální uživatelé. Na rozdíl od vývoje (kde testuješ) a stagingu (kde ověřuješ).

**Docker** — nástroj pro zabalení aplikace do kontejneru, který obsahuje všechno, co potřebuje ke spuštění. Funguje stejně na každém počítači.

**Kontejner** — izolované prostředí, ve kterém běží tvoje aplikace. Jako virtuální počítač, ale lehčí.

**Dockerfile** — soubor s instrukcemi, jak vytvořit Docker kontejner pro tvoji aplikaci.

**Cloud** — server někde na internetu, kde tvoje aplikace běží. Příklady: AWS, Google Cloud, Railway, Fly.io.

**Monitoring** — sledování, jestli tvoje aplikace běží správně. Upozorní tě, když se něco pokazí.

**Health check** — jednoduchý endpoint, který říká „server běží OK". Monitoring ho pravidelně kontroluje.

**Logging** — zaznamenávání, co server dělá. Když se něco pokazí, v logách najdeš proč.

**CI/CD (Continuous Integration / Continuous Deployment)** — automatizace: když pushneš kód, automaticky se spustí testy (CI) a pokud projdou, nasadí se nová verze (CD).

## Produktová kvalita

**Onboarding** — proces, kterým nový uživatel pochopí, co tvůj nástroj dělá a jak ho začít používat. Cíl: za 5 minut je produktivní.

**UX (User Experience)** — celkový zážitek uživatele. Srozumitelné chybové hlášky, jednoduchá instalace, intuitivní použití — to všechno je UX.

**Maintenance (údržba)** — průběžná péče o nasazenou aplikaci. Aktualizace, opravy, reakce na změny v API.

---

## Moje vlastní pojmy

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
