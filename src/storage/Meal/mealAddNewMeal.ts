import AsyncStorage from '@react-native-async-storage/async-storage'
import { mealGetAll } from './mealGetAll'
import { mealStorageDTO } from './mealStorageDTO'
import { mealGetByKey } from './mealGetByKey'

export async function mealAddNewMeal(newMeal: mealStorageDTO) {
  try {
    const storedMeal = await mealGetAll();
    let isIdAlreadyExists = storedMeal.find((meal: mealStorageDTO) => meal.id === newMeal.id);

    while (isIdAlreadyExists !== undefined) {
      newMeal.id += 1;
      isIdAlreadyExists = storedMeal.find((meal) => meal.id === newMeal.id);
    }

    const storaedMealByDate = await mealGetByKey(newMeal.date);
    const updatedMealList = [newMeal, ...storaedMealByDate];
    const storage = JSON.stringify(updatedMealList);

    await AsyncStorage.setItem(newMeal.date, storage);

  } catch (error) {
    console.error('Erro ao adicionar nova refeição:', error);
    // Trate o erro de acordo com suas necessidades.
  }
}