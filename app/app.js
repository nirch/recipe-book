var recipeApp = angular.module("RecipeApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

recipeApp.controller("TestCtrl", function($scope, User, activeUser) {
    var plainUser = {
         "email":"nir@nir.com",
        "password": "nir123",
        "firstName":"Nir",
        "lastName": "Channes",
        "data":"nir-recipes.json"
    }

    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());
});