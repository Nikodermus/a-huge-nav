// Global elements
let toggle,
  sub_items,
  site_container

// Should the nav be opened or closed?
function triggerNav() {
  const nav_mobile = document.querySelector('.main-nav');
  const nav_open = nav_mobile.classList.contains('main-nav--open');

  if (nav_open) {
    //   Close menu
    nav_mobile.classList.remove('main-nav--open');
    site_container.classList.remove('site-container--open')
    document.body.classList.remove('scroll-hidden');
    document.documentElement.classList.remove('scroll-hidden');
  } else {
    //   Open menu
    nav_mobile.classList.add('main-nav--open');
    site_container.classList.add('site-container--open');
    document.body.classList.add('scroll-hidden');
    document.documentElement.classList.add('scroll-hidden');
  }
}

function triggerSub(e) {
  const li = e.target.closest('.pri-nav__item--inner');
  const sub_menu = li.querySelector('.sub-nav');
  const menu_container = document.querySelector('.main-nav__content')

  const sub_open = sub_menu.classList.contains('sub-nav--show');

  if (sub_open) {
    //  Close the mobile sub nav
    li.style.marginBottom = '0';
    li.classList.remove('pri-nav__item--open');
    sub_menu.classList.remove('sub-nav--show');
    scrollToTop(menu_container, 200)
  } else {
    //  Open the mobile sub nav
    li.style.marginBottom = `${sub_menu.offsetHeight}px`;
    li.classList.add('pri-nav__item--open');
    sub_menu.classList.add('sub-nav--show');
  }
}

function scrollToTop(elem, duration = 500) {
  let time_interval = 15;
  let scroll_step = -elem.scrollTop / (duration / time_interval);

  let scroll_interval = setInterval(() => {
    if (elem.scrollTop !== 0) {
      elem.scrollBy(0, scroll_step);
    } else clearInterval(scroll_interval);
  }, time_interval);
}

function mobileEventListeners() {
  // Add mobile event listeners
  site_container.addEventListener('click', triggerNav);
  toggle.addEventListener('click', triggerNav);

  sub_items.map(elem => {
    elem.addEventListener('click', triggerSub)

    // Remove hover effect by js in mobile
    elem.removeEventListener('mouseenter', () => {
      site_container.classList.add('site-container--open');
    });

    elem.removeEventListener('mouseleave', () => {
      site_container.classList.remove('site-container--open');
    });
  });
}

function desktopEventListeners() {
  sub_items.map(elem => {
    // Add hover effect by js in desktop
    elem.addEventListener('mouseenter', () => {
      site_container.classList.add('site-container--open');
    });

    elem.addEventListener('mouseleave', () => {
      site_container.classList.remove('site-container--open');
    });

    // Remove mobile event listeners
    elem.removeEventListener('click', triggerSub)
  });

  site_container.removeEventListener('click', triggerNav);
  toggle.removeEventListener('click', triggerNav)
}

function isMobile() {
  return window.innerWidth < 768;
}

window.addEventListener('resize', () => {
  isMobile() ? mobileEventListeners() : desktopEventListeners();
});

// Wait for elements from the DOM
document.addEventListener('DOMContentLoaded', () => {

  // Load dom elements in variables
  sub_items = [...document.querySelectorAll('.pri-nav__item--inner')];
  toggle = document.querySelector('.toggle');
  site_container = document.querySelector('.site-container');

  // Wether add or remove event listeners
  isMobile() ? mobileEventListeners() : desktopEventListeners();

  // Set menu on top
  scrollToTop(document.querySelector('.main-nav__content'), 200);
});
