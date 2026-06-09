# Computer and Browser Use with Claude - český přehled

Tato složka obsahuje pokročilou referenční implementaci computer/browser use agenta pro macOS. Je určená ke čtení, pochopení a úpravám, ne jako hotové produkční SDK.

## Velmi důležité bezpečnostní upozornění

Tento agent může ovládat skutečnou myš, klávesnici a obrazovku na macOS. Může pořizovat screenshoty, které se posílají do API, otevírat aplikace, psát text, klikat a měnit data.

Spouštění mimo virtuální mašinu se důrazně nedoporučuje.

Pro výuku používejte jednorázovou macOS VM, například přes UTM nebo Parallels. Nepoužívejte osobní účty, hesla, citlivé dokumenty ani produkční prostředí.

## Co tato implementace ukazuje

- Explicitně definované computer/browser tools.
- Správné škálování screenshotů a souřadnic.
- Dávkové nástroje `computer_batch` a `browser_batch`.
- Sandboxovaný `bash` a `python` přes `sandbox-exec`.
- Záznam trajektorie běhu do `runs/`.
- Streamlit viewer pro zpětné prohlížení běhů.
- FastAPI debug panel pro ruční testování nástrojů.

## Platforma

Tento quickstart cílí pouze na macOS. Používá macOS specifické vlastnosti jako:

- `pyautogui`,
- `sandbox-exec`,
- oprávnění Screen Recording,
- oprávnění Accessibility.

Pokud chcete kontejnerovou variantu, použijte `computer-use-demo`. Pokud chcete pouze prohlížeč, použijte `browser-use-demo`.

## Rychlý start

Nejprve si přečtěte bezpečnostní upozornění výše.

```bash
python -m pip install -r requirements.txt
python -m playwright install chromium
echo "ANTHROPIC_API_KEY=<YOUR API KEY HERE>" > .env
python -m computer_use "open TextEdit and type hello world"
```

Tento příkaz může hýbat skutečnou myší a psát na skutečné klávesnici.

## Instalace

Vyžaduje Python 3.11 nebo novější. Python dodávaný s macOS bývá starší a nemusí fungovat.

```bash
python3.13 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m playwright install chromium
```

Alternativně s `uv`:

```bash
uv sync
uv run playwright install chromium
```

## Oprávnění v macOS

Terminál musí mít oprávnění:

- Screen Recording pro screenshoty,
- Accessibility pro ovládání myši a klávesnice.

Po změně oprávnění terminál ukončete a znovu otevřete.

## Spuštění agenta

```bash
python -m computer_use "open TextEdit and type hello world"
```

Příklad pouze pro browser tool bez computer use:

```bash
CU_ENABLE_COMPUTER_USE_TOOLS=false python -m computer_use \
  "Navigate to https://en.wikipedia.org/wiki/Special:Random three times, \
   take a screenshot each time, then summarize what you saw."
```

## Zobrazení trajektorie

```bash
python -m streamlit run dev_ui/trajectory_viewer/app.py
```

Viewer ukáže záznam běhu: zprávy uživatele, uvažování asistenta, volání nástrojů, výsledky nástrojů a screenshoty.

## Další demo nástroje

Localization demo:

```bash
python -m uvicorn dev_ui.localization_demo.server:app --reload --port 8001
```

Tool panel:

```bash
python -m uvicorn dev_ui.tool_panel.server:app --reload
```

## Doporučení pro výuku

Tento quickstart nechte až na konec. Je technicky nejzajímavější, ale také nejrizikovější. Studenti by před ním měli rozumět:

- agent loop,
- tool use,
- práci se screenshoty,
- škálování souřadnic,
- prompt injection,
- sandboxování.
