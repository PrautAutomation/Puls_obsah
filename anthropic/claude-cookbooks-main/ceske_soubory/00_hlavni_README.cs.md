# Claude Cookbooks - ceska studentska verze

Tento repozitar obsahuje prakticke ukazky a navody pro vyvojare, kteri chteji stavet aplikace s modelem Claude. Najdete zde kopirovatelne ukazky kodu, vysvetleni jednotlivych postupu a notebooky, ktere lze spoustet a upravovat pri vyuce.

Tato ceska verze je urcena hlavne pro studenty, kteri nemluvi anglicky. Technicke nazvy, kod, API parametry, nazvy knihoven a prikazy zustavaji anglicky, aby priklady zustaly funkcni a aby odpovidaly dokumentaci, chybovym hlaskam a beznym vyvojarskym nastrojum.

## Jak s repozitarem pracovat

1. Nejdrive si prectete tento soubor.
2. Potom pokracujte do tematickych slozek podle toho, co se chcete naucit.
3. V noteboocich ctete vysvetlujici texty a spoustejte kodove bunky postupne odshora dolu.
4. Pokud narazite na anglicky technicky vyraz, berte ho jako soucast vyvojarske praxe. Vysvetleni konceptu bude v ceskych verzich souboru.

## Predpoklady

Pro pouziti prikladu budete potrebovat API klic ke Claude. Ziskate ho pres Anthropic: <https://www.anthropic.com>.

Vetsina ukazek je napsana v Pythonu. Same koncepty ale muzete prenest i do jinych programovacich jazyku, pokud umi volat Claude API.

Pokud s Claude API teprve zacinat, je vhodne nejdrive projit zakladni kurz Claude API Fundamentals:
<https://github.com/anthropics/courses/tree/master/anthropic_api_fundamentals>

## Co zustava anglicky a proc

- Nazvy funkci, trid, promennych a souboru zustavaji anglicky, aby se nerozbil kod.
- API parametry a odpovedi zustavaji anglicky, protoze se musi presne shodovat s dokumentaci.
- Chybove hlasky zustavaji anglicky, protoze tak je vraceji knihovny a sluzby.
- Nektere prompty mohou zustat anglicky, pokud je jejich presne zneni soucasti ukazky.

## Doporucene poradi pro studenty

### 1. Zaklady schopnosti Claude

- [Classification](./capabilities/classification/guide.ipynb): klasifikace textu a dat pomoci Claude.
- [Retrieval Augmented Generation](./capabilities/retrieval_augmented_generation/guide.ipynb): doplneni odpovedi Claude o externi znalosti.
- [Summarization](./capabilities/summarization/guide.ipynb): shrnovani dlouhych textu a vice dokumentu.

Cesky prehled teto casti: [capabilities/README.cs.md](./capabilities/README.cs.md)

### 2. Prace s nastroji

- [Tool use](./tool_use): napojeni Claude na externi nastroje a funkce.
- [Customer service agent](./tool_use/customer_service_agent.ipynb): ukazkovy agent pro zakaznickou podporu.
- [Calculator integration](./tool_use/calculator_tool.ipynb): pripojeni kalkulacky jako nastroje.
- [SQL queries](./misc/how_to_make_sql_queries.ipynb): generovani SQL dotazu z bezneho jazyka.

### 3. Multimodalni prace

- [Vision with Claude](./multimodal): prace s obrazky a vizualnimi vstupy.
- [Getting started with images](./multimodal/getting_started_with_vision.ipynb): prvni kroky s obrazky.
- [Best practices for vision](./multimodal/best_practices_for_vision.ipynb): doporucene postupy pro vizualni ulohy.
- [Interpreting charts and graphs](./multimodal/reading_charts_graphs_powerpoints.ipynb): cteni grafu, tabulek a prezentaci.
- [Extracting content from forms](./multimodal/how_to_transcribe_text.ipynb): ziskavani textu z formularu a dokumentu.

### 4. Pokrocile techniky

- [Sub-agents](./multimodal/using_sub_agents.ipynb): pouziti mensiho modelu jako pomocneho agenta.
- [Upload PDFs to Claude](./misc/pdf_upload_summarization.ipynb): zpracovani PDF dokumentu.
- [Automated evaluations](./misc/building_evals.ipynb): automaticke vyhodnocovani promptu.
- [Enable JSON mode](./misc/how_to_enable_json_mode.ipynb): konzistentni vystup ve formatu JSON.
- [Create a moderation filter](./misc/building_moderation_filter.ipynb): filtr pro moderovani obsahu.
- [Prompt caching](./misc/prompt_caching.ipynb): efektivni cacheovani promptu.

## Dalsi zdroje

- Dokumentace Anthropic pro vyvojare: <https://docs.claude.com>
- Podpora Anthropic: <https://support.anthropic.com>
- Komunita Anthropic na Discordu: <https://www.anthropic.com/discord>

## Poznamka pro vyuku

Tento repozitar je nejvhodnejsi pouzivat jako sadu praktickych cviceni. Studentum doporucujeme nejdrive vysvetlit cil notebooku, potom spustit existujici kod a az pote menit prompty, vstupni data nebo konfiguraci. Tim se snizi riziko, ze budou resit chyby prostredi misto samotne latky.
