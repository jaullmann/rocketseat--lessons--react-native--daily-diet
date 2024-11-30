import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type ButtonProps = {
  styledButton?: boolean;
  onDiet?: boolean;
  top?: number;
  left?: number;
  position?: string;
}

export const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  z-index: 100;
`

export const BackIcon = styled(ArrowLeft).attrs<ButtonProps>(({ theme, styledButton, onDiet }) => ({
  size: 24,
  color: !styledButton ? 
    theme.COLORS.GRAY_200 : onDiet ?
      theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;