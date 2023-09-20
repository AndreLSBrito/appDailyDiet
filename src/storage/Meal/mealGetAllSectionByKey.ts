import AsyncStorage from "@react-native-async-storage/async-storage";
import { IData } from "../../screens/Home";

export async function mealGetAllSectionByKey():Promise<IData[]> {

  try {
    const storageKeys = await AsyncStorage.getAllKeys()
    const meals = await Promise.all(
      storageKeys.map(async (key) => {
        const data = await AsyncStorage.getItem(key)

        if (data) {
          return {
            date: key,
            data: JSON.parse(data)
          }
        }

        return null
      })
    );
     
    const validMeals = meals.filter((meal) => meal !== null) as IData[];

    return validMeals;

  } catch (error) {
    throw error
  }
}