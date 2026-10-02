import sys,json,io,re
sys.path.insert(0,'/tmp/portfolio-pdf-runtime')
import pymupdf as fitz
from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor

def save_clip(page,rect,path):
    rect=rect+(-4,-4,4,4);rect &= page.rect
    pix=page.get_pixmap(matrix=fitz.Matrix(min(4,2200/max(rect.width,rect.height)),min(4,2200/max(rect.width,rect.height))),clip=rect,alpha=False)
    im=Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB');im.save(path,'WEBP',quality=91,method=4)
    return im

def refine(row):
    d=fitz.open(row['source']);p=d[0]; area=p.rect.width*p.rect.height
    imgs=[b for b in p.get_image_info() if b['width']>150 and b['height']>150 and fitz.Rect(b['bbox']).get_area()>.1*area and b['bbox'][1]>p.rect.height*.06]
    if imgs:
        b=max(imgs,key=lambda b:fitz.Rect(b['bbox']).get_area());im=save_clip(p,fitz.Rect(b['bbox']),Path('public'+row['design']))
        row['width'],row['height']=im.size;im.thumbnail((700,700));im.save('public'+row['thumbnail'],'WEBP',quality=85)
        row['cropped']=True
    row['print']=None
    options=[]
    for i in range(1,min(4,len(d))):
        pg=d[i];txt=pg.get_text().upper()
        if not re.search(r'PRINT|ARTWORK|ESTAMPADO|GRAPHIC|\.PSD',txt) or re.search(r'CARE.?LABEL|HANG.?TAG|INNER WOVEN|SIZE CHART|WARNING',txt):continue
        for b in pg.get_image_info():
            rect=fitz.Rect(b['bbox'])
            if b['width']>=180 and b['height']>=180 and rect.get_area()>pg.rect.get_area()*.065 and rect.y0>pg.rect.height*.04:
                options.append((rect.get_area(),i,rect))
    if options:
        _,i,rect=max(options,key=lambda t:t[0]);path=row['design'].replace('-design.webp','-print.webp')
        save_clip(d[i],rect,Path('public'+path));row['print']=path;row['printPage']=i+1
    return row

if __name__=='__main__':
    rows=json.loads(Path('content/koroshi-archive.json').read_text())
    with ProcessPoolExecutor(max_workers=4) as pool: results=list(pool.map(refine,rows))
    Path('content/koroshi-archive.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
    print('Cropped',sum(r.get('cropped',False) for r in results),'Artwork',sum(bool(r['print']) for r in results),flush=True)
    for start in range(0,len(results),48):
        sheet=Image.new('RGB',(1440,1440),'#ddd');draw=ImageDraw.Draw(sheet)
        for j,r in enumerate(results[start:start+48]):
            im=Image.open('public'+r['thumbnail']);im.thumbnail((170,200));x=(j%8)*180;y=(j//8)*240
            sheet.paste(im,(x+(180-im.width)//2,y));draw.text((x+5,y+207),r['code'],fill='black')
        sheet.save(f'audit/contact-{start//48}.jpg')
