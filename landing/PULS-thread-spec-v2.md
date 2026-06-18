# PULS Thread Spec v2 — Handoff Document

> Single source of truth pro implementaci nitě, iniciační animace a Útulek smoke.
> Použij tento dokument jako jediný referenční bod při briefingu Codexu.
> Veškeré dřívější definice z `PULS-landing-wireframe-brief.md` a starého thread-labu jsou tímto dokumentem nahrazeny.

---

## 0 · Architektura — tři vrstvy

Nit na landingu se skládá ze tří nezávislých vrstev. Každá má jiný účel a jiný technický stack.

| Vrstva | Účel | Stack | Aktivní kdy |
|---|---|---|---|
| **Background depth** | Atmosféra prostoru za nití | CSS gradient (multi-layer radial) | Globální, fixed |
| **Thread core** | Samotná nit + vlasky + aura | SVG + CSS filter (feGaussianBlur) | Globální, fixed |
| **Útulek smoke** | Smoke physics pole u Terezy | WebGL fluid (canvas) | Jen v `#tereza-quote` |

Vrstvy se renderují v tomto pořadí (z-index): background depth → thread core → útulek smoke (when active) → page content.

---

## 1 · Background depth (nová vrstva)

Místo plné `var(--bg)` černé je za nití vytvořená **prostorová hloubka** přes vrstvené tmavé gradienty. Cílem je, aby logo v iniciační fázi působilo jako v *prostoru*, ne na *ploše*.

### CSS

```css
body {
  background:
    radial-gradient(ellipse 80% 60% at 50% 30%, rgba(76, 29, 149, 0.22), transparent 60%),
    radial-gradient(ellipse 70% 50% at 50% 70%, rgba(30, 27, 75, 0.30), transparent 65%),
    radial-gradient(ellipse 100% 80% at 50% 50%, rgba(15, 23, 42, 0.50), transparent 75%),
    linear-gradient(180deg, #05050d 0%, #08081a 50%, #050510 100%);
  background-attachment: fixed;
}
```

