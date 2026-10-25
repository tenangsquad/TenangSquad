(() => {
  'use strict';

  // Sticky nav background once the page scrolls.
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu.
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const setMenu = open => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Reveal on scroll. Without IntersectionObserver everything simply shows.
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const en of entries) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // Screenshot tabs.
  const shot = document.getElementById('shot');
  const caption = document.getElementById('caption');
  const tabs = [...document.querySelectorAll('.tab')];
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    const next = new Image();
    next.onload = () => {
      shot.src = next.src;
      shot.alt = tab.dataset.alt;
    };
    next.src = tab.dataset.src;
    caption.textContent = tab.dataset.cap;
  };
  tabs.forEach((t, i) => {
    t.tabIndex = i === 0 ? 0 : -1;
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      const n = tabs[(i + step + tabs.length) % tabs.length];
      n.focus();
      select(n);
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
