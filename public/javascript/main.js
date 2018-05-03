// Should the nav be opened or closed?
function triggerNav() {
  const nav_mobile = document.querySelector('.main-nav');
  const site_container = document.querySelector('.site-container');
  const nav_open = nav_mobile.classList.contains('main-nav--open');

  if (nav_open) {
    nav_mobile.classList.remove('main-nav--open');
    site_container.classList.remove('site-container--open');
  } else {
    nav_mobile.classList.add('main-nav--open');
    site_container.classList.add('site-container--open');
  }
}

function triggerSub(e) {
  const li = e.target.closest('.pri-nav__item--inner');
  const sub_menu = li.querySelector('.sub-nav');
  const menu_pri = document.querySelector('.pri-nav');
  const menu_container = document.querySelector('.main-nav__content')

  const sub_open = sub_menu.classList.contains('sub-nav--show');

  if (sub_open) {
    //  Close the mobile nav
    li.style.marginBottom = `0`;
    li.classList.remove('pri-nav__item--open');
    sub_menu.classList.remove('sub-nav--show');
    scrollToTop(menu_container, 200)
  } else {
    //  Open the mobile nav
    li.style.marginBottom = `${sub_menu.offsetHeight}px`;
    li.classList.add('pri-nav__item--open');
    sub_menu.classList.add('sub-nav--show');
  }

  if (
    menu_pri.offsetHeight > menu_container.offsetHeight
  ) {
    menu_container.style.overflowY = 'hidden';
  } else {
    menu_container.style.overflowY = 'scroll';
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


// Wait for elements from the DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.toogle').addEventListener('click', triggerNav)

  const mob_sub_items = [...document.querySelectorAll('.pri-nav__item--inner')];
  mob_sub_items.map(elem => {
    elem.addEventListener('click', triggerSub)
  });

  // Set menu on top
  scrollToTop(document.querySelector('.main-nav__content'), 200);
});
