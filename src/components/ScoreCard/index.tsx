import { TouchableOpacityProps } from "react-native";

import { Container, Title, Text, ScoreCardStyleProps } from "./styles";

type Props = TouchableOpacityProps & ScoreCardStyleProps & {
  score: number;
}

function formatToPercentage(num: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export function ScoreCard({ score = 0, ...rest }: Props){
  return(
    <Container score={score} {...rest}>
      <Title>
        {formatToPercentage(score)}
      </Title>
      <Text>
        das refeições dentro da dieta
      </Text>
    </Container>
  )  
}