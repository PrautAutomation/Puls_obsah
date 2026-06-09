# Promptfoo model-graded evals - cesky prehled

Tato lekce ukazuje evaluace, kde vystup modelu hodnoti jiny model. Tento pristup se hodi pro ulohy, kde kvalita odpovedi nejde snadno overit jednoduchym kodem.

## Spusteni

Nejdrive nastavte promennou prostredi `ANTHROPIC_API_KEY`.

Potom spustte:

```bash
promptfoo eval
```

Vysledky zobrazite prikazem:

```bash
promptfoo view
```

## Poznamka pro studenty

Model-graded evaluace jsou silne, ale nejsou dokonale. Je potreba dobre napsat hodnotici instrukce a u dulezitych pripadu overovat, jestli hodnotici model posuzuje odpovedi konzistentne.
