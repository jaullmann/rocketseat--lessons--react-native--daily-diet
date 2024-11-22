import styled from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

export type ButtonProps = {
  styledButton?: boolean;
  onDiet?: boolean;
  top?: number;
}

export const BackIcon = styled(ArrowLeft).attrs<ButtonProps>(({ theme, styledButton, onDiet }) => ({
  size: 24,
  color: !styledButton ? 
    theme.COLORS.GRAY_200 : onDiet ?
      theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;  
  
  top: 50px;
  left: 24px;
`;