**Co tahle směs dělá:**
- Tmavě fialová halo nahoře (kolem loga)
- Tmavě modrá halo dole (kotvící dno prostoru)
- Šedo-černý mid layer pro hloubku
- Linear gradient jako base (nikdy ne plná #000)

**Pravidlo:** nikde na stránce se neukazuje `#000000`. Nejtmavší přípustná hodnota je `#05050d`.

---

## 2 · Thread core — tabulka stavů

Sedm stavů — pět perzistentních + dva jednorázové eventy. Stavy se přepínají přes `data-state` atribut na root `.puls-thread` elementu.

### Tabulka

| Stav | Typ | Hustota vláken | Stroke | Outer glow blur | Opacity violet | Cyan mikro-záblesky | Zlatá vrstva | Aura rhythm |
|---|---|---|---|---|---|---|---|---|
| `zazeh` | Event 2.4s | rampa 0→14 | rampa 0→2px | rampa 0→64px | 0 → 0.9 | 0 → 0.35 | 0.40 peak → 0.10 | jednorázová expanze |
| `klid` | Persistent | 12 | 1.5px | 32px | 0.55 | 0.08 | 0.08 | 6s, sotva znatelný |
| `zhusteni` | Persistent | 14 | 2.5px | 56px | 0.78 | 0.18 | 0.10 | 4s, zrychluje |
| `flare` | Persistent | 16 | 3.5px | 96px | 0.92 | 0.32 | 0.12 | 2.5s, výrazný |
| `ping-flash` | Event 450ms | krátký nárůst | beze změny | +40px spike | +0.15 spike | +0.20 spike | beze změny | jednorázový puls |
| `utulek` | Persistent | 10 (rozevřeno) | 1.5px | 180px (pole) | 0.65 | 0.05 | 0.30 | 4-5s, dech |
| `doutnak` | Persistent | 6 (rozpadá se) | 1px | 24px | 0.28 | 0 | 0.06 | 8s, ztichá |

### Barvy

```css
:root {
  --thread-violet: #8D2AF3;
  --thread-cyan: #22D3EE;
  --thread-gold: #F5A623;
}
```

### Struktura vláken

- **Centrální axis** na `left: 50%`, `transform: translateX(-50%)`.
- **N vláken** (podle hustoty per stav) v SVG, každé s vlastní `<path d="M ..." />`.
- Vlasky **proplétané, ne paralelní**. Každé vlákno má vlastní fázi sinusové vlny (random offset `0–6.28 rad`).
- **Středový pruh hustší**, okraje řidší — distribuci hustoty viz pseudo-kód níže.
- Amplitude vlnění: 2-8px (klidové) až 12-20px (flare).
- Speed: každé vlákno má vlastní rychlost (random 0.8x-1.4x base speed).

### Cyan mikro-záblesky

- Cyan není přidaná vrstva, je to **náhodně vybraná podmnožina vláken** (`cyanFraction = opacity hodnota`).
- Vlákna označená jako cyan mají `stroke: var(--thread-cyan)` místo violet.
- Distribuce: každé vlákno má při render-time 50/50 šanci být cyan podle aktuálního `--thread-cyan-opacity`.

### Zlatá vrstva

- **Outer halo pod celou nití**, ne na jednotlivých vláknech.
- Implementace: separate SVG group s **velmi rozmazanou** zlatou křivkou kopírující střed nitě.
- `filter: blur(64px)` na zlatém layer (mnohem víc než na violet halu).
- Opacity řízena přes `--thread-gold-opacity` per stav.

### Aura

- **Outer glow** kolem celého svazku, řízený `feGaussianBlur` filtrem.
- **Dýchá** v rytmu `--thread-rate` per stav.
- Dýchání = animace `--thread-blur` mezi (base) a (base × 1.4) přes daný cyklus.
- `transition: all 0.4s ease` na všech proměnných pro plynulé přepínání stavů.

### Pseudo-kód distribuce hustoty

```
density = state.density  // např. 12 pro Klid
for i in 0..density:
  // Středovější vlákna mají menší x offset, okrajové větší
  centerBias = abs(i - density/2) / (density/2)  // 0 ve středu, 1 na okraji
  xOffset = (centerBias ^ 2) * 40px * randomSign()  // kvadratický rozklad
  phase = random(0, 2*PI)
  speed = random(0.8, 1.4)
  isCyan = random() < cyanFraction
  ...
```

---

## 3 · Iniciační animace (Zážeh)

Spustí se **při prvním načtení stránky per session**. Uloží se flag do `sessionStorage`, aby se neopakovala při návratu během session.

### Sekvence (celkem 2.4s desktop, 1.6s mobile)

**0–400 ms · Stránka načtená**
- Background depth gradient je vidět (tmavá fialová/modrá hloubka).
- Logo statické uprostřed viewportu, 320-400px výška na desktopu, 240px na mobilu.
- Žádná nit, žádné texty headline.
- Nav fixed bar skrytý.

**400–1100 ms · Rozsvícení loga**
- Plamen v logu **dýchá** — radial pulse ze středu, zlatá → fialová → ven.
- Outer glow kolem loga se rozšiřuje na ~80px blur radius.
- Po 700ms se objeví "PULS" wordmark vedle plamene (fade-in 400ms).

**1100–1800 ms · Odlomení kapky**
- Z dolní hrany loga (kde je platform-glow světla) **se odlomí kapka záře**.
- Kapka: ~16px diameter, zlatý core (#F5A623), fialový halo blur 32px.
- Klesá svisle dolů středem stránky.
- Animace: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out).
- Vzdálenost: ~35% viewport height během 700ms.
- Logo zůstává na místě, jen mírně ztichlo (opacity 0.95, glow se zmenšil).

**1800–2400 ms · Transformace na nit**
- Kapka při klesání **vykuřuje** — vlasky se z ní vynořují směrem dolů.
- Po dosažení ~60% viewport height kapka **rozpustí se do nitě** (Klid).
- **Současně:** logo se zmenší a přesune do nav vlevo nahoře.
- **Současně:** headline + perex + CTA na hero **vyjedou nahoru** (translate -40px → 0) s fade-in.

**2400 ms+ · Stránka ready**
- Nit ve stavu `klid`.
- Fixed nav viditelný s malým logem a "PULS" wordmark vlevo, CTA vpravo.
- Hero obsah v cílové pozici.
- Uživatel může scrollovat.

### Mobile úpravy

- Celková délka: **1.6s** (zkrácená sekvence).
- Logo start size: 240px výška.
- Pohyb kapky: ~25% viewport (kratší).
- Vše ostatní stejné, jen rychlejší tempo.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Sekvence se přeskočí. Logo skočí rovnou do nav, nit se objeví jako statický Klid. */
}
```

JS implementace: pokud `prefers-reduced-motion: reduce`, sekvence se přeskočí, stav nitě jde rovnou na `klid`, logo je v nav, headline viditelný.

### Session storage

```js
if (sessionStorage.getItem('puls-zazeh-done')) {
  // Skip sequence, go straight to Klid
} else {
  // Run full sequence
  sessionStorage.setItem('puls-zazeh-done', '1');
}
```

---

## 4 · Útulek smoke (samostatná WebGL vrstva)

Aktivuje se **jen v sekci `#tereza-quote`** přes IntersectionObserver.

