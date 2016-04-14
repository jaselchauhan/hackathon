angular
  .module('questionBot')
  .controller('UsersController', UsersController)

UsersController.$inject = ['User']
function UsersController(User){
  var self = this;
  self.all = User.query();

  this.addUser = function() {
    User.save(self.user, function(user) {
    self.all.push(user);
    self.user = {}
    });
  }

  this.resetUser = function () {
    (self.all).forEach(function(user, index) {
      user = {_id: user._id, name: user.name, clicked: false}
      User.update(user, function () {
        console.log("user.clicked: ", user.clicked);
        self.showAnswers=false;

      });
    })
  }

  this.showAnswersFunction = function () {
    self.all = User.query();
    console.log("red");
    self.showAnswers=true;
  }


  return this;
}
