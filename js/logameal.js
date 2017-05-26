var time = document.getElementById("current_time_input")
var no = document.getElementById("no");
var yes = document.getElementById("yes");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var submit_button = document.getElementById("submit_button");
time.value = new Date().toString().slice(15,-15);


submit_button.addEventListener('click', ()=> {
  localStorage.setItem('q1', q1.value);
  localStorage.setItem('q2', q2.value);
  localStorage.setItem('q3', q3.value);
  localStorage.setItem('q4', q4.value);
  var answer1 = localStorage.getItem('q1');
  var subjective_binge = localStorage.getItem('q2');
  var objective_binge= localStorage.getItem('q3');
  var answer4 = localStorage.getItem('q4');
  console.log(answer1, answer2, answer3, answer4);
  console.log('success');
});



no.addEventListener('click', ()=>{
  if (no.checked === true) {
  document.getElementById("what_happened").style.display = 'block';
}
});

yes. addEventListener('click', ()=>{
  document.getElementById("what_happened").style.display= 'none';
});
