# Příručka: Jak pracovat s Claudem

> **Povinné čtení — Den 1 kurzu.**
> Vrať se k téhle příručce kdykoliv, když máš pocit, že z Clauda nedostáváš to, co chceš. Tajemství je v tom, jak se ptáš.

---

## Zlaté pravidlo

**Čím líp Claudovi vysvětlíš, co potřebuješ, tím líp ti pomůže.**

Je to jako s novým kolegou: když mu řekneš „udělej něco s marketingem", dostaneš něco obecného. Když mu řekneš přesně co, pro koho, v jakém formátu a do kdy — dostaneš přesně to, co potřebuješ. Claude funguje stejně.

---

## Bezpečnost a citlivá data

Než začneš Claudovi posílat cokoliv z práce, přečti si tohle. Je to důležité.

### Co do Clauda NEVKLÁDEJ

- **Osobní údaje klientů a kolegů** — jména, rodná čísla, čísla účtů, adresy, telefonní čísla, e-maily konkrétních lidí.
- **Důvěrné firemní dokumenty** — smlouvy, interní strategie, finanční výkazy, cenové kalkulace, obchodní tajemství.
- **Hesla, přístupové údaje, API klíče** — nikdy, za žádných okolností.
- **Zdravotní záznamy, právní spisy** — cokoliv, co podléhá zvláštní ochraně.

### Jak pracovat s reálnými daty bezpečně

Pokud chceš, aby ti Claude pomohl s reálným dokumentem z práce:

1. **Anonymizuj** — změň jména (Jan Novák → Klient A), firmy (Stavby s.r.o. → Firma X), čísla (IČO, částky, datumy).
2. **Zobecni** — místo „nabídka pro Škoda Auto na 2,3 mil. Kč" napiš „nabídka pro velkou automobilku na jednotky milionů".
3. **Zeptej se šéfa** — tvoje firma může mít pravidla, co je OK sdílet s AI nástroji. Zjisti je.

### Jaký plán a co to znamená pro data

- **Free a Pro** — tvoje konverzace mohou být použity pro zlepšování Clauda (můžeš to vypnout v nastavení). Buď opatrný s čímkoliv citlivým.
- **Team a Enterprise** — tvoje data se pro trénink nepoužívají. Firma má větší kontrolu. Ale i tak: citlivá data anonymizuj.

### Pravidlo: když váháš, anonymizuj

Pokud si nejsi jistý, jestli něco můžeš sdílet — změň to. Claude ti pomůže úplně stejně dobře s anonymizovanými daty. Neztratíš kvalitu, získáš klid.

---

## 7 pravidel pro práci s Claudem

### 1. Dej Claudovi kontext

Claude neví, kdo jsi, kde pracuješ, proč se ptáš, ani co už víš. Řekni mu to.

❌ *„Napiš mi e-mail."*

✅ *„Jsem projektový manažer v IT firmě. Potřebuji napsat e-mail klientovi, který se ptá na zpoždění projektu. Tón má být profesionální, ale upřímný. Zpoždění je 2 týdny kvůli změně požadavků od klienta."*

Čím víc kontextu, tím lepší výsledek. Není to otravování — je to jako briefing pro kolegu.

### 2. Řekni přesně, co chceš

Neříkej jen téma. Řekni formát, délku, tón, pro koho to je.

❌ *„Něco o marketingu."*

✅ *„Shrň mi 5 trendů v B2B marketingu pro rok 2025, každý v 2–3 větách, pro prezentaci před vedením firmy."*

### 3. Řekni Claudovi: pokud nevíš, zeptej se

Tohle je jeden z nejdůležitějších triků. Přidej na konec zadání:

*„Pokud ti chybí informace nebo něčemu nerozumíš, zeptej se mě — nevymýšlej si odpověď."*

Claude má tendenci odpovědět na všechno, i když nemá dost dat. Tímhle mu dáš svolení se zeptat místo toho, aby hádal.

### 4. Nevymýšlej si = řekni to Claudovi přímo

Claude někdy "halucinuje" — vymyslí fakta, čísla, nebo citace, které neexistují. Obrana:

*„Pokud si nejsi jistý nebo nemáš ověřenou informaci, řekni to. Nebudu tě soudit za to, že nevíš — budu tě soudit za to, že si vymyslíš."*

