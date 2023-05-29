import {useNavigation, useFocusEffect} from '@react-navigation/native'
import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';
import { Container, HeaderHome, HeaderSectionList, Logo, Profile, SnackContainer, SnackText } from "./styles";

import logoImg from '../../assets/logo.png'
import profileImg from '../../assets/profile.png'

import { Meal } from "../../components/Meal";
import { SectionList } from "react-native";
import { Percent } from "../../components/Percent";
import { AddButton } from "../../components/AddButton";
import { StatusStyleProps } from "../../components/Meal/styles";
import { mealGetAllSectionByKey } from '../../storage/Meal/mealGetAllSectionByKey';
import { mealStorageDTO } from '../../storage/Meal/mealStorageDTO';

export function Home(){

  const navigation = useNavigation()
  const [meals, setMeals] = useState<(IData | undefined)[]>([])


  interface IDataItem {
    id: number;
    time: string;
    name: string;
    description: string;
    type: StatusStyleProps;
  }
  
  interface IData {
    date: string;
    data: IDataItem[];
  }

  async function loadData(){
    try {
      const storage = await mealGetAllSectionByKey()
      if (storage !== undefined && storage !== null) {
        setMeals(storage);
      } else {
        setMeals([]);
      }
      // const keys = await AsyncStorage.getAllKeys();
      //    await AsyncStorage.multiRemove(keys);
    
    }  catch (error) {
      Alert.alert('Ops..', 'Não foi possível carregar as refeições');
      console.log(error)
    }
   
  }

//   const clearAppData = async function() {
//     try {
//         const keys = await AsyncStorage.getAllKeys();
//         await AsyncStorage.multiRemove(keys);
//     } catch (error) {
//         console.error('Error clearing app data.');
//     }
// }
  
  function handleStatistic(){
    // navigation.navigate('statistic', {type: "ABOVE-AVERAGE"})
    console.log(meals)
  }

  function handleNewMeal(){
    navigation.navigate('new', {id: 0})
  }

  function handleGetMeal(id:number){
    navigation.navigate('getMeal', {id})
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return(
    <Container>
      <HeaderHome>
        <Logo source={logoImg}/>
        <Profile source={profileImg}/>
      </HeaderHome>

      <Percent onPress={handleStatistic} type='ABOVE-AVERAGE'/>

      <SnackContainer>
        <SnackText>
          Refeições
        </SnackText>
        <AddButton text='Refeição' onPress={handleNewMeal}/>
      </SnackContainer>

      <SectionList
        sections={meals ?? []}
        keyExtractor={({id}) => String(id)}
        renderItem={({item}) => (
          <Meal 
            time={item.time} 
            meal={item.name} 
            type={item.type} 
            onPress={() => handleGetMeal(item.id)} 
            onRender={() => console.log('asdasdasdasd')
          }/>
        
        )}
        renderSectionHeader={({section: {date}}) => (
          <HeaderSectionList >{date}</HeaderSectionList>
        )}
      />

      
     {/* {DATA.map(({data}) =>(<Meal time="21:00" meal="Aveia fina com mel e banana empanada com whei" type="IN-DIET"/>))}
      <Meal time="21:00" meal="Aveia fina com mel e banana empanada com whei" type="IN-DIET"/> */}
    </Container>
  )
}
