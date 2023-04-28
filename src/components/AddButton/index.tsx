import { ButtonText, Container, Icon } from "./styles";

type Props = {
  text:string;
}

export function AddButton({text}:Props){
  return(
    <Container>
      <Icon/>
      <ButtonText>
        {text}
      </ButtonText>  
    </Container>
  )
}