### Trigger

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      activateUtulek();
    } else {
      deactivateUtulek();
    }
  });
}, { threshold: [0, 0.5] });

observer.observe(document.querySelector('#tereza-quote'));
```

### Vizuál (desktop)

- **Šířka pole:** 800px (centered around citátový blok).
- **Výška pole:** výška citátového bloku + 200px nad/pod.
- **Position:** absolute uvnitř `#tereza-quote`, z-index pod text.
- Nit globální přejde do stavu `utulek` (rozevření).
- WebGL fluid sim běží v rámci 800px pole.

### Smoke physics parametry

```js
const utulekConfig = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  DENSITY_DISSIPATION: 2.0,       // pomalejší než default 3.5
  VELOCITY_DISSIPATION: 1.5,
  PRESSURE: 0.1,
  CURL: 2,                         // jemnější vorticity
  SPLAT_RADIUS: 0.3,
  SPLAT_FORCE: 4000,               // tlumenější než default
  COLOR_UPDATE_SPEED: 3,           // pomalejší color cycling
  AUTO_SPLAT: true,                // ne cursor, ale auto-driver
  AUTO_SPLAT_INTERVAL: 3500,       // splat každé 3.5s
  AUTO_SPLAT_COUNT: 2,             // 2 splaty per cyklus
};
```

### Barevná paleta (HSV-restricted)

Místo plného HSV spektra (jako default smoke), cyklujeme **jen mezi třemi barvami**:

```js
const utulekColors = [
  { r: 0.10, g: 0.03, b: 0.18 },  // violet (weight 50%)
  { r: 0.03, g: 0.15, b: 0.18 },  // cyan (weight 25%)
  { r: 0.18, g: 0.10, b: 0.03 },  // gold (weight 25%)
];
// Vážený random výběr při každém auto-splatu
```

### Auto-driver (místo cursor input)

```js
function autoSplat() {
  const bounds = quoteElement.getBoundingClientRect();
  for (let i = 0; i < AUTO_SPLAT_COUNT; i++) {
    const x = random(bounds.left, bounds.right);
    const y = random(bounds.top - 100, bounds.bottom + 100);
    const dx = random(-50, 50);
    const dy = random(-30, 30);
    const color = weightedRandom(utulekColors);
    splat(x, y, dx, dy, color);
  }
}
setInterval(autoSplat, AUTO_SPLAT_INTERVAL);
```

### Hraniční srážení

- Smoke se odráží od horních a dolních hran citátového bloku.
- Implementace: ve fluid simulaci nastavit boundary podmínky na hranách citátu (vrátí velocity).
- Boční hrany neměkké — smoke vytéká vpravo a vlevo do pole 800px.

### Mobile fallback

WebGL fluid sim na low-end Androidu drhne. **Detekce:**

```js
const isLowEnd = navigator.hardwareConcurrency <= 4 
  || /Android/i.test(navigator.userAgent);
```

**Pokud low-end nebo `prefers-reduced-motion: reduce`:**

Místo WebGL fluid se zobrazí **statické teplé halo s pomalým dýcháním**:

```css
.utulek-fallback {
  position: absolute;
  inset: -100px -200px;
  background: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    rgba(245, 166, 35, 0.18) 0%,
    rgba(141, 42, 243, 0.12) 40%,
    transparent 70%
  );
  filter: blur(40px);
  animation: utulek-breath 5s ease-in-out infinite;
}

@keyframes utulek-breath {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
```

**Klíč:** fallback **vždy dýchá** (pomalé 5s ease-in-out), i na mobilu. Nikdy úplně statický.

---

## 5 · Pulse system mapping na sekce

