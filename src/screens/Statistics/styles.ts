import styled, { css } from "styled-components/native";

import { View } from "react-native";

export type ScreenProps = {
  onDiet?: boolean
}

export const Container = styled(View)<ScreenProps>`
  flex: 1;
  position: relative;

  padding-top: 72px;
  
  background-color: ${({ theme, onDiet }) => onDiet ? 
    theme.COLORS.GREEN_LIGHT :  theme.COLORS.RED_MID
  };

  align-items: center;
  justify-content: flex-start;  
`
export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.UL}px;        
  `};
`
export const Description = styled.Text`  
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`
export const Main = styled.View`
  flex: 1;
  width: 100%;
  gap: 12px;

  margin-top: 34px;
  padding: 33px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700}
`
export const CardsTitle = styled.Text`
  border-bottom: 11px;

  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`
export const CardsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`