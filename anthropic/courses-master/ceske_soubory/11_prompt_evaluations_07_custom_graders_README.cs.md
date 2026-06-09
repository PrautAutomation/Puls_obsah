# Promptfoo custom graders - cesky prehled

Tato lekce ukazuje, jak v `promptfoo` vytvaret vlastni gradery. Vlastni grader je kod, ktery rozhoduje, jestli odpoved modelu splnila pozadovana pravidla.

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

Vlastni gradery jsou uzitecne, kdyz nestaci jednoduche porovnani textu. Muzete v nich kontrolovat format, pocet polozek, pritomnost klicovych informaci nebo domenova pravidla.
