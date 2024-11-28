import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetAll(): Promise<MealStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    if (meals.length > 0) {
      const sortedMeals = meals.sort((a, b) => {
        const mealA = Number(a.key.replace(/\D/g, ""));
        const mealB = Number(b.key.replace(/\D/g, ""));
        return mealB - mealA;
      });

      return sortedMeals
    }    

    return meals;
  } catch (error) {
    throw error;
  }
}