import { Container, Divider, Hour, Snack, Status, StatusStyleProps } from "./styles";

type Props = {
  time: string;
  meal: string;
  type: StatusStyleProps;
  onRender?: () => void;
}

export function Meal({time, meal, type}:Props){
  
  return(
    <Container>
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