import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content,  DateTimeInput,  DescriptionInput, Form, FrameDate, FrameDateTime, FrameTime, Label, NameInput } from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "react-native-modal-datetime-picker";

export function RegisterMeal(){

  const [date,setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [time,setTime] = useState('');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleConfirm = (date:Date) => {
    console.log("A date has been picked: ", date.toLocaleDateString());
    setDate(date.toLocaleDateString())
    setDatePickerVisibility(false)
  };

  const handleConfirmTime = (time:Date) => {
    console.log("A date has been picked: ", time.toLocaleTimeString('pt-br',{ hour: 'numeric', minute: 'numeric' }));
    setTime(time.toLocaleTimeString('pt-br',{ hour: 'numeric', minute: 'numeric' }))
    setTimePickerVisibility(false)
  };

  return(
    <Container>
      <Header title="Nova refeição" type="DEFAULT"/>
      <Content>
        <Form>
          <Label>
          Nome
          </Label>
          <NameInput/>
          
          <Label>
          Descrição
          </Label>
          <DescriptionInput multiline textAlignVertical="top"/>
          
          <FrameDateTime>
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
              onConfirm={(date) => handleConfirm(date)}
              onCancel={() => {console.log('cancelou'); setDatePickerVisibility(false);}}
            />
            {/* componentente para renderizar o modal de hora  */}
            <DateTimePickerModal 
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => handleConfirmTime(time)}
              onCancel={() => {console.log('cancelou'); setTimePickerVisibility(false);}}
            />
          </FrameDateTime>

        </Form>
      </Content>
    </Container>
  );
}