import { Component,  OnInit,  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../Recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{  
  recipes : Recipe[] ;

  constructor(private recipeService:RecipeService){

  }

  ngOnInit(): void {   
    this.recipes = this.recipeService.getRecipe();
  }
}
function output(): (target: RecipeListComponent, propertyKey: "recipeWasSelected") => void {
  throw new Error('Function not implemented.');
}

