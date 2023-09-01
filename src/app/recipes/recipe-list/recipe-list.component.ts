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
      'a test recipe', 'test recipe','https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80'),
    new Recipe(
      'a test recipe', 'test recipe','https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')

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

