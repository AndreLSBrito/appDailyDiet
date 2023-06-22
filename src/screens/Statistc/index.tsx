import { Container, AvaregeStatistc, TextStatistc, Content, Title, NumberStatistc, ContentStatistc, SequenceCard, Frame, InDietCard, OutDietCard } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { mealGetAll } from "../../storage/Meal/mealGetAll";
import { mealStorageDTO } from "../../storage/Meal/mealStorageDTO";
import { useEffect, useState } from "react";

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
      console.log(result)
      
    }

    return result
    
  } catch (error) {
    console.log('nao foi possivel calcular a estatistica')
  }
}


export function Statistic(){

  const [dataStatistc,setDataStatistc] = useState<IStatistcProps>()

  async function fetchStatistic(){
    try {
      const data = await calculateStatistc()
      setDataStatistc(data)    
    } catch (error) {
      console.log('nao foi possível calcular as estatisticas')
    }
  }

  useEffect(() =>{
    fetchStatistic()
  },[])

  return(
    <Container type="ABOVE-AVERAGE">
      <Header type="ABOVE-AVERAGE"/>

      <AvaregeStatistc>
        {(dataStatistc? (dataStatistc.mealsOnDiet/dataStatistc.amountMeals)*100 : 0)}%
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
            {(dataStatistc? dataStatistc.bestSequenceOnDiet : 0)}
            </NumberStatistc>

            <TextStatistc>
              melhor sequência de pratos dentro da dieta
            </TextStatistc>
          </SequenceCard>

          <SequenceCard>
            <NumberStatistc>
            {(dataStatistc? dataStatistc.amountMeals : 0)}
            </NumberStatistc>

            <TextStatistc>
              refeições registradas
            </TextStatistc>
          </SequenceCard>

          <Frame>
            <InDietCard>
              <NumberStatistc>
               {(dataStatistc? dataStatistc.mealsOnDiet : 0)}
              </NumberStatistc>

              <TextStatistc>
                refeições dentro da dieta
              </TextStatistc>
            </InDietCard>

            <OutDietCard>
            <NumberStatistc>
             {(dataStatistc? dataStatistc.mealsOutDiet : 0)}
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