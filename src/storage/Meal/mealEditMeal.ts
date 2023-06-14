import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealStorageDTO } from "./mealStorageDTO";
import { mealGetByKey } from "./mealGetByKey";
import { mealRemoveMeal } from "./mealRemoveMeal";
import { mealGetAll } from "./mealGetAll";


export async function mealEditMeal(data:mealStorageDTO){
  try {
    const allMeals = await mealGetAll();
    const mealEdit = allMeals.filter((meal)=> meal.id === data.id);
    await mealRemoveMeal(mealEdit[0].id,mealEdit[0].date);
    const storaedMealByDate = await mealGetByKey(data.date);
    const updatedMealList = [data, ...storaedMealByDate];
    const storage = JSON.stringify(updatedMealList);
    await AsyncStorage.setItem(data.date,storage);
 } catch (error) {
    console.log('não foi possivel editar a refeição')
 }
}