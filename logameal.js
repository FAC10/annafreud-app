var time = document.getElementById("current_time_input")
var no = document.getElementById("no");
var yes = document.getElementById("yes");
time.value = new Date().toString().slice(4,-15);

no.addEventListener('click', ()=>{
  if (no.checked === true) {
  document.getElementById("what_happened").style.display = 'block';
}
});

yes. addEventListener('click', ()=>{
  document.getElementById("what_happened").style.display= 'none';
});
