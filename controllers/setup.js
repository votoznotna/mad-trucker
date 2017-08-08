
(function (module) {
   "use strict";

   module.controller('SetupCtrl',
      [ '$scope', '$window', '$timeout', '$state', 'CONSTANTS', 'SETTINGS', SetupCtrl ]);

   function SetupCtrl($scope, $window, $timeout, $state, CONSTANTS, SETTINGS) {

      $scope.playerName = SETTINGS.playerName;
      $scope.initialFunds = CONSTANTS.initialFunds;
      $scope.numberOfTruckers = _.filter(_.range(CONSTANTS.colors.length), function(item) { return item >= 2 });
      var selectedNumberOfTrackers = CONSTANTS.numberOfTruckers;
      $scope.selectedNumberOfTrackersLabel = selectedNumberOfTrackers;
      $scope.maxFunds = CONSTANTS.maxFunds;

      $scope.onNumberOfTruckerSelect = function onNumberOfTruckerSelect(value){
         selectedNumberOfTrackers = value;
         $scope.selectedNumberOfTrackersLabel = value;
      }

      $scope.submitForm = function () {
         SETTINGS.playerName = $scope.playerName;
         SETTINGS.initialFunds =  $scope.initialFunds;
         SETTINGS.numberOfTruckers = selectedNumberOfTrackers;
         $state.go('main');
      };
   }

}(angular.module("madTrucker")));