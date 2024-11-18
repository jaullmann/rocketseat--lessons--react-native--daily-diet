import { FlatList, View } from "react-native";

import { DateLabel } from "@components/DateLabel";
import { MealCard } from "@components/MealCard";

type Meal = {
  title: string,
  description: string,
  date: string,
  time: string,
  onDiet: boolean
}

type DailyCardsGroupProps = {
  dailyMeals: Meal[];
};


export function DailyCardsGroup({ dailyMeals }: DailyCardsGroupProps) {
  return(
    <View>
      {dailyMeals.length > 0 && <DateLabel date={dailyMeals[0].date} />}
      <FlatList 
        data={dailyMeals}
        keyExtractor={(item, index) => item.date + '_' + item.time + '_' + index}
        renderItem={({ item }) => (
          <MealCard             
            time={item.time}
            title={item.title}
            onDiet={item.onDiet}
            onPress={() => {}}
          />
        )}
      />
    </View>
  )
}