# Anthropic Computer Use Demo - český přehled

Tato složka obsahuje referenční Docker demo pro computer use s Claude. Claude v něm může ovládat desktopové prostředí přes nástroje pro obrazovku, myš a klávesnici. Demo je určené pro učení a experimenty, ne pro produkční použití.

## Co demo obsahuje

- Docker image s potřebnými závislostmi.
- Agent loop pro komunikaci s Claude API, Bedrock nebo Vertex.
- Computer use nástroje definované Anthropic.
- Streamlit aplikaci pro ovládání agenta.
- VNC/NoVNC přístup k desktopovému prostředí v kontejneru.

## Bezpečnostní upozornění

Computer use je rizikovější než běžný chat nebo API volání. Model může pracovat s obrazovkou, webem, soubory a aplikacemi. Nikdy mu nedávejte přístup k citlivým údajům.

Doporučení:

- používat izolovaný kontejner nebo virtuální mašinu,
- nezadávat hesla, osobní účty ani platební údaje,
- omezit přístup k internetu,
- potvrzovat lidsky všechny akce s reálnými následky,
- počítat s rizikem prompt injection z webových stránek nebo obrázků.

## Rychlé spuštění přes Claude API

```bash
export ANTHROPIC_API_KEY=%your_api_key%
docker run \
    -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
    -v $HOME/.anthropic:/home/computeruse/.anthropic \
    -p 5900:5900 \
    -p 8501:8501 \
    -p 6080:6080 \
    -p 8080:8080 \
    -it ghcr.io/anthropics/anthropic-quickstarts:computer-use-demo-latest
```

Po spuštění otevřete:

```text
http://localhost:8080
```

## Další přístupy

- pouze Streamlit: `http://localhost:8501`,
- desktop přes NoVNC: `http://localhost:6080/vnc.html`,
- přímé VNC: `vnc://localhost:5900`.

## Nastavení velikosti obrazovky

Lze použít proměnné `WIDTH` a `HEIGHT`:

```bash
docker run \
    -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
    -e WIDTH=1920 \
    -e HEIGHT=1080 \
    -p 5900:5900 \
    -p 8501:8501 \
    -p 6080:6080 \
    -p 8080:8080 \
    -it ghcr.io/anthropics/anthropic-quickstarts:computer-use-demo-latest
```

Pro vlastní implementace se doporučuje pracovat s rozlišením okolo XGA, například 1024x768, a souřadnice správně škálovat.

## Vývoj

Originální README obsahuje i postup pro lokální build Docker image a vývoj s mountnutým Python modulem. Pro studenty doporučujeme nejdřív použít hotový image a až potom zkoumat kód.

## Doporučení pro výuku

Tento quickstart ukazujte až ve chvíli, kdy studenti chápou tool use a agent loop. Hlavní výuková otázka není jen "jak to spustit", ale také "jak omezit rizika, když model může ovládat prostředí".
