import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Biryani','Hyderabadi dum biryani.','https://cdn.shopify.com/s/files/1/0634/0421/2467/products/514LLZ3MEmL_1024x1024.jpg'),
    new Recipe('Haleem','Hyderabadi - Ramadhan special haleem.','https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/a0gfmetdt7xyohrzm2fn')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
