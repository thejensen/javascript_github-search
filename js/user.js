var apiKey = require('./../.env').apiKey;

User = function(){
};

User.prototype.getUserProfile = function(username, displayUserData, userFail){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayUserData(response.name, response.location, response.email, response.html_url);
  }).fail(function(error){
    userFail(error.responseJSON.message);
  });
};

User.prototype.getRepos = function(username, displayRepos, reposFail){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for(i=0; i<response.length; i++) {
      console.log(response);
      displayRepos(response[i].name, response[i].language, moment(response[i].created_at).format('ll'), response[i].description, response[i].url);
    }
    console.log(response);
  }).fail(function(error){
    reposFail(error.responseJSON.message);
  });
};

exports.userModule = User;
