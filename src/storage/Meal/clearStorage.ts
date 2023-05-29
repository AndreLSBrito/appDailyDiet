import AsyncStorage from "@react-native-async-storage/async-storage";

export async function clearStorage(){
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
}