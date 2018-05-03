// Should the nav be opened or closed?
function triggerNav() {
  const nav_mobile = document.querySelector('.nav-mobile');
  const site_container = document.querySelector('.site-container');
  const nav_open = nav_mobile.classList.contains('nav-mobile--open');

  if (nav_open) {
    nav_mobile.classList.remove('nav-mobile--open');
    site_container.classList.remove('site-container--open');
  } else {
    nav_mobile.classList.add('nav-mobile--open');
    site_container.classList.add('site-container--open');
  }
}


// Wait for elements from the DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.toogle').addEventListener('click', triggerNav)
});
