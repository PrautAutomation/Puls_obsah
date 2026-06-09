# Prehled obsahu Anthropic materialu v cestine

Tento dokument je hlavni cesky katalog pro praci s obsahem ve slozce `/Users/terezabrittasvanda/Desktop/anthropic`.

Je urceny pro dalsi praci ve VS Code, Claude Desktop nebo jinem nastroji: rychle vysvetluje, co jednotlive slozky obsahuji, co je prelozene, k cemu materialy slouzi a jak je lze spojit s dalsim existujicim obsahem.

## Rychle shrnuti

V teto slozce jsou ctyri hlavni baliky materialu:

1. `claude-cookbooks-main` - prakticke technicke kucharky a priklady pro praci s Claudem.
2. `claude-quickstarts-main` - hotove startovni projekty a aplikacni sablony.
3. `courses-master` - nejvetsi vyukovy balicek s kurzy, notebooky a lekcemi.
4. `prompt-eng-interactive-tutorial-master` - samostatny interaktivni kurz prompt engineeringu.

Kazda slozka ma vlastni ceske soubory a vlastni slozku `ceske_soubory`, ktera obsahuje ploche kopie ceskych materialu pro snadne predani studentum nebo nahrani do dalsiho nastroje.

## Stav ceskych materialu

| Slozka | Ceske soubory celkem vcetne `ceske_soubory` | Soubory v `ceske_soubory` | Stav |
|---|---:|---:|---|
| `claude-cookbooks-main` | 14 | 7 | Ceska vstupni vrstva a vybrane hlavni prehledy |
| `claude-quickstarts-main` | 18 | 9 | Ceska vrstva pro quickstart projekty |
| `courses-master` | 178 | 89 | Kompletni ceske kopie vyukovych casti podle inventury |
| `prompt-eng-interactive-tutorial-master` | 90 | 45 | Samostatna ceska kopie interaktivniho prompt engineering kurzu |

Poznamka: cislo „ceske soubory celkem“ zahrnuje i kopie ulozene ve slozce `ceske_soubory`. Pro predani studentum je obvykle nejjednodussi pouzit prave `ceske_soubory`.

## 1. `claude-cookbooks-main`

### Co to je

Slozka `claude-cookbooks-main` obsahuje prakticke priklady, notebooky a technicke navody pro praci s Claude API a souvisejicimi schopnostmi. Je to spis knihovna receptu nez linearní kurz.

Typicky obsahuje ukazky pro:

- tool use,
- multimodalni vstupy,
- agentni vzory,
- evaluace nastroju,
- observability,
- fine-tuning,
- praci s Claude Agent SDK,
- managed agents,
- skills,
- ruzne pokrocile techniky.

### Co je prelozene

Vytvorena je ceska orientacni vrstva:

- `README.cs.md`,
- `TRANSLATION_STATUS.cs.md`,
- vybrane ceske README/prehlady v dulezitych podslozkach,
- `ceske_soubory` se 7 soubory.

### K cemu slouzi

Tento balicek je vhodny jako zdroj praktickych ukazek pro pokrocilejsi cast vyuky. Neni idealni jako prvni kurz pro zacatecniky; lepe funguje jako doplnkova knihovna, do ktere se sahne ve chvili, kdy student uz rozumi zakladum promptingu, API a tool use.

### Jak ho spojit s dalsim obsahem

Doporuceni:

- pouzit jako „prakticke laboratore“ k teoretickym lekcim,
- vybrat jen relevantni recepty podle tematu kurzu,
- navazat na `courses-master/tool_use` a `courses-master/anthropic_api_fundamentals`,
- pro kazdy vybrany cookbook vytvorit kratky cesky ukol: cil, vstupy, vystupy, co si ma student overit.

## 2. `claude-quickstarts-main`

### Co to je

Slozka `claude-quickstarts-main` obsahuje hotove startovni projekty a aplikacni sablony. Na rozdil od cookbooks nejde jen o jednotlive priklady, ale o cele mini-aplikace nebo demo projekty.

Hlavni oblasti:

- zakaznicka podpora,
- agenti,
- autonomous coding,
- analyza financnich dat,
- computer use demo,
- browser use demo,
- best practices pro computer use.

### Co je prelozene

Vytvorena je ceska orientacni vrstva:

- hlavni `README.cs.md`,
- `TRANSLATION_STATUS.cs.md`,
- ceske README soubory pro jednotlive quickstart projekty,
- `ceske_soubory` s 9 soubory.

### K cemu slouzi

Tento balicek je vhodny pro navazujici praktickou cast: studenti nebo tym si mohou vzit hotovy projekt a upravit ho pro vlastni use case. Je vhodny pro workshop typu „od konceptu k prototypu“.

### Jak ho spojit s dalsim obsahem

Doporuceni:

