var info_button =document.querySelector('.info_button');
var login_info= document.querySelector('.login_info');
var login_button = document.getElementById("login_button");
var login_form = document.getElementById("login_form");
var authentication_error = document.getElementById("authentication_error");




info_button.addEventListener('click', () => {
  login_info.style.display = login_info.style.display === 'none' ? 'block' : 'none';
})

login_button.addEventListener('click', () =>{
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;
if (email === 'karima@gmail.com' && password === 'password' ) {
login_form.submit();
}
else {
  authentication_error.style.display = 'block';
}
});
