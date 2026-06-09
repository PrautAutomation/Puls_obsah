# Než začneš: Setup pro Tier 2

> **Projdi si tohle před Dnem 1.**
> Pokud všechno umíš a máš — zabere ti to 15 minut.
> Pokud něco chybí — u každého bodu je krátké vysvětlení a mini úkol. Celkem max 2 hodiny.

---

## Technický setup

Tohle potřebuješ mít hotové, než začneš Den 1. Bez toho se nepohneš.

### ☐ Účet na claude.ai

Jdi na **claude.ai** a přihlas se. Pokud účet nemáš, zaregistruj se (stačí e-mail). Pokud tvoje firma má Team nebo Enterprise plán, použij firemní e-mail a odkaz od admina.

**Ideální je Pro plán** — dá ti přístup ke všem modelům, Projects, větší limity. Free funguje taky, ale narazíš na omezení. Zjisti, jaký plán máš (Nastavení → info o plánu).

### ☐ Orientace v rozhraní

Víš, kde je:
- **Levý panel** — historie chatů a Projects
- **Horní lišta** — výběr modelu
- **Ikona sponky** — upload souborů
- **Nastavení** — jazyk, Memory, plán

*Nevíš? Otevři claude.ai a projdi si to. 2 minuty.*

### ☐ Alespoň jeden Project

Project je pracovní prostor, kde Claudovi jednou řekneš, kdo jsi a co chceš — a on si to pamatuje v každém novém chatu uvnitř Projectu. Jako brief pro kolegu, který nemusíš opakovat.

**Máš Project? →** Zkontroluj, že má instrukce (kdo jsi, co děláš, jaký tón chceš).

**Nemáš? →** Vytvoř ho teď:
1. V levém panelu klikni na **Projects** → **Nový Project**.
2. Pojmenuj ho (třeba „Moje práce" nebo „[Firma] workflow").
3. Do instrukcí napiš: kdo jsi, čím se živíš, jaký tón a jazyk preferuješ.
4. Ulož a otevři v něm nový chat — ověř, že Claude ví, co jsi mu řekl.

### ☐ Memory s alespoň 3 fakty

Memory jsou fakta, která si Claude pamatuje napříč všemi chaty — nejen v Projectu. Nastavíš jednou, funguje všude.

**Máš Memory? →** Zkontroluj v Nastavení → Memory, že tam je aspoň tvoje jméno, role a jazyk.

**Nemáš? →** Nastav teď:
1. Otevři **Nastavení → Memory**.
2. Zapiš minimálně: jméno, pozice/obor, preferovaný jazyk.
3. Otevři nový chat a zeptej se: *„Co o mě víš?"* — ověř, že to funguje.

### ☐ Vyzkoušený upload souboru

Claude umí přečíst PDF, obrázky, tabulky, textové soubory. Pošleš mu soubor a on ho analyzuje.

**Už jsi to zkoušel? →** Jdeme dál.

**Nezkoušel? →** Najdi libovolný soubor (PDF, obrázek, cokoliv), klikni na sponku v chatu, nahraj ho a napiš: *„Co je v tomhle souboru? Shrň hlavní body."*

---

## Znalostní minimum

Tohle potřebuješ vědět — ne nazpaměť, ale rozumět principu. Přečti si každý bod. Pokud ti je jasný, odškrtni a jdi dál. Pokud ne, přečti si vysvětlení.

### ☐ Claude je tvůrce, ne vyhledávač

Claude negoogli odpovědi. On je tvoří — píše, analyzuje, navrhuje, vymýšlí. Když mu řekneš „napiš e-mail klientovi", napíše ho. Když řekneš „analyzuj tenhle dokument", analyzuje. Ale nemá přístup k internetu v reálném čase (pokud nemá zapnuté vyhledávání) a neví, co se děje dnes.

### ☐ Claude si občas vymýšlí

Říká se tomu halucinace. Claude sebevědomě řekne něco, co není pravda — číslo, citaci, fakt. Nedělá to schválně, ale dělá to. Proto: **klíčová fakta, čísla a citace vždy ověřuj.** Zvlášť u věcí, na kterých záleží.

