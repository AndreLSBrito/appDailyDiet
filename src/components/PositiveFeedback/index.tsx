import { Container, FeedImage, Message, SubTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import inDiet from '../../assets/inDiet.png'
import { Text } from "react-native";
import { Button } from "../Button";


export function PositiveFeedBack(){

  const navigation = useNavigation();

  function handleGoHome(){
    navigation.navigate('home')
  }

  return(
    <Container>
      <Message>
        <Title>
        Continue assim!
        </Title>

        <SubTitle>
          Você continua<Text style={{fontWeight: '700'}}> dentro da dieta</Text>. Muito bem!
        </SubTitle>
      </Message>

      <FeedImage source={inDiet}/>

      <Button text="Ir para a página inicial" onPress={handleGoHome}/>
    </Container>
  )
}