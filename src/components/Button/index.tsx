import { ButtonText, Container, ButtonTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  text:string;
  type?: ButtonTypeStyleProps
}

export function Button({text,type='PRIMARY', ...rest}:Props){
  return(
    <Container type={type} {...rest}>
      <ButtonText type={type}>
        {text}
      </ButtonText>  
    </Container>
  )
}