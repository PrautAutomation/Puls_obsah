# Schopnosti Claude

Vitejte v casti Claude Cookbooks venovane schopnostem modelu Claude. Tato slozka obsahuje sadu navodu, ktere ukazuji konkretni oblasti, ve kterych Claude dobre funguje. Kazdy navod se venuje jedne schopnosti do hloubky: vysvetluje mozne pripady pouziti, techniky promptovani pro lepsi vysledky a zpusoby, jak vykon Claude vyhodnocovat.

## Navody

- **[Klasifikace s Claude](./classification/guide.ipynb)**: Ukazuje, jak lze Claude pouzit pro klasifikaci textu a dat, zejmena v situacich se slozitymi obchodnimi pravidly a omezenym mnozstvim trenovacich dat. Navod prochazi pripravu dat, prompt engineering s Retrieval Augmented Generation (RAG), testovani a vyhodnoceni.

- **[Retrieval Augmented Generation s Claude](./retrieval_augmented_generation/guide.ipynb)**: Vysvetluje, jak rozsit schopnosti Claude o znalosti z konkretni domeny pomoci RAG. Navod ukazuje, jak postavit RAG system od zacatku, optimalizovat jeho vykon a vytvorit sadu evaluaci. Studenti uvidi, jak techniky jako summary indexing a re-ranking zlepsuji presnost, uplnost a celkovou kvalitu odpovedi.

- **[Retrieval Augmented Generation s kontextovymi embeddingy](./contextual-embeddings/guide.ipynb)**: Predstavuje techniku pro zlepseni vykonu RAG systemu. V tradicnim RAG se dokumenty obvykle deli na mensi casti, aby se daly efektivne vyhledavat. To ale muze zpusobit problemy, pokud jednotlive casti nemaji dost kontextu. Kontextove embeddingy tento problem resi tim, ze pred vytvorenim embeddingu pridaji ke kazde casti relevantni kontext. Navod ukazuje pouziti se semantickym vyhledavanim, BM25 a rerankingem.

- **[Shrnovani s Claude](./summarization/guide.ipynb)**: Ukazuje schopnost Claude shrnovat a syntetizovat informace z vice zdroju. Navod pokryva nekolik technik shrnovani, vcetne multi-shot pristupu, domenoveho shrnovani a chunkingu. Zahrnuje take praci s dlouhymi texty, vice dokumenty a vyhodnocovani kvality souhrnu.

- **[Text-to-SQL s Claude](./text_to_sql/guide.ipynb)**: Vysvetluje, jak generovat slozite SQL dotazy z prirozeneho jazyka pomoci promptovacich technik, sebeopravy a RAG. Navod se venuje take vyhodnocovani a zlepsovani presnosti generovanych SQL dotazu, vcetne testu syntaxe, spravnosti dat, poctu radku a dalsich vlastnosti.

- **[Tvorba znalostniho grafu s Claude](./knowledge_graph/guide.ipynb)**: Ukazuje, jak z nestrukturovaneho textu vytvorit znalostni graf od zacatku do konce: rozpoznavani pojmenovanych entit, extrakce vztahu, sjednocovani entit a vicekrokove dotazovani. Pouziva strukturovane vystupy pro extrakci validovanou schematem a deduplikaci rizenou Claude misto jednoduchych heuristik zalozenych na podobnosti retezcu.

## Jak zacit

Vyberte si oblast, ktera odpovida cilum vyuky, otevorte prislusnou slozku a postupujte podle souboru `guide.ipynb`. Kazdy navod je samostatny a obsahuje potrebny kod, data a evaluacni skripty pro zopakovani prikladu a experimentu.

Pro studenty doporucujeme toto poradi:

1. `classification`
2. `summarization`
3. `retrieval_augmented_generation`
4. `text_to_sql`
5. `contextual-embeddings`
6. `knowledge_graph`

Prvni tri oblasti jsou obvykle nejsrozumitelnejsi pro zacatek. Posledni tri jsou vhodnejsi ve chvili, kdy studenti uz rozumi promptum, embeddingum, zakladum evaluace a praci s daty.
