import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  checkInfo;
  checkExist;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 6),
  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(newingredient: Ingredient) {
    if (this.ingredients.indexOf(newingredient)) {
      this.checkExist = newingredient;
    } else if (!newingredient.name || !newingredient.amount) {
      this.checkInfo = newingredient;
    } else {
      this.ingredients.push(newingredient);
    }
  }
}
