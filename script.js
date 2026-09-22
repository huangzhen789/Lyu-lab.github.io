const header = document.querySelector('.site-header');
const backTop = document.querySelector('.back-top');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const langSwitch = document.querySelector('.lang-switch');
let language = localStorage.getItem('lyu-lang') || 'zh';

function setLanguage(lang){
  language = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langSwitch.textContent = lang === 'zh' ? 'EN' : '中';
  localStorage.setItem('lyu-lang', lang);
}
setLanguage(language);

langSwitch?.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
  backTop.classList.toggle('show', window.scrollY > 650);
}, {passive:true});

backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Remote portrait fallback: hide broken image and show the built-in monogram block.
document.querySelectorAll('.pi-photo, .member-avatar img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});
