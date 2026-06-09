# Než začneš: Setup pro Tier 4

> **Projdi si tohle před Dnem 1.**
> Tier 4 je nejnáročnější úroveň kurzu. Budeš stavět MCP servery, nasazovat do produkce a vytvářet řešení pro ostatní.
> Pokud všechno umíš a máš — zabere ti to 15 minut.
> Pokud něco chybí — doplň to. Bez toho se nepohneš.

---

## Technický setup

### ☐ Účet na claude.ai (Pro plán nebo vyšší)

Přístup ke všem modelům a funkcím. Pro API práci potřebuješ i účet na console.anthropic.com s API klíčem.

### ☐ Claude Code — pokročilá zkušenost

Claude Code je tvůj hlavní nástroj. Potřebuješ ho ovládat na úrovni, kde s ním stavíš reálné věci — ne jen zkoušíš.

*Ověření: Postavil jsi v Claude Code funkční nástroj? Umíš debuggovat? Pracuješ s více soubory?*

### ☐ VS Code s Claude integrací

Funkční IDE s Claude rozšířením. Budeš v něm trávit hodně času.

### ☐ Python a/nebo Node.js/TypeScript

MCP servery budeš stavět v kódu. Potřebuješ mít nainstalovaný:
- **Python 3.10+** (doporučeno jako hlavní jazyk) a `pip`
- **Node.js 18+** a `npm` (pro TypeScript variantu)

Nemusíš být expert programátor — Claude Code píše kód za tebe. Ale potřebuješ rozumět základům: co je funkce, proměnná, import, jak se spouští skript.

*Ověření: Umíš spustit Python skript z terminálu? Umíš nainstalovat balíček přes pip/npm?*

### ☐ GitHub účet s repozitářem

Budeš verzovat kód, sdílet projekty, a možná nasazovat. Potřebuješ:
- Účet na github.com
- Alespoň jeden repozitář (může být prázdný)
- Základní git: `git add`, `git commit`, `git push`

*Nevíš? Řekni Claude Code: „Vysvětli mi základy gitu — potřebuji umět commit a push. Jednoduše, krok za krokem."*

### ☐ API klíč

Funkční API klíč z console.anthropic.com. Uložený v environment variable, ne v kódu.

*Ověření: Máš funkční API call z Tier 3? Skript, který pošle zprávu a dostane odpověď?*

### ☐ Docker (doporučeno)

Pro nasazování MCP serverů je Docker užitečný. Není povinný pro začátek, ale od Dne 8 se hodí.

Instalace: docker.com → Docker Desktop.

---

## Znalostní minimum

### ☐ Vše z Tier 3

Bezpečnost, Claude Code pokročile, slash commands, skills, Claude Design, IDE integrace, workflow automatizace, API základy. Tier 4 na tohle přímo navazuje.

### ☐ API — základní volání

Umíš zavolat Claude API, změnit parametry (model, tokens, system prompt), zpracovat odpověď. Rozumíš konceptu messages, roles, a streaming.

### ☐ Základní programátorské koncepty

Nemusíš být vývojář, ale potřebuješ rozumět:
- Co je funkce a jak se volá
- Co jsou parametry a návratové hodnoty
- Jak funguje import/require
- Co je JSON a jak vypadá
- Co je HTTP request (GET, POST)

*Nejsi si jistý? Řekni Claudovi: „Vysvětli mi [koncept] jednoduše, s příkladem v Pythonu. Jsem builder, ne vývojář."*

---

## Checklist: Jsi připraven?

**Technický setup:**
- ☐ Účet na claude.ai + console.anthropic.com s API klíčem
- ☐ Claude Code — pokročilá zkušenost
- ☐ VS Code s Claude integrací
- ☐ Python 3.10+ a/nebo Node.js 18+
- ☐ GitHub účet s funkčním repozitářem
- ☐ Základní git (add, commit, push)
- ☐ Docker Desktop (doporučeno)

**Znalosti:**
- ☐ Vše z Tier 3 (bezpečnost, Code, skills, IDE, API)
- ☐ Funkční API volání
- ☐ Základní programátorské koncepty

**Všechno odškrtnuto? Jdeme stavět infrastrukturu.**
