#!/usr/bin/env python3
"""
Validátor českých notebooků (.cs.ipynb)
Spusť: python3 validace_notebooku.py /cesta/ke/slozce

Co kontroluje:
1. JSON validita každého .cs.ipynb
2. Existence odpovídajícího originálu (.ipynb bez .cs)
3. Shoda kódových buněk mezi originálem a českou verzí
4. Počet buněk (markdown + code)
5. Souhrn: kolik OK, kolik problémů
"""

import json
import sys
import os
from pathlib import Path

def find_original(cs_path):
    """Najde originální notebook pro český .cs.ipynb"""
    name = cs_path.name.replace('.cs.ipynb', '.ipynb')
    # Hledej ve stejné složce
    original = cs_path.parent / name
    if original.exists():
        return original
    return None

def get_code_cells(nb_data):
    """Extrahuje kódové buňky z notebooku"""
    cells = nb_data.get('cells', [])
    code_cells = []
    for c in cells:
        if c.get('cell_type') == 'code':
            source = ''.join(c.get('source', []))
            code_cells.append(source.strip())
    return code_cells

def get_markdown_cells(nb_data):
    """Extrahuje markdown buňky"""
    cells = nb_data.get('cells', [])
    return [c for c in cells if c.get('cell_type') == 'markdown']

def validate_notebook(cs_path):
    """Validuje jeden český notebook"""
    results = {
        'path': str(cs_path),
        'json_valid': False,
        'original_found': False,
        'code_match': None,
        'total_cells': 0,
        'code_cells': 0,
        'markdown_cells': 0,
        'issues': []
    }
    
    # 1. JSON validita
    try:
        with open(cs_path, 'r', encoding='utf-8') as f:
            cs_data = json.load(f)
        results['json_valid'] = True
    except json.JSONDecodeError as e:
        results['issues'].append(f"Nevalidní JSON: {e}")
        return results
    except Exception as e:
        results['issues'].append(f"Chyba čtení: {e}")
        return results
    
    # Počty buněk
    cells = cs_data.get('cells', [])
    results['total_cells'] = len(cells)
    results['code_cells'] = len([c for c in cells if c.get('cell_type') == 'code'])
    results['markdown_cells'] = len([c for c in cells if c.get('cell_type') == 'markdown'])
    
    if results['total_cells'] == 0:
        results['issues'].append("Notebook je prázdný (0 buněk)")
    
    # 2. Najdi originál
    original_path = find_original(cs_path)
    if original_path:
        results['original_found'] = True
        
        # 3. Porovnej kódové buňky
        try:
            with open(original_path, 'r', encoding='utf-8') as f:
                orig_data = json.load(f)
            
            cs_code = get_code_cells(cs_data)
            orig_code = get_code_cells(orig_data)
            
            if len(cs_code) != len(orig_code):
                results['code_match'] = False
                results['issues'].append(
                    f"Různý počet kódových buněk: originál {len(orig_code)}, česká {len(cs_code)}")
            else:
                mismatches = []
                for i, (cs_c, orig_c) in enumerate(zip(cs_code, orig_code)):
                    if cs_c != orig_c:
                        mismatches.append(i + 1)
                
                if mismatches:
                    results['code_match'] = False
                    results['issues'].append(
                        f"Neshodné kódové buňky: {mismatches}")
                else:
                    results['code_match'] = True
        except Exception as e:
            results['issues'].append(f"Chyba při porovnání s originálem: {e}")
    else:
        results['issues'].append("Originální notebook nenalezen")
    
    return results

def scan_directory(root_path):
    """Projde složku a najde všechny .cs.ipynb"""
    root = Path(root_path)
    cs_notebooks = sorted(root.rglob('*.cs.ipynb'))
    all_notebooks = sorted(root.rglob('*.ipynb'))
    
    # Filtruj originály (ne .cs.ipynb)
    originals = [n for n in all_notebooks if '.cs.' not in n.name]
    
    return cs_notebooks, originals

