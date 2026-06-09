# PULS kurz — Kontextový dokument pro pokračování

> Tento dokument slouží k přenesení kontextu do nové konverzace.
> Cíl: dokončit Tier 2, 3 a 4 ve stejném formátu jako Tier 1.

---

## Co je PULS

PULS je gamifikovaný vzdělávací kurz učící zaměstnance firem používat Claude AI. Má formu **planneru a habit trackeru** — nejde jen o "projít obsah", ale o vybudování reflexu: mám úkol → sáhnu po Claudovi. Kurz běží v appce "Claude planner" pod firmou PRAUT s.r.o.

## Co je hotové

### Systém (platí pro všechny tiery)

**4 typy dnů:**
- **Objevuj** — krátká teorie (max 15 min) + rovnou hands-on v Claude (~30/70)
- **Trénuj** — procvičování na vlastních příkladech, Claude jako sparring partner
- **Tvoř** — reálný výstup/deliverable, který student bude používat
- **Společně** — online hodina s lektorem 1×/týden

**3 vrstvy gamifikace:**
- **Questy** — checkpointy uvnitř dne, student odškrtává a sbírá XP (3-5 per day)
- **Habits** — průběžné denní/týdenní rituály narůstající s každou částí
- **Mise** — volitelné větší projekty (šéf může požadovat, budoucí CZ adaptace)

**Formát:** 10 pracovních dní per tier (Po–Pá, 2 týdny), ~2.5–3 h/den.
**Mentorované období:** Online hodina 1×/týden + support. Po kurzu obsah zůstává.
**Cílová skupina:** Zaměstnanci firem, šéf koupil kurz.

### Tier 1 — Foundation (HOTOVO)

**Soubory:**
1. `prirucka-jak-na-claude.md` — povinné čtení Den 1, 7 pravidel + bezpečnost + fráze
2. `tier1-10dni-obsah.md` — kompletní texty pro 10 dní s questy, habits, misemi
3. `tier1-10dni-struktura.excalidraw` — vizuální diagram struktury

**10 dní:**
| Den | Typ | Téma |
|---|---|---|
| 1 | Objevuj | Účet + wow moment + příručka + 4 otázky + manifest |
| 2 | Trénuj+Tvoř | Modely + rozhodovací karta (Artifact) |
| 3 | Objevuj+Trénuj | Chat: funkce + workflow |
| 4 | Objevuj+Trénuj | Projects + Artifacts + Memory |
| 5 | Společně | Online hodina + reflexe |
| 6 | Tvoř | Můj pracovní systém (rozšířený Project) |
| 7 | Objevuj | Promptování: teorie + experimenty |
| 8 | Trénuj | Prompt transformace a iterace |
| 9 | Tvoř | Prompt knihovna (5 šablon) |
| 10 | Společně+Tvoř | Online hodina + Capstone |

**Stats:** 43 questů, ~2 120 XP, 5 denních habits + 1 týdenní, 7 volitelných misí, ~28h povinných.

**Klíčová rozhodnutí Tier 1:**
- Den 1 začíná wow momentem (rovnou reálný úkol) PŘED teorií
- 4D rámec přeformulován do 4 českých otázek: Co mu dám? Jak to popíšu? Je to dobré? Chci to lepší?
- Příručka obsahuje sekci Bezpečnost a citlivá data (anonymizace, GDPR, rozdíl plánů)
- Technické pojmy (context window, knowledge cutoff) až od Den 2-3, ne Den 1
- Mise jsou volitelné (Academy certifikáty v angličtině) — šéf může požadovat do deadline

### České materiály z Anthropic (ověřené)

67 českých notebooků (.cs.ipynb) — validní JSON, kód shodný s originály, 0 FAIL.

Relevance pro tiery:
- **Tier 2:** `courses-master/prompt_engineering_interactive_tutorial` (Krok 9-10), `real_world_prompting` (Krok 9)
- **Tier 3:** `courses-master/anthropic_api_fundamentals` (Krok 18), `prompt_evaluations`, `tool_use`
- **Tier 4:** `claude-cookbooks-main` (Krok 23), `claude-quickstarts-main` (Krok 24)

