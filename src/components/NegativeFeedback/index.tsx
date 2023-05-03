import { Container, FeedImage, Message, SubTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import outDiet from '../../assets/outDiet.png'
import { Text } from "react-native";
import { Button } from "../Button";


export function NegativeFeedBack(){

  const navigation = useNavigation();

  function handleGoHome(){
    navigation.navigate('home')
  }

  return(
    <Container>
      <Message>
        <Title>
        Que pena!
        </Title>

        <SubTitle>
          Você <Text style={{fontWeight: '700'}}>saiu da dieta</Text> dessa vez, 
          mas continue se esforçando e não desista!
        </SubTitle>
      </Message>

      <FeedImage source={outDiet}/>

      <Button text="Ir para a página inicial" onPress={handleGoHome}/>
    </Container>
  )
}