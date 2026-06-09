# Tier 2 — Power: 10 dní k pokročilému Claudovi

> **Filozofie:** Tool-first — cílem je posun z příležitostného uživatele na power usera: pokročilé prompty, vícekrokové workflow, všechny nástroje.
> **Formát:** 10 pracovních dní (2 týdny, Po–Pá), ~2.5–3 h/den.
> **Mentorované období:** Online hodina 1×/týden + support.
> **Po kurzu:** Obsah + volitelné mise zůstávají přístupné.
> **Předpoklady:** Projdi Setup dokument „Než začneš" a odškrtni všechny body.

## Typy dnů

| Typ | Co student dělá |
|---|---|
| **Objevuj** | Krátká teorie (max 15 min) + rovnou zkouší v Claude |
| **Trénuj** | Procvičuje na vlastních příkladech, Claude je sparring partner |
| **Tvoř** | Vytváří reálný výstup — deliverable, který bude používat |
| **Společně** | Online hodina s lektorem + reflexe |

**Habits** = průběžné denní/týdenní rituály běžící vedle programu.
**Questy** = checkpointy uvnitř dne — odškrtávej a sbírej XP.
**Mise** = volitelné větší projekty (šéf může požadovat).

---

# TÝDEN 1: Prompty, které fungují napoprvé

## Co tě čeká tento týden

Tento týden se naučíš psát prompty na úplně jiné úrovni. Pochopíš, proč XML strukturování mění kvalitu výstupu, naučíš se psát system prompty pro Projects, rozložíš složité úkoly na vícekrokové workflow a zjistíš, kdy se vyplatí zapnout Extended Thinking. Na konci týdne budeš mít Power Project a workflow knihovnu — nástroje, které ti ušetří hodiny práce.

## Co budeš mít na konci Týdne 1

- ☑ Zkušenost s XML strukturováním promptů
- ☑ Power Project s pokročilým system promptem
- ☑ 3+ vícekrokové workflow šablony (prompt chains)
- ☑ Thinking cheat sheet — kdy Extended Thinking ano, kdy ne
- ☑ Workflow knihovna jako Artifact
- ☑ 2 nové denní habits
- ☑ Zpětná vazba od lektora

---

## Den 1 · Objevuj · System prompty a XML strukturování
**~3 h · Část 07: Pokročilé promptování**

### Zkus to — rovnou (20 minut)

Než ti řekneme cokoliv o XML, zkus tohle. Zadej Claudovi dvakrát stejný úkol:

**Verze A — jak bys to napsal normálně:**

*„Napiš mi shrnutí prodejních výsledků za Q3. Firma prodává software, tržby 12 mil, růst 15 %, problém je odchod dvou klíčových zákazníků."*

**Verze B — se strukturou:**

```
<role>Jsi finanční analytik, který připravuje reporty pro vedení české softwarové firmy.</role>

<kontext>
Firma prodává B2B software. Q3 výsledky:
- Tržby: 12 mil. Kč
- Růst oproti Q2: 15 %
- Problém: Odchod 2 klíčových zákazníků (dohromady 1,8 mil. Kč ročně)
</kontext>

<úkol>Napiš executive summary Q3 výsledků pro board meeting. Max 1 stránka.</úkol>

<formát>
- Nadpis
- 3 odstavce: pozitiva, rizika, doporučení
- Na konci 3 bullet points s klíčovými čísly
</formát>

<omezení>Pokud ti chybí informace, zeptej se. Nevymýšlej čísla, která jsem ti nedal.</omezení>
```

Porovnej výsledky. Verze B bude přesnější, lépe strukturovaná a bude přesně odpovídat tomu, co chceš. To je síla XML strukturování.

### Krátké čtení (15 minut)

**Proč XML tagy fungují:**

Claude je natrénovaný rozumět XML struktuře. Když mu dáš text v XML tazích, ví přesně, co je instrukce, co je kontext, co jsou data a co je formát. Nemusí hádat.

**Základní tagy, které budeš používat:**
- `<role>` — kdo má Claude být
- `<kontext>` — pozadí situace, co potřebuje vědět
- `<úkol>` — co přesně má udělat
- `<formát>` — jak má výstup vypadat
- `<omezení>` — co nesmí nebo na co si dát pozor
- `<příklad>` — ukázka požadovaného výstupu
- `<data>` — vstupní data oddělená od instrukcí

Můžeš si vymyslet vlastní tagy — Claude jim bude rozumět. Důležité je oddělení: instrukce zvlášť, data zvlášť. Claude pak neplete kontext s úkolem.

**System prompt vs uživatelský prompt:**

V Projectu máš dvě vrstvy:
- **System prompt** (instrukce Projectu) — kdo jsi, jak se chová, co vždy dělá. Platí pro každý chat v Projectu.
- **Uživatelský prompt** — konkrétní zadání v daném chatu.

System prompt je jako trvalý brief. Uživatelský prompt je konkrétní úkol. Čím lepší system prompt, tím méně musíš opakovat v každém chatu.

### Práce v Claude (2 h)

**Úkol 1: XML transformace.**

Vezmi jeden úkol, který v Claude děláš často. Napiš ho dvakrát:
- Verze A: jak bys ho napsal běžně.
- Verze B: s XML tagy (role, kontext, úkol, formát, omezení).

Pošli obě verze a porovnej výstupy. Zapiš si: co konkrétně je lepší u verze B?

