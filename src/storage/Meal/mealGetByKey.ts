import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealGetByKey(key:string){
  try {
    const storage = await AsyncStorage.getItem(key)
    if (storage !== null) {
      return JSON.parse(storage) 
    }
    return [] 
  } catch (error) {
    throw error
    console.log('erro em achar a refeição pela key')
  }
  
}