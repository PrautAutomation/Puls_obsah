# Autonomous Coding Agent Demo - český přehled

Tato složka obsahuje minimální ukázku dlouho běžícího autonomního coding agenta pomocí Claude Agent SDK. Demo používá vzor se dvěma agenty: initializer agent a coding agent. Společně mohou přes více relací postupně vytvořit celou aplikaci.

## Co demo ukazuje

- Dlouho běžící agentní práci přes více relací.
- Rozdělení práce mezi initializer agenta a coding agenta.
- Ukládání postupu do `feature_list.json`.
- Ukládání stavu přes git commity.
- Bezpečnostní omezení pro spouštěné příkazy.
- Možnost přerušit běh a později pokračovat.

## Požadavky

Je potřeba mít aktuální Claude Code CLI a Claude Agent SDK.

```bash
npm install -g @anthropic-ai/claude-code
pip install -r requirements.txt
```

Ověření instalace:

```bash
claude --version
pip show claude-code-sdk
```

Nastavte API klíč:

```bash
export ANTHROPIC_API_KEY='your-api-key-here'
```

## Rychlý start

```bash
python autonomous_agent_demo.py --project-dir ./my_project
```

Pro kratší test s omezeným počtem iterací:

```bash
python autonomous_agent_demo.py --project-dir ./my_project --max-iterations 3
```

## Důležité očekávání k délce běhu

Toto demo může běžet velmi dlouho.

- První relace vytváří `feature_list.json` s mnoha testovacími případy. Může trvat několik minut a může vypadat, jako by se zastavila.
- Každá další coding iterace může trvat 5 až 15 minut.
- Vytvoření celé aplikace se všemi funkcemi může trvat mnoho hodin.

Pro rychlejší výuku můžete v `prompts/initializer_prompt.md` snížit počet požadovaných funkcí například z 200 na 20 až 50.

## Jak to funguje

### Dva agenti

1. **Initializer Agent** přečte `app_spec.txt`, vytvoří `feature_list.json`, nastaví strukturu projektu a inicializuje git.
2. **Coding Agent** v dalších relacích naváže na předchozí práci, postupně implementuje funkce a označuje je jako splněné.

### Správa relací

- Každá relace začíná s novým context window.
- Pokrok je uložený ve `feature_list.json` a v git historii.
- Agent může automaticky pokračovat mezi relacemi.
- `Ctrl+C` běh pozastaví. Stejný příkaz lze spustit znovu pro pokračování.

## Bezpečnostní model

Demo používá více vrstev omezení:

- OS-level sandbox pro Bash příkazy.
- Omezení souborových operací na projektovou složku.
- Allowlist povolených Bash příkazů.

Povolené jsou například:

- `ls`, `cat`, `head`, `tail`, `wc`, `grep`,
- `npm`, `node`,
- `git`,
- `ps`, `lsof`, `sleep`, `pkill` pro vývojové procesy.

Příkazy mimo allowlist jsou blokované bezpečnostním hookem.

## Hlavní soubory

- `autonomous_agent_demo.py`: hlavní vstupní bod.
- `agent.py`: logika agentních relací.
- `client.py`: konfigurace Claude SDK klienta.
- `security.py`: allowlist Bash příkazů a validace.
- `progress.py`: sledování postupu.
- `prompts/app_spec.txt`: specifikace aplikace.
- `prompts/initializer_prompt.md`: prompt pro první relaci.
- `prompts/coding_prompt.md`: prompt pro pokračující relace.

## Spuštění vygenerované aplikace

Po dokončení nebo pozastavení agenta:

```bash
cd generations/my_project
./init.sh
```

U Node.js aplikací typicky:

```bash
npm install
npm run dev
```

Přesnou URL zjistíte z výstupu agenta nebo ze souboru `init.sh`.

## Doporučení pro výuku

Tento quickstart je pokročilý. Nejprve studentům ukažte menší příklad z `agents/`, potom teprve přejděte na dlouho běžící coding agenty. Pro seminář nebo workshop doporučujeme nastavit nižší počet funkcí, jinak demo zabere příliš mnoho času.
