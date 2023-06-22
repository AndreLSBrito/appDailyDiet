import { useEffect } from "react";
import { mealGetAll } from "../../storage/Meal/mealGetAll";
import { mealStorageDTO } from "../../storage/Meal/mealStorageDTO";
import { Container, SubTitle, Title, Icon, PercentTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: PercentTypeStyleProps
  value?: number 
}

export function Percent({type='ABOVE-AVERAGE', value =0, ...rest}:Props){
  return(
    <Container type={type} {...rest}>
      <Title>
        {value}%
      </Title>
      <SubTitle>
        das refeições dentro da dieta
      </SubTitle>
      <Icon type={type}/>
    </Container>
  )
}