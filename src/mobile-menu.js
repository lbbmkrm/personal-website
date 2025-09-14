const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const body = document.body;

// Toggle mobile menu visibility and prevent body scroll when open.
menuButton.addEventListener('click', () => {
  const isMenuOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');

  if (isMenuOpen) {
    menuIcon.textContent = 'menu';
    body.classList.remove('overflow-hidden');
  } else {
    menuIcon.textContent = 'close';
    body.classList.add('overflow-hidden');
  }
});

// Close menu when a nav link is clicked.
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.textContent = 'menu';
    body.classList.remove('overflow-hidden');
  });
});
