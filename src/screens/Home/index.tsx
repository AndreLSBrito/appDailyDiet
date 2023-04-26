import { Text } from "react-native";
import { Container, HeaderHome, Logo, Profile } from "./styles";

import logoImg from '../../assets/logo.png'
import profileImg from '../../assets/profile.png'
import { Percent } from "../../components/Percent";

export function Home(){
  return(
    <Container>
      <HeaderHome>
        <Logo source={logoImg}/>
        <Profile source={profileImg}/>
      </HeaderHome>

      <Percent/>
    </Container>
  )
}
