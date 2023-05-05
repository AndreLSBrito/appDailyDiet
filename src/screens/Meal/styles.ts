import styled from "styled-components/native";
import { StatusStyleProps } from "../../components/Meal/styles";
import { ModalProps } from "react-native";

type Props = {
  type:StatusStyleProps
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 0 24px;
  background-color: ${({theme, type}) => type === 'IN-DIET' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`

export const MealTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 4px;
  font-size: 20px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const TimeTitle = styled.Text`
   margin-bottom: 4px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_200};
  text-align: left;
  margin-bottom: 24px;
`

export const  DietInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 144px;
  height: 34px;
  background: ${({theme}) => theme.COLORS.GRAY_600};
  border-radius: 1000px;
`

export const TextStatus = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const FrameButton = styled.View`
  flex:1;
  justify-content: flex-end;
  gap: 4px;
  width: 100%;
`

export const Modal = styled.Modal.attrs<ModalProps>({
  transparent: true,
  animationType: 'fade',
})``

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* fundo com opacidade */
`;

export const ModalView = styled.View`
  margin: 250px;
  width: 90%;
  height: 192px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  gap: 32px;
  border-radius: 8px;
  padding: 24px;
`

export const ModalText = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: ${({theme}) => theme.FONT_SIZE.LG_18}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const ModalButtonContainer = styled.View`
  width: 147px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`