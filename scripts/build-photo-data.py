import json,re
from pathlib import Path
from PIL import Image,ImageDraw
rows=json.loads(Path('content/koroshi-archive.json').read_text())
photos=[]
for r in rows:
    if 'official' not in r or not Path('public'+r['official']['image']).exists():continue
    p=r['official'];title=p['title'].lower();kind=r['code'][4:6]
    if re.search(r'chaqueta|cazadora|abrigo|chaleco|sobrecamisa|jacket|coat|vest|overshirt',title):g='outerwear'
    elif re.search(r'camiseta|camisa|sudadera|jersey|polo|shirt|sweat|knit|pullover',title):g='tops'
    elif kind in ('JA',):g='outerwear'
    elif kind in ('MC','ML','MS','SU','TR','CC','CL','PC'):g='tops'
    elif kind in ('PL','PS'):continue
    else:g='accessories-swimwear'
    photos.append({'code':r['code'],'group':g,**p})
Path('content/koroshi-photos.json').write_text(json.dumps(photos,ensure_ascii=False,indent=2))
for g in ['outerwear','tops','accessories-swimwear']:print(g,sum(p['group']==g for p in photos))
for start in range(0,len(photos),40):
    sheet=Image.new('RGB',(1200,1450),'white');draw=ImageDraw.Draw(sheet)
    for j,p in enumerate(photos[start:start+40]):
        im=Image.open('public'+p['image']);im.thumbnail((140,255));x=j%8*150;y=j//8*290
        sheet.paste(im,(x+(150-im.width)//2,y));draw.text((x+4,y+263),p['code'],fill='black')
    sheet.save(f'audit/photos-{start//40}.jpg')
