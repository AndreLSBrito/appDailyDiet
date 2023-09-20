import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Header } from "../../components/Header";
import { Container, Content,  DateTimeInput,  DescriptionInput, 
          Form, FrameDate, ContainerRow, FrameTime, Label, NameInput, 
          InDiet, OutDiet, Status, DietStyleProps 
        } from "./styles";
import { Button } from "../../components/Button";
import { mealAddNewMeal } from "../../storage/Meal/mealAddNewMeal";
import { mealGetAll } from "../../storage/Meal/mealGetAll";
import { mealGetById } from "../../storage/Meal/mealGetById";
import { mealEditMeal } from "../../storage/Meal/mealEditMeal";
import { Alert } from "react-native";
import { mealStorageDTO } from "../../storage/Meal/mealStorageDTO";


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
  
  
  async function fecthMeal(id:number){
    if(id !== 0){
      const storage = await mealGetById(id);
      if (storage !==undefined){
        setName(storage.name);
        setDescription(storage.description);
        setDate(storage.date);
        setTime(storage.time);
        if(storage.type ==="IN-DIET"){
          setInDietActive(true);
          setOutDietActive(false);
        }else{
          setInDietActive(false);
          setOutDietActive(true);
        }
      }
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
    setDate(date.toLocaleDateString())
    setDatePickerVisibility(false)
  };

  function handleConfirmTime(time:Date){
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

  async function handleEditMeal(){
    try {
      const mealEdited:mealStorageDTO = {
        id: id,
        name: name,
        description: description,
        time: time.toLocaleString(),
        date: date.toLocaleString(),
        type: type
      }
      if(mealEdited.type === undefined){
        return Alert.alert('Ops...','Informe se a refeição faz parte de sua dieta!')
      }
      await mealEditMeal(mealEdited)
      Alert.alert('Refeição alterada','Sua refeição foi alterada com sucesso!')
      navigation.navigate('home')
    } catch (error) {
      Alert.alert('Ops...','Não foi possível editar sua refeição, tente mais tarde!')
    }
  }

  useEffect(()=>{
    fecthMeal(id)
  },[]);

  return(
    <Container>
      <Header title={id===0?'Nova refeição':'Editar refeição'} type="DEFAULT"/>
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
              onCancel={() => {setDatePickerVisibility(false);}}
            />
            {/* componentente para renderizar o modal de hora  */}
            <DateTimePickerModal 
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => handleConfirmTime(time)}
              onCancel={() => {setTimePickerVisibility(false);}}
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

        <Button text={id===0?'Cadastrar refeição':'Salvar alterações'} onPress={() => (id===0?handleNewMeal():handleEditMeal())}/>
      </Content>
    </Container>
  );
}