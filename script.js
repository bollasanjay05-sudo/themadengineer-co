'use strict';

/**
 * THE MAD ENGINEER & CO. — STORE SETTINGS
 * IMPORTANT: Enter your BUSINESS WhatsApp number with country code and digits only.
 * Example format: '37120000000' (illustrative only; NOT a real business number).
 * If left empty, WhatsApp opens as a share flow rather than a direct business chat.
 */
const STORE = {
  brand: 'THE MAD ENGINEER & CO.',
  whatsappNumber: '',  // <-- SET YOUR REAL BUSINESS WHATSAPP NUMBER HERE
  instagram: 'https://www.instagram.com/themadengineerandco/',
};

const CATEGORIES = ['All', 'Apparel', 'Photo Gifts', 'Events & DIY', 'Drinkware', 'Accessories', 'Tech & Desk', 'Print & Business'];
const DESIGN_STYLES = ['Your own artwork / photo', 'Original comic hero', 'Funny meme / slogan', 'Nature & scenery', 'Cute character art', 'Minimal brand logo', 'Help me create a design'];

// Visuals are example concepts. Confirm production method, materials, minimum quantities and availability before accepting orders.
const PRODUCTS = [
  {id:'half-sleeve-tee',name:'Graphic Half Sleeve Tee',category:'Apparel',photo:'tee-short',image:'tee-short',tag:'FUNNY MEME PRINTS',description:'Original meme art, custom names, comic graphics or your own design.',optionLabel:'SIZE',options:['XS','S','M','L','XL','2XL','3XL','Custom size'],colors:['White','Lime Green']},
  {id:'full-sleeve-tee',name:'Comic Full Sleeve Tee',category:'Apparel',photo:'tee-long',image:'tee-long',tag:'COMIC ART DROP',description:'Make a statement with an original superhero-style illustration.',optionLabel:'SIZE',options:['XS','S','M','L','XL','2XL','3XL','Custom size'],colors:['White','Lime Green']},
  {id:'hoodie',name:'Superhero Graphic Hoodie',category:'Apparel',photo:'hoodie',image:'hoodie',tag:'ORIGINAL HERO ART',description:'Premium-feel comfort with bold hero, illustration or photo prints.',optionLabel:'SIZE',options:['XS','S','M','L','XL','2XL','3XL'],colors:['White','Lime Green']},
  {id:'tumbler',name:'Monster & Art Tumblers',category:'Drinkware',photo:'tumbler',image:'tumbler',tag:'MONSTER VIBES',description:'Fun original monster faces, slime art, gradients and custom names.',optionLabel:'TYPE',options:['With straw','With travel lid','Other size / discuss'],colors:['White','Lime Green']},
  {id:'photo-booth',name:'Photo Booth for Events',category:'Events & DIY',image:'photo-booth',tag:'EVENT SERVICE',description:'A photo booth experience for birthdays, college events and celebrations; request setup and print options.',optionLabel:'EVENT TYPE',options:['Birthday party','College / campus event','Corporate event','Wedding / celebration','Other event'],colors:[]},
  {id:'event-keychain',name:'Event Photo Keychains',category:'Events & DIY',image:'photo-keychain',tag:'INSTANT KEEPSAKES',description:'Personalized acrylic photo keychains for birthdays, parties and events.',optionLabel:'SHAPE',options:['Circle','Square','Heart','Custom / discuss'],colors:[]},
  {id:'event-magnet',name:'Event Photo Fridge Magnets',category:'Events & DIY',image:'photo-magnet',tag:'TAKE THE MEMORY HOME',description:'Turn event photos into small personalized fridge magnet keepsakes.',optionLabel:'SHAPE',options:['Square','Rectangle','Circle','Discuss shape'],colors:[]},
  {id:'diy-birthday',name:'Kids Birthday DIY Kits',category:'Events & DIY',image:'diy-birthday',tag:'PARTY FAVOURITE',description:'Craft kits for little creators—paint, decorate and take home a memory.',optionLabel:'AGE GROUP',options:['Ages 3–5 (adult supervision)','Ages 6–8','Ages 9–12','Mixed ages / discuss'],colors:[]},
  {id:'photo-frame',name:'Personalized Photo Frames',category:'Photo Gifts',image:'photo-frame',tag:'FRAME YOUR FAVOURITES',description:'Photo memories, travel scenes and family moments in a personalized frame.',optionLabel:'SIZE',options:['Small','Medium','Large','Custom'],colors:[]},
  {id:'calendar',name:'Personalized Photo Calendars',category:'Photo Gifts',image:'desk-calendar',tag:'EVERY MONTH A MEMORY',description:'A year of personal photos, scenic views and dates worth remembering.',optionLabel:'FORMAT',options:['Desk calendar','Wall calendar','Photo calendar','Discuss format'],colors:[]},
  {id:'mini-calendar',name:'Mini Photo Calendars',category:'Photo Gifts',image:'mini-calendar',tag:'TINY DESK JOY',description:'Mini personalized desktop calendars, lovely as return gifts.',optionLabel:'FORMAT',options:['Mini stand','Mini spiral','Pocket size / discuss'],colors:[]},
  {id:'bottle',name:'Scenery Water Bottles',category:'Drinkware',photo:'bottle',image:'bottle',tag:'LANDSCAPE ART',description:'Beautiful mountains, forests, custom quotes and travel-inspired bottle prints.',optionLabel:'TYPE',options:['Insulated bottle','Standard bottle','Discuss capacity'],colors:['White','Lime Green']},
  {id:'polo',name:'Custom Polo Shirts',category:'Apparel',photo:'polo',image:'polo',tag:'CLEAN & PERSONAL',description:'Minimal custom printed teamwear or college group shirts.',optionLabel:'SIZE',options:['XS','S','M','L','XL','2XL','3XL'],colors:['White','Lime Green']},
  {id:'cap',name:'Printed Caps',category:'Apparel',photo:'cap',image:'cap',tag:'SOMETHING FUN',description:'Fun expressions, names and logos on comfy caps.',optionLabel:'STYLE',options:['Baseball','Dad cap','Trucker','Discuss style'],colors:['White','Lime Green']},
  {id:'mug',name:'Meme & Photo Mugs',category:'Drinkware',photo:'mug',image:'mug',tag:'MORNING LAUGHS',description:'Personalized mugs with student memes, doodles, pet portraits and names.',optionLabel:'SIZE',options:['Standard','Large','Discuss size'],colors:['White','Lime Green']},
  {id:'photo-magnets',name:'Photo Fridge Magnets',category:'Photo Gifts',photo:'magnet',image:'photo-magnet',tag:'SMALL BIG MEMORIES',description:'Your favourite picture in a beautiful custom acrylic fridge magnet.',optionLabel:'SHAPE',options:['Circle','Square','Rectangle','Custom shape'],colors:[]},
  {id:'photo-keychain',name:'Personal Photo Keychains',category:'Photo Gifts',photo:'keychain',image:'photo-keychain',tag:'TAKE THEM WITH YOU',description:'Pocket-sized photo memories, birthday messages and friendship moments.',optionLabel:'MATERIAL',options:['Acrylic','Photo insert','Discuss options'],colors:[]},
  {id:'diy-paint',name:'Paint & Create DIY Kit',category:'Events & DIY',image:'diy-paint',tag:'KIDS CREATE',description:'A thoughtful paint-and-decorate activity for children’s parties.',optionLabel:'KIT TYPE',options:['Painting kit','Decorating kit','Mixed crafts','Build my own'],colors:[]},
  {id:'photo-strip',name:'Event Photo Strips',category:'Events & DIY',image:'photo-strip',tag:'PARTY PHOTO FAVOURITE',description:'Party and photobooth photo strips with personalized captions.',optionLabel:'LAYOUT',options:['3 pictures','4 pictures','Custom event template'],colors:[]},
  {id:'photo-collage',name:'Collage Photo Frames',category:'Photo Gifts',image:'photo-collage',tag:'COLLECT THE MOMENTS',description:'Multiple memories in one customized collage frame.',optionLabel:'LAYOUT',options:['2 photos','4 photos','6 photos','Custom layout'],colors:[]},
  {id:'acrylic-photo',name:'Acrylic Photo Keepsakes',category:'Photo Gifts',image:'acrylic-photo',tag:'CLEARLY PERSONAL',description:'Modern acrylic photo gifts for birthdays, couples and friends.',optionLabel:'STYLE',options:['Photo block','Acrylic stand','Discuss style'],colors:[]},
  {id:'memory-calendar',name:'DIY Memory Calendars',category:'Photo Gifts',image:'memory-calendar',tag:'MAKE EVERY MONTH',description:'Build a personalized keepsake calendar with your favourite photos and notes.',optionLabel:'TYPE',options:['Photo & notes','Memory scrapbook','Custom layout'],colors:[]},
  {id:'birthday-favors',name:'DIY Party Return Gifts',category:'Events & DIY',image:'birthday-favors',tag:'BIRTHDAY GOODIES',description:'Creative, custom party return gifts and children’s craft packs.',optionLabel:'PACK SIZE',options:['1–10 kits','11–25 kits','26–50 kits','50+ / discuss'],colors:[]},
  {id:'tote',name:'Art Print Tote Bags',category:'Accessories',photo:'tote',image:'tote',tag:'MEOWCHANICAL!',description:'Cute illustrations, witty slogans and customized artwork for everyday totes.',optionLabel:'STYLE',options:['Canvas tote','Premium tote','Custom material'],colors:['White','Lime Green']},
  {id:'backpack',name:'Custom Printed Backpacks',category:'Accessories',photo:'backpack',image:'backpack',tag:'CARRY YOUR STORY',description:'School, work and travel bags with printed artwork or logos.',optionLabel:'STYLE',options:['Classic backpack','Compact backpack','Discuss material'],colors:['White','Lime Green']},
  {id:'glass',name:'Personalized Glasses',category:'Drinkware',image:'glass',tag:'SIP PERSONAL',description:'Custom names and artwork for drink glasses and gift sets.',optionLabel:'TYPE',options:['Standard glass','Frosted glass','Custom'],colors:[]},
  {id:'coaster',name:'Printed Photo Coasters',category:'Drinkware',image:'photo-coaster',tag:'DESK-SIZED ART',description:'Coffee coasters with travel scenery, pets, memories and artwork.',optionLabel:'SHAPE',options:['Round','Square','Set of four'],colors:[]},
  {id:'keychain',name:'Acrylic Name Keychains',category:'Accessories',image:'keychain',tag:'A PERSONAL TOUCH',description:'Fun acrylic name tags, illustrated charms or photo designs.',optionLabel:'SHAPE',options:['Round','Rectangle','Custom'],colors:[]},
  {id:'pendant',name:'Custom Pendants',category:'Accessories',image:'pendant',tag:'WEAR YOUR IDEA',description:'Personalized pendants with initials or original illustrations.',optionLabel:'STYLE',options:['Round','Custom shape','Discuss'],colors:[]},
  {id:'stickers',name:'Sticker Sheets',category:'Accessories',image:'stickers',tag:'DECORATE EVERYTHING',description:'Original characters, fun quotes, cute art and custom sticker sheets.',optionLabel:'FINISH',options:['Matte','Gloss','Transparent / ask'],colors:[]},
  {id:'enamel-pin',name:'Custom Pins & Badges',category:'Accessories',image:'pin',tag:'MINI PERSONALITY',description:'Wearable fun with illustrated enamel-style pins and badges.',optionLabel:'STYLE',options:['Pin badge','Enamel-style','Custom / discuss'],colors:[]},
  {id:'memory-display',name:'Personalized Memory Displays',category:'Photo Gifts',image:'memory-display',tag:'YOUR STORY ON A SHELF',description:'A small personalized desk display featuring meaningful moments.',optionLabel:'STYLE',options:['Standing display','Decorative keepsake','Discuss size'],colors:[]},
  {id:'poster',name:'Metal Wall Posters',category:'Print & Business',image:'comic-poster',tag:'MAKE YOUR WALL A HERO',description:'Original comic, motivational or photo-inspired poster artwork.',optionLabel:'SIZE',options:['Small','Medium','Large','Custom size'],colors:[]},
  {id:'businesscards',name:'Business Cards',category:'Print & Business',image:'business-cards',tag:'MAKE THE INTRO COUNT',description:'Professional branded business cards in your own style.',optionLabel:'FINISH',options:['Matte','Gloss','Premium / discuss'],colors:[]},
  {id:'takeawayboxes',name:'Printed Takeaway Boxes',category:'Print & Business',image:'takeaway-box',tag:'UNBOX YOUR BRAND',description:'Packaging for takeaways, food trucks and special events.',optionLabel:'PACKAGING',options:['Food box','Pizza box','Gift packaging','Other / discuss'],colors:[]},
  {id:'lanyards',name:'Event Lanyards',category:'Print & Business',image:'lanyard',tag:'EVENT ESSENTIALS',description:'Custom printed event passes, identification and team lanyards.',optionLabel:'STYLE',options:['Standard','Badge + strap','Custom'],colors:[]},
  {id:'mousepad',name:'Creative Mousepads',category:'Tech & Desk',image:'mousepad',tag:'YOUR DESK, YOUR WAY',description:'Funny desk quotes, personal artwork and scenic mousepads.',optionLabel:'SIZE',options:['Standard','Extended','Custom'],colors:[]},
  {id:'phonecase',name:'Illustrated Phone Cases',category:'Tech & Desk',image:'phone-case',tag:'POCKET ART',description:'Original comic characters, scenic artwork and personalized phone cases.',optionLabel:'DEVICE MODEL',options:['iPhone (model in notes)','Samsung (model in notes)','Other (model in notes)'],colors:['White','Lime Green']},
  {id:'notebooks',name:'Printed Notebooks',category:'Tech & Desk',image:'notebook',tag:'IDEAS LIVE HERE',description:'Student notebooks, diaries and planners with fun covers.',optionLabel:'FORMAT',options:['Spiral','Hardcover','Planner','Discuss'],colors:[]},
];