---

## Co zbývá udělat

### Tier 2 — Power (80 h v originále, potřebuje přepracovat na 10 dní)

Originální moduly:
- Krok 7: Claude v Chrome a Claude Design (★★☆☆☆, 14h)
- Krok 8: Cowork, Excel, PowerPoint, M365 (★★★☆☆, 16h)
- Krok 9: Prompt Engineering: struktura (★★★☆☆, 14h)
- Krok 10: Interaktivní prompt tutoriál (★★★☆☆, 12h)
- Krok 11: Extended Thinking (★★★★☆, 10h)
- Krok 12: Claude Code: instalace (★★★★☆, 14h)

**Poznámky z analýzy:**
- Krok 7 spojuje Chrome extension + Claude Design — dvě nesouvisející věci, zvážit rozdělení
- Krok 9 a 10 (oba o promptování) — zvážit sloučení, 40h promptování celkem je moc
- České notebooky z prompt engineering tutoriálu jsou připravené pro Krok 9-10
- Krok 12 (Claude Code) je nejtěžší v tieru — první kontakt s terminálem

### Tier 3 — Advanced Power (85 h, potřebuje přepracovat na 10 dní)

Originální moduly:
- Krok 13: Browser Agent (★★★☆☆, 11h)
- Krok 14: Bezpečnost: Prompt Injection (★★★★☆, 9h)
- Krok 15: Slash Commands a Skill authoring (★★★★☆, 15h)
- Krok 16: Claude Code do hloubky (★★★★☆, 18h)
- Krok 17: IDE, Slack, GitHub Actions (★★★★☆, 14h)
- Krok 18: Claude API v praxi (★★★★★, 18h)

### Tier 4 — Expert (85 h, potřebuje přepracovat na 10 dní)

Originální moduly:
- Krok 19: MCP Architektura (★★★☆☆, 12h)
- Krok 20: MCP Registry a ekosystém (★★★★☆, 14h)
- Krok 21: MCP server Python (★★★★☆, 16h)
- Krok 22: MCP server TypeScript (★★★★☆, 16h)
- Krok 23: Cookbook + DeepLearning.AI (★★★★☆, 14h)
- Krok 24: CAPSTONE (★★★★★, 13h)

**Poznámky z analýzy:**
- Krok 21 a 22 (Python + TS server) — 32h na totéž ve dvou jazycích, zvážit: hlavní jazyk (16h) + srovnání (4h)

---

## Originální obsah kurzu (reference)

Kompletní popis všech 24 modulů je v dokumentu `PRAUT_Learning_Path_README.md` (320h, 239 zdrojů).
Seznam zdrojů je v `zdroje_rejstrik.md`.

## Princip pro přepracování dalších tierů

Stejný postup jako Tier 1:
1. Vzít originální moduly a jejich obsah
2. Rozdělit do 10 dnů (5+5)
3. Aplikovat typy dnů (Objevuj/Trénuj/Tvoř/Společně)
4. Povinné jádro (~2.5-3h/den) vs volitelné mise
5. Questy jako denní checkpointy (3-5 per den)
6. Habits narůstají průběžně
7. Online hodiny Den 5 a Den 10
8. Začátek každého týdne: shrnutí + co bude na konci
9. Bezpečnost a etika průběžně kde je relevantní
10. Wow moment / praktická ukázka na začátku nových konceptů

## Styl psaní

- Tykání, přímý tón, bez akademického žargonu
- Příklady z reálné české kancelářské práce
- Wow moment PŘED teorií — nejdřív zkus, pak pochop proč
- Anglické pojmy přeložit nebo vysvětlit česky
- Technické detaily až když je student potřebuje, ne preventivně
- „Pokud nevíš, zeptej se" princip platí i pro studenta
- Bezpečnost dat zmínit přirozeně u relevantních úkolů
