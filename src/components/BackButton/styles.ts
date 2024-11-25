import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export type ButtonProps = {
  styledButton?: boolean;
  onDiet?: boolean;
  top?: number;
}

export const Button = styled.TouchableOpacity`
  position: absolute;  
  
  top: 24px;
  left: 24px;

  align-items: center;
  justify-content: center;

  z-index: 100;
`

export const BackIcon = styled(ArrowLeft).attrs<ButtonProps>(({ theme, styledButton, onDiet }) => ({
  size: 24,
  color: !styledButton ? 
    theme.COLORS.GRAY_200 : onDiet ?
      theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;