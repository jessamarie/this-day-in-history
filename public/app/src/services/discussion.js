angular
.module('discussion.service')
.factory('Discussion', [
  '$resource',
  Discussion
])

function Discussion($resource) {
  return $resource('http://localhost:3000/api/discussion/:id', {}, {
    update: { method: 'PUT' }
  })
}
