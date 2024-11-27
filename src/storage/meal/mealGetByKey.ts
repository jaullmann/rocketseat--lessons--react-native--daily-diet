import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetByKey(key: string): Promise<MealStorageDTO | undefined> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    if (meals.length > 0) {
      const filteredMeal = meals.find(meal => meal.key === key);
      if (filteredMeal) {
        return filteredMeal
      }
    } 

    return undefined;
    
  } catch (error) {
    throw error;
  }
}