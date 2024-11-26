import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealDeleteByDatetime(mealDatetime: string) {
  try {
    const storedMeals = await mealGetAll();
    const filteredMeals = storedMeals.filter(meal => meal.datetime !== mealDatetime);
        
    const storage = JSON.stringify(filteredMeals);
    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);

  } catch(error) {
    throw error;
  }
}

