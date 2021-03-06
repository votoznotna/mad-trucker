(function (module) {
   "use strict";

   module.controller('MainCtrl',
      [ '$scope', '$window', '$timeout', '$state', 'CONSTANTS', 'SETTINGS', MainCtrl ]);

   function MainCtrl($scope, $window, $timeout, $state, CONSTANTS, SETTINGS) {
      $scope.truckColors = CONSTANTS.colors;
      $scope.progress = false;
      $scope.resetRun = true;
      $scope.rideLength = 0;
      $scope.placeBetModal = false;
      $scope.editPlayerBet = false;
      $scope.won = false;
      $scope.lost = false;
      $scope.winAmount = 0;
      $scope.lostAmount = 0;

      $scope.truckerIndexes = _.range(SETTINGS.numberOfTruckers);
      $scope.playerFunds = SETTINGS.initialFunds;
      $scope.playerName = SETTINGS.playerName;
      $scope.playerBets = _.times(SETTINGS.numberOfTruckers, _.constant(0));
      $scope.enableRunButton = false;

      function resetWinInfo() {
         $scope.won = false;
         $scope.lost = false;
         $scope.winAmount = 0;
         $scope.lostAmount = 0;
         if(!$scope.editPlayerBet) {
            $scope.playerBets = _.times(SETTINGS.numberOfTruckers, _.constant(0));
         }
      }
      $scope.onRun = function() {
         $scope.progress = true;
         $scope.resetRun = false;
         $scope.editPlayerBet = false;
      }
      $scope.onReset = function() {
         $state.go('setup');
      }
      $scope.onPlaceBet = function() {
         resetWinInfo();
         $scope.resetRun = true;
         $scope.editPlayerBet = true;
         $scope.placeBetModal = true;
      }
      angular.element($window).on('resize', function() {
         onWindowResize();
         if(!$scope.editPlayerBet && !$scope.progress) {
            resetWinInfo();
            $scope.resetRun = true;
         }
         return $scope.$apply();
      });
      var onWindowResize = _.debounce(function() {
         $scope.rideLength = getPathLength();
      }, 500);
      $scope.$on('$destroy', function () {
         angular.element($window).off('resize', onWindowResize);
      });
      function getPathLength() {
         var pathLength = $('.ribbon').eq(0).width();
         return pathLength;
      }

      onWindowResize();
   }
}(angular.module("madTrucker")));