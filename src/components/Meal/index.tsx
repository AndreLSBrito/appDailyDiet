import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Hour, Snack, Status, StatusStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  meal: string;
  type: StatusStyleProps;
  onRender?: () => void;
}

export function Meal({time, meal, type, ...rest}:Props){
  
  return(
    <Container {...rest}>
      <Hour>
        {time}
      </Hour>

      <Divider/>

      <Snack>
       {meal}
      </Snack> 

      <Status type={type}/>  
    </Container>
  )
}