**Úkol 2: Vlastní tagy.**

Vymysli XML strukturu pro svůj specifický typ úkolu. Třeba:
- Pokud píšeš e-maily: `<odesílatel>`, `<příjemce>`, `<předchozí-komunikace>`, `<cíl-e-mailu>`
- Pokud analyzuješ dokumenty: `<dokument>`, `<otázky>`, `<požadovaný-výstup>`
- Pokud připravuješ schůzky: `<účastníci>`, `<cíl-schůzky>`, `<podklady>`, `<výstup>`

Otestuj na reálném příkladu.

**Úkol 3: System prompt pro Power Project.**

Vytvoř nový Project (nebo uprav existující). Napiš system prompt s XML strukturou:

```
<identita>
Kdo jsi, kde pracuješ, jaká je tvoje role.
</identita>

<pravidla>
- Vždy piš česky.
- Pokud ti chybí informace, zeptej se — nevymýšlej si.
- [Tvoje specifické požadavky na tón, formát, styl.]
</pravidla>

<typické-úkoly>
Popis typických úkolů, které v tomto Projectu budeš řešit.
</typické-úkoly>

<formát-výstupu>
Jak mají standardně vypadat výstupy — délka, struktura, tón.
</formát-výstupu>
```

Otevři chat v Projectu a otestuj: odpovídá Claude podle instrukcí? Uprav, co nesedí.

**Úkol 4: Porovnej Project vs prázdný chat.**

Zadej stejný úkol v Power Projectu a v prázdném chatu bez Projectu. Zapiš rozdíl. Kolik kontextu ti system prompt ušetřil?

### Questy dne

- ☐ Porovnat běžný vs XML prompt — zapsat rozdíl (+50 XP)
- ☐ Vytvořit vlastní XML strukturu pro svůj typ úkolu (+50 XP)
- ☐ Napsat system prompt pro Power Project s XML tagy (+75 XP)
- ☐ Otestovat Power Project a porovnat s prázdným chatem (+40 XP)

### Nový habit od dneška

- **Prompt structure check** (+15 XP/den) — před odesláním: mám XML strukturu? Je role oddělená od kontextu? Jsou data oddělená od instrukcí?

### Volitelné mise

- **XML prompt galerie** — 8+ XML šablon pro různé typy úkolů (e-maily, analýzy, reporty, schůzky…), každá otestovaná na reálném příkladu. Výstup: Artifact s kompletní knihovnou. (+250 XP)
- **Prompt engineering notebooky** — projdi vybrané pokročilé lekce z českého Anthropic prompt engineering tutoriálu. Zapiš 3 techniky, které jsi neznal, a ukaž, jak je aplikuješ na svou práci. (+300 XP)

---

## Den 2 · Trénuj · Prompt chaining a vícekrokové workflow
**~3 h · Část 07 pokračování**

### Krátké čtení (10 minut)

**Co je prompt chaining:**

Většina lidí zadá jeden velký prompt a čeká zázrak. Power user rozloží složitý úkol na kroky, kde výstup jednoho je vstup dalšího. Říká se tomu prompt chain.

**Proč to funguje líp:**
- Claude zpracuje menší úkol přesněji než jeden obrovský.
- Můžeš kontrolovat kvalitu po každém kroku.
- Když jeden krok nefunguje, opravíš jen ten — ne celý výsledek.
- Můžeš měnit směr uprostřed procesu.

**Příklad — příprava nabídky pro klienta:**

Místo: *„Napiš nabídku pro klienta"* →

1. *„Analyzuj tyhle poznámky ze schůzky. Co klient potřebuje? Jaké jsou jeho priority?"*
2. *„Na základě analýzy navrhni 3 varianty řešení. U každé: co obsahuje, kolik stojí, pro koho je nejlepší."*
3. *„Klient preferuje variantu 2. Rozpiš ji do detailní nabídky: úvod, rozsah, harmonogram, cena, podmínky."*
4. *„Zkontroluj nabídku: je srozumitelná? Chybí něco? Napiš průvodní e-mail."*

Každý krok staví na předchozím. A ty máš kontrolu.

### Práce v Claude (2.5 h)

**Úkol 1: Rozlož svůj úkol.**

Vyber jeden složitý úkol z práce — něco, co normálně zabere hodinu nebo víc. Rozlož ho na 3–5 kroků. U každého napiš: co je vstup, co je výstup, co Claude dělá.

Nemusíš to dělat sám. Řekni Claudovi:

*„Mám tenhle úkol: [popis]. Pomoz mi rozložit ho na kroky, kde výstup jednoho je vstup dalšího. U každého kroku napiš: vstup, co udělat, výstup."*

**Úkol 2: Projdi chain od začátku do konce.**

Vezmi svůj rozložený úkol a projdi ho v Claude krok po kroku. Po každém kroku:
- Přečti výstup.
- Je dobrý? → Pokračuj dalším krokem a vlož výstup jako kontext.
- Není dobrý? → Iteruj, než půjdeš dál.

**Úkol 3: Vytvoř workflow šablonu.**

Z toho, co jsi právě udělal, vytvoř šablonu — obecný postup, který můžeš použít znovu. Formát:

```
Název: [stručný název workflow]
Kdy použít: [situace]
Kroky:
1. [Krok 1 — vstup a prompt]
2. [Krok 2 — vstup z kroku 1 + prompt]
3. [Krok 3 — vstup z kroku 2 + prompt]
Výstup: [co na konci dostanu]
```

