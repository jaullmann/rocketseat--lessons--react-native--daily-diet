import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = 'REGULAR' | 'ADD' | 'EDIT' | 'DELETE';

type ButtonProps = {
  type?: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${({ theme, type }) => type === 'DELETE' 
    ? theme.COLORS.WHITE
    : theme.COLORS.GRAY_200
  };

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Title = styled(Text)<ButtonProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  color: ${({ theme, type }) => type === 'DELETE' 
    ? theme.COLORS.GRAY_200
    : theme.COLORS.WHITE
  };
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))``;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_200
}))``;