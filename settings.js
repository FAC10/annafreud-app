var hidden = document.querySelector('.therapy_hidden');
var infoIcon = document.querySelector('.info_icon');

infoIcon.addEventListener('click', () => {
  hidden.style.visibility = hidden.style.visibility === 'hidden' ? 'visible' : 'hidden';
})
