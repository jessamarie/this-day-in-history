'use strict'

/*
  For our data we chose to use this API:
  http://history.muffinlabs.com/

  which is based off the information found on wikipedia
*/

angular
  .module('moments')
  .factory('Moment', momentService)

momentService.$inject = ['$resource']

function momentService ($resource) {
  var url = 'http://history.muffinlabs.com/date/:month/:day'

  return $resource(url, { callback: 'JSON_CALLBACK' }, {
    get: {
      method: 'JSONP',
      isArray: false
    }
  })
}
