import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Content, Label, Status } from "../RegisterMeal/styles";
import { Container, Description, DietInformation, FrameButton, ModalButtonContainer, MealTitle, Modal, ModalText, ModalView, TextStatus, TimeTitle, CenteredView } from "./styles";
import { EditButton } from "../../components/EditButton";
import { RemoveButton } from "../../components/RemoveButton";
import { Button } from "../../components/Button";
import { Alert } from "react-native";
import { mealGetById } from "../../storage/Meal/mealGetById";
import { mealStorageDTO } from '../../storage/Meal/mealStorageDTO';
import { mealRemoveMeal } from '../../storage/Meal/mealRemoveMeal';


type RouteParams = {
  id: number
}

export function Meal(){

  const route = useRoute()
  const {id} = route.params as RouteParams
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [meal, setMeal] = useState<mealStorageDTO | undefined>()
 
  function handleEditMeal(){
    navigation.navigate('new', {id})
  }

  async function handleRemoveMeal(key:string){
    try {
      await mealRemoveMeal(id,key)
      Alert.alert('Excluir', 'Refeição excluída com sucesso!')
      navigation.navigate('home')
    } catch (error) {
      
    }
    
  }

  async function fetchMeal(){
    try {
      const storedMeal = await mealGetById(id)
      setMeal(storedMeal)
    } catch (error) {
      console.log('não foi possível carregar a refeição: ' + error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, []));

  return(
    <Container type={meal?.type}>
      <Header title="Refeição" type={meal?.type}/>
      <Content>
        <MealTitle>
        {meal?.name}
        </MealTitle>
        <Description>
        {meal?.description}
        </Description>

        <TimeTitle>
          Data e hora
        </TimeTitle>
        <Description>
          {meal?.date} às {meal?.time}
        </Description>

        <DietInformation>
          <Status type={meal?.type}/>
          <TextStatus>
            {meal?.type ==='IN-DIET' ? 'dentro da dieta' : 'fora da dieta'}
          </TextStatus>
        </DietInformation>

        <FrameButton>
          <EditButton text="Editar refeição" onPress={handleEditMeal}/>
          <RemoveButton text="Excluir refeição" onPress={() => setModalVisible(true)}/>
        </FrameButton>

        
          <Modal 
            visible={modalVisible} 
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          
          >
            <CenteredView>
              <ModalView>
                <ModalText>
                  Deseja realmente excluir o registro da refeição?
                </ModalText>

                <ModalButtonContainer>
                  <Button text="Cancelar" type="SECONDARY"/>
                  <Button text="Sim, excluir" onPress={()=>handleRemoveMeal(meal?.date??'')}/>
                </ModalButtonContainer>
              </ModalView>
            </CenteredView>
          </Modal>
        
       
        
      </Content>
    </Container>
  )
}