recipeApp.controller("NewRecipeCtrl", function ($scope, $location, recipes, activeUser, Recipe) {
    
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.test = "Nir";
});