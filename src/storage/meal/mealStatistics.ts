import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

type Props = {
  mealsOnDiet: number;
  mealsOutDiet: number;
  bestOnDietSequel: number;
  mealsAmount: number;
  userScore: number;
}

export async function mealStatistics(): Promise<Props> {
  try {
    
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    
    if (meals.length === 0) {
      return {
        mealsOnDiet: 0,
        mealsOutDiet: 0,
        bestOnDietSequel: 0,
        mealsAmount: 0,
        userScore: 1
      }
    }  
    
    const onDietAmount = meals.filter(meal => meal.onDiet).length
    const outDietAmount =  meals.length - onDietAmount;
    
    let currentSequel = 0;
    let bestSequel = 0;
    for (let meal of meals) {
      if (meal.onDiet) {
        currentSequel++;         
        if (currentSequel > bestSequel){
          bestSequel = currentSequel;
        }
      } else {
        currentSequel = 0;
      }
    }

    return {
      mealsOnDiet: onDietAmount,
      mealsOutDiet: outDietAmount,
      bestOnDietSequel: bestSequel,
      mealsAmount: meals.length,
      userScore: onDietAmount/meals.length
    }

  } catch (error) {
    throw error;
  }
}