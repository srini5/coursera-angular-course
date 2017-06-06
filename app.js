(function(){
  'use strict';
angular.module('firstApp',[])
  .controller('nameController', function($scope){
    $scope.name = "";
    $scope.nameValue = 0;

    $scope.calculate = function(){
      var stringVal = $scope.name;
      var nameValue = 0;
      for (var i = 0; i < stringVal.length; i++) {
        nameValue += stringVal.charCodeAt(i);
        }
      return nameValue;
    };


  });
})();
