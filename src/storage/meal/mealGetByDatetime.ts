import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetByDatetime(mealDatetime: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    if (meals.length > 0) {
      const filteredMeal = meals.find(meal => meal.datetime === mealDatetime);
      if (filteredMeal) {
        return filteredMeal
      }
    } 

    return meals;
    
  } catch (error) {
    throw error;
  }
}