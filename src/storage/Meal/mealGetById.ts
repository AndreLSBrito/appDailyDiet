import { mealGetAll } from "./mealGetAll";
import { mealStorageDTO } from "./mealStorageDTO";

export async function mealGetById(id:number){
  try {
    const storedMeal = await mealGetAll()
    const meal: mealStorageDTO = storedMeal.find((meal) => meal.id === id)
    if (meal !== undefined){
      return meal
    }
  } catch (error) {
    console.log('erro em achar o ID: `${id}`')
  }
}