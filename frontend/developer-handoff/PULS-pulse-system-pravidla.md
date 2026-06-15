# PULS — Pulse System: Pravidla použití

> Design token dokumentace. Definuje kde, kdy a jak intenzivně se pulse efekt používá.
> Předej developerovi společně s component-library.html.

---

## Co pulse znamená

Pulse není dekorace. Je to vizuální jazyk značky: PULS = impuls, energie, živost. Kdykoli něco pulsuje, říká to uživateli jednu z těchto věcí:

- **„Tohle žije."** — aktivní stav, live spojení, běžící proces.
- **„Tohle chce tvou pozornost."** — nová věc, změna, notifikace.
- **„Tohle je tvůj další krok."** — primární akce, dominantní CTA.

Co nepulsuje, je **quiet core** — klidné jádro. Dokončené, statické, přečtené, defaultní. Kontrast mezi pulsem a tichem vytváří hierarchii. Když pulsuje všechno, nepulsuje nic.

---

## Čtyři úrovně

### 🔴 Beacon (silný)

Dominuje viewportu. Plná sonarová/glow sestava. Na stránce **maximálně jeden** v daném okamžiku.

**Kde:** hero vizuál, onboarding moment, celebration (dokončení tieru).

**Podoba v appce:** sonarové ringy, sweep, core, glow — stávající showcase beacon.
**Podoba na landingu:** ⚠️ *dosud nedefinováno* — bude vycházet z loga (plamen/kapka se září zevnitř), ne radar estetika. Marketingová podoba, pravděpodobně velké halo při zobrazení stránky nebo najití na sekci. Definuje se samostatně.

### 🟡 Halo (střední)

Dýchající glow kolem prvku: blur `::before` + expandující ring `::after`. Viditelné, ale nežere viewport.

**Kde:** primární CTA v daném view (jedno tlačítko), aktivní quest, selected state, live indikátor s kontextem.

**Chování:** 3–5 cyklů po renderování / scroll-into-view, pak ztichne. Znovu se aktivuje po opětovném scroll-into-view. Nikdy neběží v nekonečném loopu.

**CSS reference:** `.pulse-cta` z component-library.

### 🟢 Ping (jemný)

Malý pulsující dot nebo subtle box-shadow. Periferní — zaregistruješ koutkem oka.

**Kde:** notifikační badge, status dot (online/syncing), nový nepřečtený item, progress špička (meter ping), nově přidaný glossary term.

**Chování:** loop je OK (ping je malý a periferní), ale `prefers-reduced-motion` ho zastaví.

**CSS reference:** `.pulse-dot`, `.pulse-badge`, `.pulse-meter__ping` z component-library.

### ⚫ Quiet core (žádný pulse)

Default stav. Tma dýchá. **90 % UI je quiet core.**

**Kde:** karty v klidovém stavu, dokončené questy, přečtený obsah, navigace, statický text, dokončené tiery, proběhlé sessions.

---

## Pravidlo jednoho ohniska

V jednom viewportu smí být současně:

| Úroveň | Max počet | Poznámka |
|---|---|---|
| Beacon | 1 | Pokud je Beacon přítomný, Halo ustupuje do Ping nebo Quiet |
| Halo | 1 | Jedno primární CTA / aktivní prvek |
| Ping | 3 | Víc je vizuální šum |
| Quiet | ∞ | Default pro všechno ostatní |

**Hierarchie je absolutní:** Beacon > Halo > Ping > Quiet. Dvě stejné úrovně vedle sebe se ruší — oko neví, kam se dívat. Stejný princip jako u CTA: tři rovnocenné = žádné.

---

## Mapování na PULS views

### Dashboard (Planner)

| Prvek | Úroveň | Poznámka |
|---|---|---|
| Today karta s aktivním úkolem | Halo | Jediný aktivní prvek |
| Streak counter | Ping | Živý, ale sekundární |
| Body `+N b` po splnění | Ping flash | Jednorázový, ne loop |
| Dokončené dny | Quiet | |

### Studium

| Prvek | Úroveň | Poznámka |
|---|---|---|
| Aktuální tier/den (rozpracovaný) | Halo | |
| Zamčené budoucí tiery | Quiet | |
| Dokončené tiery | Quiet | Případně subtle celebrate, ale ne pulse loop |

### Day Content View

| Prvek | Úroveň | Poznámka |
|---|---|---|
| Primární CTA „Splnit quest" | Halo | |
| Nesplněné questy | Quiet | Ne Ping — jinak jich je 5 a všechny blikají |
| Právě splněný quest | Ping flash | Jednorázový celebration, pak Quiet |
| Glossary nový term | Ping dot | |

### Landing page

| Prvek | Úroveň | Poznámka |
|---|---|---|
| Hero vizuál | Beacon | ⚠️ podoba dosud nedefinována |
| Primární CTA „Zjisti, kde začít" | Halo | 3–5 cyklů, pak quiet |
| Selektor — vybraný tier | Ping flash | Jednorázový po výběru |
| Zbytek | Quiet | |

### Meets

| Prvek | Úroveň | Poznámka |
|---|---|---|
| Živá/nadcházející session | Ping dot | |
| Proběhlé sessions | Quiet | |

---

## Click-wave (interakční vrstva)

Click-wave je **oddělená od pulse hierarchie** — reaguje na klik, ne na stav. Žije paralelně a nekonfliktuje s pravidly výše.

**Kde:** globálně, na všech interaktivních prvcích (`a, button, .card, .panel...`).
**Chování:** 860ms, `cubic-bezier(.16,1,.3,1)`. Sonarová vlna z bodu kliku + screen pulse + ripple source glow.
**Pravidlo:** dědí paletu z aktuálního kontextu (`--pulse-c1/c2/c3`).

---

## Barevná paleta

Fixní výchozí paleta:

| Token | Barva | Role |
|---|---|---|
| `--pulse-c1` | `#8D2AF3` (violet) | Primární akcent, core, ringy |
| `--pulse-c2` | `#22D3EE` (cyan) | Sekundární, sweep, flash, ping |
| `--pulse-c3` | `#10B981` (emerald) | Terciární, vnější ring, ground |

**Přepínání palet v UI: ne.** Violet-cyan je PULS identita.

**Budoucí rozšíření:** prostor pro per-tier barevné variace (např. jiná sekundární barva pro Tier 3). Systém je na to připravený díky CSS custom properties — stačí přepsat `--pulse-c1/c2/c3` na scope tieru. Zatím neimplementovat, jen nezabít tu možnost.

---

## Přístupnost

- `prefers-reduced-motion: reduce` → všechny pulse animace se zastaví nebo zkrátí na ≤240ms.
- Ping dot musí mít dostatečný kontrast i ve statickém stavu (ne jen přes glow).
- Pulse nikdy nesmí být jediný nositel informace — vždy musí existovat i textový/ikonový indikátor.
- `aria-hidden="true"` na všech čistě dekorativních pulse prvcích.

---

## Test před implementací

Ke každému novému pulse prvku si polož:

1. **Co tím říkám?** — žije / pozornost / další krok? Pokud nic z toho → Quiet.
2. **Kolik pulse prvků je ve viewportu?** — dodržuji limity (1 Beacon, 1 Halo, 3 Ping)?
3. **Co se stane po 5 cyklech?** — ztichne, nebo běží donekonečna? (Loop jen u Ping.)
4. **Funguje to i bez animace?** — `prefers-reduced-motion` test.
