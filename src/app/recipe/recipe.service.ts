import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";


export class RecipeService {
  public recipeSelected =new EventEmitter<Recipe> ();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('A Another Recipe', 'This is Another Test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }


}
