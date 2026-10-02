import json,re,urllib.request,io,time
from pathlib import Path
from PIL import Image
rows=json.loads(Path('content/koroshi-archive.json').read_text())
targets={r['code'][:8]:r for r in rows if r['season']!='ss27'}
cache=Path('audit/official-matches.json')
found=json.loads(cache.read_text()) if cache.exists() else {}
found.update({r['code'][:8]:r['official'] for r in rows if 'official' in r})
for page in range(1,31):
    url=f'https://koroshishop.com/products.json?limit=250&page={page}'
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
    try:
        data=json.load(urllib.request.urlopen(req,timeout=45))['products']
    except Exception as e:
        print('Catalog error',page,str(e),flush=True);break
    if not data:break
    for product in data:
        for pic in product.get('images',[]):
            src=pic.get('src','');match=re.search(r'(26\d{2}[A-Z]{2}\d{2})[_-]',src,re.I)
            if not match:continue
            code=match.group(1).upper()
            if code not in targets or code in found:continue
            # First official still photograph for this exact style reference.
            found[code]={'sourceUrl':'https://koroshishop.com/products/'+product['handle'],'imageUrl':src,'title':product['title']}
    cache.write_text(json.dumps(found,ensure_ascii=False,indent=2))
    print('Catalog page',page,'matched',len(found),flush=True)
    time.sleep(6)
for code,item in found.items():
    r=targets[code]
    if 'official' in r and Path('public'+r['official']['image']).exists():continue
    try:
        raw=urllib.request.urlopen(item['imageUrl']+('&' if '?' in item['imageUrl'] else '?')+'width=1600',timeout=18).read()
        im=Image.open(io.BytesIO(raw)).convert('RGB');im.thumbnail((2000,2400))
        path=f'/images/koroshi/archive/{r["season"]}/{r["slug"]}-official.webp'
        im.save('public'+path,'WEBP',quality=90)
        r['official']={**item,'image':path}
        Path('content/koroshi-archive.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
    except Exception as e:print('Photo error',code,str(e),flush=True)
Path('content/koroshi-archive.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
print('Official photos saved',sum('official' in r for r in rows),flush=True)
