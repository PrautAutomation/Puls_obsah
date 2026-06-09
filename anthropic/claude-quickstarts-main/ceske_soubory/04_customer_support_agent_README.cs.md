# Claude Customer Support Agent - český přehled

Tato složka obsahuje webovou aplikaci pro zákaznickou podporu poháněnou Claude. Aplikace ukazuje, jak propojit chat s externí znalostní bází a jak zobrazovat informace, které agent používá při odpovědi.

## Co aplikace ukazuje

- Chat se zákazníkem pomocí Claude.
- Integraci s Amazon Bedrock Knowledge Bases.
- Retrieval-Augmented Generation (RAG) pro získávání relevantních znalostí.
- Zobrazení zdrojů z knowledge base.
- Ladicí informace a stav uvažování.
- Detekci nálady uživatele a případné přesměrování.
- Přizpůsobitelné UI postavené na shadcn/ui komponentách.

## Spuštění

```bash
cd customer-support-agent
npm install
npm run dev
```

Potom otevřete:

```text
http://localhost:3000
```

## Konfigurace

V kořenové složce tohoto quickstartu vytvořte `.env.local`:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key
BAWS_ACCESS_KEY_ID=your_aws_access_key
BAWS_SECRET_ACCESS_KEY=your_aws_secret_key
```

Prefix `B` před AWS proměnnými je v projektu použit záměrně kvůli nasazení přes AWS Amplify.

## Co je potřeba v AWS

Pro plnou funkčnost je potřeba:

1. AWS účet s přístupem k Amazon Bedrock.
2. IAM uživatel nebo role s potřebnými právy.
3. Bedrock knowledge base.
4. Nahrané a zaindexované dokumenty ve znalostní bázi.
5. Nastavené knowledge base ID v aplikaci.

V souboru `ChatArea.tsx` se upravuje pole `knowledgeBases`:

```typescript
const knowledgeBases: KnowledgeBase[] = [
  { id: "your-knowledge-base-id", name: "Your KB Name" },
]
```

## Přepínání modelů

Modely jsou definované v `ChatArea.tsx` v poli `models`. Vybraný model řídí stavová proměnná `selectedModel`.

Technické hodnoty modelů nepřekládejte. Musí odpovídat skutečným model IDs.

## Nasazení

README v originále popisuje nasazení přes AWS Amplify. Pro výuku doporučujeme nejdřív lokální běh a teprve potom řešit Amplify, IAM role a produkční nastavení.

## Doporučení pro výuku

Tento quickstart je vhodný po základním seznámení s RAG. Studenti by měli rozumět rozdílu mezi:

- odpovědí čistě z modelu,
- odpovědí doplněnou o znalosti z externí knowledge base,
- citováním nebo zobrazováním zdrojů.
