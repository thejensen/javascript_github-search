var User = require('./../js/user.js').userModule;
var getRepos = require('./../js/user.js').getRepos;

var displayUserData = function(name, location, email) {
  $('#profile-results').text(name + ' | ' + location + ' | ' + email + ' | ');
};

var displayRepos = function(archive_url) {
  $('#repo-results').append('<li>' + archive_url + '</li>');
};

$(document).ready(function() {
  $('#user-search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var newUser = new User();
    newUser.getUserProfile(username, displayUserData);
    newUser.getRepos(username, displayRepos);
  });
});
