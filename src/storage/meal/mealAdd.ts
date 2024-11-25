import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";

import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealAdd(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();
  }
}

