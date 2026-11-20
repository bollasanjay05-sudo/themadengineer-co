#!/usr/bin/env python3
"""Install and customize the original, checksum-verified ThreeUI CompleteShelfLandingPage.

Source: https://github.com/MengTo/threeui/blob/main/public/landing-pages/complete-shelf-v2.html
License: MIT (see https://github.com/MengTo/threeui and https://catalogs.dev/mengto/items/complete-shelf-landing-page)
The original unchanged source is saved alongside the adapted document.
Requires online access to GitHub to download the original. Uses Python standard library only.
"""
from __future__ import annotations
from pathlib import Path
import hashlib
import re
import sys
from urllib.request import Request,urlopen

ROOT=Path(__file__).resolve().parent
OUT=ROOT/'threeui';OUT.mkdir(parents=True,exist_ok=True)
RAW_URL='https://raw.githubusercontent.com/MengTo/threeui/main/public/landing-pages/complete-shelf-v2.html'
SHA='606f200fed8602c243f40a11c8c364f0e625c57f80e7c97dc76419da207f198e'
ORIGINAL=OUT/'complete-shelf-v2.original.html'
CUSTOM=OUT/'complete-shelf-custom.html'
REACT_ASSET=ROOT/'landing-pages'/'complete-shelf-v2.html'
BOOKS=[
 ('Photo Frames','Frames & Moments','Your favourite story, framed with care.','Photo frames and personal keepsakes for moments that deserve a place on your shelf.','Forest-green cloth · soft-white foil'),
 ('Mini Calendars','Keep the Date','Twelve months of meaningful memories.','Mini desk calendars and custom illustrated calendars for birthdays, milestones and gifting.','Meadow-green cloth · soft-white foil'),
 ('Acrylic Magnets','Stick Together','Tiny photos. Lasting memories.','Personalized photo fridge magnets with vibrant scenes, names and happy moments.','Lime-green cloth · soft-white foil'),
 ('DIY Birthday Kits','Make & Play','Small hands, big creativity.','Kids birthday craft kits, make-and-take projects and activities for fun celebrations.','Light-green cloth · soft-white foil'),
 ('Photo Keychains','Carry a Memory','Everyday favourites, always close.','Acrylic photo keychains, printed character keepsakes and custom name tags.','Forest-green cloth · soft-white foil'),
 ('Art Posters','Wall Stories','Print your personality.','Metal and art posters with original illustrations, scenery and your own artwork.','Pale-green cloth · soft-white foil'),
 ('Gift Editions','Your Idea, Our Craft','Made just for your story.','Personalized mugs, prints, small keepsakes and creative gifts made for your occasion.','Leaf-green cloth · soft-white foil')
]
IDS=['codex','claude-code','cursor','antigravity','figma','framer','xcode']
GREENS=['#205c3b','#69b663','#9ad854','#2c7743','#377c55','#a7d989','#4e9c63']

def verified_source()->bytes:
 if ORIGINAL.exists() and hashlib.sha256(ORIGINAL.read_bytes()).hexdigest()==SHA:
  print('Using locally cached verified original source')
  return ORIGINAL.read_bytes()
 print('Downloading exact ThreeUI source:',RAW_URL)
 req=Request(RAW_URL,headers={'User-Agent':'MadEngineerSiteBuilder/1.0'})
 try:
  with urlopen(req,timeout=35) as res: data=res.read()
 except Exception as exc:
  raise SystemExit('Cannot download ThreeUI source. Check internet access, then run python setup_threeui.py again.\n'+str(exc))
 actual=hashlib.sha256(data).hexdigest()
 if actual!=SHA:
  raise SystemExit('Source checksum mismatch: '+actual+'; expected '+SHA+'. File not installed.')
 ORIGINAL.write_bytes(data)
 print('Verified SHA-256:',actual)
 return data

