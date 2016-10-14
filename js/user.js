var apiKey = require('./../.env').apiKey;

User = function(){
};

User.prototype.getUserProfile = function(username, displayUserData){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayUserData(response.name, response.location, response.email);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getRepos = function(username, displayRepos){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){

    for(i=0; i<response.length; i++) {
      displayRepos(response[i].url, response[i].name, response[i].description);
    }

    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
