
  'use strict';

  angular.module('app',[])
.controller('TestController', ['$scope','$http',function ($scope,$http){
 $http.get('info/writers.json').success(function(data) {
    $scope.writers = data;
    console.log($scope.writers);
  }).error(function(data) {console.log("error");});}]);
      