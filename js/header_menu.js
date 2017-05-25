var headerMenu = document.querySelector('.header_menu_items');
var headerProfilePic = document.querySelector('.header_profile_pic');

headerProfilePic.addEventListener('click', () => {
  headerMenu.style.visibility = headerMenu.style.visibility === 'hidden' ? 'visible' : 'hidden';
})
