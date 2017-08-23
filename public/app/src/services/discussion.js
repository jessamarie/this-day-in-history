angular
.module('discussions')
.factory('Discussion', [
  '$resource',
  Discussion
])

function Discussion ($resource) {
  return $resource('http://localhost:3000/api/discussions/:id/:month/:day/:year', {}, {
    update: { method: 'PUT' }
  })
}
