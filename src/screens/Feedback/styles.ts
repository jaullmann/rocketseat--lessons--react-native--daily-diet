import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

type styleProps = {
  onDiet: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Wrapper = styled.View`
  margin: 0 32px; 
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)<styleProps>`
  margin-bottom: 8px;

  text-align: center;
  ${({ theme, onDiet }) => css`
    color: ${onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;        
  `};
`

export const RegularText = styled.Text`
  margin-bottom: 40px;

  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;        
  `};
`

export const BoldText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;        
  `};
`

export const Image = styled.Image`
  margin-bottom: 32px;

  height: 288px;
  width: 224px;

  align-self: center;
`