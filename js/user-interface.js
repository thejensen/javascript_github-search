var User = require('./../js/user.js').userModule;
var getRepos = require('./../js/user.js').getRepos;

$(document).ready(function() {
  $('#user-search-form').submit(function(event){
    event.preventDefault();
    $('#search-results').text("Yo it's working, move on.");
    var newUser = new User();
    newUser.getRepos();
  });
});