A vždy kontroluj: pokud Claude říká konkrétní čísla, data nebo citace, ověř je. Zvlášť u věcí, na kterých záleží.

### 5. Iteruj — první odpověď není finální

Neboj se říct:

- *„Tohle je moc dlouhé, zkrať to na polovinu."*
- *„Tón je moc formální, chci to přátelštější."*
- *„Dobrý začátek, ale bod 3 rozveď víc."*
- *„Zkus to úplně jinak — tenhle přístup nefunguje."*

Claude není uražený. Nemá ego. Čím víc iteruješ, tím lepší výsledek. Většina lidí skončí u první odpovědi — ty ne.

### 6. Rozděl velké úkoly na kroky

Neříkej: *„Napiš mi kompletní business plán."*

Řekni:
1. *„Pomoz mi definovat cílovou skupinu pro [produkt]."*
2. *„Teď mi navrhni cenovou strategii na základě toho, co jsme definovali."*
3. *„Skvělé. Teď to spoj do executive summary."*

Menší kroky = lepší kontrola = lepší výsledek.

### 7. Když to nefunguje, začni znovu

Pokud konverzace zabředla, Claude se zamotal, nebo odpovídá úplně mimo — začni nový chat. Claude nemá paměť mezi chaty (pokud nepoužíváš Projects nebo Memory). Nový chat = čistý začátek.

---

## Užitečné fráze pro každodenní práci

### Kontext a role
- *„Jsi [role]. Tvůj úkol je [co má udělat]."*
- *„Pomáháš mi s [oblast]. Pracuji jako [pozice] v [firma/obor]."*
- *„Tvoje cílová skupina je [kdo to bude číst/používat]."*

### Formát a struktura
- *„Odpověz jako tabulka s třemi sloupci: [sloupec 1], [sloupec 2], [sloupec 3]."*
- *„Maximálně 5 odrážek, každá 1–2 věty."*
- *„Formát: nadpis, 3 odstavce, závěr s doporučením."*

### Kvalita a kontrola
- *„Pokud nevíš, řekni to. Nevymýšlej si."*
- *„Pokud ti chybí informace, zeptej se mě."*
- *„Na konci uveď, čemu si nejsi jistý."*
- *„Označ místa, kde bych měl ověřit fakta."*

### Iterace
- *„Dobrý základ. Teď [co změnit]."*
- *„Zkus to znovu, ale tentokrát [jiný přístup]."*
- *„Varianta A i B jsou dobré. Spoj je: z A vezmi [co], z B vezmi [co]."*
- *„Dej mi 3 varianty a ke každé napiš, pro koho je nejlepší."*

### Když se Claude zasekne
- *„Shrň mi, co zatím víš o mém zadání."* (ověříš, jestli pochopil)
- *„Zapomeň na předchozí instrukce a začni od začátku s tímhle: [nové zadání]."*
- *„Co ti chybí, abys mi dal lepší odpověď?"*

---

## Čeho se vyvarovat

| ❌ Tohle nefunguje | ✅ Místo toho udělej |
|---|---|
| Příliš krátké zadání bez kontextu | Přidej kdo jsi, proč, pro koho, jaký formát |
| Čekání na dokonalou první odpověď | Iteruj — upřesňuj, opravuj, vylepšuj |
| Slepá důvěra v čísla a fakta | Ověřuj klíčové informace ze spolehlivých zdrojů |
| Jeden obrovský prompt na všechno najednou | Rozděl na kroky a řeš postupně |
| Vzdát to po špatné odpovědi | Přeformuluj, dej víc kontextu, nebo začni nový chat |
| Kopírovat výstup bez přečtení | Vždy si přečti a uprav — Claude píše za tebe, ne místo tebe |

---

## Jedno poslední

Claude je nástroj. Extrémně silný nástroj, ale pořád nástroj. Výsledek záleží na tom, jak ho používáš. Tahle příručka je tvůj cheat sheet — vrať se k ní, kdykoliv máš pocit, že Claude "nedává dobrý výsledky". Skoro vždy je řešení v lepším zadání.

A pamatuj: **pokud nevíš, jak se zeptat — zeptej se Clauda, jak se ho má na to zeptat.** Funguje to.
