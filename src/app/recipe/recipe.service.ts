import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "../shoping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  public recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Super-tasty schnitzel - just awesome ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx-Igvu20KrpEZoKGZVHPo0BD7LfF4fUIGwfISQVU2eLvaUj7+',
      [
        new Ingredients('Meat', 12),
        new Ingredients('French Fries', 2),
      ]),
    new Recipe('Big burger', 'what else you need to say?',
      'http://betheme.muffingroupsc.netdna-cdn.com/be/burger/wp-content/uploads/2015/11/home_burger_pic5.jpg',
      [
        new Ingredients('Meat', 12),
        new Ingredients('Buns', 2),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  onAddIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients)
  }
}
