var firstPhrase = document.getElementById('first-phrase');
var lastPhrase = document.getElementById('last-phrase');
var content = document.getElementById('main');

lastPhrase.addEventListener('webkitAnimationEnd',function( event ) {
  firstPhrase.style.display = 'none';
  lastPhrase.style.display = 'none';
  content.classList.remove('hidden');
}, false);