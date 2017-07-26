recipeApp.controller("RecipeDetailsCtrl", function ($scope, $location, recipes, activeUser,  $routeParams) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.recipe = recipes.get($routeParams.recipeIndex);

})
