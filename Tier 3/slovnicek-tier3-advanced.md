# Slovníček pojmů — Tier 3: Advanced

> **Slovníček pro Tier 3.** Obsahuje pojmy z bezpečnosti, stavby nástrojů, integrací a API.
> Pokud neznáš pojmy z Tier 1 a 2, podívej se do příslušných slovníčků.
> Přidávej vlastní pojmy dole.

---

## Bezpečnost

**Prompt injection** — technika, kdy někdo manipuluje vstup tak, aby Claude ignoroval tvoje instrukce. Může být přímá (uživatel řekne „ignoruj instrukce") nebo nepřímá (škodlivý text skrytý v dokumentu nebo na webové stránce).

**Nepřímá injekce** — prompt injection skrytý v datech, která Claude zpracovává — v dokumentu, e-mailu, na webové stránce. Nebezpečnější než přímá, protože ji nevidíš.

**Princip minimálních práv** — Claude ví a má přístup jen k tomu, co nutně potřebuje. Nic navíc. Snižuje riziko zneužití.

**Validace výstupů** — kontrola toho, co Claude vrací, než to pošleš dál. Zvlášť důležité u automatizací, kde nikdo výstup ručně nekontroluje.

## Stavba nástrojů

**Debugging** — hledání a opravování chyb v kódu nebo nástroji. Normální součást práce — ne selhání, ale proces.

**Refactoring** — přepisování kódu tak, aby byl čitelnější a efektivnější, ale dělal to samé. Jako přepsat e-mail lépe — obsah zůstane, forma se zlepší.

**Scaffold** — základní kostra projektu. Minimum, které funguje, na kterém stavíš dál. Jako hrubá stavba domu před dokončovacími pracemi.

**Error handling** — kód, který řeší situace, kdy se něco pokazí. Místo „program spadne" → „program řekne co se stalo a co dělat".

**README** — dokument popisující projekt: co to dělá, jak to nainstalovat, jak to použít. Standard u každého projektu.

## Integrace a nástroje

**IDE (Integrated Development Environment)** — vývojové prostředí pro práci s kódem. VS Code je IDE.

**VS Code (Visual Studio Code)** — populární editor kódu od Microsoftu. Zdarma, rozšiřitelný.

**Extension (rozšíření)** — doplněk do VS Code nebo prohlížeče, který přidává funkce. Claude rozšíření do VS Code přidává AI asistenci přímo do editoru.

**Slash command** — vlastní příkaz začínající lomítkem (/). Zkratka pro opakovanou akci v Claude Code.

**Skill** — sada instrukcí a znalostí, kterou Claudovi přidáš. Naučíš ho být expertem na konkrétní typ práce.

**GitHub** — platforma pro sdílení a verzování kódu. Jako Google Drive, ale pro kód.

**Git** — systém pro sledování změn v kódu. Základní příkazy: `add` (přidej změny), `commit` (ulož), `push` (pošli na GitHub).

**GitHub Actions** — automatizace na GitHubu. Definuješ: když se stane X (nový commit), udělej Y (spusť testy, deployni).

**Webhook** — automatické upozornění, které systém pošle jinému systému, když se něco stane. Jako SMS notifikace, ale mezi programy.

## API

**API (Application Programming Interface)** — způsob, jak s Claudem komunikují programy. Chat je pro lidi, API je pro kód. Přes API můžeš Clauda vložit do čehokoliv.

**API klíč** — tvůj "průkaz totožnosti" pro API. Nikdy ho nesdílej, nedávej do kódu, nedávej na GitHub. Uložit do environment variable.

**Endpoint** — adresa, kam posíláš API požadavek. Jako URL, ale pro programy.

**SDK (Software Development Kit)** — knihovna, která usnadňuje volání API. Místo ručního psaní HTTP requestů použiješ funkce z SDK.

**JSON (JavaScript Object Notation)** — formát pro strukturovaná data. Vypadá jako `{"jméno": "Claude", "verze": 3}`. Používá se pro komunikaci mezi programy.

**HTTP request** — požadavek, který program pošle na server. **GET** = chci data, **POST** = posílám data.

**Environment variable** — proměnná uložená v systému, ne v kódu. Bezpečný způsob, jak uchovávat API klíče a hesla.

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