def main():
    if len(sys.argv) < 2:
        print("Použití: python3 validace_notebooku.py /cesta/ke/slozce")
        print("Příklad: python3 validace_notebooku.py ~/Desktop/anthropic")
        sys.exit(1)
    
    root_path = sys.argv[1]
    
    if not os.path.isdir(root_path):
        print(f"Složka neexistuje: {root_path}")
        sys.exit(1)
    
    print(f"Skenuji: {root_path}")
    print("=" * 70)
    
    cs_notebooks, originals = scan_directory(root_path)
    
    print(f"Nalezeno: {len(cs_notebooks)} českých notebooků (.cs.ipynb)")
    print(f"Nalezeno: {len(originals)} originálních notebooků (.ipynb)")
    print("=" * 70)
    
    ok_count = 0
    warn_count = 0
    fail_count = 0
    all_results = []
    
    for cs_path in cs_notebooks:
        result = validate_notebook(cs_path)
        all_results.append(result)
        
        # Relativní cesta pro přehlednost
        rel_path = cs_path.relative_to(root_path)
        
        if result['json_valid'] and result['code_match'] is True and not result['issues']:
            ok_count += 1
            status = "✅ OK"
        elif result['json_valid'] and result['code_match'] is not False:
            warn_count += 1
            status = "⚠️  WARN"
        else:
            fail_count += 1
            status = "❌ FAIL"
        
        print(f"\n{status}  {rel_path}")
        print(f"       Buňky: {result['total_cells']} celkem "
              f"({result['code_cells']} kód, {result['markdown_cells']} markdown)")
        
        if result['issues']:
            for issue in result['issues']:
                print(f"       ⚠  {issue}")
    
    # Souhrn
    print("\n" + "=" * 70)
    print("SOUHRN")
    print("=" * 70)
    print(f"Celkem českých notebooků: {len(cs_notebooks)}")
    print(f"  ✅ OK (validní JSON + kód shodný):  {ok_count}")
    print(f"  ⚠️  WARN (validní, ale drobnosti):   {warn_count}")
    print(f"  ❌ FAIL (nevalidní nebo neshodný):   {fail_count}")
    
    # Kontrola: chybějící české verze
    print(f"\nKontrola kompletnosti:")
    cs_names = {p.name.replace('.cs.ipynb', '.ipynb') for p in cs_notebooks}
    orig_names = {p.name for p in originals}
    
    missing = orig_names - cs_names
    extra = cs_names - orig_names
    
    if missing:
        print(f"  Originály BEZ české verze ({len(missing)}):")
        for m in sorted(missing):
            print(f"    - {m}")
    else:
        print(f"  ✅ Všechny originály mají českou verzi")
    
    if extra:
        print(f"  České verze BEZ originálu ({len(extra)}):")
        for e in sorted(extra):
            print(f"    - {e}")
    
    # Ulož report
    report_path = os.path.join(root_path, "VALIDACE_REPORT.md")
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# Validační report českých notebooků\n\n")
        f.write(f"Celkem: {len(cs_notebooks)} notebooků\n")
        f.write(f"- ✅ OK: {ok_count}\n")
        f.write(f"- ⚠️ WARN: {warn_count}\n")
        f.write(f"- ❌ FAIL: {fail_count}\n\n")
        
        if fail_count > 0 or warn_count > 0:
            f.write("## Problémy\n\n")
            for r in all_results:
                if r['issues']:
                    f.write(f"### `{r['path']}`\n")
                    for issue in r['issues']:
                        f.write(f"- {issue}\n")
                    f.write("\n")
        
        if missing:
            f.write("## Chybějící české verze\n\n")
            for m in sorted(missing):
                f.write(f"- {m}\n")
    
    print(f"\nReport uložen: {report_path}")

if __name__ == '__main__':
    main()
