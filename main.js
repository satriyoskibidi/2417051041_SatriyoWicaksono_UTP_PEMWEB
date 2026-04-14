(function() {
  const links = document.querySelectorAll('.page-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
    else link.classList.remove('active');
  });
})();

(function() {
  const targets = document.querySelectorAll(
    '.exp-card, .strength-item, .cert-item, .project-card, .seni-item, .contact-link, .sosmed-row, .exp-prev-item'
  );
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });
})();
