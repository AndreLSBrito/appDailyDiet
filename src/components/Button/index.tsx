import { ButtonText, Container, ButtonTypeStyleProps } from "./styles";

type Props = {
  text:string;
  type?: ButtonTypeStyleProps
}

export function Button({text,type='PRIMARY'}:Props){
  return(
    <Container type={type}>
      <ButtonText type={type}>
        {text}
      </ButtonText>  
    </Container>
  )
}