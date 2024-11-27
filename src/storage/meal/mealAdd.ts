import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetAll } from "./mealGetAll";

export async function mealAdd(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();
    const existsMealByKey = storedMeals.find(meal => meal.key === newMeal.key);
    
    if (existsMealByKey) {
      throw new AppError('Já existe uma refeição salva neste dia e horário!');
    }
    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch(error) {
    throw error;
  }
}

