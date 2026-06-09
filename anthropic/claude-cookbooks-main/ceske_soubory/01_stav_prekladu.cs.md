# Stav ceske vyukove verze

Tento soubor sleduje ceskou studentskou vrstvu nad repozitarem. Cilem neni rozbit funkcni kod prekladem technickych identifikatoru, ale vytvorit ceske vstupy a postupne prelozit vysvetlujici obsah.

## Hotovo

- [README.cs.md](./README.cs.md): hlavni cesky rozcestnik pro studenty.
- [capabilities/README.cs.md](./capabilities/README.cs.md): cesky prehled schopnosti Claude.
- [patterns/agents/README.cs.md](./patterns/agents/README.cs.md): cesky prehled agentnich patternu.
- [managed_agents/README.cs.md](./managed_agents/README.cs.md): cesky prehled Managed Agents notebooku.
- [claude_agent_sdk/README.cs.md](./claude_agent_sdk/README.cs.md): cesky prehled Claude Agent SDK tutorialu.
- [skills/README.cs.md](./skills/README.cs.md): cesky prehled Claude Skills cookbooku.
- [scripts/list_czech_translation_targets.py](./scripts/list_czech_translation_targets.py): inventura dokumentu a notebooku bez ceske kopie.

## Pravidla prekladu

- Prekladame text urceny studentum: nadpisy, vysvetleni, zadani, poznamky a komentare.
- Neprekladame nazvy funkci, trid, promennych, souboru, API parametry, model IDs, prikazy a konfiguracni hodnoty.
- U notebooku prekladame hlavne Markdown bunky. Kodove bunky zustavaji funkcni.
- Pokud prompt musi presne odpovidat anglicke ukazce, nechavame ho anglicky a pridame ceske vysvetleni.
- Ceske soubory vytvarime vedle puvodnich souboru s priponou `.cs`, napr. `README.cs.md`.

## Doporucene dalsi kroky

1. Prelozit README soubory v jednotlivych podslozkach `capabilities/*/README.md`.
2. Prelozit Markdown bunky v zakladnich noteboocich:
   - `capabilities/classification/guide.ipynb`
   - `capabilities/summarization/guide.ipynb`
   - `capabilities/retrieval_augmented_generation/guide.ipynb`
   - `multimodal/getting_started_with_vision.ipynb`
   - `tool_use/calculator_tool.ipynb`
3. Potom pokracovat pokrocilymi notebooky podle vyukoveho planu.

Pro aktualni seznam souboru bez ceske kopie spustte:

```bash
python3 scripts/list_czech_translation_targets.py
```

## Poznamka k rozsahu

Repozitar obsahuje stovky souboru vcetne kodu, dat, obrazku a PDF. Pro studenty je nejprinosnejsi prekladat vyukovou vrstvu, tedy dokumentaci a vysvetlujici casti notebooku, ne vsechny podpurne technicke soubory.
