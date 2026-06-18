# PULS Landing — Brief Fáze 3 · Wireframe

> Výstup z brainstormové konverzace. Slouží jako směrový dokument pro vlastní kreslení wireframu.
> Strategicky odsouhlasené, vizuálně připraveno na detail dotažení ve Fázi 4.

---

## 1 · Směr stránky

**Model = Editoriální zážitek s jednou mechanikou.**

Tři pilíře:

- **Vstup = událost, ne hero box.** Logo + pulz drží první obrazovku. Atmosféra před infem.
- **Text dýchá.** Editoriální typografie, hodně whitespacu, žádné cardwall karty s ikonami.
- **Selektor = centrální mechanika.** Stránka se kolem něj točí. Před ním stoupání, po něm dopady.
- **Single-page.** Bez podstránek. Cokoli dál (obchodní podmínky, formuláře) jde do samostatných rout.

Referenční DNA: itsnotviolent.com (jedna mechanika), wantedfornothing.com (mono detail, dark editorial), karliekloss.com (pojmenované pilíře jako navigace).

### Tonální mantinely

- Hrdinou je člověk, ne značka, ne AI.
- Oheň cítěný (záře, sloveso), ne vyslovený (přirovnání).
- Každá emoce stojí na mechanismu.
- Jsme tech, ne lifestyle.

---

## 2 · Nit světla — vizuální vypravěč

Z hero pulzu se při skrolu odlomí část záře a klesne dolů jako **tichý oheň**, **zážeh**. Provází celou stránkou. Architektura **Hybrid**: většinu času žije za textem jako vodoznak, ale na klíčových momentech vystoupí dopředu.

**Pozice:** centrální osa, obsah kolem ní.
**Barva:** violet `#8D2AF3` jako základ, cyan `#22D3EE` jen na flare momentu (selektor). Žádné teplé tóny — ohnivé barvy by byly „vyslovený oheň".
**Forma:** vertikální stopa záře s jasným centrem a tlumeným okrajem (60–120px optického dosahu, jádro tenké).
**Performance:** pravděpodobně fixed SVG / canvas s requestAnimationFrame. Musí být plynulá na mobilu. Pro `prefers-reduced-motion` statická varianta.

### Slovník stavů nitě

| Stav | Kde | Co dělá |
|---|---|---|
| **Klid** | Problém, Řešení, Certifikát, „Nemluvíš se strojem", Garance, Šéfovský most, Finále | Tenká, za textem, nízká intenzita |
| **Zhuštění** | Přechod do selektoru | Zesílí, posune se dopředu, zpomalí sestup |
| **Flare** | Selektor | Vystoupí, jasná, accent cyan dotek na hover/active. Vrchol zážehu. |
| **Impuls** | Reveal karty | Krátký směrový pohyb k vybrané kartě, ukotví se uvnitř ní |
| **Útulek** | Citát Terezy | Zastaví se, pool, halo, pomalý dech (lidský rytmus, ne pulz) |
| **Doutnák** | Footer | Rozpadá se na body záře, zhasne |

---

## 3 · Vertikální rytmus (mapa stránky)

```
1.  Hero — zážeh                                    [atmosféra]
2.  Headline reveal                                  [atmosféra]
3.  Problém                                          [napětí]
    ─ interstitial dech (polo-viewport, nit přechod) ─
4.  Řešení                                           [napětí]
5.  Přechod do selektoru                             [napětí]
    ─ interstitial příprava (1/3 viewportu) ─
6.  SELEKTOR — centrální mechanika                   [AKCE]
7.  Reveal — karta tieru                             [AKCE]
8.  Certifikát                                       [důvěra]
9a. Planner screenshot                               [důvěra]
9b. „Nemluvíš se strojem"                            [důvěra]
9c. Citát Terezy + Garance                           [důvěra]
10. Šéfovský most                                    [důvěra]
11. Finální CTA                                      [důvěra]
12. Footer — doutnák                                 [zhasnutí]
```

**Klíčový princip:** akce je uprostřed, ne na konci. Atmosféra → napětí → **akce** → důvěra → zhasnutí.

---

## 4 · Moment po momentu

### Moment 1 · Hero — zážeh

