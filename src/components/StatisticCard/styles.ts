import styled, { css } from "styled-components/native";
import { View } from "react-native";


type cardType = "REGULAR" | "GREEN" | "RED";

export type StyleProps = {
  style?: cardType
}

export const Container = styled(View)<StyleProps>` 
  flex: 1;  

  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: ${({ style }) => style === "REGULAR" ? 89 : 107 }px;  
  max-height: ${({ style }) => style === "REGULAR" ? 89 : 107 }px;    

  border-radius: 8px;
  padding: 16px;

  background-color: ${({ theme, style }) => style === "REGULAR" ? 
    theme.COLORS.GRAY_600 : style === "GREEN" ? 
      theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
  };  
`

export const CardTitle = styled.Text`  
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;        
  `};
`

export const CardDescription = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`