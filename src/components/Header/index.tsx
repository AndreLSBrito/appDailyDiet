import { Container, Title, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { PercentTypeStyleProps } from "../Percent/styles";
import {TouchableOpacity} from 'react-native'

type Props = {
  title ?: string;
  type: PercentTypeStyleProps 
}

export function Header({title='', type}:Props){

  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('home')
  }

  return(
    <Container>
      <TouchableOpacity onPress={handleHome}>
        <Icon type={type}/>
      </TouchableOpacity>
      
      {
        title.trim().length > 0 &&
        <Title>
          {title}
        </Title>  
      }
      
    </Container>
  )
}