- Logo + pulz na středu, klid, atmosféra. Žádný text, žádné CTA.
- Mono cue dole: `↓` nebo `[skroluj]` nebo tenká vertikální linka jemně pulzující dolů.
- Pozadí: dark navy, ničím nerušené.

### Moment 2 · Headline reveal

- Při skrolu logo opouští scénu nahoru (varianta A).
- Z místa pulzu se odlomí bod záře a klesne dolů — stává se z něj **vedoucí bod nitě**.
- Pod místem, kde nit vstoupila, se vykreslí headline + perex + CTA.
- Headline: „Vyměň zahlcení za strukturu. Volná hlava staví nejlíp."
- Primární CTA „Zjisti, kde začít" + ghost „Jak to funguje".

### Nav (fixní po skrolu z hero)

- Mono lockup, dark navy s glass blur.
- Vlevo: logo (zmenšené ~32–40px) + `PULS` mono text. Quiet pulse úroveň.
- Vpravo: fixní CTA `[ Zjisti, kde začít ]` jako tichý anchor.

### Moment 3 · Problém

- Centrovaný jednosloupcový text kolem nitě (nit ve stavu Klid, za textem).
- **Bez mono kickeru.** Pouze typografie.
- Velký editoriálni nadpis (Montserrat ~56–72px na desktopu).
- Odstavec pod ním, šířka 60–65 znaků, velikost těla 18–20px.
- Whitespace 30–40% kolem textu.
- Nit zde **tenčí, chladnější** — sekce má pocit „je toho moc, je ticho".

### Interstitial dech (Problém → Řešení)

- Polo-viewport prázdný blok, jen nit.
- Nit přechází z tenčí (konec Problému) do silnější (začátek Řešení).
- Jemný gradient v čase, editoriálni pauza.

### Moment 4 · Řešení

- Architektura stejná jako Problém.
- Nit zde **silnější, jistější** — pořád Klid, ale o krok výš v intenzitě.
- Sekce má pocit „něco se otevírá".

### Moment 5 · Přechod do selektoru

- Kratší než Problém/Řešení, ~60–70 % výšky viewportu.
- Menší typografie nadpisu (~36–44px).
- Krátký perex pod nadpisem.
- **Nit dělá viditelnou práci**: z Klidu do Zhuštění. Zesílí, vystoupí z vodoznaku, zpomalí sestup.
- Žádné CTA.

### Interstitial příprava (1/3 viewportu)

- Nit dokončí transformaci — zhustí se, zesvětlí.
- Začíná zářit jasněji než kdekoli předtím — posledních pár vteřin před flarem.

---

### Moment 6 · Selektor

**Funkce:** klasifikační + dramatická + pohodlná. Dramatičnost přes nit, klid přes typografii.

**Struktura:**

- Nadpis: „Kde stojíš teď?"
- Perex: „Zvol si výchozí bod. Tvoje aktuální workflow určuje, jakým směrem pokračovat."
- **Čtyři horizontální pásy, vertikálně naskládané**, každý prochází nití svým středem.
- Pod čtyřmi pásy: pojistka (drobně, mono, italic-less).

**Vnitřní layout pásu — Hybrid:**

- **Desktop:** side-by-side. Tier name vlevo od osy (Montserrat ~48–56px), popis vpravo (~18–20px). Nit prochází středem mezi nimi.
- **Mobil:** stacked. Tier name nahoře nad osou (centred), popis pod osou (centred).

**Bez kickeru, bez čísel u tieru, bez ikon.** Jen typografie + nit.

**Stavy:**

- **Klid:** všechny čtyři pásy plně čitelné, nit ve Flare ale klidná. Nit při příchodu jednou dýchne.
- **Hover:** nit v daném pásu se rozsvítí o stupeň víc (lokální flare), text pásu zesílí. Ostatní pásy neměnné. Kurzor pointer.
- **Aktivní (klik):** vybraný pás drží jasnost, ostatní tři ztlumí na ~40% opacity, nit v jejich úsecích se zatáhne zpět do Klidu. Nit u vybraného pásu udělá Impuls — krátký flare, který se přelije dolů k místu reveal karty.

**Pojistka:**

