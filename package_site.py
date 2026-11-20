"""Generate portable single HTML and complete ZIP from current source."""
from pathlib import Path
import re,json,base64,zipfile
root=Path(__file__).parent
html=(root/'index.html').read_text()
css=(root/'styles.css').read_text()
extra_css=(root/'experience.css').read_text()
js=(root/'script.js').read_text()
extra_js=(root/'experience.js').read_text()
assets={}
for f in (root/'assets').rglob('*'):
 if not f.is_file() or f.name=='hero-collection.webp':continue
 rel=str(f.relative_to(root)).replace('\\','/')
 mime={'.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp'}.get(f.suffix,'application/octet-stream')
 assets[rel]='data:'+mime+';base64,'+base64.b64encode(f.read_bytes()).decode('ascii')
for rel,data in assets.items():
 html=html.replace(f'src="{rel}"',f'src="{data}"')
 html=html.replace(f'href="{rel}"',f'href="{data}"')
html=html.replace('<link rel="stylesheet" href="styles.css" />','<style>\n'+css+'\n</style>')
html=html.replace('<link rel="stylesheet" href="experience.css" />','<style>\n'+extra_css+'\n</style>')
asset_dict=json.dumps(assets,separators=(',',':')).replace('<','\\u003c')
needle='function assetFor(p){return p.imageOverride || (p.photo?`assets/photos/${p.photo}.webp`:`assets/products/${p.image}.svg`);}'
if needle not in js:raise RuntimeError('Dynamic asset helper changed: update inliner')
js=js.replace(needle,'const INLINE_ASSETS='+asset_dict+';\nfunction assetFor(p){const path=p.imageOverride || (p.photo?`assets/photos/${p.photo}.webp`:`assets/products/${p.image}.svg`);return INLINE_ASSETS[path]||path;}')
for rel,data in assets.items():extra_js=extra_js.replace("'"+rel+"'", "'"+data+"'")
html=html.replace('<script defer src="script.js"></script>','')
html=html.replace('<script defer src="experience.js"></script>','')
html=html.replace('</body>','<script>\n'+js+'\n</script><script>\n'+extra_js+'\n</script>\n</body>')
(root/'index-single-file.html').write_text(html)
zipfile_name=root.parent/'the-mad-engineer-v4-editorial-storefront.zip'
with zipfile.ZipFile(zipfile_name,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for fname in ['index.html','styles.css','script.js','experience.css','experience.js','setup_threeui.py','run_local.py','package_site.py','index-single-file.html','README.md','START_WINDOWS.bat']:
  z.write(root/fname,fname)
 for f in sorted((root/'threeui-react').rglob('*')):
  if f.is_file():z.write(f,str(f.relative_to(root)).replace('\\','/'))
 for f in sorted((root/'assets').rglob('*')):
  if f.is_file() and f.name!='hero-collection.webp':z.write(f,str(f.relative_to(root)).replace('\\','/'))
print('Assets',len(assets),'single HTML size',len(html),'ZIP',zipfile_name,'size',zipfile_name.stat().st_size)