**Úkol 4: Vytvoř ještě 2 workflow šablony.**

Vyber další 2 situace z práce, které se opakují a jsou složité. Pro každou vytvoř workflow šablonu stejným postupem. Pracuj s Claudem — nech ho navrhovat kroky, ty upřesňuj a testuj.

Na konci dne máš 3 workflow šablony.

### Questy dne

- ☐ Rozložit složitý úkol na 3-5 kroků (+50 XP)
- ☐ Projít celý chain od začátku do konce (+60 XP)
- ☐ Vytvořit první workflow šablonu (+60 XP)
- ☐ Vytvořit další 2 workflow šablony (+75 XP)

### Volitelné mise

- **Real-world prompting challenge** — projdi 5 reálných scénářů z Anthropic materiálů (real_world_prompting). Pro každý: zadej, iteruj, zapiš co fungovalo a co ne. (+250 XP)

---

## Den 3 · Objevuj + Trénuj · Extended Thinking
**~2.5 h · Část 08: Extended Thinking**

### Zkus to — rovnou (15 minut)

Zadej Claudovi složitý problém — něco, kde potřebuješ opravdu promyšlenou odpověď. Třeba:

*„Zvažuji, jestli můj tým (5 lidí, marketing) má začít používat AI nástroje ve velkém. Šéf je skeptický, rozpočet je omezený, dva lidé v týmu se bojí, že je AI nahradí. Jaká je nejlepší strategie, jak to prosadit? Přemýšlej krok za krokem, zvaž argumenty pro i proti."*

Pošli to dvakrát:
- **Bez Extended Thinking** — normální odpověď.
- **S Extended Thinking** — zapni „Extended thinking" (ikona žárovky nebo přepínač u modelu) a pošli znovu.

Porovnej: Verze s Extended Thinking bude hlubší, uváženější, s víc perspektivami. Claude doslova „přemýšlí nahlas" předtím, než ti odpoví.

### Krátké čtení (10 minut)

**Co je Extended Thinking:**

Normálně Claude odpovídá rovnou — přečte prompt a generuje odpověď. S Extended Thinking má „čas na rozmyšlenou". Před odpovědí si projde problém krok za krokem, zváží alternativy, zpochybní vlastní úvahy. Výsledek je promyšlenější.

**Kdy to zapnout:**
- Složité analýzy s víc proměnnými
- Strategická rozhodnutí (pro/proti, co když...)
- Problémy, kde záleží na pořadí kroků
- Situace, kde je víc správných odpovědí a chceš tu nejlepší
- Kód a logické úlohy

**Kdy to NEmá smysl:**
- Jednoduchý e-mail nebo shrnutí
- Překlad nebo přepis
- Kreativní psaní, kde chceš spontánnost
- Rychlé odpovědi na přímé otázky
- Cokoliv, kde rychlost je důležitější než hloubka

**Prakticky:** Extended Thinking je pomalejší a spotřebuje víc z tvého limitu zpráv. Není to „lepší Claude" — je to „Claude, který si dá víc času". Na jednoduchých úkolech je to plýtvání.

### Práce v Claude (2 h)

**Úkol 1: Porovnání — jednoduchý úkol.**

Zadej jednoduchý úkol (shrnutí e-mailu, překlad, krátký text) s Extended Thinking a bez. Je rozdíl? Stálo to za delší čekání?

**Úkol 2: Porovnání — složitý úkol.**

Zadej složitý úkol (analýza, rozhodování, strategie) s Extended Thinking a bez. Tady by měl být rozdíl znatelný. Zapiš, v čem konkrétně.

**Úkol 3: Najdi svoje 3 situace.**

Na základě experimentů zapiš 3 situace z tvé práce, kde se Extended Thinking vyplatí, a 3, kde ne. Buď konkrétní — ne „složité věci", ale „příprava kvartální strategie pro tým".

**Úkol 4: Thinking cheat sheet.**

Vytvoř si přehled jako Artifact:

*„Pomoz mi vytvořit cheat sheet: kdy zapnout Extended Thinking a kdy ne. Formát: dvě tabulky — ANO a NE, s konkrétními příklady z mé práce. Vytvoř to jako Artifact."*

### Questy dne

- ☐ Porovnat Extended Thinking na jednoduchém úkolu (+30 XP)
- ☐ Porovnat Extended Thinking na složitém úkolu — zapsat rozdíl (+50 XP)
- ☐ Zapsat 3 situace ANO a 3 situace NE (+40 XP)
- ☐ Vytvořit Thinking cheat sheet jako Artifact (+60 XP)

### Nový habit

- **Thinking toggle** (+15 XP/den) — před složitým úkolem: potřebuju Extended Thinking? Rozhodnu vědomě, ne automaticky.

---

## Den 4 · Tvoř · Power Project a workflow knihovna
**~3 h · Část 07–08 shrnutí**

### Práce v Claude (3 h)

Dnes buduješ. Žádná nová teorie — spojuješ všechno z Dne 1–3 do funkčního systému.

**Úkol 1: Dolaď Power Project.**

Otevři svůj Power Project z Dne 1. Na základě zkušeností z Dne 2 a 3:
- Jsou system prompt instrukce dost konkrétní?
- Chybí něco? Přidej pravidla pro formát, tón, typické workflow.
- Nahraj do Projectu relevantní dokument z práce (anonymizovaný).

