// Shared User Constructor
recipeApp.factory("Recipe", function(){
    function Recipe(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.duration = plainObject.duration;
        this.ingrediants = plainObject.ingrediants;
        this.steps = plainObject.steps;
        this.imageUrl = plainObject.imageUrl;
    };

    return Recipe;
});
