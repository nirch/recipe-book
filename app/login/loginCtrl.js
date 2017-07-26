recipeApp.controller("LoginCtrl", function ($scope, $uibModalInstance) {
    $scope.test = "Nir";

    $scope.dismiss = function() {
        $uibModalInstance.close("User dismissed");
    }
});
