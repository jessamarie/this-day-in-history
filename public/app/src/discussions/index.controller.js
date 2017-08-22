'use strict'

angular
  .module('discussions')
  .controller('DiscussionIndexController', DiscussionIndexController)

DiscussionIndexController.$inject = ['_discussions']

function DiscussionIndexController (_discussions) {
  this.discussions = _discussions
  this.getDateString = getDateString
}

  /* getDateString creates a Date object out of the parameters
    in discussion and returns a string formatted in a
    readable way.

    i.e. March 27, 2010
  */
function getDateString (discussion) {
  var date = new Date(discussion.year, discussion.month, discussion.day)
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

/*
  Add .resolve property to ctrl to attach to
  route and to resolve promise from
  /api/discussions
*/
DiscussionIndexController.resolve = {
  _discussions: function (Discussion) {
    return Discussion.query()
  }
}
