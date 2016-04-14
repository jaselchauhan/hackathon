angular.module('questionBot')
  .controller('QuestionsController', QuestionsController);

QuestionsController.$inject = ['Question'];

function QuestionsController(Question) {
  Question.query();
  var self = this;
  this.all = Question.query();
  this.query = null;
  this.count = 0;
  this.currentQuestion = { question: "Lets Play!!!"};

  this.addQuestion = function() {
    Question.save(self.question, function(question) {
    self.all.push(question);
    self.question = {}
    });
  }


  this.getQuestion = function () {
    if (this.count > 19) {
      this.all = Question.query();
      this.count = 0;
    }
    this.currentQuestion = this.all.pop();
    this.count ++
  }


  return this;


}
