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

  const sub_open = sub_menu.classList.contains('mobile-sub--show');

  if (sub_open) {
    li.style.marginBottom = `0`;
    li.classList.remove('mobile-pri__item--open');
    sub_menu.classList.remove('mobile-sub--show');
  } else {
    li.style.marginBottom = `${sub_menu.offsetHeight}px`;
    li.classList.add('mobile-pri__item--open');
    sub_menu.classList.add('mobile-sub--show');
  }

}


// Wait for elements from the DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.toogle').addEventListener('click', triggerNav)

  const mob_sub_items = [...document.querySelectorAll('.mobile-pri__item--inner')];
  mob_sub_items.map(elem => {
    elem.addEventListener('click', triggerSub)
  });
});
