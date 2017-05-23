var time = document.getElementById("current_time_input")
time.value = new Date().toString().slice(4,-15);
time.value.slice(0,-15);

// current_time_input.addEventListener('click', ()=> {
//   current_time_input.value = new Date();
// })
