import { useRoute } from "@react-navigation/native";
import { Container, AvaregeStatistc, TextStatistc, Content, Title, NumberStatistc, ContentStatistc, SequenceCard, Frame, InDietCard, OutDietCard } from "./styles";

import { Header } from "../../components/Header";
import { mealGetAll } from "../../storage/Meal/mealGetAll";
import { mealStorageDTO } from "../../storage/Meal/mealStorageDTO";
import { useEffect, useState } from "react";
import { PercentTypeStyleProps } from "../../components/Percent/styles";

export type IStatistcProps = {
  amountMeals: number;
  mealsOnDiet: number;
  mealsOutDiet: number;
  bestSequenceOnDiet: number;
}

export async function calculateStatistc(){
  try {
    const allMeals:mealStorageDTO[] = await mealGetAll()

    let result:IStatistcProps = {
      amountMeals:0,
      mealsOnDiet:0,
      mealsOutDiet:0,
      bestSequenceOnDiet:0,
    }

    if(allMeals!==undefined){
      const amountMeals = allMeals.length
      const mealsOnDiet = allMeals.filter((meal) => meal.type === 'IN-DIET').length
      const mealsOutDiet = allMeals.filter((meal) => meal.type === 'OUT-DIET').length
      let sequence = 0
      const bestSequenceOnDiet = allMeals.reduce((maxSequence, meal) => {
        if(meal.type === 'IN-DIET'){
          sequence = sequence + 1
        }else{
          sequence = 0
        }
       return Math.max(maxSequence,sequence)
      } ,0);

      result = {
        amountMeals,
        mealsOnDiet,
        mealsOutDiet,
        bestSequenceOnDiet
      }
    }

    return result
    
  } catch (error) {
    console.log('nao foi possivel calcular a estatistica')
  }
}

type RouteParams = {
  type: PercentTypeStyleProps;
}

export function Statistic(){
  const route = useRoute()
  const {type} = route.params as RouteParams
  const [dataStatistic,setdataStatistic] = useState<IStatistcProps>()
  const PERCENT_VALUE = dataStatistic  && dataStatistic?.amountMeals > 0 ? Number(((dataStatistic.mealsOnDiet/dataStatistic.amountMeals)*100).toFixed()) : 0

  async function fetchStatistic(){
    try {
      const data = await calculateStatistc()
      setdataStatistic(data)    
    } catch (error) {
      console.log('nao foi possível calcular as estatisticas')
    }
  }

  useEffect(() =>{
    fetchStatistic()
  },[])

  return(
    <Container type={type}>
      <Header type={type}/>

      <AvaregeStatistc>
        {PERCENT_VALUE}%
      </AvaregeStatistc>
      <TextStatistc>
        das refeições dentro da dieta
      </TextStatistc>

      <Content>
        <Title>
          Estatísticas gerais
        </Title>

        <ContentStatistc>
          <SequenceCard>
            <NumberStatistc>
            {(dataStatistic? dataStatistic.bestSequenceOnDiet : 0)}
            </NumberStatistc>

            <TextStatistc>
              melhor sequência de pratos dentro da dieta
            </TextStatistc>
          </SequenceCard>

          <SequenceCard>
            <NumberStatistc>
            {(dataStatistic? dataStatistic.amountMeals : 0)}
            </NumberStatistc>

            <TextStatistc>
              refeições registradas
            </TextStatistc>
          </SequenceCard>

          <Frame>
            <InDietCard>
              <NumberStatistc>
               {(dataStatistic? dataStatistic.mealsOnDiet : 0)}
              </NumberStatistc>

              <TextStatistc>
                refeições dentro da dieta
              </TextStatistc>
            </InDietCard>

            <OutDietCard>
            <NumberStatistc>
             {(dataStatistic? dataStatistic.mealsOutDiet : 0)}
              </NumberStatistc>

              <TextStatistc>
              refeições fora da dieta
              </TextStatistc>
            </OutDietCard>
          </Frame>
        </ContentStatistc>
        

      </Content>
    </Container>
  )
}