var time = document.getElementById("current_time_input")
var no = document.getElementById("no");
var yes = document.getElementById("yes");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var vomit = document.getElementById("vomit");
var laxatives = document.getElementById("laxatives");
var what_happened = document.getElementById("what_happened");
var photo = document.getElementById("photo");


var food_description = localStorage.getItem('q1');
var subjective_binge = localStorage.getItem('q2');
var objective_binge= localStorage.getItem('q3');
var location_and_setting = localStorage.getItem('q4');
var thoughts_and_feelings = localStorage.getItem('q5');
var keep_it_down = localStorage.getItem('q6');
var timelog = localStorage.getItem('time');
var vomit_laxatives = localStorage.getItem('q8');
var src = localStorage.getItem('src');

photo.style.display = 'block';

time.value = timelog;
q1.value = food_description;
q2.value = subjective_binge;
q3.value= objective_binge;
q4.value = location_and_setting
q5.value = thoughts_and_feelings;
photo.src = src;

if (keep_it_down=== 'yes') {
  yes.checked = true;
}

if (keep_it_down ==='no'){
  no.checked = true;
  what_happened.style.display = 'block';
}

if (vomit_laxatives === 'vomit') {
  vomit.checked = true;
}

if (vomit_laxatives === 'laxatives'){
  laxatives.checked = true;
}
