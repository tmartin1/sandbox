'use strict';

angular.module('inventoryApp', [])
.controller('MainCtrl', ['$scope', function($scope) {
  // Define default settings.
  $scope.items = [
    { text: 'A', value: null, markup: null },
    { text: 'B', value: null, markup: null },
    { text: 'C', value: null, markup: null },
    { text: 'D', value: null, markup: null },
    { text: 'E', value: null, markup: null }
  ];
  $scope.markup = 0.25;
  $scope.mode = 'single';

  // Calculates the markup for a given index based on it's value.
  function calculateMarkup(index) {
    if (angular.isNumber(index) && !!$scope.items[index]) {
      if ($scope.items[index].value === null) {
        $scope.items[index].markup = null;
      } else {
        var temp = $scope.items[index].value * $scope.markup;
        $scope.items[index].markup = angular.isNumber(temp) && temp>0 ? temp : 0;
      }
    }
  };

  // Determine if calculation needs to be performed or not depending on current mode.
  $scope.calcCheck = function(index) {
    $scope.mode === 'single' ? calculateMarkup(index) : $scope.items[index].markup = null;
  };

  // Calculate all markups.
  $scope.calculateAll = function() {
    for (var i=0, n=$scope.items.length; i<n; i++) {
      calculateMarkup(i);
    }
  };

  // Swap between single and multi.
  $scope.changeSetting = function(target) {
    if (target !== $scope.mode) {
      $scope.mode = target;
      if (target === 'single') {
        $scope.calculateAll();
      }
    }
  };
}]);
