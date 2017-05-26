var time = document.getElementById("current_time_input")
var no = document.getElementById("no");
var yes = document.getElementById("yes");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var submit_button = document.getElementById("submit_button");
var vomit = document.getElementById("vomit");
var laxatives = document.getElementById("laxatives");
var photo = document.getElementById("photo");
time.value = new Date().toString().slice(15,-15);


submit_button.addEventListener('click', ()=> {
  localStorage.setItem('q1', q1.value);
  localStorage.setItem('q2', q2.value);
  localStorage.setItem('q3', q3.value);
  localStorage.setItem('q4', q4.value);
  localStorage.setItem('q5', q5.value);
  localStorage.setItem('time', time.value);
  localStorage.setItem('src', photo.src);

  if (yes.checked === true) {
    localStorage.setItem('q6', 'yes');
  }

  else {
    localStorage.setItem('q6', 'no');
  }

  if(vomit.checked===true){
    localStorage.setItem('q8', 'vomit')
  }

  else if (laxatives.checked === true) {
    localStorage.setItem('q8','laxatives');
  }

  var food_description = localStorage.getItem('q1');
  var subjective_binge = localStorage.getItem('q2');
  var objective_binge= localStorage.getItem('q3');
  var location_and_setting = localStorage.getItem('q4');
  var thoughts_and_feelings = localStorage.getItem('q5');
  var keep_it_down = localStorage.getItem('q6');
  var timelog = localStorage.getItem('time');
  var vomit_laxatives = localStorage.getItem('q8');
  console.log(food_description, subjective_binge, objective_binge, location_and_setting, thoughts_and_feelings, keep_it_down, timelog);
  console.log(vomit_laxatives);
});



no.addEventListener('click', ()=>{
  if (no.checked === true) {
  document.getElementById("what_happened").style.display = 'block';
}
});

yes. addEventListener('click', ()=>{
  document.getElementById("what_happened").style.display= 'none';
});
