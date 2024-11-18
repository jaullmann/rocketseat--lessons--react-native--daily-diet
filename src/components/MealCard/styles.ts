import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

import { LineVertical } from "phosphor-react-native";

type CardProps = {
  onDiet: boolean
}

export const Container = styled(TouchableOpacity)<CardProps>`
  max-width: 100%;
  min-width: 100%;
  min-height: 50px;
  max-height: 50px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;

  padding: 14px 12px; 
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Timestamp = styled.Text`
  width: min-content;

  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.US}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}  
`

export const MealDescription =  styled.Text`
  flex: 1;

  white-space: nowrap;        
  overflow: hidden;           
  text-overflow: ellipsis;

  text-align: left;
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_200};
    `}  
`

export const CardStatus = styled(View)<CardProps>`
  width: 14px;
  height: 14px;

  margin: 0;
  
  border-radius: 50%;

  background-color: ${({ theme, onDiet }) => onDiet 
    ? theme.COLORS.GREEN_MID
    : theme.COLORS.RED_MID
  };
`            

export const VerticalLineIcon = styled(LineVertical).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.GRAY_400
}))``;