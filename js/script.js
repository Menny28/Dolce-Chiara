// ==========================================================
// DOLCE CHIARA — script condiviso da tutte le pagine
// ==========================================================

// Menu mobile
const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
if(toggle && navList){
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));
}

// Evidenzia la voce di menu della pagina corrente
document.querySelectorAll('nav a[data-page]').forEach(a => {
  if(a.dataset.page === document.body.dataset.page){
    a.classList.add('active');
  }
});

// Form richiesta -> WhatsApp
const ordineForm = document.getElementById('ordineForm');
if(ordineForm){
  ordineForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const tipoSelect = document.getElementById('tipo');
    const tipo = tipoSelect.value;
    const contatto = document.getElementById('contatto').value.trim();
    const data = document.getElementById('data').value;
    const dettagli = document.getElementById('dettagli').value.trim();

    let messaggio = 'Ciao Dolce Chiara! Vorrei fare una richiesta:\n';
    messaggio += 'Nome: ' + (nome || '-') + '\n';
    messaggio += 'Cosa: ' + tipo + '\n';
    if(data) messaggio += 'Data occasione: ' + data + '\n';
    messaggio += 'Contatto: ' + (contatto || '-') + '\n';
    if(dettagli) messaggio += 'Dettagli: ' + dettagli + '\n';
    messaggio += '\nInviato dal sito: https://menny28.github.io/Dolce-Chiara/';

    const numero = '393665488260';
    const url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(messaggio);
    window.open(url, '_blank');
  });
}

// Animazioni allo scorrimento (le scritte/card compaiono entrando in vista)
if('IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

// Pulsante "torna su"
const backToTop = document.getElementById('backToTop');
if(backToTop){
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 480);
  }, {passive:true});
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

// Effetto parallax leggero sulla foto principale (hero o banner di pagina)
const parallaxImg = document.querySelector('.hero-visual img, .page-banner img');
if(parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    parallaxImg.style.transform = 'translateY(' + (offset * 0.08) + 'px)';
  }, {passive:true});
}

