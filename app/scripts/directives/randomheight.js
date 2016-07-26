'use strict';

/**
 * @ngdoc directive
 * @name briksApp.directive:randomHeight
 * @description
 * # randomHeight
 */
angular.module('briksApp')
  .directive('randomHeight', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $(element).css({'height':300+Math.random() * 300+'px'});
      }
    };
  });
