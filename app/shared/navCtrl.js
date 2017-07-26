recipeApp.controller("NavCtrl", function ($scope, activeUser) {
    $scope.isLoggedIn = activeUser.isLoggedIn();
});