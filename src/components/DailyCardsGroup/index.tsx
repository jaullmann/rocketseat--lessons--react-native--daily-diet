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
  return(
    <View>
      {dailyMeals.length > 0 && <DateLabel date={dailyMeals[0].date} />}
      <FlatList 
        data={[...dailyMeals].sort((a, b) => {
          const parseTime = (timeString: string) => {
            const [hours, minutes] = timeString.split(':').map(Number); 
            return hours * 60 + minutes; 
          };
          return parseTime(a.time) - parseTime(b.time); 
        })}
        keyExtractor={(item) => item.key}
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