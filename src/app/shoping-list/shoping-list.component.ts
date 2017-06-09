import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients.model";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients: Ingredients[] = [
  new Ingredients('Tomatoes' , 10),
  new Ingredients('Apples' , 10)

];

  constructor() { }

  ngOnInit() {
  }

}
