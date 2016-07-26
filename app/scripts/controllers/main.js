'use strict';

/**
 * @ngdoc function
 * @name briksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the briksApp
 */
angular.module('briksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sizes =[
      { columns: 3, gutter: 50 }

    ];
    $scope.items = [0,1,2,3,4,5,6];

    $scope.getRandomString = function(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < Math.random()*1000; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    };

    $scope.loadMore = _.debounce(function() {
      var last = $scope.items[$scope.items.length - 1];
      for(var i = 1; i <= 8; i++) {
        $scope.items.push(last + i);
      }
    }, 300);
  });