Otestuj na 2-3 různých typech úkolů. Funguje konzistentně?

**Úkol 2: Sjednoť workflow knihovnu.**

Máš 3 workflow šablony z Dne 2. Teď je sjednoť do jednoho Artifactu:

*„Sjednoť tyhle 3 workflow šablony do jednoho přehledného dokumentu — moje workflow knihovna. Přidej ke každé šabloně: kdy použít, odhadovaný čas, tip pro lepší výsledek. Vytvoř to jako Artifact."*

**Úkol 3: Přidej do knihovny thinking workflow.**

Na základě Dne 3 přidej do knihovny aspoň 1 workflow, který zahrnuje Extended Thinking. Třeba: „Strategické rozhodnutí" nebo „Komplexní analýza" — kde jeden z kroků je s Extended Thinking.

**Úkol 4: Otestuj celý systém.**

Vezmi reálný úkol z práce, který tě čeká tento týden. Projdi ho kompletně:
1. Otevři Power Project.
2. Vyber workflow z knihovny (nebo vytvoř nový on-the-fly).
3. Rozhodni: potřebuju Extended Thinking? Na který krok?
4. Projdi chain a vytvoř výstup.

Výsledek by měl být něco, co reálně použiješ. Zapiš si: kolik času ti to ušetřilo oproti tomu, jak bys to dělal bez systému?

**Úkol 5: Nech Clauda kritizovat.**

*„Podívej se na můj system prompt a workflow knihovnu. Co chybí? Co je slabé? Co bys vylepšil? Buď přísný."*

Zapracuj nejlepší připomínky.

### Questy dne

- ☐ Doladit Power Project a otestovat na 2-3 úkolech (+60 XP)
- ☐ Sjednotit workflow knihovnu do jednoho Artifactu (+60 XP)
- ☐ Přidat thinking workflow do knihovny (+40 XP)
- ☐ Projít reálný úkol celým systémem od A do Z (+75 XP)
- ☐ Nechat Clauda kritizovat a dopracovat (+40 XP)

### Volitelné mise

- **Power Project pro tým** — kompletní Project s XML system promptem, workflow knihovnou (5+ workflow) a dokumentací, který mohou použít kolegové ve tvém týmu. Otestovaný na 10+ úkolech. (+300 XP)

---

## Den 5 · Společně · Online hodina + reflexe
**~2.5 h**

### Online hodina s lektorem (~1 h)

- **Sdílení:** Power Projekty, workflow knihovny, XML šablony — co fungovalo?
- **Ukázky:** Lektor ukáže pokročilé příklady a dá tipy.
- **Q&A:** Ptej se na cokoliv — prompty, thinking, chaining.
- **Preview Týdne 2:** Jaké nástroje tě čekají: Chrome, Cowork, Excel, PowerPoint, Claude Code.

### Po hodině: Praxe a reflexe (~1.5 h)

**Úkol 1: Vylepši na základě feedbacku.**

Na základě online hodiny uprav svůj Power Project nebo workflow knihovnu. Co nového ses dozvěděl? Co chceš změnit?

**Úkol 2: Reflexe — týden 1.**

Polož si otázky:
- Jaký je největší rozdíl mezi tím, jak jsem promptoval před týdnem a teď?
- Který moment byl „aha"?
- Co jsem zkoušel a nefungovalo?
- Co chci příští týden dělat jinak?

Zapiš jednu větu: co je tvůj nejdůležitější posun z tohoto týdne?

**Úkol 3: Připrav se na nástroje.**

Zjisti, jestli máš přístup k:
- Claude v Chrome (rozšíření prohlížeče)
- Cowork (desktopová aplikace)
- Claude v Excelu
- Claude Code (vyžaduje Node.js)

Pokud něco nemáš nainstalované, nachystej si to. Pokud si nejsi jistý, zeptej se lektora nebo napiš do supportu.

### Questy dne

- ☐ Účast na online hodině (+60 XP)
- ☐ Vylepšit Power Project nebo knihovnu na základě feedbacku (+50 XP)
- ☐ Reflexe — zapsat nejdůležitější posun (+30 XP)
- ☐ Ověřit přístup k nástrojům pro Týden 2 (+20 XP)

---

# TÝDEN 2: Nástroje v praxi

## Co tě čeká tento týden

Minulý týden jsi zlepšil prompty a workflow. Tento týden poznáš nástroje, které Clauda dostávají za hranice chatu. Claude v Chrome ovládá prohlížeč. Cowork automatizuje soubory a úkoly na tvém desktopu. Claude v Excelu a PowerPointu pracuje přímo v tvých tabulkách a prezentacích. A Claude Code ti dá superschopnost v terminálu — i když jsi nikdy neprogramoval. Každý nástroj si vyzkoušíš na reálném úkolu. Na konci budeš vědět, co ti sedí.

## Co budeš mít na konci Týdne 2

- ☑ Zkušenost s Claude v Chrome na reálném úkolu
- ☑ Zkušenost s Cowork na reálném úkolu
- ☑ Zkušenost s Claude v Excelu a PowerPointu
- ☑ Zkušenost s Claude Code — první příkaz v terminálu
- ☑ Nástrojová mapa — který nástroj na co
- ☑ Capstone výstup kombinující prompting + nástroj
- ☑ Self-assessment + plán pro Tier 3

