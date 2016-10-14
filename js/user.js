var apiKey = require('./../.env').apiKey;

User = function(){
};

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/thejensen?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
