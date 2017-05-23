var info_button =document.querySelector('.info_button');
var login_info= document.querySelector('.login_info');

// info_text.style.display = info_button.style.display === 'none'? '' : 'block';

info_button.addEventListener('mouseover', () => {

if (login_info.style.display== 'block'){
  login_info.style.display = 'none';
}
  else {
    login_info.style.display = 'block';
}

})