---

## Den 6 · Objevuj · Claude v Chrome
**~3 h · Část 09: Claude v Chrome**

### Zkus to — rovnou (15 minut)

Otevři Claude v Chrome (rozšíření v prohlížeči). Jdi na libovolnou webovou stránku — třeba zpravodajský článek, produktovou stránku, nebo firemní web konkurence. Řekni Claudovi:

*„Shrň mi, co je na téhle stránce. Co jsou hlavní body?"*

Claude vidí stránku a pracuje s ní. Teď mu řekni něco složitějšího:

*„Najdi na téhle stránce kontaktní informace a vytvoř draft e-mailu, kde se ptám na spolupráci."*

Tohle není chat, kde kopíruješ text a vkládáš. Claude vidí stránku přímo a jedná podle toho.

### Krátké čtení (10 minut)

**Co je Claude v Chrome:**

Rozšíření prohlížeče, které Claudovi dává oči a ruce v tvém prohlížeči. Claude vidí, co je na stránce, a může s tím pracovat — číst, analyzovat, vyplňovat formuláře, navigovat.

**Na co se hodí:**
- Shrnutí a analýza webových stránek
- Výzkum a sběr informací z více zdrojů
- Vyplňování formulářů
- Extrakce dat ze stránek (kontakty, ceny, specifikace)
- Porovnávání produktů nebo služeb
- Automatizace opakovaných úkolů v prohlížeči

**Na co pozor:**
- Bezpečnost — Claude vidí, co vidíš ty. Nepouštěj ho na stránky s citlivými daty (banka, zdravotní záznamy), pokud si nejsi jistý.
- Přesnost — Claude může špatně přečíst stránku, zvlášť pokud je složitě strukturovaná. Kontroluj výstupy.
- Rychlost — některé úkoly jsou rychlejší ručně. Nevynucuj Chrome tam, kde prostý chat stačí.

**Kdy Chrome vs chat:**
- **Chrome:** Úkol vyžaduje živou webovou stránku — její obsah, formuláře, navigaci.
- **Chat:** Úkol je o tvém textu, dokumentu, nápadu — nepotřebuješ prohlížeč.

### Práce v Claude (2 h)

**Úkol 1: Analýza webové stránky.**

Najdi webovou stránku relevantní pro tvou práci (konkurence, dodavatel, oborový článek). Nech Clauda:
- Shrnout hlavní body.
- Vytáhnout konkrétní informace (ceny, kontakty, specifikace).
- Navrhnout, jak informace využít.

**Úkol 2: Výzkum z více zdrojů.**

Zadej Claudovi v Chrome výzkumný úkol: *„Najdi 3 weby, které se zabývají [tvoje téma]. U každého shrň, co nabízejí a čím se liší."*

Pozoruj, jak Claude naviguje. Pomáhej mu — pokud se zasekne, dej mu přesný URL.

**Úkol 3: Formulář nebo extrakce.**

Najdi formulář nebo stránku s daty a nech Clauda:
- Vyplnit formulář podle tvých instrukcí, nebo
- Extrahovat strukturovaná data ze stránky do tabulky.

**Úkol 4: Chat vs Chrome — vědomá volba.**

Zapiš 3 úkoly z práce, kde dává smysl Chrome, a 3, kde je lepší zůstat v chatu. U každého vysvětli proč.

### Questy dne

- ☐ Vyzkoušet Claude v Chrome na reálné stránce (+50 XP)
- ☐ Analýza nebo výzkum z webové stránky (+60 XP)
- ☐ Formulář nebo extrakce dat (+50 XP)
- ☐ Zapsat 3× Chrome vs 3× chat — kdy co (+40 XP)

### Nový habit

- **Right tool check** (+20 XP/den) — před každým úkolem: který nástroj? Chat, Chrome, Cowork, Excel, nebo Code? Rozhodnu vědomě.

### Volitelné mise

- **Chrome research report** — kompletní analýza tématu relevantního pro tvou práci, zpracovaná přes Chrome z 5+ webových zdrojů. Výstup: strukturovaný report jako Artifact se zdroji, shrnutím a doporučeními. (+250 XP)

---

## Den 7 · Objevuj + Trénuj · Cowork — automatizace souborů a úkolů
**~3 h · Část 10: Cowork**

### Zkus to — rovnou (15 minut)

Otevři Cowork (desktopová aplikace). Najdi na svém počítači složku s nějakými soubory — třeba dokumenty, obrázky, nebo tabulky. Řekni Claudovi:

*„Podívej se na soubory v téhle složce. Co tam je? Roztřiď je podle typu a navrhni lepší organizaci."*

Nebo:

*„Vezmi tenhle dokument a vytvoř z něj shrnutí jako nový soubor."*

Cowork není chat — Claude pracuje přímo s tvými soubory na disku.

### Krátké čtení (10 minut)

**Co je Cowork:**

Desktopový nástroj, který Claudovi dává přístup k tvým souborům a úkolům. Na rozdíl od chatu (kam kopíruješ text) a Chrome (který vidí web), Cowork pracuje přímo s tvým počítačem.

**Na co se hodí:**
- Organizace a třídění souborů
- Hromadné přejmenování, přesouvání, konverze
- Vytváření nových dokumentů z existujících
- Extrakce a transformace dat mezi soubory
- Automatizace opakovaných úkolů se soubory

