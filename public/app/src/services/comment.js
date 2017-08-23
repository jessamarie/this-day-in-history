'use strict'

/*
  For our data we chose to use this API:
  http://history.muffinlabs.com/

  which is based off the information found on wikipedia
*/

angular
  .module('comments', [])
  .factory('Comment', commentService)

commentService.$inject = ['$resource']

function commentService ($resource) {
  return $resource(`${api_route}/api/discussions/:discussion_id/comments`)
}
