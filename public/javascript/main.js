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

function triggerSub(e) {
  const li = e.target.closest('.mobile-pri__item--inner');
  const sub_menu = li.querySelector('.mobile-sub');
  const menu_pri = document.querySelector('.mobile-pri');
  const menu_container = document.querySelector('.nav-mobile__content')

  const sub_open = sub_menu.classList.contains('mobile-sub--show');

  if (sub_open) {
    //  Close the mobile nav
    li.style.marginBottom = `0`;
    li.classList.remove('mobile-pri__item--open');
    sub_menu.classList.remove('mobile-sub--show');
    scrollToTop(menu_container, 200)
  } else {
    //  Open the mobile nav
    li.style.marginBottom = `${sub_menu.offsetHeight}px`;
    li.classList.add('mobile-pri__item--open');
    sub_menu.classList.add('mobile-sub--show');
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

  const mob_sub_items = [...document.querySelectorAll('.mobile-pri__item--inner')];
  mob_sub_items.map(elem => {
    elem.addEventListener('click', triggerSub)
  });

  // Set menu on top
  scrollToTop(document.querySelector('.nav-mobile__content'), 200);
});
