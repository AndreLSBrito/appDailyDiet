import { TextInputProps, ViewProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {StatusStyleProps} from '../../components/Meal/styles'

export type DietStyleProps = TouchableOpacityProps & {
  isActive: boolean;
}

type Props = ViewProps & {
  type:StatusStyleProps 
}

export const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%; 
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 104px;
  bottom: 0;
  padding: 0 40px 24px;
  background: ${({theme}) => theme.COLORS.GRAY_700};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`

export const Form = styled.View`
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  flex: 1;
`

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const NameInput = styled.TextInput<TextInputProps>`
  align-items: center;
  padding: 14px;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const DescriptionInput = styled.TextInput<TextInputProps>`
  padding: 14px;
  width: 100%;
  height: 120px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  text-align: left;
`

export const ContainerRow = styled.View`
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
`

export const FrameDate = styled.View`
  flex-direction: column;
  flex: 1;
`

export const DateTimeInput = styled.TextInput<TextInputProps>`
  padding: 14px;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  text-align: left;
`

export const FrameTime = styled.View`
  flex-direction: column;
  flex: 1;
`

export const InDiet = styled(TouchableOpacity)<DietStyleProps>`
  padding: 14px;
  flex: 1;
  gap: 8px;
  flex-direction: row;
  border: 1px solid ${({theme, isActive}) =>  isActive ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  background-color: ${({theme, isActive}) =>  isActive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
`

export const OutDiet = styled(TouchableOpacity)<DietStyleProps>`
  padding: 14px;
  flex: 1;
  gap: 8px;
  flex-direction: row;
  border: 1px solid ${({theme, isActive}) => isActive ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  background-color: ${({theme, isActive}) => isActive ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
`

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 7px;
  background-color: ${({theme, type}) => type === 'IN-DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
