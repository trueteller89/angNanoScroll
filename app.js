(function(angular, $, undefined) {
  'use strict';

  angular.module('app', ['sun.scrollable'])
  .directive('demoController', function() {
    return {
           items : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19],
        link: function(scope, element, attrs) {
  
            var items = scope.items =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19];
      //var items2 = scope.items2 = [0, -1, -2, -3, -4];
      console.log("success!");
        }/*,
        addItem: function() {
        items.push(items[items.length - 1] + 1);
        
      },
      addItem2: function() {
        items2.push(items2[items2.length - 1] - 1);
        
      }*/
    };
   
}); 
  /*('app', ['sun.scrollable'])
    .controller('DemoController', function($scope) {
      var items = $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var items2 = $scope.items2 = [0, -1, -2, -3, -4];
      $scope.addItem = function() {
        items.push(items[items.length - 1] + 1);
        
      };
      $scope.addItem2 = function() {
        items2.push(items2[items2.length - 1] - 1);
        
      };
    });*/
}(angular, jQuery));