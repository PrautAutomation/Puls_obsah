# Než začneš: Setup pro Tier 3

> **Projdi si tohle před Dnem 1.**
> Tier 3 je náročnější než předchozí úrovně. Budeš stavět, automatizovat a integrovat — potřebuješ solidní základ.
> Pokud všechno umíš a máš — zabere ti to 15 minut.
> Pokud něco chybí — u každého bodu je vysvětlení a mini úkol. Celkem max 2-3 hodiny.

---

## Technický setup

### ☐ Účet na claude.ai (Pro plán nebo vyšší)

Pro Tier 3 potřebuješ přístup ke všem modelům a funkcím. Free plán nestačí — narazíš na limity. Ověř svůj plán v Nastavení.

### ☐ Funkční Power Project

Máš Project s pokročilými instrukcemi (ideálně s XML strukturou v system promptu). Pokud ne, vytvoř ho — postup je v Setup dokumentu Tier 2.

*Ověření: Otevři Project, zadej úkol. Odpovídá Claude podle tvých instrukcí bez dalšího vysvětlování?*

### ☐ Claude Code nainstalovaný a funkční

Claude Code budeš používat intenzivně. Potřebuješ:
- **Node.js** nainstalovaný (nodejs.org)
- **Claude Code** nainstalovaný (`npm install -g @anthropic-ai/claude-code`)
- Úspěšně spuštěný příkaz `claude` v terminálu

*Ověření: Otevři terminál, napiš `claude`, Claude Code se spustí. Řekni mu: „Vytvoř soubor hello.txt s textem Ahoj." Soubor existuje na disku?*

Pokud jsi Claude Code nikdy nepoužil — vrať se k Tier 2 (Den 9) nebo projdi základní instalaci.

### ☐ Terminál — základní orientace

Nemusíš být expert, ale potřebuješ vědět:
- Jak otevřít terminál (Mac: Terminal, Windows: PowerShell)
- Jak se dostat do složky (`cd cesta/ke/slozce`)
- Jak zobrazit soubory (`ls` na Macu, `dir` na Windows)
- Jak spustit příkaz

*Nevíš? Otevři Claude chat a řekni: „Jsem začátečník s terminálem. Vysvětli mi základní příkazy, které potřebuji znát — jednoduše, česky."*

### ☐ VS Code (doporučeno)

Visual Studio Code je textový editor, ve kterém budeš pracovat s kódem a soubory. Je zdarma: code.visualstudio.com. Pokud používáš jiný editor, je to OK — ale příklady budou pro VS Code.

### ☐ GitHub účet (doporučeno)

Pro Den 8 (GitHub Actions) budeš potřebovat účet na github.com. Je zdarma. Pokud ho nemáš, založ si ho před Dnem 8.

---

## Znalostní minimum

### ☐ Pokročilé promptování

Umíš psát strukturované prompty s XML tagy. Rozumíš system promptům. Umíš rozložit složitý úkol na prompt chain. Víš, kdy zapnout Extended Thinking.

*Ověření: Dokážeš z hlavy napsat prompt s tagy `<role>`, `<kontext>`, `<úkol>`, `<formát>`?*

### ☐ Nástroje — základní orientace

Vyzkoušel jsi Claude v Chrome, Cowork, Excel/PowerPoint a Claude Code. Nemusíš je ovládat perfektně, ale víš, co který dělá a kdy ho použít.

*Ověření: Kdybys dostal úkol „analyzuj data z webu a udělej z nich prezentaci", věděl bys, které nástroje kombinovat?*

### ☐ Claude Code — základní zkušenost

Už jsi v Claude Code aspoň jednou: zadal úkol, Claude napsal kód, spustil ho, vznikl výstup. Rozumíš principu: ty říkáš CO, Claude řeší JAK.

*Ověření: Zvládneš v Claude Code říct „Vytvoř HTML stránku, která zobrazí aktuální datum" a nechat ho to udělat?*

### ☐ Bezpečnost dat

Víš, co do Clauda nepatří (osobní údaje, hesla, důvěrné dokumenty). Umíš anonymizovat data. Rozumíš rozdílu mezi plány (Free/Pro/Team/Enterprise) z hlediska dat.

### ☐ Iterace a workflow

Pracuješ iterativně — ne jedna otázka, jedna odpověď, hotovo. Umíš rozložit složitý úkol na kroky, kontrolovat kvalitu po každém kroku, a měnit směr uprostřed procesu.

---

## Checklist: Jsi připraven?

**Technický setup:**
- ☐ Účet na claude.ai, Pro plán nebo vyšší
- ☐ Funkční Power Project s pokročilými instrukcemi
- ☐ Claude Code nainstalovaný a úspěšně spuštěný
- ☐ Základní orientace v terminálu
- ☐ VS Code nainstalovaný (doporučeno)
- ☐ GitHub účet (doporučeno, potřeba od Dne 8)

**Znalosti:**
- ☐ Umím strukturované prompty s XML tagy
- ☐ Znám nástroje (Chrome, Cowork, Excel, Code) a vím, kdy co použít
- ☐ Mám základní zkušenost s Claude Code
- ☐ Rozumím bezpečnosti dat
- ☐ Pracuji iterativně s prompt chainy

**Všechno odškrtnuto? Jdeme stavět.**
