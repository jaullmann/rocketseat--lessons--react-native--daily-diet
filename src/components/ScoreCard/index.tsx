import { TouchableOpacityProps } from "react-native";

import { Container, Title, Text, ScoreCardStyleProps, ExpandIcon } from "./styles";

type Props = TouchableOpacityProps & ScoreCardStyleProps & {
  score: number;
}

function formatToPercentage(num: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: num === 1 ? 0 : 2,
    maximumFractionDigits: num === 1 ? 0 : 2,
  }).format(num);
}

export function ScoreCard({ score = 0, ...rest }: Props){
  return(
    <Container score={score} {...rest}>
      <ExpandIcon score={score} />
      <Title>
        {formatToPercentage(score)}
      </Title>
      <Text>
        das refeições dentro da dieta
      </Text>
    </Container>
  )  
}