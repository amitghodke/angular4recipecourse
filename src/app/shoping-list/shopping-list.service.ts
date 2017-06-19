import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from "@angular/core";
export class ShoppingListService {
  public ingredientsChanged= new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Tomatoes', 10),
    new Ingredients('Apples', 10)

  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients ) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  addIngredients(ingredients: Ingredients[]) {
    // for ( let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients);
  }
}
