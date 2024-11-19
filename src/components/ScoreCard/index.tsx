import { TouchableOpacityProps } from "react-native";

import { formatToPercentage } from "@utils/functions";
import { Container, Title, Description, ScoreCardStyleProps, ExpandIcon } from "./styles";

type Props = TouchableOpacityProps & ScoreCardStyleProps & {
  score: number;
  scoreTarget: number;
}

export function ScoreCard({ score = 0, scoreTarget = 0.7,  ...rest }: Props){

  return(
    <Container score={score} scoreTarget={scoreTarget} {...rest}>
      <ExpandIcon score={score} scoreTarget={scoreTarget} />
      <Title>
        {formatToPercentage(score)}
      </Title>
      <Description>
        das refeições dentro da dieta
      </Description>
    </Container>
  )  
}