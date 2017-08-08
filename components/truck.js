(function (module) {
   "use strict";

   module.directive("truck", [ '$timeout', '$parse', 'run', 'CONSTANTS', function ($timeout, $parse, run, CONSTANTS) {
      return {
         restrict: 'E',
         link : function(scope, element, attrs){
            var timeoutPromise, path = 0, truckLengh = $(element).find('i').width();
            scope.color =  $parse(attrs.color)(scope);
            scope.name = $parse(attrs.name)(scope);
            var bet = $parse(attrs.bet)(scope);
            scope.truckIndex = parseInt(scope.name) - 1;
            scope.playerBet = getBet(bet);
            scope.winner = false;

            function getBet(value) {
               return value ? '$' + value : '';
            }

            function betResults(winAmount) {
               var initFunds = scope.$parent.playerFunds;
               var placedBets = _.reduce(scope.playerBets, function(sum, item) { if(item) { sum += item;} return sum; }, 0);
               if(winAmount) {
                  placedBets -= 2 * bet;
               }
               scope.$parent.playerFunds -= placedBets;
               return scope.$parent.playerFunds - initFunds;
            }

            function changeTruckPath() {
               path += run.getPixels();
               if(path >= scope.rideLength - truckLengh) {
                  scope.$parent.progress = false;
                  scope.$parent.enableRunButton = false;
                  scope.winner = true;
                  var winAmount = betResults(bet);
                  if(winAmount > 0) {
                     scope.$parent.winAmount = winAmount;
                     scope.$parent.won = true;
                  } else {
                     scope.$parent.lostAmount = -winAmount;
                     scope.$parent.lost = true;
                  }
               } else {
                  runTimeout();
               }
               $(element).find('i').css({'margin-left': path});
            }

            scope.$watch('progress', function(value) {
               if(value) {
                  path = 0;
                  scope.winner = false;
                  runTimeout();
               } else {
                  cleanUp();
               }
            });

            scope.$watch('playerBets', function(value) {
               bet = scope.playerBets[scope.truckIndex];
               scope.playerBet = getBet(bet);
            }, true);

            scope.$watch('resetRun', function(value) {
               if(value) {
                  cleanUp();
                  $(element).find('i').css({'margin-left': 0});
               }
            });


            function runTimeout() {
               cleanUp();
               timeoutPromise = $timeout(changeTruckPath, CONSTANTS.ride.timeout);
            }

            function cleanUp () {
               if (timeoutPromise){
                  $timeout.cancel(timeoutPromise);
               }
            }
            scope.$on('$destroy', function() {
               cleanUp();
            });


         },
         templateUrl: 'views/components/truck.html'
      }
   }]);
}(angular.module('madTrucker')));