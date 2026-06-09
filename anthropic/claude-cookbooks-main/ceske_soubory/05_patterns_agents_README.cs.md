# Cookbook: tvorba efektivnich agentu

Tato slozka obsahuje referencni implementace k clanku [Building Effective Agents](https://anthropic.com/research/building-effective-agents) od Erika Schluntze a Barryho Zhanga.

Najdete zde minimalni priklady beznych agentnich workflow, ktere jsou popsane v blogovem clanku:

- Zakladni stavebni bloky
  - retezene promptovani,
  - smerovani pozadavku,
  - paralelizace vice LLM.
- Pokrocila workflow
  - orchestrator a subagenti,
  - evaluator a optimizer.

## Jak zacit

Podrobne priklady jsou v Jupyter noteboocich:

- [Basic Workflows](basic_workflows.ipynb)
- [Evaluator-Optimizer Workflow](evaluator_optimizer.ipynb)
- [Orchestrator-Workers Workflow](orchestrator_workers.ipynb)

Pro studenty je vhodne zacit notebookem `basic_workflows.ipynb`. Nejdriv si vsimnete struktury jednotlivych kroku, teprve potom upravujte prompty a vstupni data.