**Kdy Cowork vs chat vs Chrome:**
- **Cowork:** Úkol je o souborech na tvém disku — organizace, transformace, hromadné operace.
- **Chrome:** Úkol je o webových stránkách — obsah, formuláře, navigace.
- **Chat:** Úkol je o textu, nápadech, analýze — nepotřebuješ soubory ani web.

### Práce v Claude (2.5 h)

**Úkol 1: Organizace souborů.**

Vyber složku, která potřebuje organizaci. Nech Clauda navrhnout a provést strukturu — třídění, přejmenování, složky.

**Úkol 2: Transformace dokumentu.**

Vezmi existující dokument a nech Clauda vytvořit z něj něco nového:
- Ze zápisu ze schůzky → seznam úkolů.
- Z dlouhého reportu → executive summary jako nový soubor.
- Z tabulky → formátovaný přehled.

**Úkol 3: Hromadná operace.**

Najdi situaci, kde potřebuješ udělat totéž s více soubory. Nech Clauda to provést. Třeba: přejmenovat 20 souborů podle vzorce, extrahovat data z 5 PDF do jedné tabulky, vytvořit kopie s úpravami.

**Úkol 4: Cowork + prompting.**

Kombinuj Cowork s pokročilým promptem z Týdne 1. Napiš XML-strukturovaný prompt pro Cowork úkol:

```
<úkol>Projdi soubory ve složce [cesta].</úkol>
<pravidla>
- Roztřiď podle [kritérium].
- Pro každý soubor vytvoř [výstup].
- Výsledek ulož do [kam].
</pravidla>
```

### Questy dne

- ☐ Organizace souborů přes Cowork (+50 XP)
- ☐ Transformace dokumentu — nový výstup ze starého souboru (+60 XP)
- ☐ Hromadná operace s více soubory (+50 XP)
- ☐ Cowork + XML prompt kombinace (+50 XP)

### Volitelné mise

- **Automatizační audit** — zmapuj 10 opakovaných úkolů ze své práce. Pro každý navrhni: který nástroj (Chat, Chrome, Cowork, Excel, Code), jaký workflow, odhadovaná úspora času. Výstup: strategický dokument jako Artifact. (+300 XP)

---

## Den 8 · Objevuj + Trénuj · Claude v Excelu a PowerPointu
**~3 h · Část 11: Claude v kancelářských nástrojích**

### Zkus to — rovnou (15 minut)

Otevři Excel s nainstalovaným Claude rozšířením. Najdi (nebo vytvoř) jednoduchou tabulku s daty — třeba měsíční výdaje, seznam zákazníků, nebo výkaz hodin. Řekni Claudovi:

*„Podívej se na tyhle data. Co z nich vyčteš? Přidej sloupec s analýzou."*

Nebo otevři PowerPoint a řekni:

*„Vytvoř prezentaci o [téma] — 5 slidů, každý s nadpisem a 3 body."*

Claude pracuje přímo v tvém spreadsheetu nebo prezentaci. Není to kopírování tam a zpátky — je to spolupráce v nástroji, který už znáš.

### Krátké čtení (10 minut)

**Claude v Excelu:**

Claude vidí tvoje data a může:
- Analyzovat trendy, vzorce, odchylky.
- Psát a vysvětlovat vzorce.
- Čistit a formátovat data.
- Vytvářet souhrny a přehledy.
- Navrhovat grafy a vizualizace.

**Claude v PowerPointu:**

Claude může:
- Vytvořit prezentaci od nuly podle zadání.
- Přidat, upravit nebo přeorganizovat slidy.
- Navrhnout obsah a strukturu.
- Přepsat text pro lepší srozumitelnost.

**Kdy Excel/PPT agent vs chat:**
- **Agent:** Pracuješ s konkrétním souborem a chceš změny přímo v něm.
- **Chat:** Chceš obecnou radu, vzorec, nebo text, který pak sám vložíš.

### Práce v Claude (2.5 h)

**Úkol 1: Excel — analýza dat.**

Otevři reálnou tabulku z práce (nebo vytvoř testovací data). Nech Clauda:
- Shrnout, co v datech vidí.
- Najít trendy nebo anomálie.
- Přidat analytický sloupec nebo souhrn.

**Úkol 2: Excel — vzorce a čištění.**

Najdi tabulku, která potřebuje opravu: chybějící data, nekonzistentní formáty, chybějící vzorce. Nech Clauda:
- Navrhnout a vysvětlit vzorce.
- Vyčistit a standardizovat data.
- Vytvořit souhrn nebo pivot.

**Úkol 3: PowerPoint — prezentace.**

Zadej Claudovi téma prezentace relevantní pro tvou práci. Nech ho vytvořit 5–8 slidů. Pak iteruj:
- *„Slide 3 je moc textový, zkrať to."*
- *„Přidej slide s grafikou nebo schématem."*
- *„Změň pořadí — začni výsledky, pak kontext."*

**Úkol 4: Kombináž — data → prezentace.**

Vezmi data z Excelu a nech Clauda vytvořit prezentaci na jejich základě. Celý flow: data → analýza → prezentace. Tady kombinuješ nástroj s prompt chainingem z Týdne 1.

### Questy dne

- ☐ Excel — analýza reálných dat (+50 XP)
- ☐ Excel — vzorce nebo čištění dat (+50 XP)
- ☐ PowerPoint — prezentace s iterací (+60 XP)
- ☐ Data → prezentace flow (+60 XP)

