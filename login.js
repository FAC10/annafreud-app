var info_button =document.querySelector('.info_button');
var login_info= document.querySelector('.login_info');


info_button.addEventListener('click', () => {
  login_info.style.display = login_info.style.display === 'none' ? 'block' : 'none';
})
