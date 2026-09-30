const brand=document.querySelector('.brand');
if(brand){
  brand.innerHTML='<span class="brand-monogram">R</span><span class="brand-copy"><strong>Ronan</strong><small>Small painting jobs · Limerick</small></span>';
  brand.setAttribute('aria-label','Ronan — Home');
}

const nav=document.querySelector('.topnav');
if(nav){
  nav.innerHTML=[
    ['index.html','Home'],
    ['about.html','About me'],
    ['services.html','What I do'],
    ['gallery.html','Work'],
    ['contact.html','Contact']
  ].map(([href,label])=>'<div class="navitem"><a class="navlabel" href="'+href+'">'+label+'</a></div>').join('');
}

const contactStyle=document.createElement('style');
contactStyle.textContent=`
.contact-dock{position:fixed;z-index:4000;right:18px;bottom:18px;filter:drop-shadow(0 8px 22px rgba(0,0,0,.22))}
.contact-dock a{display:flex;align-items:center;justify-content:center;min-height:50px;padding:0 20px;border-radius:999px;text-decoration:none;font-size:.88rem;font-weight:850;background:#177b4d;color:#fff}
.contact-dock a:hover{transform:translateY(-1px)}
@media(max-width:620px){body{padding-bottom:72px}.contact-dock{left:10px;right:10px;bottom:10px}.contact-dock a{width:100%}}
`;
document.head.appendChild(contactStyle);

const dock=document.createElement('div');
dock.className='contact-dock';
dock.setAttribute('aria-label','Contact Ronan');
dock.innerHTML='<a href="https://wa.me/353868140362?text=Hi%20Ronan%2C%20I%20have%20a%20small%20painting%20job%20in%20the%20Limerick%20area." target="_blank" rel="noopener" aria-label="Send Ronan a WhatsApp message about a painting job">WhatsApp Ronan</a>';
document.body.appendChild(dock);