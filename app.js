const favicon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23202124'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-family='Arial' font-size='24' font-weight='700' fill='white'%3EAS%3C/text%3E%3Crect x='14' y='48' width='36' height='3' rx='1.5' fill='%23b8894f'/%3E%3C/svg%3E";
const icon=document.querySelector("link[rel='icon']");if(icon)icon.href=favicon;
const brand=document.querySelector('.brand');if(brand){brand.innerHTML='<span class="brand-monogram">AS</span><span class="brand-copy"><strong>AS Painting</strong><small>Quality painting in Limerick</small></span>';brand.setAttribute('aria-label','AS Painting — Home');}
document.title=document.title.replaceAll('AH Painting','AS Painting');
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=meta.content.replaceAll('AH Painting','AS Painting');
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{n.nodeValue=n.nodeValue.replaceAll('AH PAINTING','AS PAINTING').replaceAll('AH Painting','AS Painting')});

/* Natural desktop navigation: the heading is the real page link; hovering or keyboard focus reveals its sections. */
const navStyle=document.createElement('style');
navStyle.textContent=`
.navitem{grid-template-columns:1fr!important}
.navtoggle{display:none!important}
@media (min-width:1051px) and (hover:hover){
  .navitem:hover>.dropmenu,.navitem:focus-within>.dropmenu{display:block}
  .navitem:hover>.navlabel,.navitem:focus-within>.navlabel{background:#f8f9fa;color:#174ea6}
}
`;
document.head.appendChild(navStyle);

/* Keep the public offer centred on personal residential painting. */
document.querySelectorAll('a[href*="#commercial"]').forEach(link=>link.remove());
const commercialSection=document.getElementById('commercial');if(commercialSection)commercialSection.remove();

/* Painting enquiries, available from every page. */
const contactStyle=document.createElement('style');
contactStyle.textContent=`
.contact-dock{position:fixed;z-index:4000;right:18px;bottom:18px;display:flex;gap:9px;filter:drop-shadow(0 8px 22px rgba(0,0,0,.24))}
.contact-dock a{display:flex;align-items:center;justify-content:center;gap:7px;min-height:48px;padding:0 17px;border-radius:999px;text-decoration:none;font-size:.86rem;font-weight:800}
.contact-dock .whatsapp-link{background:#177b4d;color:#fff}.contact-dock .call-link{background:#202124;color:#fff}
.contact-dock a:hover{transform:translateY(-1px)}
@media(max-width:620px){body{padding-bottom:72px}.contact-dock{left:10px;right:10px;bottom:10px}.contact-dock a{flex:1;padding:0 10px}.contact-dock .call-link{flex:.78}}
`;
document.head.appendChild(contactStyle);
const dock=document.createElement('div');dock.className='contact-dock';dock.setAttribute('aria-label','Painting enquiries');
dock.innerHTML='<a class="whatsapp-link" href="https://wa.me/353868140362?text=Hello%2C%20I%27m%20looking%20for%20a%20painter%20in%20Limerick%20and%20would%20like%20a%20quote." target="_blank" rel="noopener" aria-label="WhatsApp about a painting quote on 086 814 0362">WhatsApp for quote</a><a class="call-link" href="tel:+353868140362" aria-label="Call about painting on 086 814 0362">Call 086 814 0362</a>';
document.body.appendChild(dock);

/* Whole-page language access through Google Translate. */
const languageStyle=document.createElement('style');languageStyle.textContent=`
.language-picker{position:fixed;z-index:4001;left:18px;bottom:18px;font-size:.82rem}.language-picker summary{list-style:none;cursor:pointer;background:#fff;border:1px solid #dadce0;border-radius:999px;padding:12px 15px;font-weight:800;box-shadow:0 8px 22px rgba(0,0,0,.16)}.language-picker summary::-webkit-details-marker{display:none}.language-menu{position:absolute;left:0;bottom:54px;width:210px;padding:7px;background:#fff;border:1px solid #dadce0;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.2)}.language-menu a{display:block;padding:9px 10px;border-radius:7px;text-decoration:none}.language-menu a:hover{background:#f1f3f4}@media(max-width:620px){.language-picker{left:10px;bottom:76px}.language-menu{bottom:50px}}
`;document.head.appendChild(languageStyle);
const picker=document.createElement('details');picker.className='language-picker notranslate';picker.setAttribute('translate','no');picker.innerHTML='<summary aria-label="Translate this website">🌐 Languages</summary><div class="language-menu"><a href="#" data-language="en" lang="en">English</a><a href="#" data-language="ar" lang="ar" dir="rtl">العربية</a><a href="#" data-language="ru" lang="ru">Русский</a><a href="#" data-language="pl" lang="pl">Polski</a><a href="#" data-language="lt" lang="lt">Lietuvių</a><a href="#" data-language="ro" lang="ro">Română / Moldovenească</a></div>';
const originalPage=()=>{if(location.hostname.endsWith('.translate.goog')){const host=location.hostname.replace(/\.translate\.goog$/,'').replaceAll('-','.') ;return 'https://'+host+location.pathname;}if(location.hostname==='translate.google.com'){const source=new URLSearchParams(location.search).get('u');if(source)return source;}return location.origin+location.pathname;};
picker.addEventListener('click',event=>{const link=event.target.closest('[data-language]');if(!link)return;event.preventDefault();const language=link.dataset.language;const source=originalPage();if(language==='en'){location.href=source;return;}const url='https://translate.google.com/translate?sl=en&tl='+encodeURIComponent(language)+'&u='+encodeURIComponent(source);window.open(url,'_blank','noopener');});
document.body.appendChild(picker);
