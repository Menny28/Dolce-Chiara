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
