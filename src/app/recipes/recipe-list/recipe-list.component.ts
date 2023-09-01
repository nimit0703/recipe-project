import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes : Recipe[] = [
    new Recipe(
      'A Test recipe', 'test recipe','https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80'),
    new Recipe(
      'buddha bowl', "This vegan buddha bowl recipe includes whole grains, greens, chickpeas, sweet potato, and turmeric tahini sauce. It's yummy, healthy, and easy to make!",'https://plus.unsplash.com/premium_photo-1664648005435-44a37115e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhcmlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'),
      new Recipe(
        'Sandwich', "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein ...",'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'),

  ];

  onRecipeSelected(recipe :Recipe){
    // console.log("OnRecipeSelected works in Recipe list",recipe)
    this.recipeWasSelected.emit(recipe);
  }
  ngOnInit(): void {   
  }
}
function output(): (target: RecipeListComponent, propertyKey: "recipeWasSelected") => void {
  throw new Error('Function not implemented.');
}

