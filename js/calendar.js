var infoButton = document.querySelector('.info_button');
var calendarText = document.querySelector('.calendar_text');
var select_mode_info = document.getElementById("select_mode");

infoButton.addEventListener('click', () => {
  calendarText.style.display = calendarText.style.display === 'none' ? 'inline-block' : 'none'
})

var select_mode = false;

document.getElementById("select_button").addEventListener('click', () => {
  console.log(select_mode);
if (select_mode === false) {
  select_mode_info.style.display = 'block';
  var tds = document.getElementsByTagName('td');

  for (var i =0; i < tds.length; i++) {
    var j= i+1;
    tds[i].innerHTML = "<a href=#>"+j+"</a>"
    tds[i].addEventListener('click', (i)=>{
      i.target.classList.toggle('foodlog-day');
    });
  }
}
if (select_mode === true) {
  location.reload();
  select_mode = false
}
else {
  select_mode = true;
}


});