Pomůže, když Claudovi řekneš: *„Pokud si nejsi jistý, řekni to. Nevymýšlej si."*

### ☐ Nový chat = Claude nic neví

Každý chat začíná od nuly. Claude si nepamatuje, co jsi mu řekl v jiném chatu. Výjimky:
- **Project** — instrukce a dokumenty platí pro všechny chaty v Projectu.
- **Memory** — fakta o tobě platí ve všech chatech.

Pokud se konverzace zamotá nebo Claude odpovídá mimo — začni nový chat.

### ☐ Iterace — první odpověď není finální

Tohle je klíčové. Většina lidí pošle prompt, přečte odpověď a hotovo. Ale Claude funguje líp, když s ním iteruješ:
- *„Tohle je moc dlouhé, zkrať to."*
- *„Dobrý základ, ale tón je moc formální."*
- *„Zkus to úplně jinak."*

Claude nemá ego. Neboj se říct, co nefunguje. Čím víc upřesníš, tím lepší výsledek.

### ☐ Bezpečnost — co do Clauda nepatří

**Nikdy nevkládej:**
- Osobní údaje — jména klientů, rodná čísla, čísla účtů, adresy, e-maily konkrétních lidí
- Důvěrné dokumenty — smlouvy, interní strategie, finanční výkazy, obchodní tajemství
- Hesla, přístupové údaje, API klíče

**Jak pracovat s reálnými daty:** Anonymizuj. Změň jména (Jan Novák → Klient A), firmy (Stavby s.r.o. → Firma X), čísla. Claude ti pomůže úplně stejně dobře s anonymizovanými daty.

**Pravidlo:** Když váháš, jestli něco můžeš sdílet — změň to.

### ☐ Project vs Memory vs chat

Tři úrovně, jak Claude „ví" věci:

| Vrstva | Co to je | Kde platí | Příklad |
|---|---|---|---|
| Chat | Co jsi řekl v téhle konverzaci | Jen tady | „Píšu e-mail klientovi, co reklamuje zpoždění" |
| Project | Instrukce a dokumenty v Projectu | Všechny chaty v Projectu | „Jsi asistent projektového manažera, píšeš česky, profesionální tón" |
| Memory | Fakta o tobě | Všechny chaty všude | „Jmenuji se Tereza, pracuji v marketingu" |

### ☐ Artifact = výstup, který zůstane

Artifact je výstup, který Claude vytvoří jako samostatný objekt — tabulka, text, kód, HTML. Na rozdíl od běžné odpovědi v chatu ho můžeš upravovat, verzovat a sdílet. Když Claudovi řekneš *„Vytvoř to jako Artifact"*, udělá to.

### ☐ Základní anatomie promptu

Dobrý prompt má:
- **Role** — kdo má Claude být (*„Jsi zkušený copywriter"*)
- **Kontext** — proč to řešíš, pro koho (*„Píšu nabídku pro malou firmu"*)
- **Úkol** — co přesně chceš (*„Napiš 3 varianty úvodního e-mailu"*)
- **Formát** — jak to má vypadat (*„Každý max 5 vět, přátelský tón"*)

A na konec: *„Pokud ti chybí informace, zeptej se mě — nevymýšlej si."*

---

## Checklist: Jsi připraven?

Odškrtni všechno — jsi ready na Den 1.

**Technický setup:**
- ☐ Účet na claude.ai, znám svůj plán
- ☐ Orientuji se v rozhraní
- ☐ Mám alespoň jeden Project s instrukcemi
- ☐ Mám Memory s alespoň 3 fakty
- ☐ Vyzkoušel jsem upload souboru

**Znalosti:**
- ☐ Vím, že Claude tvoří, ne hledá
- ☐ Vím, že si občas vymýšlí, a kontroluji klíčová fakta
- ☐ Rozumím: nový chat = nula (kromě Project a Memory)
- ☐ Umím iterovat — upřesnit, opravit, vylepšit
- ☐ Vím, co do Clauda nepatří, a umím anonymizovat
- ☐ Rozumím rozdílu Project vs Memory vs chat
- ☐ Vím, co je Artifact
- ☐ Umím napsat prompt s rolí, kontextem, úkolem a formátem

**Všechno odškrtnuto? Jdeme na to.**
