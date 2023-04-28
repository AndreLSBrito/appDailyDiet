import { Container, SubTitle, Title, Icon, PercentTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: PercentTypeStyleProps
}

export function Percent({type='ABOVE-AVERAGE', ...rest}:Props){
  return(
    <Container type={type} {...rest}>
      <Title>
        90,86%
      </Title>
      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>
      <Icon type={type}/>
    </Container>
  )
}