import {useNavigation} from '@react-navigation/native'
import { Container, HeaderHome, HeaderSectionList, Logo, Profile, SnackContainer, SnackText } from "./styles";

import logoImg from '../../assets/logo.png'
import profileImg from '../../assets/profile.png'

import { Meal } from "../../components/Meal";
import { SectionList, Text } from "react-native";
import { Percent } from "../../components/Percent";
import { AddButton } from "../../components/AddButton";
import { StatusStyleProps } from "../../components/Meal/styles";

export function Home(){

  const navigation = useNavigation()

  interface IDataItem {
    id: number;
    time: string;
    meal: string;
    type: StatusStyleProps;
  }
  
  interface IData {
    date: string;
    data: IDataItem[];
  }

  const DATA: IData[] = [
    {
      date: '28/04/2023',
      data:[
        {
          id: 1,
          time: '20:00',
          meal: 'X-banana',
          type: 'IN-DIET'
        },
        {
          id: 2,
          time: '21:00',
          meal: 'X-maca',
          type: 'OUT-DIET'
        },
        {
          id: 3,
          time: '20:00',
          meal: 'X-pera',
          type: 'OUT-DIET'
        }
      ]
    },
    {
      date: '28/04/2023',
      data: [
        {
          id: 4,
          time: '20:00',
          meal: 'X-tudo',
          type: 'OUT-DIET'
        }
      ]
    },
    {
      date: '28/04/2023',
      data: []
    },
    {
      date: '28/04/2023',
      data: []
    },
  ]

  function handleStatistic(){
    navigation.navigate('statistic', {type: "ABOVE-AVERAGE"})
  }

  function handleNewMeal(){
    navigation.navigate('new')
  }

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
        sections={DATA}
        keyExtractor={({id}) => String(id)}
        renderItem={({item}) => (
          <Meal time={item.time} meal={item.meal} type={item.type} onRender={() => console.log('asdasdasdasd')}/>
        
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
