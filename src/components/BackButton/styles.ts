import styled from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

type ScreenProps = {
  onDiet?: boolean
}

export const BackIcon = styled(ArrowLeft).attrs<ScreenProps>(({ theme, score }) => ({
  size: 24,
  color: score >= 0.7 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  top: 8px;
  right: 8px;  
`;