> *Nevíš, jaký je tvůj status? Nech nám kontakt. Ozveme se do 24 hodin a tvůj současný proces zmapujeme.*

Mono treatment, výrazně menší než pásy. Vede k stejnému kontaktnímu formuláři jako finální CTA.

---

### Moment 7 · Reveal — karta tieru

**Pozice:** animace ze spodu, **odsouvá obsah pod kartou dolů**. Selektor zůstává viditelný nad kartou. Karta = rozšíření selektoru, ne náhrada.

**Animace:**
- Sjede dolů s mírným delay (300–400ms po kliku).
- Nit z místa Impuls se prodlouží do karty a ukotví uvnitř.
- EaseOut, žádný spring s odskokem.

**Povrch:** **glass-1 + glass-border** z existujícího design systému appky. **Nit prochází za sklem a je viditelná skrz povrch karty.**

**Šířka:** editoriální (~640–720px). Není plnoširoká.

**Vnitřní layout:**

```
TIER NAME (Montserrat, large)
Tagline (menší, klidné rozložení)

CO DOSTANEŠ
Jeden odstavec, editorial šířka, žádné bullety.

CO SI ODNESEŠ
│
├── [záblesk] Funkční pracovní systém v Claude…
│
├── [záblesk] Nový návyk: Automaticky sáhneš…
│
├── [záblesk] Strukturu zadání: Negeneruje šum…
│
└── [záblesk] Certifikát za hotový výstup…

CENA
5 000 Kč / osoba
Garantujeme měřitelné výsledky. Podrobnosti…

[ Objednat Foundation ]      ← primární, Halo pulse
Chci se nejdřív zeptat        ← sekundární, ghost
```

**Mini-žebra nitě:** každá položka „CO SI ODNESEŠ" má vlevo malý záblesk záře, který odbočuje z hlavní nitě uvnitř karty. Ne tečka, ne pomlčka — žára.

**Pod kartou:** *Není to tvoje úroveň? Zkus jinou odpověď.* — drobně, mono, scroll-to-selektor.

**Co se nesmí stát:**
- Žádné ikony k položkám
- Žádný „Most popular" badge
- Žádné checkmarky
- Žádné srovnávací tabulky tierů

---

### Moment 8 · Certifikát

- Architektura jako Problém/Řešení (centrovaný text, Klid nit, bez kickeru).
- Kratší než Problém — jeden nadpis, jeden odstavec.
- Závěrečná věta s odkazem na obchodní podmínky.
- Pozice: hned po reveal kartě, **první ohlas po akci**.

---

### Moment 9 · Důkaz (tři sub-momenty)

#### 9a · Planner screenshot

- Nadpis: „Žádná teorie. Něco už běží." + krátký perex.
- **Jeden velký screenshot** Day Content View (questy s `+N b`, glossary, glass komponenty).
- Vsazený do **glass rámu** se stejnou estetikou jako reveal karta.
- **Mírná perspektivní rotace** 4–6° na ose Y.
- **Animovaný — pomalý parallax**: při skrolu se obraz uvnitř rámu pomalu posouvá, drží pohled. Ne autoplay, ne karusel — pomalý drift v rámci viewportu.
- Nit prochází za screenshotem (sklo + nit za sklem).
- Šířka: 800–900px (větší než reveal karta).

#### 9b · „Nemluvíš se strojem"

- Text-only sekce, architektura jako Problém/Řešení.
- Vysvětluje vstupní dotazník, role lektora, role AI architekta.
- **Role bez jmen.** „Lektor" a „AI architekt" mírně typograficky zvýrazněné v textu (bold + tracking, ne badge, ne avatar).
- Žádné ikony, žádné rámečky pro role.

#### 9c · Citát Terezy + Garance

**Citát — útulek:**
- Citát ve velkém řezu (~28–32px Montserrat), italic alternativa.
- Šířka ~600px, centrovaně.
- Pod citátem podpis: „— Tereza, zakladatelka · tereza.svanda@praut.cz" (menší, mono, email live link).
- **Halo nitě** kolem celé sekce — měkký kruhový glow okolo textu.
- **Nit se zastaví, pool, pomalý dech (lidský rytmus, ne pulz).**
- **Bez portrétu.** Citát stojí na slovech, ne na tváři.

