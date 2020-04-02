'use strict';

angular.module('copayApp.controllers').controller('shapeshiftDetailsController', function($scope, shapeshiftService, externalLinkService) {

  $scope.remove = function() {
    shapeshiftService.saveShapeshift($scope.ss, {
      remove: true
    }, function(err) {
      $scope.cancel();
    });
  };

  $scope.cancel = function() {
    $scope.shapeshiftDetailsModal.hide();
  };

  $scope.openTransaction = function(id) {
    var url;
    if ($scope.ss['outgoingType'].toUpperCase() == 'BTC') {
      url = "https://insight.MoneyByte.info/tx/" + id;
    } else if ($scope.ss['outgoingType'].toUpperCase() == 'BCH') {
      url = "https://insight.MoneyByte.info/tx/" + id;
    } else {
      return;
    }
    externalLinkService.open(url);
  };

});
