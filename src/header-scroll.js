const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
    // Scrolling down
    header.classList.add('-translate-y-full');
  } else {
    // Scrolling up
    header.classList.remove('-translate-y-full');
  }

  lastScrollY = currentScrollY;
});
