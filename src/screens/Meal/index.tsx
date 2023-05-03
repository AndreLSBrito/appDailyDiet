import { Text } from "react-native";
import { Header } from "../../components/Header";
import { Content, Label, Status } from "../RegisterMeal/styles";
import { Container, Description, DietInformation, FrameButton, MealTitle, TextStatus, TimeTitle } from "./styles";
import { Button } from "../../components/Button";
import { AddButton } from "../../components/AddButton";


export function Meal(){
  return(
    <Container type="IN-DIET">
      <Header title="Refeição" type="IN-DIET"/>
      <Content>
        <MealTitle>
          Sanduíche
        </MealTitle>
        <Description>
         Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <TimeTitle>
          Data e hora
        </TimeTitle>
        <Description>
          02/05/2023 às 16:00
        </Description>

        <DietInformation>
          <Status type="IN-DIET"/>
          <TextStatus>
            dentro da dieta
          </TextStatus>
        </DietInformation>

        <FrameButton>
          <AddButton text="Excluir refeição"/>
          <Button text="Editar refeição" type="SECONDARY"/>
        </FrameButton>
        
      </Content>
    </Container>
  )
}