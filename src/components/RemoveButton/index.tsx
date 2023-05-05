import { ButtonText, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  text:string;
}

export function RemoveButton({text, ...rest}:Props){
  return(
    <Container {...rest}>
      <Icon/>
      <ButtonText>
        {text}
      </ButtonText>  
    </Container>
  )
}