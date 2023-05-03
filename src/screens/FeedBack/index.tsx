import { useRoute } from "@react-navigation/native";

import { Container } from "./styles";
import { Text } from "react-native";
import { PositiveFeedBack } from "../../components/PositiveFeedback";
import { NegativeFeedBack } from "../../components/NegativeFeedback";

type RouteParams = {
  type : string;
}

export function FeedBack(){

  const route = useRoute();
  const {type } = route.params as RouteParams;

  return(
    <Container>
      {type === 'IN-DIET' ? <PositiveFeedBack/>: <NegativeFeedBack/>}
    </Container>
  )
}