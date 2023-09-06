import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    private ingredients: Ingredient[]=[
        new Ingredient('apple',5),
        new Ingredient('banana',6),
    
      ];

      getIngredient(){
        return this.ingredients;
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }
    
}