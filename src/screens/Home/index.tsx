import { Container, HeaderHome, Logo, Profile, SnackContainer, SnackText } from "./styles";

import logoImg from '../../assets/logo.png'
import profileImg from '../../assets/profile.png'
import { Percent } from "../../components/Percent";
import { AddButton } from "../../components/AddButton";
import { Meal } from "../../components/Meal";

export function Home(){
  return(
    <Container>
      <HeaderHome>
        <Logo source={logoImg}/>
        <Profile source={profileImg}/>
      </HeaderHome>

      <Percent type='ABOVE-AVERAGE'/>

      <SnackContainer>
        <SnackText>
          Refeições
        </SnackText>
        <AddButton text='Refeição'/>
      </SnackContainer>

      <Meal time="20:00" meal="X-tudo" type="OUT-DIET"/>
      <Meal time="21:00" meal="Aveia fina com mel e banana empanada com whei" type="IN-DIET"/>
    </Container>
  )
}