const PRODUCT_META = {"half-sleeve-tee":["T-Shirts","Meme Lab","meme"],"full-sleeve-tee":["T-Shirts","Comicverse","comic"],"hoodie":["Hoodies","Comicverse","comic"],"polo":["Polo Shirts","Everyday Edit","minimal"],"cap":["Caps","Everyday Edit","meme"],"tumbler":["Tumblers","Monster Lab","monster"],"bottle":["Bottles","Scenic Escape","scenic"],"mug":["Mugs","Meme Lab","meme"],"glass":["Glasses","Minimal Edit","minimal"],"coaster":["Coasters","Scenic Escape","scenic"],"photo-booth":["Photo Booth","Event Experiences","photo"],"event-keychain":["Event Keepsakes","Party Memories","photo"],"event-magnet":["Event Keepsakes","Party Memories","photo"],"diy-birthday":["Birthday DIY Kits","Little Creators","birthday"],"diy-paint":["Birthday DIY Kits","Little Creators","birthday"],"photo-strip":["Photo Booth","Event Experiences","photo"],"birthday-favors":["Party Favours","Little Creators","birthday"],"photo-frame":["Photo Frames","Memory Lane","photo"],"photo-collage":["Photo Frames","Memory Lane","photo"],"calendar":["Calendars","Memory Lane","scenic"],"mini-calendar":["Calendars","Memory Lane","photo"],"memory-calendar":["Calendars","Memory Lane","photo"],"photo-magnets":["Fridge Magnets","Memory Lane","scenic"],"photo-keychain":["Photo Keychains","Memory Lane","photo"],"acrylic-photo":["Acrylic Keepsakes","Memory Lane","photo"],"memory-display":["Acrylic Keepsakes","Memory Lane","photo"],"tote":["Tote Bags","Meme Lab","cute"],"backpack":["Backpacks","Scenic Escape","scenic"],"keychain":["Acrylic Keychains","Your Design","personal"],"pendant":["Pendants","Your Design","personal"],"stickers":["Stickers","Cute Studio","cute"],"enamel-pin":["Badges & Pins","Cute Studio","cute"],"mousepad":["Mousepads","Meme Lab","meme"],"phonecase":["Phone Cases","Comicverse","comic"],"notebooks":["Notebooks","Meme Lab","meme"],"poster":["Metal Posters","Comicverse","comic"],"businesscards":["Business Cards","Brand Studio","minimal"],"takeawayboxes":["Takeaway Packaging","Brand Studio","minimal"],"lanyards":["Lanyards","Brand Studio","minimal"]};
const EXTRA_DESIGNS = {"half-sleeve-tee":[["Coffee Loading Tee","Meme Lab","meme","COFFEE.EXE"],["Green Guardian Tee","Comicverse","comic","HERO MODE"],["Forest Weekend Tee","Scenic Escape","scenic","OFF GRID"],["Your Photo Tee","Your Design","photo","YOUR MOMENT"],["Typographic Signature Tee","Minimal Edit","minimal","LESS IS MORE"]],"full-sleeve-tee":[["Power Mode Full Sleeve","Comicverse","comic","POWER MODE"],["404 Long Sleeve","Meme Lab","meme","ERROR 404"],["Mountain Trail Long Sleeve","Scenic Escape","scenic","GO EXPLORE"],["Custom Name Long Sleeve","Your Design","personal","YOUR NAME"]],"hoodie":[["Comic Thunder Hoodie","Comicverse","comic","POWER UP"],["Deadline Mode Hoodie","Meme Lab","meme","NO SLEEP"],["Forest Explorer Hoodie","Scenic Escape","scenic","WILD SIDE"],["Personalized Initial Hoodie","Your Design","personal","YOUR INITIAL"]],"polo":[["Team Edition Polo","Brand Studio","minimal","YOUR TEAM"]],"cap":[["Smiley Club Cap","Cute Studio","cute","GOOD VIBES"],["Custom Name Cap","Your Design","personal","YOUR NAME"]],"tumbler":[["Slime Monster Tumbler","Monster Lab","monster","MONSTER"],["Sunset Travel Tumbler","Scenic Escape","scenic","WANDER"],["Photo Collage Tumbler","Your Design","photo","YOUR STORY"]],"bottle":[["Alpine Green Bottle","Scenic Escape","scenic","MOUNTAIN AIR"],["Pixel Hero Bottle","Comicverse","comic","LEVEL UP"],["Your Name Bottle","Your Design","personal","YOUR NAME"]],"mug":[["Debug My Life Mug","Meme Lab","meme","DEBUG"],["Little Frog Mug","Cute Studio","cute","HOP HAPPY"],["Photo Memories Mug","Your Design","photo","BEST DAY"]],"glass":[["Wedding Name Glass","Your Design","personal","CHEERS"]],"coaster":[["Photo Memory Coaster","Your Design","photo","GOOD DAYS"]],"photo-magnets":[["Mini Landscape Magnet","Scenic Escape","scenic","HAPPY PLACE"],["Birthday Photo Magnet","Party Memories","photo","BEST DAY"]],"photo-keychain":[["Best Friends Keychain","Memory Lane","photo","US FOREVER"],["Custom Initial Keychain","Your Design","personal","A + S"]],"photo-frame":[["Travel Memory Frame","Scenic Escape","scenic","WHERE WE WENT"],["Birthday Portrait Frame","Party Memories","birthday","CELEBRATE"]],"calendar":[["Nature Desk Calendar","Scenic Escape","scenic","2027"],["Family Photo Calendar","Memory Lane","photo","OUR YEAR"]],"mini-calendar":[["Tiny Travel Calendar","Scenic Escape","scenic","2027"]],"diy-birthday":[["Make-a-Magnet Birthday Kit","Little Creators","birthday","MAKE & KEEP"],["Paint Your Keychain Kit","Little Creators","cute","PAINT IT"]],"diy-paint":[["Little Artist Craft Box","Little Creators","birthday","LET’S MAKE"]],"photo-booth":[["Instant Print Party Booth","Event Experiences","photo","SNAP & SMILE"]],"tote":[["Cool Cat Tote","Cute Studio","cute","MEOW!"],["Brand Logo Tote","Brand Studio","minimal","YOUR BRAND"]],"backpack":[["Mountain Escape Backpack","Scenic Escape","scenic","TRAVEL LIGHT"]],"keychain":[["Mini Comic Keychain","Comicverse","comic","HERO"]],"pendant":[["Custom Monogram Pendant","Your Design","personal","INITIALS"]],"phonecase":[["Hero Energy Phone Case","Comicverse","comic","BOLD MOVES"],["Scenic Escape Phone Case","Scenic Escape","scenic","TAKE A HIKE"],["Photo Memory Phone Case","Your Design","photo","YOUR PHOTO"]],"mousepad":[["Coding Club Mousepad","Meme Lab","meme","CTRL+Z"],["Mountain Desk Mat","Scenic Escape","scenic","FOCUS"]],"notebooks":[["Study Survival Notebook","Meme Lab","meme","BIG IDEAS"]],"poster":[["Retro Hero Metal Poster","Comicverse","comic","BE BOLD"],["Mountain Metal Poster","Scenic Escape","scenic","ADVENTURE"]],"businesscards":[["Creative Studio Business Cards","Brand Studio","minimal","YOU. INC."]],"takeawayboxes":[["Takeaway Brand Kit","Brand Studio","minimal","YOUR BRAND"]],"lanyards":[["Event Crew Lanyards","Brand Studio","personal","CREW"]],"stickers":[["Funny Student Sticker Pack","Meme Lab","meme","STAY MAD"]],"enamel-pin":[["Happy Badge Set","Cute Studio","cute","SMILE"]],"acrylic-photo":[["Spotify-Style Photo Stand","Memory Lane","photo","OUR SONG"]],"memory-display":[["Anniversary Memory Display","Memory Lane","photo","TOGETHER"]],"photo-strip":[["Retro Photo Strip","Event Experiences","photo","GOOD TIMES"]],"event-keychain":[["Live Photo Keychain Station","Party Memories","photo","TAKE ME HOME"]],"event-magnet":[["Live Photo Magnet Station","Party Memories","photo","SNAP & KEEP"]],"birthday-favors":[["Tiny Artist Party Favours","Little Creators","birthday","PARTY TIME"]],"photo-collage":[["Best Friends Collage Frame","Memory Lane","photo","FOREVER"]],"memory-calendar":[["Scrapbook Memory Calendar","Memory Lane","photo","MY 12 MONTHS"]]};
const ALL_CATEGORIES = ['Apparel','Drinkware','Photo Gifts','Accessories','Tech & Desk','Print & Business','Events & DIY'];
const CATEGORY_COPY = {
  'Apparel':['EVERYDAY WEAR, EXTRA PERSONAL','Wearable ideas, designed your way.'],
  'Drinkware':['YOUR FAVOURITE SIP, REMIXED','Drinkware worth showing off.'],
  'Photo Gifts':['KEEP THE MOMENT CLOSE','Turn photos into objects with meaning.'],
  'Accessories':['LITTLE DETAILS. BIG FEELINGS.','Carry something that feels like you.'],
  'Tech & Desk':['MAKE YOUR SPACE YOURS','Artful everyday essentials.'],
  'Print & Business':['YOUR BRAND, BUT LOUDER','Printed pieces for big ambitions.'],
  'Events & DIY':['CREATE THE MEMORY','Parties, activities and mini keepsakes.']
};
const CATALOG_PRODUCTS=PRODUCTS.flatMap(p=>{
  const [subcategory,collection]=PRODUCT_META[p.id]||['Signature Items','Everyday Edit'];
  const main={...p,subcategory,collection,baseId:p.id};
  const variants=(EXTRA_DESIGNS[p.id]||[]).map((v,i)=>({...p,
    id:p.id+'--'+(i+1),baseId:p.id,name:v[0],subcategory,collection:v[1],
    graphic:v[2],graphicText:v[3],imageOverride:'assets/mockups/'+p.id+'--'+(i+1)+'.svg',
    tag:(v[1]+' DROP').toUpperCase(),description:'An original '+v[1].toLowerCase()+' design on '+p.name.toLowerCase()+'. Personalize the text, photo or artwork when requesting your quote.'
  }));
  return [main,...variants];
});
const PRODUCT_BY_ID = Object.fromEntries(CATALOG_PRODUCTS.map(p => [p.id,p]));
const CART_KEY = 'mad_engineer_cart_v2';
const DETAILS_KEY = 'mad_engineer_checkout_v1';
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const clamp = (n,min,max) => Math.min(max,Math.max(min,Number.isFinite(n)?n:min));
const uid = () => (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
let cart = [];
try { const raw = JSON.parse(localStorage.getItem(CART_KEY)||'[]'); if(Array.isArray(raw))cart = raw.filter(x=>PRODUCT_BY_ID[x.id]).map(x=>({...x,quantity:clamp(parseInt(x.quantity,10),1,9999)})); }catch(_err){}
let category = 'Apparel'; let subcategory = 'T-Shirts'; let collection = 'All'; let search = ''; let sorting = 'featured'; let showAll = false;
let activeProduct = null; let activeColor = ''; let activeQty = 1;
let drawerOpen = false; let modalOpen = false; let toastTimer; let restoreFocus = null;

document.documentElement.classList.add('js');
$('current-year').textContent = new Date().getFullYear();

function countItems(){return cart.reduce((sum,item)=>sum+item.quantity,0);}
function persistCart(){try{localStorage.setItem(CART_KEY,JSON.stringify(cart));}catch(_err){} updateCartCount();}
function updateCartCount(){const total=countItems();$('cart-count').textContent=total;$('drawer-count').textContent=`(${total})`;$('cart-count').setAttribute('aria-label',`${total} items`);}
function assetFor(p){return p.imageOverride || (p.photo?`assets/photos/${p.photo}.webp`:`assets/products/${p.image}.svg`);}
function categorySlug(name){return name==='All'?'all':name.toLowerCase().replace(/[^a-z0-9]+/g,'-');}

function getCategoryItems(c){return CATALOG_PRODUCTS.filter(p=>p.category===c);}
function getSubcategoryItems(c,sub){return getCategoryItems(c).filter(p=>sub==='All'||p.subcategory===sub);}
function groupsFrom(items,key){return [...new Set(items.map(p=>p[key]))];}
function activePath(){return [category,subcategory==='All'?'ALL TYPES':subcategory,collection==='All'?'ALL COLLECTIONS':collection].map(x=>x.toUpperCase()).join(' / ');}
function thumbFor(items){return assetFor(items.find(p=>p.photo)||items[0]||CATALOG_PRODUCTS[0]);}
function renderCategories(){
  const rail=$('category-rail'),old=rail.scrollLeft;
  rail.innerHTML=ALL_CATEGORIES.map((c,i)=>{
    const items=getCategoryItems(c),selected=c===category;
    return `<button type="button" class="catalog-tile category-tile ${selected?'selected':''}" data-pick-category="${escapeHTML(c)}" aria-pressed="${selected}"><span class="catalog-tile-top">0${i+1} / ${items.length} DESIGNS</span><span class="tile-thumb"><img src="${thumbFor(items)}" alt="" loading="lazy"></span><span class="tile-bottom"><strong>${escapeHTML(c)}</strong><b aria-hidden="true">↗</b></span></button>`;
  }).join('');
  rail.scrollLeft=old;
}
function renderSubcategories(){
  const items=getCategoryItems(category),subcats=groupsFrom(items,'subcategory');
  const rail=$('subcategory-rail'),old=rail.scrollLeft;
  const choices=['All',...subcats];
  rail.innerHTML=choices.map((c,i)=>{
    const matching=c==='All'?items:items.filter(p=>p.subcategory===c);
    const selected=subcategory===c;
    return `<button type="button" class="catalog-tile subcategory-tile ${selected?'selected':''}" data-pick-subcategory="${escapeHTML(c)}" aria-pressed="${selected}"><span class="catalog-tile-top">${String(i+1).padStart(2,'0')} / ${matching.length} PIECES</span><span class="tile-thumb"><img src="${thumbFor(matching)}" alt="" loading="lazy" /></span><span class="tile-bottom"><strong>${escapeHTML(c==='All'?'All '+category:c)}</strong><b aria-hidden="true">↗</b></span></button>`;
  }).join('');
  rail.scrollLeft=old;
  $('subcategory-heading').innerHTML=`SHOP ${escapeHTML(category.toUpperCase())}<span class="lime-dot">.</span>`;
  $('subcategory-description').textContent=CATEGORY_COPY[category]?.[1]||'Explore all product types in this category.';
}
function renderCollections(){
  const items=getSubcategoryItems(category,subcategory),collections=groupsFrom(items,'collection');
  const rail=$('collection-rail'),old=rail.scrollLeft;
  const options=['All',...collections];
  rail.innerHTML=options.map((c,i)=>{
    const matching=c==='All'?items:items.filter(p=>p.collection===c);
    const selected=collection===c;
    const image=matching.find(p=>p.imageOverride)||matching[0]||items[0];
    const label=c==='All'?'EXPLORE ALL COLLECTIONS':c.toUpperCase();
    return `<button type="button" class="catalog-tile collection-tile ${selected?'selected':''}" data-pick-collection="${escapeHTML(c)}" aria-pressed="${selected}"><span class="collection-poster"><img src="${assetFor(image)}" alt="" loading="lazy"/><span class="collection-number">${String(i+1).padStart(2,'0')} / ${matching.length} STYLES</span></span><span class="collection-label"><strong>${escapeHTML(label)}</strong><span aria-hidden="true">↗</span></span></button>`;
  }).join('');
  rail.scrollLeft=old;
  $('collection-description').textContent=`${subcategory==='All'?category:subcategory} / ${collections.length} signature collections / styles that feel personal.`;
}
function renderProducts(){
  // A typed search scans the whole catalog; otherwise the hierarchy applies.
  let items=(search?CATALOG_PRODUCTS:getSubcategoryItems(category,subcategory).filter(p=>collection==='All'||p.collection===collection))
    .filter(p=>`${p.name} ${p.category} ${p.subcategory} ${p.collection} ${p.description} ${p.tag}`.toLowerCase().includes(search));
  if(sorting==='az')items=[...items].sort((a,b)=>a.name.localeCompare(b.name));
  if(sorting==='za')items=[...items].sort((a,b)=>b.name.localeCompare(a.name));
  const displayed=showAll?items:items.slice(0,12);
  $('product-grid').innerHTML=displayed.map((p,i)=>`<article class="product-card" style="animation-delay:${Math.min(i%12,7)*45}ms"><button class="product-image" type="button" data-view="${escapeHTML(p.id)}" aria-label="Customize ${escapeHTML(p.name)}"><img src="${assetFor(p)}" alt="Sample design: ${escapeHTML(p.name)}" loading="lazy" /><span class="product-badge ${i%7===0?'highlight':''}">${escapeHTML(p.collection.toUpperCase())}</span><span class="product-quick" aria-hidden="true">↗</span></button><div class="product-body"><span class="product-cat">${escapeHTML(p.category.toUpperCase())} / ${escapeHTML(p.subcategory.toUpperCase())}</span><div class="product-title-row"><h3 class="product-title">${escapeHTML(p.name)}</h3><span aria-hidden="true">↗</span></div><p class="product-desc">${escapeHTML(p.description)}</p><div class="product-foot"><span>CUSTOM MADE / REQUEST QUOTE</span><button type="button" data-view="${escapeHTML(p.id)}">CUSTOMIZE ↗</button></div></div></article>`).join('');
  $('results-summary').textContent=`${search?'SEARCH RESULTS':collection==='All'?'ALL PRINTS':collection.toUpperCase()} / ${displayed.length} OF ${items.length} PRODUCTS`;
  $('no-results').hidden=items.length>0;
  $('show-more-wrap').hidden=items.length<=displayed.length;
  const context=search?`SEARCH RESULTS FOR “${search}”`:(subcategory==='All'?category:subcategory)+(collection==='All'?'':' / '+collection);
  $('product-list-heading').innerHTML=`${escapeHTML(context.toUpperCase())}<span class="lime-dot">.</span>`;
  $('product-list-description').textContent=search?'Search across every collection and category.':`Selected from ${category} / ${subcategory}. Choose any image to personalize it.`;
  $('browse-path').textContent=search?`SEARCHING THE ENTIRE STORE / ${search.toUpperCase()}`:activePath();
}
function renderCatalog(){
  renderCategories();renderSubcategories();renderCollections();renderProducts();
}
function resetFilters(){category='Apparel';subcategory='T-Shirts';collection='All';search='';sorting='featured';showAll=false;$('product-search').value='';$('product-sort').value='featured';renderCatalog();}
function pickCategory(c){
  if(!ALL_CATEGORIES.includes(c))return;
  category=c;subcategory=groupsFrom(getCategoryItems(c),'subcategory')[0]||'All';collection='All';search='';showAll=false;$('product-search').value='';renderCatalog();
  $('subcategory-level').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
}
function pickSubcategory(c){
  const names=['All',...groupsFrom(getCategoryItems(category),'subcategory')];if(!names.includes(c))return;
  subcategory=c;collection='All';search='';showAll=false;$('product-search').value='';renderSubcategories();renderCollections();renderProducts();
}
function pickCollection(c){
  const names=['All',...groupsFrom(getSubcategoryItems(category,subcategory),'collection')];if(!names.includes(c))return;
  collection=c;search='';showAll=false;$('product-search').value='';renderCollections();renderProducts();
}

function revealSetup(){
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}}),{rootMargin:'0px 0px -40px 0px',threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

function lockScreen(){document.body.classList.add('scroll-lock');$('overlay').hidden=false;requestAnimationFrame(()=>$('overlay').classList.add('active'));}
function unlockScreen(){document.body.classList.remove('scroll-lock');$('overlay').classList.remove('active');setTimeout(()=>{if(!drawerOpen&&!modalOpen)$('overlay').hidden=true;},300);}
function openCart(){if(modalOpen)closeModal(false);restoreFocus=document.activeElement;drawerOpen=true;$('cart-drawer').classList.add('open');$('cart-drawer').setAttribute('aria-hidden','false');renderCart();lockScreen();setTimeout(()=>$('close-cart').focus(),80);}
function closeCart(restore=true){drawerOpen=false;$('cart-drawer').classList.remove('open');$('cart-drawer').setAttribute('aria-hidden','true');unlockScreen();if(restore)restoreFocus?.focus?.();}

function openProduct(id){
  const p=PRODUCT_BY_ID[id];if(!p)return;
  if(drawerOpen)closeCart(false);
  restoreFocus=document.activeElement;activeProduct=p;activeQty=1;activeColor=p.colors[0]||'';
  const selectHTML=p.options.length?`<label class="modal-label" for="modal-variant">${escapeHTML(p.optionLabel)}</label><select class="modal-select" id="modal-variant">${p.options.map(o=>`<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join('')}</select>`:'';
  const styleHTML=(!['Events & DIY'].includes(p.category))?`<label class="modal-label" for="modal-style">DESIGN / ARTWORK STYLE</label><select class="modal-select" id="modal-style">${DESIGN_STYLES.map(x=>`<option value="${escapeHTML(x)}">${escapeHTML(x)}</option>`).join('')}</select>`:'';
  const eventHTML=p.category==='Events & DIY'?`<label class="modal-label" for="modal-event-date">EVENT DATE (OPTIONAL)</label><input type="date" class="modal-select" id="modal-event-date" />`:'';
  const colorsHTML=p.colors.length?`<div class="modal-label">COLOUR / BASE</div><div class="color-swatches" id="modal-colors">${p.colors.map(c=>colorButton(c)).join('')}</div>`:'';
  $('product-modal-body').innerHTML=`<div class="modal-visual"><img src="${assetFor(p)}" alt="${escapeHTML(p.name)} custom merchandise illustration" /><span class="modal-visual-badge">MADE FOR YOUR IDEAS ✳</span></div><div class="modal-info"><span class="modal-category">${escapeHTML(p.category.toUpperCase())} / ${escapeHTML((p.subcategory||'CUSTOM PRODUCT').toUpperCase())} / ${escapeHTML((p.collection||'').toUpperCase())}</span><h2 id="modal-title">${escapeHTML(p.name)}</h2><p>${escapeHTML(p.description)} Select the details below and request a personalized quote with your cart.</p>${selectHTML}${colorsHTML}${styleHTML}${eventHTML}<label class="modal-label" for="modal-custom">DESIGN NOTES / CUSTOM TEXT <span style="font-weight:500;color:#4b9d3d">(OPTIONAL)</span></label><textarea class="modal-custom" id="modal-custom" maxlength="400" placeholder="What should we print? Logo, text, finish, exact model or anything else..."></textarea><div class="qty-line"><label>QUANTITY</label><div class="modal-qty"><button type="button" data-modal-qty="-1" aria-label="Decrease quantity">−</button><span id="modal-qty-num">1</span><button type="button" data-modal-qty="1" aria-label="Increase quantity">+</button></div></div><button type="button" class="button button-dark modal-add" id="modal-add">ADD TO MY CART <span>↗</span></button><p class="modal-small">No payment now. You can send your artwork in the WhatsApp chat.</p></div>`;
  modalOpen=true;$('product-modal').classList.add('open');$('product-modal').setAttribute('aria-hidden','false');lockScreen();setTimeout(()=>$('close-modal').focus(),80);
}
function colorButton(color){
  const hex={'White':'#ffffff','Lime Green':'#6aee16','Green':'#4caf2b','Clear':'#f5faf5'}[color]||'#d8e2d5';
  return `<button type="button" class="color-option ${color===activeColor?'active':''}" data-color="${escapeHTML(color)}" aria-pressed="${color===activeColor}"><span class="color-dot" style="background:${hex}"></span>${escapeHTML(color)}</button>`;
}
function closeModal(restore=true){modalOpen=false;activeProduct=null;$('product-modal').classList.remove('open');$('product-modal').setAttribute('aria-hidden','true');unlockScreen();if(restore)restoreFocus?.focus?.();}
function addActiveProduct(){
  if(!activeProduct)return;
  const p=activeProduct;
  const variant=$('modal-variant')?.value||'';
  const color=activeColor;
  const note=$('modal-custom').value.trim();
  const style=$('modal-style')?.value||'';
  const eventDate=$('modal-event-date')?.value||'';
  const same=cart.find(item=>item.id===p.id&&item.variant===variant&&item.color===color&&item.note===note&&item.style===style&&item.eventDate===eventDate);
  if(same){same.quantity=clamp(same.quantity+activeQty,1,9999);}else{cart.push({lineId:uid(),id:p.id,variant,color,style,eventDate,note,quantity:activeQty});}
  persistCart();closeModal(false);toast(`${p.name} added to your cart ✳`);
  const cartBtn=$('cart-trigger');cartBtn.animate?.([{transform:'scale(1)'},{transform:'scale(1.18)'},{transform:'scale(1)'}],{duration:440});
}
function renderCart(){
  updateCartCount();
  const holder=$('cart-items');
  if(!cart.length){holder.innerHTML='<div class="cart-empty"><span class="cart-empty-mark">✳</span><h3>NOTHING IN HERE. YET.</h3><p>Good ideas start somewhere. Pick something from the collection and make it yours.</p><button type="button" class="button button-outline" id="empty-shop">EXPLORE THE DROP ↗</button></div>';$('checkout-button').disabled=true;return;}
  $('checkout-button').disabled=false;
  holder.innerHTML=cart.map(item=>{
    const p=PRODUCT_BY_ID[item.id];if(!p)return '';
    const meta=[item.variant,item.color,item.style,item.eventDate,item.note].filter(Boolean).map(escapeHTML).join(' · ');
    return `<article class="cart-item"><img src="${assetFor(p)}" alt=""/><div><div class="cart-item-top"><div><small>${escapeHTML(p.category.toUpperCase())}</small><h3>${escapeHTML(p.name)}</h3></div><button type="button" class="remove-item" data-remove="${escapeHTML(item.lineId)}" aria-label="Remove ${escapeHTML(p.name)}">×</button></div><div class="cart-item-meta">${meta||'Customized on request'}</div><div class="cart-qty"><button type="button" data-cart-qty="-1" data-line="${escapeHTML(item.lineId)}" aria-label="Decrease ${escapeHTML(p.name)} quantity">−</button><span>${item.quantity}</span><button type="button" data-cart-qty="1" data-line="${escapeHTML(item.lineId)}" aria-label="Increase ${escapeHTML(p.name)} quantity">+</button></div></div></article>`;
  }).join('');
}
function changeCartQty(lineId,change){
  const item=cart.find(x=>x.lineId===lineId);if(!item)return;
  if(item.quantity===1&&change===-1){cart=cart.filter(x=>x.lineId!==lineId);}else item.quantity=clamp(item.quantity+change,1,9999);
  persistCart();renderCart();
}
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800);}

function whatsappLink(text){
  const digits=STORE.whatsappNumber.replace(/\D/g,'');
  const encoded=encodeURIComponent(text);
  return digits?`https://wa.me/${digits}?text=${encoded}`:`https://api.whatsapp.com/send?text=${encoded}`;
}
function openWhatsApp(text){
  // Must be called by a direct user gesture to avoid pop-up blockers.
  const url=whatsappLink(text);
  const link=document.createElement('a');
  link.href=url;link.target='_blank';link.rel='noopener noreferrer';
  document.body.appendChild(link);link.click();link.remove();
}
function buildCartMessage(){
  const lines=[`Hi ${STORE.brand}! 👋`,'','I would like to request a quote for these custom products:',''];
  cart.forEach((item,index)=>{
    const p=PRODUCT_BY_ID[item.id];if(!p)return;
    lines.push(`${index+1}. ${p.name} (${p.collection||'Custom design'})`);
    if(item.variant)lines.push(`   • ${p.optionLabel}: ${item.variant}`);
    if(item.color)lines.push(`   • Colour: ${item.color}`);
    if(item.style)lines.push(`   • Artwork style: ${item.style}`);
    if(item.eventDate)lines.push(`   • Event date: ${item.eventDate}`);
    lines.push(`   • Quantity: ${item.quantity}`);
    if(item.note)lines.push(`   • Design notes: ${item.note}`);
    lines.push('');
  });
  lines.push(`Total items: ${countItems()}`);
  const name=$('checkout-name').value.trim(),city=$('checkout-city').value.trim(),note=$('checkout-note').value.trim();
  if(name)lines.push(`Customer name: ${name}`);
  if(city)lines.push(`City / destination: ${city}`);
  if(note)lines.push(`Additional notes: ${note}`);
  lines.push('','Please confirm feasibility, available styles, price, production time and delivery/pickup details.','I can share my artwork/logo here in WhatsApp.','',`Sent from ${STORE.brand} website.`);
  return lines.join('\n');
}
function setupCheckoutPersistence(){
  try{const stored=JSON.parse(localStorage.getItem(DETAILS_KEY)||'{}');if(stored&&typeof stored==='object'){
    $('checkout-name').value=stored.name||'';$('checkout-city').value=stored.city||'';$('checkout-note').value=stored.note||'';
  }}catch(_err){}
  ['checkout-name','checkout-city','checkout-note'].forEach(id=>$(id).addEventListener('input',()=>{
    try{localStorage.setItem(DETAILS_KEY,JSON.stringify({name:$('checkout-name').value,city:$('checkout-city').value,note:$('checkout-note').value}));}catch(_err){}
  }));
}

