(function(){
  'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);



  LunchCheckController.$inject= ['$scope'];

  function LunchCheckController($scope){

    $scope.lunchItemsList = "";
    $scope.checkIfTooMuch = function(){
        var itemCount = 0;
         $scope.lunchItemsList.split(',').forEach(function(val){
          if (val.trim().length > 0){
              itemCount ++;
            }
        });
        console.log(itemCount);
        if(itemCount == 0){
            $scope.message = "Please enter data first";
            $scope.messageRed = true;
            $scope.messageGreen = false;
        } else if(itemCount <=3){
            $scope.message = "Enjoy!";
            $scope.messageRed = false;
            $scope.messageGreen = true;
        } else if (itemCount >3) {
            $scope.message = "Too much!";
            $scope.messageRed = false;
            $scope.messageGreen = true;
        }
      };
  };

})();
