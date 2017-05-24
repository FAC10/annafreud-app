var infoButton = document.querySelector('.info_button');
var calendarText = document.querySelector('.calendar_text');

infoButton.addEventListener('click', () => {
  calendarText.style.display = calendarText.style.display === 'none' ? 'inline-block' : 'none'
})
