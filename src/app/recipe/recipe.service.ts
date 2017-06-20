import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "../shoping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Super-tasty schnitzel - just awesome ',
      'https://thumbs.dreamstime.com/z/gourmet-tasty-crumbled-schnitzel-crispy-fries-close-up-lemon-tomato-lettuce-50667370.jpg',
      [
        new Ingredients('Meat', 12),
        new Ingredients('French Fries', 2),
      ]),
    new Recipe('Big burger', 'what else you need to say?',
      'https://s-media-cache-ak0.pinimg.com/236x/a2/d4/ea/a2d4eafff7482f4b4225cc6d73a3840c.jpg',
      [
        new Ingredients('Meat', 12),
        new Ingredients('Buns', 2),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  onAddIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients)
  }
}
