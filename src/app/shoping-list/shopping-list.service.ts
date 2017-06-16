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

  addIngredients(ingredient: Ingredients ) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