def adapt(src:str)->str:
 # Modify only authored metadata and palette. Keep geometry, shaders, controls, scene code,
 # interaction and source asset/data URIs intact, retaining original in another file.
 start=src.index('    const BOOKS = [')
 end=src.index('    ];',start)+6
 block=src[start:end]
 for i,(id_,fields) in enumerate(zip(IDS,BOOKS)):
  title,discipline,note,deck,binding=fields
  needle='id: "'+id_+'"'
  p=block.find(needle)
  if p<0:raise RuntimeError('Unexpected source book schema: missing '+id_)
  nextp=min([v for v in [block.find('id: "'+v+'"',p+len(needle)) for v in IDS] if v>=0] or [len(block)])
  segment=block[p:nextp]
  for key,val in {'title':title,'discipline':discipline,'note':note,'deck':deck,'binding':binding,'theme':title+' · personalized print','paletteLabel':'Green · white · lime'}.items():
   pattern=r'('+re.escape(key)+r':\s*)"(?:[^"\\]|\\.)*"'
   segment,n=re.subn(pattern,lambda m: m.group(1)+'"'+val.replace('"','\\"')+'"',segment,count=1)
   if n!=1:raise RuntimeError('Missing author field '+key+' in '+id_)
  # Keep book geometry, motifs and interactive behaviors. Alter only surface colors.
  c=GREENS[i]
  segment=re.sub(r'(?m)^(\s*color:\s*)"#[0-9a-fA-F]{6}"',lambda m: m.group(1)+'"'+c+'"',segment,count=1)
  segment=re.sub(r'(?m)^(\s*foil:\s*)"#[0-9a-fA-F]{6}"',r'\1"#f4fff0"',segment,count=1)
  palette={'paper':'#245a3e','paperDeep':'#164632','paperPale':'#eaffdf','ink':'#ffffff','inkSoft':'#cef5d2','wall':'#245a3e','shelf':'#276642','shelfDark':'#133e2b','light':'#ffffff','fill':'#abed94'}
  for key,val in palette.items():
   segment=re.sub(r'(?m)^(\s*'+key+r':\s*)"#[0-9a-fA-F]{6}"',lambda m:m.group(1)+'"'+val+'"',segment,count=1)
  block=block[:p]+segment+block[nextp:]
 src=src[:start]+block+src[end:]
 # UI labels; source remains a faithful 3D bookshelf, now an idea lookbook.
 src=src.replace('Working Volumes — Seven Tools for Making','The Mad Memory Editions — Seven Personalized Gift Ideas')
 src=src.replace('Working Volumes','The Mad Memory Editions')
 for old,new in zip(['Codex','Claude Code','Cursor','Antigravity','Figma','Framer','Xcode'],[d[0] for d in BOOKS]):src=src.replace('>'+old+'<','>'+new+'<')
 # Match site's green-and-white theme in original author root without affecting animations.
 overrides={'--paper':'#245a3e','--paper-deep':'#164632','--paper-pale':'#eaffdf','--ink':'#ffffff','--ink-soft':'#d4f8d7','--walnut':'#276642','--walnut-deep':'#133e2b','--accent':'#aeef8d'}
 for k,v in overrides.items():src=re.sub('('+re.escape(k)+r':\s*)#[0-9a-fA-F]{6}',lambda m:m.group(1)+v,src,count=1)
 return src

def main():
 original=verified_source().decode('utf-8')
 new=adapt(original)
 CUSTOM.write_text(new,encoding='utf-8')
 REACT_ASSET.parent.mkdir(parents=True,exist_ok=True)
 REACT_ASSET.write_text(new,encoding='utf-8')
 print('Original ThreeUI:', ORIGINAL,ORIGINAL.stat().st_size,'bytes')
 print('Personalized adaptation:', CUSTOM,CUSTOM.stat().st_size,'bytes')
 print('React component asset:',REACT_ASSET)
 print('Ready: serve the website with python run_local.py and open http://localhost:8000')

if __name__=='__main__':main()
