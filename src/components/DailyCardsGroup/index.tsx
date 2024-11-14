import { FlatList, View } from "react-native";

import { DateLabel } from "@components/DateLabel";
import { MealCard } from "@components/MealCard";

type Meal = {
  title: string,
  description: string,
  date: Date,
  onDiet: boolean
}

type DailyCardsGroupProps = {
  dailyMeals: Meal[];
};


export function DailyCardsGroup({ dailyMeals }: DailyCardsGroupProps) {
  return(
    <View>
      <DateLabel date={dailyMeals[0].date} />
      <FlatList 
        data={dailyMeals}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MealCard 
            key={index}
            time={item.date}
            description={item.description}
            onDiet={item.onDiet}
            onPress={() => null}
          />
        )}
      />
    </View>
  )
}