### Volitelné mise

- **Prezentace pro šéfa** — reálná prezentace vytvořená celým flow: data v Excelu → analýza → PowerPoint prezentace. Něco, co příští týden reálně odprezentůješ. (+250 XP)

---

## Den 9 · Objevuj · Claude Code — první kroky
**~3 h · Část 12: Claude Code**

### Než začneš (10 minut)

Tohle je nejtěžší den kurzu. Budeš pracovat s terminálem — příkazovou řádkou. Pokud jsi nikdy terminál neotevřel, je to normální. Většina lidí v kanceláři ne. Dnešní cíl není stát se programátorem — je to **vědět, co Claude Code je, co umí, a jestli to chceš rozvíjet dál.**

Co potřebuješ:
- Nainstalovaný **Node.js** (Claude Code na něm běží). Pokud nemáš, začni instalací — Claude ti pomůže.
- **Terminál** — na Macu: Terminal, na Windows: PowerShell nebo Windows Terminal.

Pokud tě instalace zastaví — nevzdávej to. Zeptej se Clauda (v chatu) na konkrétní chybovou hlášku. Nebo napiš lektorovi.

### Zkus to — rovnou (20 minut)

Po instalaci otevři terminál a napiš:

```
claude
```

Claude Code se spustí. Teď mu řekni:

*„Ahoj, jsem tady poprvé. Vysvětli mi, co umíš, a ukaž mi to na jednoduchém příkladu."*

Pozoruj: Claude Code pracuje přímo se soubory na tvém počítači, píše a spouští kód, a dělá věci, které v chatu nejdou. Ale ovládáš ho textem — stejně jako chat.

### Krátké čtení (10 minut)

**Co je Claude Code:**

Nástroj v terminálu, kde Claude píše a spouští kód za tebe. Nemusíš umět programovat — říkáš mu, co chceš, on napíše kód a spustí ho.

**Na co se hodí:**
- Automatizace opakovaných úkolů (přejmenování souborů, zpracování dat, konverze formátů)
- Práce s daty — čištění, transformace, analýza
- Vytváření jednoduchých nástrojů a skriptů
- Webové stránky a prototypy
- Cokoliv, kde „potřebuju program, ale nechci programovat"

**Na co pozor:**
- Claude Code mění soubory na tvém disku. Pracuj v testovací složce, ne v důležitých dokumentech.
- Kontroluj, co dělá, než řekneš „ano" — Claude ti vždy ukáže, co chce udělat, a čeká na tvůj souhlas.
- Pokud něco nefunguje, popis chybu a nech Clauda opravit — to je normální workflow.

**Kdy Claude Code vs ostatní nástroje:**
- **Claude Code:** Úkol vyžaduje kód, automatizaci, nebo práci se soubory způsobem, který jiné nástroje neumí.
- **Cowork:** Jednodušší souborové operace bez kódu.
- **Chat:** Textová práce, analýza, brainstorming.
- **Chrome:** Webové stránky a prohlížeč.

### Práce v Claude (2 h)

**Úkol 1: Instalace a první spuštění.**

Pokud ještě nemáš Claude Code nainstalovaný:
1. Nainstaluj Node.js (nodejs.org).
2. V terminálu napiš: `npm install -g @anthropic-ai/claude-code`
3. Spusť: `claude`

Pokud se to nepovede, zeptej se Clauda v chatu: *„Snažím se nainstalovat Claude Code, ale dostávám tuhle chybu: [chyba]. Co mám dělat?"*

**Úkol 2: Jednoduchý úkol.**

Vytvoř si testovací složku. V Claude Code řekni:

*„Vytvoř mi v téhle složce 5 textových souborů: pondělí.txt až pátek.txt. Do každého napiš, jaký den to je a kolik má hodin."*

Podívej se, co vzniklo. Claude Code napsal kód, spustil ho, a soubory jsou na disku.

**Úkol 3: Reálnější úkol.**

Zkus něco bližšího tvé práci:
- *„Vezmi tenhle CSV soubor a vytvoř z něj přehlednou HTML tabulku."*
- *„Projdi všechny soubory v téhle složce a vytvoř seznam s názvy, velikostmi a daty vytvoření."*
- *„Vytvoř jednoduchou webovou stránku, která říká [co chceš]."*

**Úkol 4: Vyhodnoť.**

Zapiš si:
- Fungovalo to? Co bylo těžké?
- Vidím situaci ve své práci, kde by mi Claude Code pomohl?
- Chci se tomu víc věnovat (→ Tier 3), nebo mi stačí vědět, že to existuje?

Obě odpovědi jsou v pořádku. Claude Code není pro každého — ale teď víš, co to je.

### Questy dne

- ☐ Nainstalovat Claude Code a spustit ho (+50 XP)
- ☐ Dokončit jednoduchý úkol — soubory na disku (+50 XP)
- ☐ Zkusit reálnější úkol z práce (+60 XP)
- ☐ Vyhodnotit: chci Claude Code rozvíjet dál? (+30 XP)

### Volitelné mise

- **Claude Code prototyp** — vytvoř jeden užitečný skript nebo nástroj pro svou práci (automatizace, konverze dat, generátor reportů, webová stránka). Zdokumentuj: co to dělá, jak to spustit, kde to používáš. (+300 XP)

---

## Den 10 · Společně + Tvoř · Power Capstone
**~3 h · Část 13: Capstone**

