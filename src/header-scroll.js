const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

// Hide header on scroll down, show on scroll up.
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
    header.classList.add('-translate-y-full');
  } else {
    header.classList.remove('-translate-y-full');
  }

  lastScrollY = currentScrollY;
});
