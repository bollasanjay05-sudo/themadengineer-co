'use strict';
/** The Mad Engineer • editorial hero, accessible controls and official ThreeUI source loader */
(function(){
 const slides=[
  {category:'Apparel',title:'APPAREL',heading:'WEAR IT.',highlight:'YOUR WAY.',tag:'01 / CUSTOM PRINTS',note:'Graphic T-shirts, oversized fits, full sleeves and hoodies with original comic art, funny memes and your designs.',label:'CREATIVE TEES ↗',image:'assets/editorial/apparel.webp',alt:'Green original comic-style graphic T-shirt on a fashion model'},
  {category:'Photo Gifts',title:'MEMORIES',heading:'KEEP THE',highlight:'MOMENT.',tag:'02 / PHOTO GIFTS',note:'Frame photos, capture adventures and print meaningful memories onto calendars, mini frames and special keepsakes.',label:'PHOTO GIFTS ↗',image:'assets/editorial/memories.webp',alt:'Premium scenic photo frames and printed mini calendars'},
  {category:'Events & DIY',title:'EVENTS',heading:'MAKE IT',highlight:'MEMORABLE.',tag:'03 / PARTY CREATIONS',note:'Birthday photo booths, photo magnet giveaways, keychains, kids DIY birthday activities and event gifts.',label:'EVENT MAGIC ↗',image:'assets/products/photo-booth.svg',alt:'Photo booth concept with personalized party memories'},
  {category:'Drinkware',title:'DRINKWARE',heading:'SIP IN',highlight:'STYLE.',tag:'04 / DRINKWARE LAB',note:'Monster-inspired tumblers, scenic drink bottles and imaginative printed mugs made to fit your personality.',label:'CUPS & TUMBLERS ↗',image:'assets/editorial/drinkware.webp',alt:'Monster illustrated tumbler and scenic branded coffee mug'},
  {category:'Accessories',title:'ACCESSORIES',heading:'SMALL BUT',highlight:'ICONIC.',tag:'05 / EVERYDAY OBJECTS',note:'Custom caps, tote bags, photo keychains and acrylic magnets — little details with big personality.',label:'TINY ICONS ↗',image:'assets/editorial/acrylic.webp',alt:'Custom acrylic photo keychains and personalized magnets'},
  {category:'Tech & Desk',title:'DESKTECH',heading:'YOUR OWN',highlight:'SPACE.',tag:'06 / DESK ESSENTIALS',note:'Personalized phone cases, mousepads, planners and gifts that make everyday work more interesting.',label:'MAKE IT PERSONAL ↗',image:'assets/products/phone-case.svg',alt:'Personalized graphic phone case concept'},
  {category:'Print & Business',title:'BUSINESS',heading:'MAKE YOUR',highlight:'MARK.',tag:'07 / BRAND LAB',note:'Business cards, printed takeaway boxes, branded tote bags, corporate gifts and event packs for bold businesses.',label:'BRAND IT ↗',image:'assets/editorial/business.webp',alt:'Green and white custom printed packaging bags and gift boxes'}
 ];
 const $=(id)=>document.getElementById(id); const root=$('ed-hero-stage');if(!root)return;
 let index=0,start=0,timer=null;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const rail=$('ed-category-rail');
 rail.innerHTML=slides.map((s,i)=>`<button type="button" class="ed-tray-card" data-slide="${i}" aria-label="Show ${s.category} collection" aria-current="${i===0}"><img src="${s.image}" loading="lazy" alt=""><span><b>${s.title}</b><small>${s.tag.replace(/^\d+\s*\/\s*/, '')}</small></span><i aria-hidden="true">↗</i></button>`).join('');
 function show(i){index=(i+slides.length)%slides.length;const s=slides[index];const photo=$('ed-hero-photo');photo.classList.add('is-changing');const swap=()=>{photo.src=s.image;photo.alt=s.alt;photo.classList.remove('is-changing')};if(reduced)swap();else window.setTimeout(swap,180);$('ed-hero-watermark').textContent=s.title;$('ed-hero-index').innerHTML=String(index+1).padStart(2,'0')+'<span> / 07</span>';$('ed-hero-kicker').textContent=s.tag;$('ed-hero-title').innerHTML=s.heading+'<br><em>'+s.highlight+'</em>';$('ed-hero-title').classList.toggle('is-long',s.highlight.length>9);$('ed-hero-description').textContent=s.note;$('ed-floating-label').textContent=s.label;$('ed-hero-current').textContent=s.title+' / '+String(index+1).padStart(2,'0');rail.querySelectorAll('[data-slide]').forEach((button,j)=>button.setAttribute('aria-current',String(j===index)));start=Date.now();const p=$('ed-hero-progress');if(p)p.style.width='0%'}
 function next(){show(index+1)}
 $('ed-hero-prev').addEventListener('click',()=>show(index-1));$('ed-hero-next').addEventListener('click',next);
 rail.addEventListener('click',(e)=>{const b=e.target.closest('[data-slide]');if(!b)return;show(Number(b.dataset.slide))});
 $('ed-hero-shop').addEventListener('click',()=>{const c=slides[index].category;if(typeof pickCategory==='function')pickCategory(c);document.getElementById('shop').scrollIntoView({behavior:reduced?'auto':'smooth'});});
 if(!reduced){timer=setInterval(()=>{const paused=document.hidden||root.matches(':hover')||root.contains(document.activeElement);if(paused){start=Date.now();return}const pct=Math.min(100,(Date.now()-start)/65);$('ed-hero-progress').style.width=pct+'%';if(pct>=100)next();},110)}
 // Load the author's verified ThreeUI source only when the local source has been installed.
 const frame=$('ed-shelf-frame');const fallback=$('ed-shelf-fallback');
 if(frame&&fallback&&window.location.protocol.startsWith('http')){
  fetch('threeui/complete-shelf-custom.html',{method:'HEAD',cache:'no-store'}).then(r=>{
   if(r.ok&&r.headers.get('content-type')?.includes('html')){frame.src=frame.dataset.localSrc;frame.hidden=false;fallback.hidden=true;}
  }).catch(()=>{});
 }
})();