- po absolvovani zakladu z `courses-master` vybrat jeden quickstart jako zaverecny projekt,
- propojit s internimi daty, dokumentaci nebo procesem,
- pouzit jako sablonu pro vlastni aplikaci,
- nechat studenty porovnat: co resi prompt, co resi aplikacni logika, co resi integrace.

## 3. `courses-master`

### Co to je

`courses-master` je nejvetsi a nejucelenejsi vyukovy balicek. Obsahuje vice samostatnych kurzu a notebooku, ktere se daji pouzit jako strukturovany studijni program.

Hlavni casti:

- `anthropic_api_fundamentals` - zaklady Anthropic API,
- `prompt_engineering_interactive_tutorial` - interaktivni kurz prompt engineeringu,
- `prompt_evaluations` - evaluace promptu a vystupu modelu,
- `real_world_prompting` - prakticky prompt engineering na realistickych ulohach,
- `tool_use` - pouzivani nastroju s Claudem.

### Co je prelozene

Tato slozka ma kompletni ceske kopie vyukovych casti podle inventury:

- hlavni `README.cs.md`,
- `TRANSLATION_STATUS.cs.md`,
- ceske README soubory pro kurzy,
- ceske kopie notebooku `.cs.ipynb`,
- ceske studentske kopie clanku v prompt evaluations,
- `ceske_soubory` s 89 soubory.

Pri kontrole bylo potvrzeno:

- inventura chybějících ceskych kopii byla 0,
- ceske notebooky jsou validni JSON,
- kodove bunky zustaly shodne s originaly.

### K cemu slouzi

Toto je nejlepsi kandidat na hlavni cesky kurz. Obsahuje prirozenou cestu od zakladu API pres prompt engineering az k evaluacim, real-world promptingu a tool use.

### Doporucene poradi studia

1. `anthropic_api_fundamentals` - pochopit API, messages format, modely, parametry, streaming a vision.
2. `prompt_engineering_interactive_tutorial/Anthropic 1P` - naucit se zaklady prompt engineeringu.
3. `real_world_prompting` - prenest techniky na prakticke scenare.
4. `prompt_evaluations` - naucit se merit kvalitu promptu a vystupu.
5. `tool_use` - naucit Claude spolupracovat s vlastnimi funkcemi a externimi nastroji.
6. Volitelne: `prompt_engineering_interactive_tutorial/AmazonBedrock` - pokud cilite na AWS Bedrock.

### Jak ho spojit s dalsim obsahem

Doporuceni:

- pouzit jako hlavni kostru kurzu,
- z vasich existujicich materialu doplnit oborove priklady,
- kazdou lekci uzavrit vlastnim cvicenim na vasich datech,
- u evaluaci pridat vase vlastni hodnotici kriteria,
- u tool use napojit nastroje na vase realne workflow.

## 4. `prompt-eng-interactive-tutorial-master`

### Co to je

Toto je samostatny repozitar obsahujici pouze interaktivni prompt engineering tutorial. Obsahove se prekryva s casti `courses-master/prompt_engineering_interactive_tutorial`, ale je oddeleny jako vlastni slozka.

Obsahuje:

- `Anthropic 1P` - varianta pro prime Anthropic API,
- `AmazonBedrock/anthropic` - Bedrock varianta pres Anthropic SDK,
- `AmazonBedrock/boto3` - Bedrock varianta pres boto3,
- README a pomocne soubory.

### Co je prelozene

Vytvorena je samostatna ceska verze primo v teto slozce:

- 45 ceskych souboru vedle originalu,
- 41 ceskych notebooku,
- `README.cs.md`,
- `AmazonBedrock/README.cs.md`,
- `AmazonBedrock/CONTRIBUTING.cs.md`,
- `TRANSLATION_STATUS.cs.md`,
- `ceske_soubory` se 45 soubory.

Pri kontrole bylo potvrzeno:

- 41 ceskych notebooku je validnich,
- kodove bunky se shoduji s lokalnimi originaly,
- chybejici ceske kopie: 0.

### K cemu slouzi

Tato slozka je vhodna, pokud chcete studentum predat jen samostatny prompt engineering tutorial bez zbytku `courses-master`. Je kompaktnejsi a snazsi na sdileni, ale neobsahuje sirsi kurzy API fundamentals, evaluace, real-world prompting a tool use mimo tutorialove prilohy.

### Jak ho spojit s dalsim obsahem

Doporuceni:

- pouzit jako samostatny modul „Prompt engineering pro Claude“,
- nechat jej jako kratší kurz nebo workshop,
- pokud uz pouzivate `courses-master`, brat tuto slozku jako duplicitni/samostatnou distribucni variantu,
- pri spojovani obsahu vybrat bud tuto slozku, nebo `courses-master/prompt_engineering_interactive_tutorial`, ne obe najednou.

