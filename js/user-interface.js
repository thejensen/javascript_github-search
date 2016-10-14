var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $('#user-search-form').submit(function(event){
    event.preventDefault();
    $('#search-results').text("Yo it's working, move on.");
  });
});
