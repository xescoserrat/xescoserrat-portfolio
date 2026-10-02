import json, re
from pathlib import Path
ROOT=Path('/Volumes/TRABAJO HD')
seasons={'ss26':'MUESTRARIO XESCO SS26','aw26-27':'MUESTRARIO AW 26-27','ss27':'MUESTRARIO XESCO SS27'}
rows=[]
for season,folder in seasons.items():
    for d in sorted((ROOT/folder).iterdir()):
        if not d.is_dir() or not re.match(r'^\d{4}[A-Za-z]{2}\d{2}',d.name): continue
        files=[p for p in d.iterdir() if p.is_file() and not p.name.startswith('.')]
        pdfs=[p for p in files if p.suffix.lower()=='.pdf' and not re.search(r'size|chart|pps|comment|label|medida',p.name,re.I)]
        pdfs.sort(key=lambda p:(0 if 'SKETCH' in p.name.upper() else 1, 0 if d.name[:8] in p.name else 1,len(p.name)))
        rows.append({'season':season,'code':d.name,'folder':str(d),'sketch':str(pdfs[0]) if pdfs else None,'files':[str(p) for p in files]})
Path('audit').mkdir(exist_ok=True)
Path('audit/inventory.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
for s in seasons:
    group=[r for r in rows if r['season']==s]
    print(s,len(group),'models;',sum(bool(r['sketch']) for r in group),'PDFs')
print('Missing PDFs:',[(r['season'],r['code']) for r in rows if not r['sketch']])
