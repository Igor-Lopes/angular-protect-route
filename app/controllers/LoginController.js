(function() {
  angular.module('AngularRouting').controller('LoginController', ['$scope', '$http', '$window', '$location', 'AuthService', function($scope, $http, $window, $location, AuthService) {

    $scope.showAuthError = false;

    $scope.login = function() {
      if (AuthService.login($scope.email, $scope.password)) {
        $location.path("/page-1");
      } else {
        $scope.showAuthError = true;
      }
    }
  }]);
}());
