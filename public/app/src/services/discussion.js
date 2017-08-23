angular
.module('discussions')
.factory('Discussion', [
  '$resource',
  Discussion
])

function Discussion ($resource) {
  return $resource(`${api_route}/api/discussions/:id/:month/:day/:year`, {}, {
    update: { method: 'PUT' }
  })
}
