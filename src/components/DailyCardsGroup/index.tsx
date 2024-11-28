import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";

import { DateLabel } from "@components/DateLabel";
import { MealCard } from "@components/MealCard";

type Meal = {
  title: string,
  description: string,
  date: string,
  time: string,
  onDiet: boolean,
  key: string
}

type DailyCardsGroupProps = {
  dailyMeals: Meal[];
};

export function DailyCardsGroup({ dailyMeals }: DailyCardsGroupProps) {
  const navigation = useNavigation();
  
  function handleMealDetails(id: string){
    navigation.navigate("meal", { id });
  }

  return(
    <View>
      {dailyMeals.length > 0 && <DateLabel date={dailyMeals[0].date} />}
      <FlatList 
        data={dailyMeals}        
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <MealCard             
            time={item.time}
            title={item.title}
            onDiet={item.onDiet}
            onPress={() => handleMealDetails(item.key)}
          />
        )}        
      />
    </View>
  )
}