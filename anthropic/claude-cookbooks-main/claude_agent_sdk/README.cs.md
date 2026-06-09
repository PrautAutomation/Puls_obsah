# Tvorba pokrocilych agentu pomoci Claude Agent SDK

Tato slozka obsahuje tutorialovou serii, ktera ukazuje, jak stavet obecne agentni systemy pomoci [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-python). Serie postupuje od jednoducheho research agenta az po orchestraci vice agentu a integraci s externimi systemy.

## Jak zacit

### 1. Nainstalujte `uv`, Node.js a Claude Code CLI

Pokud je jeste nemate:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
npm install -g @anthropic-ai/claude-code
```

### 2. Naklonujte a nastavte projekt

```bash
git clone https://github.com/anthropics/anthropic-cookbook.git
cd anthropic-cookbook/claude_agent_sdk
uv sync
```

### 3. Zaregistrujte virtualni prostredi jako Jupyter kernel

```bash
uv run python -m ipykernel install --user --name="cc-sdk-tutorial" --display-name "Python (cc-sdk-tutorial)"
```

### 4. Nastavte Claude API klic

1. Otevrete <https://platform.claude.ai/dashboard>.
2. Prihlaste se nebo si vytvorte ucet.
3. Kliknete na "Get API keys".
4. Zkopirujte klic a vlozte ho do souboru `.env` jako `ANTHROPIC_API_KEY=`.

### 5. GitHub token pro Notebook 02

Pokud chcete projit notebook Observability Agent:

1. Vytvorte GitHub Personal Access Token na <https://github.com/settings/personal-access-tokens/new>.
2. Zvolte fine-grained token s vychozimi volbami, tedy public repos a bez opravneni k uctu.
3. Pridejte ho do `.env` jako `GITHUB_TOKEN="<token>"`.
4. Ujistete se, ze na pocitaci bezi Docker.

## Prehled tutorialove serie

Serie vede od zakladni implementace agenta k pokrocilym multi-agent systemum, ktere umi resit realne workflow. Kazdy notebook navazuje na predchozi, pridava nove koncepty a pritom zustava prakticky pouzitelny.

### Co se naucite

- Zaklady SDK pomoci `query()` a rozhrani `ClaudeSDKClient` a `ClaudeAgentOptions` v Python SDK.
- Vzory pro pouziti nastroju, od jednoducheho WebSearch az po integraci MCP serveru.
- Orchestraci vice agentu se specializovanymi subagenty.
- Enterprise prvky jako hooks pro compliance tracking a auditni stopu.
- Napojeni externich systemu pres Model Context Protocol (MCP).

Tato serie predpoklada alespon zakladni zkusenost s Claude Code. Pokud Claude Code pouzivate pro programovani a chcete jeho agentni schopnosti vyuzit i mimo softwarove inzenyrstvi, je tato slozka vhodny start.

## Struktura notebooku

### [Notebook 00: The One-Liner Research Agent](00_The_one_liner_research_agent.ipynb)

Jednoduchy, ale silny research agent postaveny v nekolika radcich kodu. Predstavuje zakladni koncepty SDK a ukazuje autonomni sber a syntezu informaci.

Klicove koncepty:

- zakladni agentni smycky s `query()` a asynchronni iteraci,
- WebSearch tool pro autonomni research,
- multimodalni schopnosti pres Read tool,
- sprava kontextu konverzace pomoci `ClaudeSDKClient`,
- system prompty pro specializaci agenta.

### [Notebook 01: The Chief of Staff Agent](01_The_chief_of_staff_agent.ipynb)

Komplexni AI Chief of Staff pro CEO startupu. Notebook ukazuje pokrocile funkce SDK pro produkcni prostredi, vcetne governance, compliance a specializovane expertizy.

Hlavni temata:

- persistentni instrukce v souborech `CLAUDE.md`,
- output styles pro ruzne publikum,
- Plan Mode pro strategicke planovani bez provedeni akci,
- vlastni slash commands pro caste operace,
- hooks pro automaticke compliance a auditni zaznamy,
- orchestraci subagentu,
- integraci Bash toolu pro spousteni Python skriptu.

### [Notebook 02: The Observability Agent](02_The_observability_agent.ipynb)

Rozsireni lokalniho agenta o externi systemy pres Model Context Protocol. Agent se z pasivniho pozorovatele stava aktivnim ucastnikem DevOps workflow.

Pokrocile schopnosti:

- Git MCP Server pro analyzu repozitare a version control,
- GitHub MCP Server pro integraci s platformou GitHub,
- monitoring CI/CD pipeline,
- inteligentni reakce na incidenty,
- automatizace produkcnich workflow.

### [Notebook 03: The Site Reliability Agent](03_The_site_reliability_agent.ipynb)

Prechod od read-only pozorovani k read-write naprave. Postavite SRE incident response agenta, ktery umi prozkoumat produkcni incident, diagnostikovat pricinu, aplikovat opravu a zdokumentovat vysledek.

Klicove schopnosti:

- MCP tool server s nastroji pro metriky, infrastrukturu, diagnostiku a dokumentaci,
- Prometheus integrace pres PromQL,
- read-write remediation: uprava konfigurace, restart Docker sluzeb a overeni opravy,
- safety hooks, ktere validuji zapisove operace,
- cely zivotni cyklus incidentu od detekce po post-mortem dokumentaci,
- volitelne integrace PagerDuty a Confluence.

## Samostatne implementace agentu

Kazdy notebook obsahuje implementaci agenta ve vlastnim adresari:

- `research_agent/`: autonomni research agent s web search a multimodalni analyzou.
- `chief_of_staff_agent/`: multi-agent executive assistant s financnim modelovanim a compliance.
- `observability_agent/`: DevOps monitoring agent s GitHub integraci.
- `site_reliability_agent/`: SRE incident response agent s Prometheem, Dockerem a MCP tool serverem.

Pokud chcete agentni moduly importovat mimo notebooky, spoustejte je ze slozky `claude_agent_sdk/` nebo balicek nainstalujte v editable modu:

```bash
uv pip install -e .
```

## Kontext

Claude Code ukazuje, ze Claude je velmi silny pro agentni praci: umi rozlozit slozite ulohy, efektivne pouzivat nastroje, drzet kontext v delsich ulohach, zotavovat se z chyb a rozumne volit mezi samostatnym pokracovanim a dotazem na cloveka.

Claude Agent SDK z techto schopnosti dela stavebnici pro obecne agenty. Lze ho pouzit pro research, analyzu dat, automatizaci workflow, observability, tvorbu obsahu i komplexni podnikove systemy.

## Prispevky

Pokud najdete problem nebo mate navrh na zlepseni, otevrete issue nebo pull request.
