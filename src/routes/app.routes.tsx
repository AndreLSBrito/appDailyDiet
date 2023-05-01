import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Statistic } from "../screens/Statistc";
import { RegisterMeal } from "../screens/RegisterMeal";

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='statistic'
        component={Statistic}
      />

      <Screen
        name='new'
        component={RegisterMeal}
      />
    </Navigator>
  );
}