### Online hodina s lektorem (~1 h)

- **Sdílení:** Co z nástrojů vás zaujalo? Co nefungovalo? Překvapení?
- **Ukázky:** Power Projekty, workflow, kreativní použití nástrojů.
- **Feedback:** Lektor dá zpětnou vazbu na přístup a výstupy.
- **Q&A:** Ptej se na cokoliv.
- **Preview Tier 3:** Bezpečnost, browser agent, slash commands, Claude Code do hloubky, API.

### Nástrojová mapa (~30 min)

Než se pustíš do Capstone, vytvoř si nástrojovou mapu — osobní přehled všech nástrojů:

*„Pomoz mi vytvořit nástrojovou mapu. Pro každý nástroj (Chat, Chrome, Cowork, Excel, PowerPoint, Claude Code): kdy ho použít, kdy ne, jak moc mi sedí (1–5), příklad z mé práce. Vytvoř to jako Artifact."*

Tohle je tvůj kompas pro práci s Claudem. Až budeš mít úkol, podíváš se na mapu a víš, kam sáhnout.

### Capstone (~1.5 h)

Vytvoř jeden reálný pracovní výstup od začátku do konce. Tentokrát kombinuj Týden 1 (pokročilé prompty) s Týdnem 2 (nástroj).

1. **Vyber úkol** — něco reálného, co příští týden použiješ.
2. **Vyber nástroj** — podívej se na nástrojovou mapu. Který a proč?
3. **Použij Power Project** — pracuj v Projectu s pokročilými instrukcemi.
4. **Použij workflow** — z knihovny, nebo navrhni nový chain.
5. **Rozhodni o thinking** — potřebuje některý krok Extended Thinking?
6. **Iteruj** — minimálně 2×. Upřesni, vylepši.
7. **Ulož jako Artifact** — finální výstup.

### Self-assessment

- ☐ Umím psát strukturované prompty s XML tagy.
- ☐ Umím napsat system prompt pro Project.
- ☐ Umím rozložit složitý úkol na prompt chain.
- ☐ Vím, kdy použít Extended Thinking.
- ☐ Vyzkoušel jsem Claude v Chrome a vím, kdy ho použít.
- ☐ Vyzkoušel jsem Cowork a vím, kdy ho použít.
- ☐ Vyzkoušel jsem Claude v Excelu a/nebo PowerPointu.
- ☐ Vyzkoušel jsem Claude Code a vím, jestli chci pokračovat.
- ☐ Mám Power Project s pokročilými instrukcemi.
- ☐ Mám workflow knihovnu.
- ☐ Mám nástrojovou mapu.
- ☐ Mám habits, které dodržuji.

**10–12 = připraven na Tier 3. 7–9 = vrať se k slabým bodům. Pod 7 = projdi znovu.**

### Plán pro Tier 3

Zapiš 1–3 oblasti pro růst:
- Co chci automatizovat víc?
- Který nástroj mě zaujal a chci jít hlouběji?
- Kde mě Claude zklamal a proč?
- Chci se naučit API, bezpečnost, nebo pokročilý Claude Code?

### Questy dne

- ☐ Účast na online hodině (+60 XP)
- ☐ Vytvořit nástrojovou mapu jako Artifact (+60 XP)
- ☐ Capstone — reálný výstup kombinující prompting + nástroj (+150 XP)
- ☐ Self-assessment checklist (+50 XP)
- ☐ Plán pro Tier 3 (+40 XP)

### Nový habit

- **Weekly workflow audit** (+50 XP/týden) — každou neděli: co jsem tento týden dělal ručně, co mohl dělat Claude? Který nástroj jsem měl použít?

---

## Přehled

| Den | Typ | Téma | Questy | Čas |
|---|---|---|---|---|
| 1 | Objevuj | System prompty + XML strukturování | 4 | 3 h |
| 2 | Trénuj | Prompt chaining + workflow šablony | 4 | 3 h |
| 3 | Objevuj+Trénuj | Extended Thinking | 4 | 2.5 h |
| 4 | Tvoř | Power Project + workflow knihovna | 5 | 3 h |
| 5 | Společně | Online hodina + reflexe | 4 | 2.5 h |
| 6 | Objevuj | Claude v Chrome | 4 | 3 h |
| 7 | Objevuj+Trénuj | Cowork — automatizace | 4 | 3 h |
| 8 | Objevuj+Trénuj | Excel + PowerPoint | 4 | 3 h |
| 9 | Objevuj | Claude Code — první kroky | 4 | 3 h |
| 10 | Společně+Tvoř | Online hodina + Capstone | 5 | 3 h |
| | | **Celkem** | **42** | **~29 h** |

## Narůstající habits

| Od dne | Habit | Frekvence | XP |
|---|---|---|---|
| Den 1 | Prompt structure check | denně | +15 |
| Den 3 | Thinking toggle | denně | +15 |
| Den 6 | Right tool check | denně | +20 |
| Den 10 | Weekly workflow audit | týdně | +50 |

## XP přehled

| Zdroj | Celkem XP |
|---|---|
| Questy (42 checkpointů) | ~2 130 XP |
| Habits (10 dní + 1 týdenní) | ~650 XP |
| **Povinné celkem** | **~2 780 XP** |
| Volitelné mise (8 misí) | ~2 200 XP |
| **Maximum** | **~4 980 XP** |
