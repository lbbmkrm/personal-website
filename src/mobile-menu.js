const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuButton.addEventListener('click', () => {
  const isMenuOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');

  if (isMenuOpen) {
    menuIcon.textContent = 'menu';
  } else {
    menuIcon.textContent = 'close';
  }
});

// Close menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.textContent = 'menu';
  });
});
