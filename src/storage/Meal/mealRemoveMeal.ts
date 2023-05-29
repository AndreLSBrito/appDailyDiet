import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetByKey } from "./mealGetByKey";
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealRemoveMeal(id:number, key:string){
  try {
    const storedmeals = await mealGetByKey(key)
    if (storedmeals !== undefined && storedmeals.length > 0){
      const updatedMeals = storedmeals.filter((meal:mealStorageDTO)=>(meal.id !== id)) 
      const storage = JSON.stringify(updatedMeals)
      await AsyncStorage.setItem(key, storage)
      if (updatedMeals.length === 0){
        await AsyncStorage.removeItem(key)
      }
    }
  } catch (error) {
    console.log('erro ao remover a refeição' + error)
  }
  
}