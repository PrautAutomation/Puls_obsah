# Prompt evaluations - cesky prehled

Tento kurz uci, jak vyhodnocovat kvalitu promptu a odpovedi modelu. Je dulezity pro kazdeho, kdo chce pouzivat Claude v produkcnich nebo opakovatelnych workflow.

## Proc jsou evaluace dulezite

Bez evaluaci se prompt casto ladi pocitove. To je pro male demo v poradku, ale pro realnou aplikaci potrebujete vedet, jestli zmena promptu vysledek zlepsila nebo zhorsila.

Evaluace pomahaji:

- merit kvalitu vystupu,
- porovnavat verze promptu,
- odhalovat regrese,
- automatizovat testovani,
- rozhodovat na zaklade dat, ne dojmu.

## Lekce

1. [Evaluations 101](./01_intro_to_evals/01_intro_to_evals.ipynb)  
   Zaklady evaluaci a dulezite pojmy.

2. [Writing human-graded evals with Anthropic's Workbench](./02_workbench_evals/02_workbench_evals.ipynb)  
   Evaluace hodnocene clovekem ve Workbench.

3. [Writing simple code-graded evals](./03_code_graded_evals/03_code_graded.ipynb)  
   Jednoduche evaluace hodnocene kodem.

4. [Writing a classification eval](./04_code_graded_classification_evals/04_code_graded_classification_evals.ipynb)  
   Evaluace klasifikacnich uloh.

5. [Promptfoo for evals: an introduction](./05_prompt_foo_code_graded_animals/lesson.ipynb)  
   Uvod do promptfoo pro evaluace.

6. [Writing classification evals with promptfoo](./06_prompt_foo_code_graded_classification/lesson.ipynb)  
   Klasifikacni evaluace v promptfoo.

7. [Custom graders with promptfoo](./07_prompt_foo_custom_graders/lesson.ipynb)  
   Vlastni gradery.

8. [Model-graded evals with promptfoo](./08_prompt_foo_model_graded/lesson.ipynb)  
   Evaluace, kde hodnoti model.

9. [Custom model-graded evals with promptfoo](./09_custom_model_graded_prompt_foo/lesson.ipynb)  
   Vlastni model-graded evaluace.

## Doporuceni pro vyuku

Zacnete lekci `Evaluations 101`. Nepreskakujte ji, protoze dalsi lekce stavi na zakladnich pojmech. Pro studenty je dulezite pochopit rozdil mezi human-graded, code-graded a model-graded evaluaci.
