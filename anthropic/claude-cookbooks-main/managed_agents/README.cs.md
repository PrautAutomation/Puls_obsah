# Claude Managed Agents cookbooks

Claude Managed Agents je hostovane prostredi od Anthropic pro stavove agenty, kteri pouzivaji nastroje. Agenta a jeho sandboxovane prostredi definujete jednou a potom je spoustite v relacich, ktere si mezi jednotlivymi kroky pamatuji soubory, stav nastroju a konverzaci. Tyto tutorialy ukazuji cely postup od zacatku do konce.

## Aplikovane cookbooky

- **[data_analyst_agent.ipynb](data_analyst_agent.ipynb)** vytvari analytika, ktery vezme CSV soubor a vytvori z nej narativni HTML report pomoci `pandas` a `plotly`. V notebooku nastavite prostredi a agenta, pripojite dataset, budete streamovat beh a stahnete vygenerovane artefakty.

- **[slack_data_bot.ipynb](slack_data_bot.ipynb)** zabali stejneho agenta do Slack bota. Kdyz ho ve Slacku zminite a prilozite CSV, vrati report primo ve vlakne. Dalsi odpovedi pokracuji ve stejne relaci.

- **[sre_incident_responder.ipynb](sre_incident_responder.ipynb)** zapojuje Managed Agents do on-call procesu. Pager alert spusti relaci, agent incident prozkouma a otevre pull request, potom se zastavi a ceka na lidske schvaleni pred mergem. Notebook ukazuje webhook pro alerty, pripojeni Skillu a vlastnich nastroju i kontrolu celeho behu v Console.

## Vedene tutorialy

Tyto tutorialy uci rozhrani Managed Agents API na realistickych workflow. Neni nutne je cist presne v poradi, ale `CMA_iterate_fix_failing_tests.ipynb` je dobry vstupni bod, protoze predstavuje vsechny hlavni tvary API, na kterych ostatni notebooky stavi.

| Notebook | Co uci |
|----------|--------|
| [`CMA_iterate_fix_failing_tests.ipynb`](CMA_iterate_fix_failing_tests.ipynb) | Smycka udelej, pozoruj, oprav nad padajici sadou testu. Predstavuje agenta, prostredi, relaci, pripojeni souboru a streamovaci event loop na prikladu opravy chybneho balicku. |
| [`CMA_orchestrate_issue_to_pr.ipynb`](CMA_orchestrate_issue_to_pr.ipynb) | Workflow issue, oprava, pull request, CI, review a merge pres mock `gh` CLI. Ukazuje vicekolove rizeni, zotaveni z chyby CI a reakci na review komentar. Bocni vysvetleni ukazuje, jak vymenit file mount za `github_repository` resource proti realnemu repozitari. |
| [`CMA_explore_unfamiliar_codebase.ipynb`](CMA_explore_unfamiliar_codebase.ipynb) | Orientace v neznamem codebase vcetne nastrazene pasti se zastaralou dokumentaci. Ukazuje pridavani resources do bezici relace pres `sessions.resources.add`. |
| [`CMA_gate_human_in_the_loop.ipynb`](CMA_gate_human_in_the_loop.ipynb) | Schvalovani vydaju clovekem v procesu pomoci vlastnich nastroju `decide()` a `escalate()`. Pokryva round-trip pattern pro custom tools, stav `requires_action` a deduplikaci paralelnich volani nastroju. |
| [`CMA_prompt_versioning_and_rollback.ipynb`](CMA_prompt_versioning_and_rollback.ipynb) | Server-side verzovani promptu: vytvoreni v1, vyhodnoceni na oznacene testovaci sade, nasazeni v2, detekce regrese a rollback pripnutim relaci na verzi 1. |
| [`CMA_operate_in_production.ipynb`](CMA_operate_in_production.ipynb) | Produkcni nastaveni: MCP toolsets, vaulty pro prihlasovaci udaje koncovych uzivatelu, webhook pattern `session.status_idled` pro human-in-the-loop bez dlouho bezicich spojeni a CRUD zivotni cyklus resources. |
| [`CMA_remember_user_preferences.ipynb`](CMA_remember_user_preferences.ipynb) | Memory stores: nakupni agent se v jedne relaci nauci preference zakaznika a v dalsi si je vybavi. Ukazuje `memory_stores.create`, pripojeni `resources`, instrukce pro jednotliva pripojeni a kombinaci zapisovatelne pameti pro zakaznika s read-only pameti znacky. |
| [`CMA_coordinate_specialist_team.ipynb`](CMA_coordinate_specialist_team.ipynb) | Heterogenni tym pres konfiguraci koordinatora `multiagent`: koordinator spousti tri specialisty s omezenymi sadami nastroju a sklada obchodni nabidku. |
| [`CMA_verify_with_outcome_grader.ipynb`](CMA_verify_with_outcome_grader.ipynb) | Smycka grade-and-revise s Outcomes: autor napise citovany research brief, bezstavovy grader zkontroluje URL a citace podle rubriky a zpetna vazba vede k revizim, dokud brief neprojde. |

Streamovaci event loop je v notebooku `CMA_iterate_fix_failing_tests.ipynb` vysvetleny radek po radku a potom vyclenen do `utilities.stream_until_end_turn`, aby ho ostatni notebooky mohly importovat. Vyjimkou je gate notebook, ktery nechava smycku primo v notebooku, protoze agenti s custom tools musi krome `end_turn` obsluhovat i stavy `requires_action`.

## Jak zacit

Nastavte `ANTHROPIC_API_KEY` ve svem prostredi, otevrete `data_analyst_agent.ipynb` v Jupyteru a spoustejte bunky shora dolu. Kazdy notebook instaluje vlastni zavislosti a vyzada si prihlasovaci udaje, ktere potrebuje.

Notebook `CMA_orchestrate_issue_to_pr.ipynb` a priklad s vault-backed MCP v `CMA_operate_in_production.ipynb` navic potrebuji `GITHUB_TOKEN`. Staci fine-grained personal access token s opravnenim pro cteni public repozitaru.

Vsechna ukazkova data pro cookbooky jsou ve slozce `example_data/`. Mapu adresaru najdete v [`example_data/OVERVIEW.md`](example_data/OVERVIEW.md).

## Doporuceni pro studenty

Pro prvni pruchod doporucujeme:

1. `data_analyst_agent.ipynb`
2. `CMA_iterate_fix_failing_tests.ipynb`
3. `CMA_explore_unfamiliar_codebase.ipynb`
4. `CMA_gate_human_in_the_loop.ipynb`

Ostatni notebooky jsou vhodne az pote, co studenti rozumi relacim, prostredim, streamovani udalosti a pripojovani nastroju.
