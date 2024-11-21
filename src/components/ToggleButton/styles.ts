import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";


type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export type StyleProps = {
  active: boolean;
  style: ButtonTypeStyleProps
}

export const Button = styled(TouchableOpacity)<StyleProps>`
  flex: 1;
  flex-direction: row;

  height: 50px;
  padding: 16px;  
  
  border-radius: 6px;
  gap: 8px;
  
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme, active, style }) => active && style === 'PRIMARY' ? 
    theme.COLORS.GREEN_DARK : active && style === 'SECONDARY' ? 
      theme.COLORS.RED_DARK : theme.COLORS.GRAY_600
  };
  background-color: ${({ theme, active, style }) => active && style === 'PRIMARY' ? 
    theme.COLORS.GREEN_LIGHT : active && style === 'SECONDARY' ? 
      theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600
  };
`

export const ButtonIndicator = styled(View)<StyleProps>`
  height: 8px;
  width: 8px;

  border-radius: 50%;

  background-color: ${({ theme, style }) => style === 'PRIMARY' ? 
    theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};    
  `};
`