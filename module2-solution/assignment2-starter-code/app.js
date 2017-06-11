(function(){
  angular.module('ShoppingListCheckOff',[])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  this.toBuy = ShoppingListCheckOffService.toBuy;

  this.buyItem = function($index){
    ShoppingListCheckOffService.buyItem($index);
  };

}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  this.bought = ShoppingListCheckOffService.bought;
}

function ShoppingListCheckOffService(){
  this.toBuy = [  {name:"cookies",quantity:10},{name:"broccoli",quantity:"500 grams"},
                  {name:"tomatoes",quantity:"1 kg"},{name:"tea leaves",quantity:"250 grams"},
                  {name:"banana chips",quantity:"10 packets"},{name:"coriander",quantity:"1 bunch"},
                  {name:"bread",quantity:"2 packets"},{name:"drinks",quantity:"20 bottles"} ];
  this.bought = [];

  this.buyItem = function($index){
    var item = this.toBuy.splice($index, 1);
    console.log(item[0]);
    this.bought.push(item[0]);
  };

}

})();
