import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RecipeService} from "app/recipe/recipe.service";
import  'rxjs/RX';
import {Recipe} from "../recipe/recipe.model";
import {error} from "selenium-webdriver";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private authService: AuthService, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const token = this.authService.getToken()
    return this.http.put('https://ng-recipe-book-a5070.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken()
    return this.http.get('https://ng-recipe-book-a5070.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: any) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
