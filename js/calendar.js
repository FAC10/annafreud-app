var headerMenu = document.querySelector('.header_menu_items');
var headerProfilePic = document.querySelector('.header_profile_pic');

headerProfilePic.addEventListener('click', () => {
  headerMenu.style.display = headerMenu.style.display === 'none' ? 'inline-block' : 'none'
})

var infoButton = document.querySelector('.info_button');
var calendarText = document.querySelector('.calendar_text');

infoButton.addEventListener('click', () => {
  calendarText.style.display = calendarText.style.display === 'none' ? 'inline-block' : 'none'
})
