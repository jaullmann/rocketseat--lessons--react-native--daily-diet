import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { Create } from "@screens/Create";
import { Feedback } from "@screens/Feedback";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen 
        name="home"
        component={Home}        
      />

      <Screen 
        name="meal"
        component={Meal}
      />

      <Screen 
        name="create"
        component={Create}
      />

      <Screen 
        name="feedback"
        component={Feedback}
      />

      <Screen 
        name="statistics"
        component={Statistics}
      />

    </Navigator>
  );
}