Mapování stavů nitě na sekce stránky. Spouští se přes IntersectionObserver na každé sekci.

| Section ID | Thread state | Trigger |
|---|---|---|
| (initial load) | `zazeh` | First page load per session |
| `#hero` | `klid` | After zazeh completes |
| `#headline` | `klid` | IntersectionObserver |
| `#problem` | `klid` | IntersectionObserver |
| `#breath-1` | `klid` | IntersectionObserver |
| `#reseni` | `klid` | IntersectionObserver |
| `#prechod` | `zhusteni` | IntersectionObserver |
| `#breath-2` | `zhusteni` | IntersectionObserver |
| `#selektor` | `flare` | IntersectionObserver |
| `#reveal-container` (when expanded) | `ping-flash` | On tier selection (event) |
| `#certifikat` | `klid` | IntersectionObserver |
| `#planner` | `klid` | IntersectionObserver |
| `#nemluvis` | `klid` | IntersectionObserver |
| `#tereza-quote` | `utulek` + Útulek smoke | IntersectionObserver |
| `#breath-3` | `klid` | IntersectionObserver |
| `#garance` | `klid` | IntersectionObserver |
| `#sef` | `klid` | IntersectionObserver |
| `#finale` | `klid` | IntersectionObserver |
| `#footer` | `doutnak` | IntersectionObserver |

---

## 6 · JS API

Komponenta `PulsThread` má veřejné API:

```js
import { PulsThread } from './thread.js';

const thread = new PulsThread({
  container: document.body,
  axis: 'center',
  reducedMotion: 'auto'
});

// Iniciace
thread.runZazeh();  // Spustí iniciační animaci (per session, jen jednou)

// Deklarativní binding
thread.bindSection('#hero', { state: 'klid' });
thread.bindSection('#prechod', { state: 'zhusteni' });
thread.bindSection('#selektor', { state: 'flare' });
thread.bindSection('#tereza-quote', { state: 'utulek', smoke: true });
thread.bindSection('#footer', { state: 'doutnak' });

// Imperativní eventy
thread.triggerPingFlash();  // při výběru tieru v selektoru
```

---

## 7 · Implementace — file structure

```
landing/
├── index.html
├── styles.css
├── script.js (page logic, sections, nav)
└── thread/
    ├── thread.js          # PulsThread class + state controller
    ├── thread.css         # CSS variables, base styles, animations
    ├── thread-svg.js      # SVG generator pro vlasky
    └── utulek-smoke.js    # WebGL fluid sim pro Útulek
```

---

## 8 · Acceptance criteria

Před tím, než je Thread Spec v2 považován za hotový, musí všechno z následujícího platit:

- [ ] Stránka při prvním načtení per session spustí Zážeh sekvenci kompletně podle timestampů.
- [ ] Při scrollu mezi sekcemi se nit plynule přepíná mezi stavy (transition 0.4s ease).
- [ ] V `#tereza-quote` se aktivuje Útulek smoke vrstva, při výjezdu deaktivuje.
- [ ] V selektoru nit dýchá ve Flare; po kliknutí na tier proběhne Ping flash (~450ms).
- [ ] Background depth gradient je vidět, nikde plné `#000000`.
- [ ] Logo má zlatou pulzaci v iniciaci, zlatá je podprahově v niti vždy, výrazně v Útulku.
- [ ] Cyan není přídavek — je strukturální (vlasky uvnitř svazku, různé intenzity per stav).
- [ ] Mobile: Zážeh proběhne za 1.6s, Útulek smoke nahrazen statickým halo s dýcháním.
- [ ] `prefers-reduced-motion: reduce` přeskočí Zážeh, zastaví dýchání aury, nahradí smoke statickou variantou.
- [ ] `sessionStorage` flag funguje — opakované otevření stránky neopakuje Zážeh.

---

## 9 · Otevřené body (na později, ne teď)

Tyto věci nejsou v tomto specu řešeny a vyžadují vlastní rozhodnutí v budoucnu:

- Beacon na hero jako vrcholový moment (oddělitelný od Zážehu? nebo součást?).
- Per-tier barevné variace (Tier 1 violet, Tier 4 zlatá?) — připraveno přes CSS variables, ale neimplementováno.
- Click-wave (sonarová vlna z bodu kliku) — globální vrstva, samostatný projekt.

---

*Dokument verze 2. Předchozí thread spec je tímto archivován.*
