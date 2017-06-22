"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var recipe_model_1 = require("./recipe.model");
var core_1 = require("@angular/core");
var ingredients_model_1 = require("../shared/ingredients.model");
var RecipeService = (function () {
    function RecipeService(slService) {
        this.slService = slService;
        // public recipeSelected = new EventEmitter<Recipe>();
        this.recipes = [
            new recipe_model_1.Recipe('Tasty Schnitzel', 'Super-tasty schnitzel - just awesome ', 'https://thumbs.dreamstime.com/z/gourmet-tasty-crumbled-schnitzel-crispy-fries-close-up-lemon-tomato-lettuce-50667370.jpg', [
                new ingredients_model_1.Ingredients('Meat', 12),
                new ingredients_model_1.Ingredients('French Fries', 2),
            ]),
            new recipe_model_1.Recipe('Big burger', 'what else you need to say?', 'https://s-media-cache-ak0.pinimg.com/236x/a2/d4/ea/a2d4eafff7482f4b4225cc6d73a3840c.jpg', [
                new ingredients_model_1.Ingredients('Meat', 12),
                new ingredients_model_1.Ingredients('Buns', 2),
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.onAddIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    return RecipeService;
}());
RecipeService = __decorate([
    core_1.Injectable()
], RecipeService);
exports.RecipeService = RecipeService;
