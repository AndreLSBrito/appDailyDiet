import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealStorageDTO } from "./mealStorageDTO";

export async function mealGetAll() {
  try {
    const storageKeys = await AsyncStorage.getAllKeys()
    const meal = storageKeys
      ? await Promise.all(
          storageKeys.map(async (key) => {
            const data = await AsyncStorage.getItem(key)
            if (data !== null) {
              return JSON.parse(data)
            }
          })
        )
      : []
    return meal.flat()
  } catch (error) {
    throw error
    console.log('error em buscar as refeições')
  }
}