## Jak s tim pracovat ve VS Code

Nejjednodussi workflow:

1. Otevrit ve VS Code slozku `/Users/terezabrittasvanda/Desktop/anthropic`.
2. Tento soubor `00_PREHLED_OBSAHU_CZ.md` pouzivat jako mapu celeho obsahu.
3. Pri praci se studenty otevirat hlavne slozky `ceske_soubory`.
4. Pokud chcete upravovat notebooky, pracovat s `.cs.ipynb` soubory vedle originalu.
5. Originaly ponechat jako referenci a nemenit je.

Doporucena struktura pro dalsi praci:

- `00_PREHLED_OBSAHU_CZ.md` - master katalog,
- `README.cs.md` - cesky vstup do konkretni slozky,
- `TRANSLATION_STATUS.cs.md` - stav prekladu a pravidla,
- `ceske_soubory/` - materialy pro rychle predani nebo nahrani do jineho nastroje.

## Jak s tim pracovat v Claude Desktop

Prakticky postup:

1. Do Claude Desktop nahrajte tento soubor `00_PREHLED_OBSAHU_CZ.md`.
2. Podle potreby pridejte konkretni `README.cs.md` nebo `TRANSLATION_STATUS.cs.md` z vybrane slozky.
3. Pokud chcete pracovat s obsahem lekci, pridejte relevantni soubory z `ceske_soubory`.
4. Claude pozadejte o jednu konkretni transformaci obsahu, napr. osnovu, sylabus, spojeni s vasimi materialy, testove otazky nebo workshop plan.

Ukazkovy prompt pro Claude Desktop:

```text
Tady je katalog ceskych Anthropic materialu a souvisejici vyukove soubory. Chci z nich vytvorit jednotny kurz pro ceske studenty a propojit ho s nasimi existujicimi materialy. Navrhni osnovu kurzu, doporucene poradi lekci, duplicity ke slouceni a mista, kam doplnit nase vlastni priklady.
```

Dalsi uzitecne prompty:

```text
Z techto materialu vyber zakladni cestu pro zacatecniky na 6 tydnu. U kazdeho tydne navrhni cil, povinne soubory, prakticky ukol a vystup studenta.
```

```text
Porovnej obsah nasich materialu s timto katalogem a navrhni, co sloucit, co vynechat a co pouzit jako rozsirujici lekce.
```

```text
Z vybranych ceskych notebooku vytvor lektorskou pripravu: cile lekce, vysvetleni pojmu, demo, cviceni a kontrolni otazky.
```

## Jak spojovat s jinym obsahem

Nejjednodussi metoda je vytvorit mapu temat. Pro kazdy vas existujici material doplnte:

- tema,
- cilova skupina,
- uroven obtiznosti,
- navazujici slozka/soubor z Anthropic materialu,
- co se ma pouzit jako teorie,
- co se ma pouzit jako prakticke cviceni,
- co je duplicitni a muze se vynechat.

Doporucena tematicka mapa:

| Tema | Hlavni zdroj | Doplnkovy zdroj |
|---|---|---|
| Zaklady Claude API | `courses-master/anthropic_api_fundamentals` | `claude-cookbooks-main` vybrane recepty |
| Zaklady prompt engineeringu | `courses-master/prompt_engineering_interactive_tutorial` | `prompt-eng-interactive-tutorial-master` jako samostatna varianta |
| Prakticky prompting | `courses-master/real_world_prompting` | vase oborove priklady |
| Evaluace promptu | `courses-master/prompt_evaluations` | vlastni hodnotici rubriky a testovaci data |
| Tool use | `courses-master/tool_use` | `claude-cookbooks-main/tool_use` |
| Aplikacni prototypy | `claude-quickstarts-main` | vase produktove nebo firemni scenare |
| Agenti a pokrocile workflow | `claude-cookbooks-main/managed_agents`, `claude_agent_sdk`, `skills` | quickstarts s agenty |

## Doporuceny dalsi krok

Pokud chcete obsah opravdu spojit s vasimi existujicimi materialy, doporuceny dalsi vystup je jeden z techto souboru:

1. `01_SYLABUS_CESKY_KURZ_AI.md` - jednotna osnova kurzu.
2. `02_MAPA_DUPLICIT_A_NAVAZNOSTI.md` - co se opakuje, co sloucit, co vynechat.
3. `03_VYUKOVE_MODULY.md` - prehled modulu, lekci, cviceni a vystupu.
4. `04_PROMPTY_PRO_CLAUDE_DESKTOP.md` - sada hotovych promptu pro dalsi praci s materialy.

Nejpragmatictejsi poradi je:

1. nejdriv vytvorit sylabus,
2. potom mapu duplicit,
3. potom lektorske pripravy pro jednotlive moduly,
4. nakonec studentske pracovni listy a cviceni.
