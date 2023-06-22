import { Alert, Text } from 'react-native';
import { useState, useCallback } from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import { Container, 
         EmptyImage, 
         EmptyText, 
         EmptyTextHeading, 
         EmptyView, 
         HeaderHome, 
         HeaderSectionList, 
         Logo, 
         Profile, 
         SnackContainer, 
         SnackText 
        } from './styles';

import logoImg from '../../assets/logo.png'
import emptyList from '../../assets/emptyList.png'

import { Meal } from '../../components/Meal';
import { SectionList } from 'react-native';
import { Percent } from '../../components/Percent';
import { AddButton } from '../../components/AddButton';
import { IStatistcProps, calculateStatistc } from '../Statistc';
import { StatusStyleProps } from '../../components/Meal/styles';
import { PercentTypeStyleProps } from '../../components/Percent/styles';
import { mealGetAllSectionByKey } from '../../storage/Meal/mealGetAllSectionByKey';

export function Home(){

  const navigation = useNavigation()
  const [meals, setMeals] = useState<IData[]>([])
  const [dataStatistic, setDataStatistic] = useState<IStatistcProps>()
  const [average, setAverage] = useState<PercentTypeStyleProps>('DEFAULT')

  const PERCENT_VALUE = dataStatistic  && dataStatistic?.amountMeals > 0 
    ? 
    Number(((dataStatistic.mealsOnDiet/dataStatistic.amountMeals)*100).toFixed()) 
    : 
    0
  ;

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
      if(storage !== undefined || storage !== null ){
        setMeals(storage)
      }else{
        setMeals([])
      }
      return []
    }  catch (error) {
      Alert.alert('Ops..', 'Não foi possível carregar as refeições');
      console.log(error)
    }
  }

  async function loadStatistic(){
    try {
     const data = await calculateStatistc()
     if((data !== undefined) && ((data.mealsOnDiet/data.amountMeals) >= 0.5)){
      setAverage('ABOVE-AVERAGE')
     }else if((data !== undefined) && ((data.mealsOnDiet/data.amountMeals) < 0.5)){
      setAverage('BELOW-AVERAGE')
     }else{
      setAverage('DEFAULT')
     }
     setDataStatistic(data)
    }  catch (error) {
      Alert.alert('Ops..', 'Não foi possível calcular as estatísticas');
      console.log(error)
    }
  }

  function handleStatistic(){
    navigation.navigate('statistic', {type: average})
  }

  function handleNewMeal(){
    navigation.navigate('new', {id: 0})
  }

  function handleGetMeal(id:number){
    navigation.navigate('getMeal', {id})
  }

  useFocusEffect(useCallback(() => {
    loadData();
    loadStatistic();
  }, []));

  return(
    <Container>
      <HeaderHome>
        <Logo source={logoImg}/>
        <Profile source={{uri: 'https://github.com/tiotedd.png'}}/>
      </HeaderHome>

      <Percent 
        onPress={handleStatistic} 
        type={average} 
        value={PERCENT_VALUE}
      />

      <SnackContainer>
        <SnackText>
          Refeições
        </SnackText>
        <AddButton text='Nova refeição' onPress={handleNewMeal}/>
      </SnackContainer>

      <SectionList
        sections={meals}
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
        ListEmptyComponent={() => (
          <EmptyView>
            <EmptyTextHeading>
              Vamos começar!
            </EmptyTextHeading>

            <EmptyText>
              Adicione uma <Text style={{fontWeight: '700'}}>Nova refeição</Text>.
            </EmptyText>

            <EmptyImage source={emptyList}/>
          </EmptyView>
        )}
      />
    </Container>
  )
}
