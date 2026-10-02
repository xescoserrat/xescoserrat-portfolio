import sys,json,re,io
sys.path.insert(0,'/tmp/portfolio-pdf-runtime')
import fitz
from PIL import Image,ImageOps
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor

def convert(row):
    code=row['code']; slug=re.sub(r'[^a-z0-9-]','-',code.lower()); season=row['season']
    out=Path('public/images/koroshi/archive')/season; out.mkdir(parents=True,exist_ok=True)
    doc=fitz.open(row['sketch']); page=doc[0]
    # Preserve the entire technical drawing. No arbitrary crop may cut garments.
    pix=page.get_pixmap(matrix=fitz.Matrix(2.5,2.5),alpha=False)
    im=Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')
    im.thumbnail((2400,2400)); im.save(out/(slug+'-design.webp'),'WEBP',quality=90,method=4)
    thumb=im.copy(); thumb.thumbnail((700,700)); thumb.save(out/(slug+'-thumb.webp'),'WEBP',quality=84)
    result={'code':code,'slug':slug,'season':season,'design':f'/images/koroshi/archive/{season}/{slug}-design.webp','thumbnail':f'/images/koroshi/archive/{season}/{slug}-thumb.webp','width':im.width,'height':im.height,'source':row['sketch'],'print':None}
    # Artwork pages are selected only when their title identifies the print.
    candidates=[]
    for i in range(1,min(len(doc),12)):
        p=doc[i]; text=p.get_text().upper()
        if re.search(r'PRINT|ARTWORK|ESTAMPADO|GRAPHIC',text) and not re.search(r'SIZE CHART|MEASUREMENT',text):
            candidates.append((i,p))
    if candidates:
        i,p=candidates[0]; pic=p.get_pixmap(matrix=fitz.Matrix(2.5,2.5),alpha=False)
        art=Image.open(io.BytesIO(pic.tobytes('png'))).convert('RGB'); art.thumbnail((2400,2400)); art.save(out/(slug+'-print.webp'),'WEBP',quality=92)
        result['print']=f'/images/koroshi/archive/{season}/{slug}-print.webp';result['printPage']=i+1
    return result

if __name__=='__main__':
    rows=json.loads(Path('audit/inventory.json').read_text())
    results=[]
    with ProcessPoolExecutor(max_workers=4) as pool:
        for i,result in enumerate(pool.map(convert,rows)):
            results.append(result)
            if (i+1)%20==0: print('Rendered',i+1,flush=True)
    Path('content/koroshi-archive.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
    print('Complete',len(results),'designs;',sum(bool(r['print']) for r in results),'print pages',flush=True)
