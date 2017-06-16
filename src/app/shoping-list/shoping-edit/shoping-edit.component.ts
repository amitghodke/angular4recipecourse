import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Ingredients} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const  newIngredient = new Ingredients(ingName, ingAmount);
    this.slService.addIngredients(newIngredient);

  }

}
