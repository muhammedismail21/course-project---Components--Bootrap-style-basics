import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Basmati Rice', 1.00),
    new Ingredient('Chicken with bones', 1.00),
    new Ingredient('Yogurt', 0.25),
    new Ingredient('Spices', 0.01),
    new Ingredient('Crushed Wheat flour', 1.00),
    new Ingredient('Lamb or Goat', 2.00) 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
