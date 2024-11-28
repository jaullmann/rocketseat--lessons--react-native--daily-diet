import { MealStorageDTO } from "./MealStorageDTO";

import { mealAdd } from "./mealAdd";
import { mealDeleteByKey } from "./mealDeleteByKey";

export async function mealUpdate(meal: MealStorageDTO) {
  try {    
    await mealDeleteByKey(meal.key);
    await mealAdd(meal);
  } catch(error) {
    throw error;
  }
}

