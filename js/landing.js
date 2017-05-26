var greeting = document.getElementById("greeting");

var personalised_greeting = localStorage.getItem('user_greeting');

if (personalised_greeting) {
console.log(personalised_greeting);
  greeting.innerHTML = '<h1 class="landing_greeting">'+ personalised_greeting;
}

else {
  greeting.innerHTML = '<h1 class="landing_greeting">Good afternoon, Test.';
}
