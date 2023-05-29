import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Header } from "../../components/Header";
import { Container, Content,  DateTimeInput,  DescriptionInput, 
          Form, FrameDate, ContainerRow, FrameTime, Label, NameInput, 
          InDiet, OutDiet, Status, DietStyleProps 
        } from "./styles";
import { Button } from "../../components/Button";
import { StatusStyleProps } from "../../components/Meal/styles";
import { mealAddNewMeal } from "../../storage/Meal/mealAddNewMeal";
import { Hamburger } from "phosphor-react-native";
import { mealGetAll } from "../../storage/Meal/mealGetAll";


type RouteParams = {
  id: number;
}

export function RegisterMeal(){
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params as RouteParams
  
  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [description,setDescription] = useState('');
  const [inDietActive,setInDietActive] = useState(false);
  const [outDietActive,setOutDietActive] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
 
  const type = inDietActive ? 'IN-DIET' : outDietActive ? 'OUT-DIET' : undefined
  
  
  function fecthMeal(id:number){
    if(id !== 0){
      
    }
  }

  function handleSetActiveInDiet(){
    setInDietActive(!inDietActive)
    if(outDietActive){
      setOutDietActive(false)
    }
  }

  function handleSetActiveOutDiet(){
    setOutDietActive(!outDietActive)
    if(inDietActive){
      setInDietActive(false)
    }
  }
  
  function handleConfirmDate(date:Date){
    console.log("A date has been picked: ", date.toLocaleDateString());
    setDate(date.toLocaleDateString())
    setDatePickerVisibility(false)
  };

  function handleConfirmTime(time:Date){
    console.log("A date has been picked: ", time.toLocaleTimeString('pt-br',{ hour: 'numeric', minute: 'numeric' }));
    setTime(time.toLocaleTimeString('pt-br',{ hour: 'numeric', minute: 'numeric' }))
    setTimePickerVisibility(false)
  };

  async function handleNewMeal(){
    try {
      const storedMeals = await mealGetAll()
      const lastId: number = storedMeals?.reduce((maxId, meal) => Math.max(meal.id, maxId), 0) ?? 0 ;
      await mealAddNewMeal({
        id: (lastId + 1),
        name: name,
        description: description,
        time: time.toLocaleString(),
        date: date.toLocaleString(),
        type: type
        }
      )
      navigation.navigate('feedback', {type})
    } catch (error) {
      console.log('Não foi possível criar a refeição')
    }
    
  }

  return(
    <Container>
      <Header title="Nova refeição" type="DEFAULT"/>
      <Content>
        <Form>
          <Label>
          Nome
          </Label>
          <NameInput value={name} onChangeText={setName}/>
          
          <Label>
          Descrição
          </Label>
          <DescriptionInput 
            multiline 
            textAlignVertical="top" 
            value={description} 
            onChangeText={setDescription}
          />
          
          <ContainerRow>
            <FrameDate>
              <Label>
                Data
              </Label>

              <DateTimeInput
              value={date.toLocaleString()}  
              onChangeText={() => {setDatePickerVisibility(true); setDate('');}}
              onPressIn={() => {setDatePickerVisibility(true); setDate('');}}
              onKeyPress={() => {setDatePickerVisibility(true); setDate('');}}
              />
            </FrameDate>

            <FrameTime>
               <Label>
                Hora
              </Label>

              <DateTimeInput
              value={time.toLocaleString()}  
              onPressIn={() => {setTimePickerVisibility(true); setTime('');}}
              onChangeText={() => {setTimePickerVisibility(true); setTime('');}}
              onKeyPress={() => {setTimePickerVisibility(true); setTime('');}}
              />
            </FrameTime>
           

           {/* componentente para renderizar o modal de data  */}
            <DateTimePickerModal 
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={(date) => handleConfirmDate(date)}
              onCancel={() => {console.log('cancelou'); setDatePickerVisibility(false);}}
            />
            {/* componentente para renderizar o modal de hora  */}
            <DateTimePickerModal 
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => handleConfirmTime(time)}
              onCancel={() => {console.log('cancelou'); setTimePickerVisibility(false);}}
            />
          </ContainerRow>

          <Label>
            Está dentro da dieta?
          </Label>

          <ContainerRow>
            <InDiet isActive={inDietActive} onPress={handleSetActiveInDiet}>
              <Status type='IN-DIET'/>
              <Label>
                Sim
              </Label>
            </InDiet>

            <OutDiet isActive={outDietActive} onPress={handleSetActiveOutDiet}>
              <Status type='OUT-DIET'/>
              <Label>
                Não
              </Label>
            </OutDiet>
          </ContainerRow>
        </Form>

        <Button text="Cadastrar refeição" onPress={handleNewMeal}/>
      </Content>
    </Container>
  );
}