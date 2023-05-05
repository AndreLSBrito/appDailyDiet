import { Header } from "../../components/Header";
import { Content, Label, Status } from "../RegisterMeal/styles";
import { Container, Description, DietInformation, FrameButton, ModalButtonContainer, MealTitle, Modal, ModalText, ModalView, TextStatus, TimeTitle, CenteredView } from "./styles";
import { EditButton } from "../../components/EditButton";
import { RemoveButton } from "../../components/RemoveButton";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Alert } from "react-native";


export function Meal(){

  const navigation = useNavigation()

  function handleEditMeal(){
    navigation.navigate('new')
  }

  function handleRemoveMeal(){
    console.log('excluir refeição')
    navigation.navigate('home')
  }

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
          <EditButton text="Editar refeição" onPress={handleEditMeal}/>
          <RemoveButton text="Excluir refeição" onPress={handleRemoveMeal}/>
        </FrameButton>

        
          <Modal 
            visible={true} 
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              // setModalVisible(!modalVisible);
            }}
          
          >
            <CenteredView>
              <ModalView>
                <ModalText>
                  Deseja realmente excluir o registro da refeição?
                </ModalText>

                <ModalButtonContainer>
                  <Button text="Cancel" type="SECONDARY"/>
                  <Button text="Sim, excluir"/>
                </ModalButtonContainer>
              </ModalView>
            </CenteredView>
          </Modal>
        
       
        
      </Content>
    </Container>
  )
}