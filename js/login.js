var info_button =document.querySelector('.info_button');
var login_info= document.querySelector('.login_info');
var login_button = document.querySelector(".login_button");
var login_form = document.getElementById("login_form");
var authentication_error = document.getElementById("authentication_error");


info_button.addEventListener('click', () => {
  if (!login_info.style.opacity || login_info.style.opacity === '0'){
    login_info.style.opacity = '100';
  }

  else {
    login_info.style.opacity = '0';
  }
})

// login_button.addEventListener('click', () =>{
//   var email = document.getElementById("login_email").value.toUpperCase();
//   var password = document.getElementById("login_password").value;
// if (email === 'TESTUSER@GMAIL.COM' && password === '1234' ) {
// login_form.submit();
// }
// else {
//   authentication_error.style.visibility = 'visible';
// }
// });
//
//
login_form.addEventListener('submit', (event)=> {
  event.preventDefault();
  if (event.target[0].value.toUpperCase() === 'TESTUSER@GMAIL.COM' && event.target[1].value === '1234') {
    window.location.href="./landing.html";
    }
    else {
      authentication_error.style.visibility = 'visible';
    }
});
