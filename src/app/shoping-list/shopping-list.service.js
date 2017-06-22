"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ingredients_model_1 = require("../shared/ingredients.model");
var core_1 = require("@angular/core");
var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new core_1.EventEmitter();
        this.ingredients = [
            new ingredients_model_1.Ingredients('Tomatoes', 10),
            new ingredients_model_1.Ingredients('Apples', 10)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        // for ( let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.emit(this.ingredients);
        var _a;
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
