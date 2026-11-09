const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}));

// Refined scroll reveals: content enters gently as each section comes into view.
const revealTargets = [
  '.intro-kicker', '.intro-copy', '.intro .under-link',
  '.section-head', '.ritual-card', '.disclaimer',
  '.statement-image', '.statement-copy > *',
  '.quote-band > *', '.visit-left > *', '.visit-right'
];
revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.classList.add('reveal');
    if (el.matches('.ritual-card')) el.style.setProperty('--reveal-delay', `${index * 110}ms`);
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13, rootMargin: '0px 0px -45px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.documentElement.classList.add('motion-ready');
