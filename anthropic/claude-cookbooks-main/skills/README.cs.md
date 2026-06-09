# Claude Skills Cookbook - cesky prehled

Tato slozka je prakticky pruvodce funkci Claude Skills. Ukazuje, jak Claude pouzivat pro tvorbu dokumentu, analyzu dat a automatizaci obchodnich procesu. Najdete zde vestavene skills pro Excel, PowerPoint, PDF a Word i priklady vlastnich skills pro specializovana workflow.

Skills si muzete predstavit jako balicky instrukci, kodu a zdroju, ktere Claude dynamicky nacte, kdyz potrebuje specializovanou schopnost.

## Co jsou Skills

Skills jsou organizovane balicky, ktere mohou obsahovat:

- instrukce pro Claude,
- spustitelny kod,
- sablony,
- datove soubory,
- pomocne zdroje.

Diky nim muze Claude napriklad:

- vytvaret profesionalni dokumenty v Excelu, PowerPointu, PDF nebo Wordu,
- analyzovat data a delat vizualizace,
- dodrzovat firemni workflow a brand pravidla,
- automatizovat obchodni procesy s domenovou znalosti.

## Co se studenti nauci

- Jak Skills funguji a kdy se vyplati je pouzit.
- Jak nastavit Anthropic API pro praci se Skills.
- Jak vytvorit Excel, PowerPoint a PDF pomoci Claude.
- Jak stahovat vygenerovane soubory pres Files API.
- Jak navrhovat vlastni skills pro konkretni workflow.
- Jak myslet na bezpecnost, opakovatelnost a praci se soubory.

## Struktura notebooku

### [Notebook 1: Introduction to Skills](notebooks/01_skills_introduction.ipynb)

Zakladni uvod do Claude Skills.

Temata:

- architektura Skills,
- nastaveni API s beta headers,
- vytvoreni prvni Excel tabulky,
- generovani PowerPoint prezentace,
- export do PDF.

### [Notebook 2: Financial Applications](notebooks/02_skills_financial_applications.ipynb)

Prakticke obchodni priklady s financnimi daty.

Temata:

- financni dashboardy s grafy a pivot tables,
- analyza portfolia a investicni reporting,
- workflow CSV -> Excel -> PowerPoint -> PDF,
- strategie pro optimalizaci tokenu.

### [Notebook 3: Custom Skills Development](notebooks/03_skills_custom_development.ipynb)

Tvorba vlastnich specializovanych skills.

Temata:

- kalkulacka financnich ukazatelu,
- skill pro firemni brand guidelines,
- pokrocila sada pro financni modelovani,
- dobre postupy a bezpecnostni uvahy.

## Rychly start

### Predpoklady

- Python 3.8 nebo novejsi.
- Anthropic API klic: <https://console.anthropic.com/>.
- Jupyter Notebook nebo JupyterLab.

### Instalace

```bash
git clone https://github.com/anthropics/claude-cookbooks.git
cd claude-cookbooks/skills
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
jupyter notebook
```

Na Windows se virtualni prostredi aktivuje takto:

```bash
venv\Scripts\activate
```

Do souboru `.env` doplnte `ANTHROPIC_API_KEY`.

## Ukazkova data

Slozka `sample_data/` obsahuje realisticka financni data:

- `financial_statements.csv`: ctvrtletni P&L, rozvaha a cash flow.
- `portfolio_holdings.json`: investicni portfolio s metrikami vykonu.
- `budget_template.csv`: rozpocet oddeleni s analyzou odchylek.
- `quarterly_metrics.json`: KPI a provozni metriky.

## Konfigurace API

Skills vyzaduji specificke beta headers. Notebooky je nastavuji automaticky, ale princip vypada takto:

```python
from anthropic import Anthropic

client = Anthropic(
    api_key="your-api-key",
    default_headers={
        "anthropic-beta": "code-execution-2025-08-25,files-api-2025-04-14,skills-2025-10-02"
    }
)
```

Poznamka: hodnoty beta headers neprekladejte ani neupravujte, pokud k tomu neni duvod v aktualni dokumentaci.

## Prace s vygenerovanymi soubory

Kdyz Skills vytvori dokument, napriklad Excel, PowerPoint nebo PDF, odpoved obvykle obsahuje `file_id`. Samotny obsah souboru se potom stahuje pres Files API.

Zakladni postup:

1. Skill vytvori soubor behem code execution.
2. Odpoved obsahuje `file_id`.
3. Pomoci Files API stahnete obsah souboru.
4. Soubor ulozite lokalne, typicky do slozky `outputs/`.

Vsechny notebooky obsahuji pomocne funkce pro stahovani souboru. Pri opakovanem spousteni bunek se soubory mohou prepsat.

## Vestavene Skills

| Skill | ID | K cemu slouzi |
| ----- | -- | ------------- |
| Excel | `xlsx` | Tvorba a upravy Excel workbooku, vcetne vzorcu, grafu a formatovani. |
| PowerPoint | `pptx` | Generovani prezentaci se slidy, grafy a prechody. |
| PDF | `pdf` | Tvorba formatovanych PDF dokumentu s textem, tabulkami a obrazky. |
| Word | `docx` | Generovani Word dokumentu se strukturou a formatovanim. |

## Vlastni Skills

Vlastni skill ma typicky tuto strukturu:

```text
my_skill/
|-- SKILL.md
|-- scripts/
|   `-- processor.py
`-- resources/
    `-- template.xlsx
```

`SKILL.md` je povinny soubor s instrukcemi pro Claude. Slozky `scripts/` a `resources/` jsou volitelne.

## Bezna pouziti

- Financni reporting a ctvrtletni reporty.
- Analyza rozpoctu a odchylek.
- Investicni dashboardy.
- Excel analytika se vzorci a pivot tables.
- Generovani firemnich prezentaci.
- Skladani reportu z vice zdroju.
- Prevod dokumentu mezi formaty.

## Reseni typickych problemu

### API klic nebyl nalezen

```text
ValueError: ANTHROPIC_API_KEY not found
```

Zkontrolujte, ze jste zkopirovali `.env.example` do `.env` a doplnili API klic.

### Chybi beta header pro Skills

```text
Error: Skills feature requires beta header
```

Zkontrolujte, ze pouzivate beta headers uvedene v notebooku.

### Prekrocen token limit

```text
Error: Request exceeds token limit
```

Rozdelte velkou ulohu na mensi casti nebo pouzijte progressive disclosure.

## Zdroje

- Claude API dokumentace: <https://docs.anthropic.com/en/api/messages>
- Skills dokumentace: <https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview>
- Podpora Claude: <https://support.claude.com>
- GitHub Issues: <https://github.com/anthropics/claude-cookbooks/issues>

## Doporuceni pro vyuku

Zacnete notebookem `01_skills_introduction.ipynb` a nechte studenty nejdrive spustit existujici priklad. Az potom je vhodne menit zadani, sablony nebo vstupni data. U vlastnich skills trvejte na tom, aby studenti jasne oddelovali instrukce v `SKILL.md`, pomocny kod ve `scripts/` a datove zdroje v `resources/`.
