var backButton = document.querySelector('.header_back');
var second_reminder = document.getElementById("second_reminder");
var third_reminder = document.getElementById("third_reminder");
var fourth_reminder = document.getElementById("fourth_reminder");
var fifth_reminder = document.getElementById("fifth_reminder");
var add_second_reminder = document.getElementById("add_second_reminder");
var add_third_reminder = document.getElementById("add_third_reminder");
var add_fourth_reminder = document.getElementById("add_fourth_reminder");
var add_fifth_reminder = document.getElementById("add_fifth_reminder");
var on_switch = document.getElementById("on_switch");
var off_switch = document.getElementById("off_switch");
var user_greeting = document.getElementById("user_greeting");
var save_button = document.getElementById("save_button");
var personalised_greeting = localStorage.getItem('user_greeting');


if (personalised_greeting) {
console.log(personalised_greeting);
  user_greeting.value = personalised_greeting;
}

else {
  user_greeting.value = 'Good afternoon, Test.';
}

save_button.addEventListener('click', ()=>{
  localStorage.setItem('user_greeting',user_greeting.value);
  var greeting = localStorage.getItem('user_greeting');
  console.log(greeting);
});

backButton.addEventListener('click', () => {
  window.history.back();
});

add_second_reminder.addEventListener('click', () => {
  second_reminder.style.display = 'block';
  add_third_reminder.style.display = 'block';
  add_second_reminder.style.display = 'none';
});

add_third_reminder.addEventListener('click', () => {
  third_reminder.style.display = 'block';
  add_fourth_reminder.style.display = 'block';
  add_third_reminder.style.display = 'none';
});

add_fourth_reminder.addEventListener('click', () => {
  fourth_reminder.style.display = 'block';
  add_fifth_reminder.style.display = 'block';
  add_fourth_reminder.style.display = 'none';
});

add_fifth_reminder.addEventListener('click', () => {
  fifth_reminder.style.display = 'block';
  add_fifth_reminder.style.display = 'none';
});

off_switch.addEventListener('click', ()=>{
  on_switch.className = 'settings_switch settings_off';
  off_switch.className = 'settings_switch settings_on';
  document.getElementById("setting_details").style.display = 'none';
});

on_switch.addEventListener('click', ()=>{
  on_switch.className = 'settings_switch settings_on';
  off_switch.className = 'settings_switch settings_off';
  document.getElementById("setting_details").style.display = 'block';
});

var mountainAir = document.getElementById('mountain');
var pacific = document.getElementById('pacific');
var marina = document.getElementById('marina');
var moss = document.getElementById('moss');
var background = document.querySelector('.background');
// var saveSetting = document.querySelector('.save_setting');
// var elementsSetting = document.querySelector('.elements_setting');
var dusk = document.getElementById('dusk');
var moss = document.getElementById('moss');

pacific.addEventListener('click', function() {
  background.className = 'pacific';
});

marina.addEventListener('click', function() {
  background.className = 'marina';
});

moss.addEventListener('click', function() {
  background.className = 'moss';
});

mountainAir.addEventListener('click', function() {
  background.className = 'mountain';
});
