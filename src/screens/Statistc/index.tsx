import { Container, AvaregeStatistc, TextStatistc, Content, Title, NumberStatistc, ContentStatistc, SequenceCard, Frame, InDietCard, OutDietCard } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";

export function Statistic(){
  return(
    <Container type="ABOVE-AVERAGE">
      <Header type="ABOVE-AVERAGE"/>

      <AvaregeStatistc>
        90,86%
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
              4
            </NumberStatistc>

            <TextStatistc>
              melhor sequência de pratos dentro da dieta
            </TextStatistc>
          </SequenceCard>

          <SequenceCard>
            <NumberStatistc>
              109
            </NumberStatistc>

            <TextStatistc>
              refeições registradas
            </TextStatistc>
          </SequenceCard>

          <Frame>
            <InDietCard>
              <NumberStatistc>
                99
              </NumberStatistc>

              <TextStatistc>
                refeições dentro da dieta
              </TextStatistc>
            </InDietCard>

            <OutDietCard>
            <NumberStatistc>
                10
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