# Agents - český přehled

Tato složka obsahuje minimální výukovou implementaci LLM agentů pomocí Claude API.

Nejde o SDK ani produkční framework. Je to krátká referenční implementace základních konceptů, aby studenti viděli, jak agent funguje uvnitř.

## Hlavní myšlenka

Agent je zde postavený na jednoduché smyčce:

1. uživatel zadá úkol,
2. Claude rozhodne, jestli potřebuje nástroj,
3. kód nástroj spustí,
4. výsledek se vrátí Claude,
5. Claude pokračuje, dokud úkol nedokončí.

Tento princip je základem mnoha složitějších agentních systémů.

## Hlavní součásti

- `agent.py`: správa komunikace s Claude API a spouštění nástrojů.
- `tools/`: implementace nástrojů, včetně lokálních a MCP nástrojů.
- `utils/`: pomocné funkce pro historii zpráv a připojení MCP serverů.
- `agent_demo.ipynb`: ukázkový notebook pro vyzkoušení agenta.

## Ukázka použití

```python
from agents.agent import Agent
from agents.tools.think import ThinkTool

agent = Agent(
    name="MyAgent",
    system="You are a helpful assistant.",
    tools=[ThinkTool()],
)

response = agent.run("What should I consider when buying a new laptop?")
```

## Požadavky

- Python 3.8 nebo novější.
- Claude API klíč nastavený v proměnné `ANTHROPIC_API_KEY`.
- Python knihovna `anthropic`.
- Python knihovna `mcp`, pokud chcete zkoušet MCP nástroje.

## Doporučení pro studenty

Začněte souborem `agent.py` a najděte místo, kde se zpracovávají odpovědi modelu a volání nástrojů. Potom otevřete `tools/think.py` nebo jiný jednoduchý nástroj a sledujte, jak se nástroj předává modelu.

Tato složka je nejlepší výchozí bod pro pochopení agentů v celém repozitáři.
