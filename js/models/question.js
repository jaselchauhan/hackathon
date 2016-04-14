angular
  .module('questionBot')
  .factory('Question', Question);

Question.$inject = ['$resource', 'API'];
function Question($resource, API) {
  return $resource(API + '/questions/:id', {id: '@_id'}, {
    update: { method: "PUT"}
  });
}
