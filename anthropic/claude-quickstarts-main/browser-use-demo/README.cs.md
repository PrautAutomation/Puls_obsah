# Browser Automation Demo with Claude - český přehled

Tato složka obsahuje referenční implementaci automatizace prohlížeče pomocí Claude a Playwrightu. Demo běží v Dockeru a poskytuje Streamlit rozhraní, ve kterém může uživatel zadávat úkoly a Claude ovládá prohlížeč.

## Co demo umí

- Navigovat na webové stránky.
- Číst strukturu stránky přes DOM.
- Pracovat s elementy pomocí stabilních referencí.
- Vyplňovat formuláře.
- Extrahovat text ze stránky.
- Scrollovat a vyhledávat text.
- Pořizovat screenshoty.
- Interagovat s webem přes vlastní browser tool.

## Proč je to jiné než klikání podle souřadnic

Toto demo nepoužívá pouze pixelové souřadnice. Playwright poskytuje přístup k DOM elementům a jejich vlastnostem. Díky tomu je automatizace spolehlivější:

- cílení přes `ref` lépe funguje při změně velikosti okna,
- model vidí strukturované informace o stránce,
- formuláře lze vyplňovat přímo,
- webové akce jsou přesnější než obecné ovládání desktopu.

## Spuštění

### Požadavky

- Docker.
- Docker Compose.
- Anthropic API klíč.

### Nastavení

```bash
cd browser-use-demo
cp .env.example .env
```

Do `.env` doplňte `ANTHROPIC_API_KEY`.

### Spuštění přes Docker Compose

```bash
docker-compose up --build
```

Pro vývoj s automatickou synchronizací změn:

```bash
docker-compose up --build --watch
```

## Lokální rozhraní

Po spuštění otevřete:

- hlavní UI: `http://localhost:8080`,
- NoVNC pohled na prohlížeč: `http://localhost:6080`,
- VNC: `localhost:5900`.

## Příklady promptů

V rozhraní můžete zkusit například:

- `Navigate to news.ycombinator.com and tell me the top 3 stories`
- `Visit wikipedia.org and find information about artificial intelligence`
- `Navigate to github.com and search for playwright`

U vyhledávačů jako Google může Playwright narážet na CAPTCHA. Pro výuku je lepší zadat konkrétní web a úkol.

## Bezpečnost

Automatizace prohlížeče má rizika. Model může pracovat s webovým obsahem, který obsahuje instrukce nebo škodlivý text. Nepoužívejte osobní účty, citlivé údaje, platební údaje ani produkční systémy.

Doporučení:

- spouštět demo v izolovaném prostředí,
- nepřihlašovat se do osobních účtů,
- používat allowlist domén,
- nechat člověka potvrdit akce s reálnými následky,
- studentům vysvětlit prompt injection.

## Důležité soubory

- `browser_use_demo/loop.py`: smyčka pro volání API a zpracování odpovědí.
- `browser_use_demo/streamlit.py`: chatovací UI.
- `browser_use_demo/tools/browser.py`: hlavní browser tool a definice akcí.
- `browser_use_demo/browser_tool_utils/`: JavaScript utility pro práci s DOM.

## Doporučení pro výuku

Nejdřív studentům ukažte rozdíl mezi:

- obecným computer use,
- browser automation přes DOM,
- klikáním podle souřadnic,
- cílením na element přes `ref`.

Tento quickstart je vhodný až po základním pochopení agents/tool use.
