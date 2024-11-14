import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  width: 100%;
  margin: 32px 0 0;

  text-align: left;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`