$('category-rail').addEventListener('click',e=>{const b=e.target.closest('[data-pick-category]');if(b)pickCategory(b.dataset.pickCategory);});
$('subcategory-rail').addEventListener('click',e=>{const b=e.target.closest('[data-pick-subcategory]');if(b)pickSubcategory(b.dataset.pickSubcategory);});
$('collection-rail').addEventListener('click',e=>{const b=e.target.closest('[data-pick-collection]');if(b)pickCollection(b.dataset.pickCollection);});
document.querySelectorAll('[data-rail-dir]').forEach(b=>b.addEventListener('click',()=>{
  const rail=$(b.dataset.rail);if(!rail)return;const direction=b.dataset.railDir==='next'?1:-1;
  rail.scrollBy({left:direction*Math.max(280,rail.clientWidth*.72),behavior:'smooth'});
}));
$('reset-browse').addEventListener('click',resetFilters);
$('product-search').addEventListener('input',e=>{search=e.target.value.trim().toLowerCase();showAll=false;renderProducts();});
$('product-sort').addEventListener('change',e=>{sorting=e.target.value;renderProducts();});
$('product-grid').addEventListener('click',e=>{const btn=e.target.closest('[data-view]');if(btn)openProduct(btn.dataset.view);});
$('show-more').addEventListener('click',()=>{showAll=true;renderProducts();toast('The full drop is on display ✳');});
$('clear-filters').addEventListener('click',resetFilters);
$('cart-trigger').addEventListener('click',openCart);
$('close-cart').addEventListener('click',()=>closeCart());
$('close-modal').addEventListener('click',()=>closeModal());
$('overlay').addEventListener('click',()=>{if(modalOpen)closeModal();if(drawerOpen)closeCart();});
$('product-modal').addEventListener('click',e=>{
  const color=e.target.closest('[data-color]');if(color){activeColor=color.dataset.color;document.querySelectorAll('.color-option').forEach(b=>{b.classList.toggle('active',b.dataset.color===activeColor);b.setAttribute('aria-pressed',String(b.dataset.color===activeColor));});}
  const qty=e.target.closest('[data-modal-qty]');if(qty){activeQty=clamp(activeQty+Number(qty.dataset.modalQty),1,9999);$('modal-qty-num').textContent=activeQty;}
  if(e.target.closest('#modal-add'))addActiveProduct();
});
$('cart-items').addEventListener('click',e=>{
  const remove=e.target.closest('[data-remove]');if(remove){cart=cart.filter(item=>item.lineId!==remove.dataset.remove);persistCart();renderCart();return;}
  const qty=e.target.closest('[data-cart-qty]');if(qty){changeCartQty(qty.dataset.line,Number(qty.dataset.cartQty));return;}
  if(e.target.closest('#empty-shop')){closeCart(false);$('shop').scrollIntoView({behavior:'smooth'});}
});
$('checkout-button').addEventListener('click',()=>{if(!cart.length)return;openWhatsApp(buildCartMessage());});
$('bulk-form').addEventListener('submit',e=>{
  e.preventDefault();
  const name=$('bulk-name').value.trim(),what=$('bulk-product').value,quantity=$('bulk-quantity').value.trim(),city=$('bulk-city').value.trim(),details=$('bulk-details').value.trim();
  if(!name||!what)return;
  const message=[`Hi ${STORE.brand}! 👋`,'','I would like a quote for a custom / bulk project.','',`Name / brand: ${name}`,`Product / service: ${what}`,quantity?`Approx. quantity: ${quantity}`:'',city?`City / destination: ${city}`:'',details?`Project details: ${details}`:'','Please let me know the available options, quotation and production timeline.','',`Sent from ${STORE.brand} website.`].filter(Boolean).join('\n');
  openWhatsApp(message);
});
document.querySelectorAll('[data-feature-product]').forEach(el=>el.addEventListener('click',()=>openProduct(el.dataset.featureProduct)));
$('custom-request').addEventListener('click',()=>openWhatsApp(`Hi ${STORE.brand}! 👋\n\nI have an idea for a custom product that wasn't on the website. Can we discuss it?\n\nMy idea:\n\nApprox. quantity:\n\nPreferred deadline:`));
$('footer-whatsapp').addEventListener('click',()=>openWhatsApp(`Hi ${STORE.brand}! 👋\n\nI would like to enquire about a personalized product.`));

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(modalOpen)closeModal();else if(drawerOpen)closeCart();}
  if(e.key==='Tab'&&(modalOpen||drawerOpen)){
    const scope=modalOpen?$('product-modal'):$('cart-drawer');
    const focusable=[...scope.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled)')].filter(el=>el.getClientRects().length);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});

$('mobile-menu-button').addEventListener('click',()=>{
  const button=$('mobile-menu-button'),menu=$('mobile-menu');const open=!menu.classList.contains('open');menu.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
$('mobile-menu').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('mobile-menu').classList.remove('open');$('mobile-menu-button').setAttribute('aria-expanded','false');}));

renderCatalog();updateCartCount();setupCheckoutPersistence();revealSetup();
