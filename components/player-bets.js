(function (module) {
   "use strict";

   module.directive("playerBets", [ '$timeout', '$parse', 'CONSTANTS', function ($timeout, $parse, CONSTANTS) {
      return {
         restrict: 'E',
         link : function(scope, element, attrs){
            scope.onBet = function() {
               scope.fundsExceedingAmount = fundsExceedingAmount();
               if(scope.fundsExceedingAmount > 0) {
                  scope.fundsExceeding = true;
                  return;
               }
               scope.fundsExceeding = false;
               scope.fundsExceedingAmount = 0;
               scope.enableRunButton = _.some(scope.bets);
               scope.playerBets = scope.bets.slice();
               scope.placeBetModal = false;
            }
            scope.onCancelBet = function() {
               scope.placeBetModal = false;
               scope.fundsExceeding = false;
               scope.fundsExceedingAmount = 0;
            }
            scope.$watch('placeBetModal', function(value) {
               if(value) {
                  scope.bets = scope.playerBets.slice();
               }
            });
            function fundsExceedingAmount() {
               var setAmount =  _.reduce(scope.bets, function(sum, item) { if(item) { sum += item;} return sum; }, 0);
               return setAmount - scope.playerFunds;
            }
         },
         templateUrl: 'views/components/player-bets.html'
      }
   }]);
}(angular.module('madTrucker')));