'use strict'

angular
  .module('comments')
  .controller('CommentNewController', CommentNewController)

CommentNewController.$inject = ['$state', '$stateParams', 'Comment']

function CommentNewController ($state, $stateParams, Comment) {
  this.comment = new Comment()
  this.create = function () {
    this.comment.$save($stateParams, function () {
      $state.go('discussionsShow', $stateParams)
    })
  }
}