**Krátký interstitial dech.** Nit přejde z útulku zpět do Klidu.

**Garance:**
- Architektura jako Certifikát.
- Nadpis „Stojíme za výsledkem." + odstavec.
- Klid nit (NE útulek — devalvovalo by předchozí moment).
- Odkaz na obchodní podmínky.

---

### Moment 10 · Šéfovský most

**Vědomě menší než tier karta.** B2B pivot, ne hlavní lišta.

- Centrovaný text, **menší typografie** (nadpis ~36–40px).
- **Žádné sklo, žádná karta.** Textový moment, ne objekt.
- Krátký odstavec z copy + jedno **sekundární** CTA (`[ Napsat o nabídku pro tým ]`, ghost). Ne primární.
- Nit v Klidu.

---

### Moment 11 · Finální CTA

- Nadpis „Tohle není pro každého." ve velkém řezu.
- Krátký perex.
- Primární CTA `[ Napiš nám ]` s Halo pulse (jediné primary v dolní polovině stránky).
- Sekundární ghost link: „Nebo se vrať k výběru úrovně" (scroll-to-selektor).
- Nit v Klidu, **začíná chladnout** — připravuje se na doutnák.

---

### Moment 12 · Footer

- Minimální, sober, mono treatment.
- **Logo se vrací** (zmenšené, vlevo) — closing mark. Quiet pulse.
- Kontakt (email), sociální (volitelné), copyright + IČO Praut s.r.o.
- Linky: Obchodní podmínky, GDPR.
- **Nit zhasne** — doutnák se rozpadne na body záře a pohasne. Poslední vizuální gesto stránky.

---

## 5 · User flow — dvě cesty

**Happy path (rozhodný kupující):**
Hero → headline reveal → Problém → Řešení → Přechod → **Selektor** → Reveal → CTA „Objednat" → formulář (samostatná routa). Stránku nedokončí.

**Druhá cesta (váhající / hledající):**
Hero → headline reveal → Problém → Řešení → Přechod → Selektor (neklikne nebo potřebuje víc důvěry) → Certifikát → Důkaz → Šéfovský most → Finále → kontaktní formulář.

**Pojistka v selektoru** zachytí nerozhodné už v polovině stránky — vede na stejný kontaktní formulář jako finální CTA.

---

## 6 · Konstanty napříč stránkou

- **Pozadí:** dark navy `#0a0e1a` (nebo aktuální navy z appky)
- **Accent:** violet `#8D2AF3`
- **Pulse secondary:** cyan `#22D3EE` (jen ve Flare na selektoru)
- **Typografie:** Montserrat (nadpisy, body), IBM Plex Mono (nav, pojistka, „+N b", micro labely, footer)
- **Tělo textu:** 18–20px na desktopu
- **Editoriální šířka:** 60–65 znaků pro odstavce, ~640–720px pro karty
- **Glass surfaces:** glass-1 + glass-border z appky (reveal karta, planner rám)
- **CTA primární:** Halo pulse (hero, reveal karta, finále)
- **CTA sekundární:** ghost, bez pulse

---

## 7 · Otevřené pro Fázi 4

- Beacon vizuál pro hero (vychází z loga, ne radar)
- Přesný rendering nitě (canvas vs SVG vs CSS) — performance test
- Přesné typografické měřítka (responsive type scale)
- Vstupní animace stránky (před hero, po načtení)
- Per-tier barevné variace (zatím fixní violet-cyan)
- Cursor / kurzor chování (vlastní nebo default)

---

## 8 · Nezapomínat

- **Pojistka v selektoru** vede na stejný formulář jako finále.
- **Email Terezy** je live mailto link.
- **Reveal karta** se nepřesměrovává — sjede a dál vede do formuláře.
- **Žádné jména** (kromě citátu Terezy) — role „lektor", „AI architekt".
- **`prefers-reduced-motion`** = statická varianta nitě, žádný parallax.
- **Mobile:** nit centrální, layout přejde do stacked, planner screenshot zachová parallax, ale jemnější.

---

*Brief uzavřen. Vrať se ke konverzaci, až budeš mít wireframe nakreslený, nebo když narazíš na rozhodnutí, které brief nepokrývá.*
