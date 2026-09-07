const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'Close' : 'Menu';
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menu';
  });
});
