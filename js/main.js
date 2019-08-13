var firstPhrase = document.getElementById('first-phrase');
var lastPhrase = document.getElementById('last-phrase');
var content = document.getElementById('main');
var form = document.getElementById('confirm');
var formSuccess = document.getElementById('form-success');

var airtable_endpoint = "https://api.airtable.com/v0/appJU3aBEw49QzT0b/Invite?api_key=keyieOwATKOFQswlE"

lastPhrase.addEventListener('webkitAnimationEnd',function( event ) {
  firstPhrase.style.display = 'none';
  lastPhrase.style.display = 'none';
  content.classList.remove('hidden');
}, false);

form.addEventListener("submit", function(event) {

  var name = document.getElementById('form-name');

  event.preventDefault();

  console.log(name);

  axios.post(airtable_endpoint, {
    "fields": {
      "name": name.value,
      "confirmed": true
    }
  })
  .then(function(response) {
    if (response.status == 200) {
      formSuccess.classList.add('show-success');
      name.value = "";

      setTimeout(function(){
        formSuccess.classList.remove('show-success');
      }, 1500);
    }
  })
});