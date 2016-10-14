var User = require('./../js/user.js').userModule;

var displayUserData = function(name, location, email) {
  $('#profile-results').text(name + ' | ' + location + ' | ' + email);
};

var displayRepos = function(url, name, description) {
  $('#repo-results').append('<li>' + name + '<br>' + description + '<br>' + url + '</li>');
};

$(document).ready(function() {
  $('#user-search-form').submit(function(event){
    event.preventDefault();
    $("#repo-results").html("");
    var username = $('#username').val();
    var newUser = new User();
    newUser.getUserProfile(username, displayUserData);
    newUser.getRepos(username, displayRepos);
  });
});
