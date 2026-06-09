# Stav české výukové verze

Tento soubor sleduje českou studentskou vrstvu nad repozitářem `claude-quickstarts-main`.

Cílem není překládat kód ani technické identifikátory, ale vytvořit českou dokumentaci, která studentům vysvětlí účel jednotlivých quickstartů a bezpečný způsob práce s nimi.

## Hotovo

- [README.cs.md](./README.cs.md): hlavní český rozcestník.
- [agents/README.cs.md](./agents/README.cs.md): český přehled minimální agentní implementace.
- [autonomous-coding/README.cs.md](./autonomous-coding/README.cs.md): český přehled autonomního coding agenta.
- [browser-use-demo/README.cs.md](./browser-use-demo/README.cs.md): český přehled browser automation dema.
- [computer-use-demo/README.cs.md](./computer-use-demo/README.cs.md): český přehled Docker computer use dema.
- [computer-use-best-practices/README.cs.md](./computer-use-best-practices/README.cs.md): český přehled pokročilé macOS implementace.
- [customer-support-agent/README.cs.md](./customer-support-agent/README.cs.md): český přehled aplikace pro zákaznickou podporu.
- [financial-data-analyst/README.cs.md](./financial-data-analyst/README.cs.md): český přehled finančního analytika.

## Pravidla překladu

- Překládáme text určený studentům: vysvětlení, varování, návody a přehledy.
- Nepřekládáme kód, názvy funkcí, názvy proměnných, API parametry, názvy modelů, `.env` proměnné ani příkazy.
- U bezpečnostně citlivých částí přidáváme české upozornění, i když originální README už varování obsahuje.
- České kopie vytváříme vedle originálů jako `README.cs.md`.

## Další doporučené kroky

1. Přeložit Markdown buňky v `agents/agent_demo.ipynb` do `agents/agent_demo.cs.ipynb`.
2. Podle potřeby přeložit promptové texty v `autonomous-coding/prompts/`, ale jen pokud nevadí změna chování agenta.
3. Pokud se quickstarty budou používat ve výuce, vytvořit samostatný sylabus s pořadím lekcí a cvičeními.

## Inventura

Pro seznam dokumentačních souborů bez české kopie spusťte:

```bash
python3 scripts/list_czech_translation_targets.py
```
