# Anthropic courses - ceska studentska verze

Tento repozitar obsahuje vyukove kurzy Anthropic. Je to nejvice kurzove orientovana slozka z cele sady materialu: misto hotovych aplikaci zde najdete lekce, notebooky, cviceni a postupne navazujici kapitoly.

Ceska verze je urcena studentum, kteri nemluvi anglicky. Technicke nazvy, kod, API parametry, nazvy modelu, promenne prostredi a prikazy zustavaji anglicky, aby notebooky a priklady zustaly funkcni.

## Doporucene poradi kurzu

1. [Anthropic API fundamentals](./anthropic_api_fundamentals/README.cs.md)  
   Zaklady prace s Claude SDK a Anthropic API: API klic, format zprav, modely, parametry, streaming a vision.

2. [Prompt engineering interactive tutorial](./prompt_engineering_interactive_tutorial/README.cs.md)  
   Interaktivni kurz prompt engineeringu od zakladu po pokrocile techniky.

3. [Real world prompting](./real_world_prompting/README.cs.md)  
   Prakticke zapojeni promptovacich technik do slozitejsich realnych promptu.

4. [Prompt evaluations](./prompt_evaluations/README.cs.md)  
   Jak hodnotit kvalitu promptu a stavet evaluace pro produkcni workflow.

5. [Tool use](./tool_use/README.cs.md)  
   Jak naucit Claude pouzivat externi nastroje, strukturovane vystupy a vice nastroju v jednom workflow.

## Co je v teto slozce

- `anthropic_api_fundamentals/`: uvod do Claude API a SDK.
- `prompt_engineering_interactive_tutorial/`: hlavni kurz prompt engineeringu s mnoha cvicenimi.
- `real_world_prompting/`: realnejsi promptovaci scenare.
- `prompt_evaluations/`: evaluace promptu, vcetne Workbench, code-graded evals a promptfoo.
- `tool_use/`: pouzivani nastroju s Claude.

## Jak s tim pracovat ve vyuce

Nejlepsi postup je jit po kurzech v poradi uvedenem vyse. U kazdeho kurzu nejdrive projdete cesky README soubor, potom otevrite prvni notebook a spoustejte bunky postupne odshora dolu.

Pokud studenti teprve zacinaji, nezacinejte prompt evaluations ani tool use. Nejdrive potrebuji rozumet zakladum API, formatu zprav a zakladnim promptovacim technikam.

## Poznamka k nakladum

Kurzy casto pouzivaji levnejsi modely, aby byly API naklady pro studenty nizsi. Technicky lze pouzit i jine modely Claude, ale pro vyuku je vhodne nejdrive ponechat vychozi nastaveni.

## Co zustava anglicky

- kod v noteboocich,
- nazvy funkci a promennych,
- API parametry,
- model IDs,
- prikazy v terminalu,
- nazvy souboru,
- nektere prompty, pokud je jejich presne zneni soucasti cviceni.
