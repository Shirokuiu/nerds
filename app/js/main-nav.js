var mainNavListButton = document.querySelector('.main-nav__list-button');
var mainNavList = document.querySelector('.main-nav__list');
var mainNavUserBlock = document.querySelector('.main-nav__user-block');

mainNavListButton.addEventListener('click', function() {
  mainNavList.classList.toggle('main-nav__list--vissible');
  mainNavUserBlock.classList.toggle('main-nav__user-block--vissible');
});