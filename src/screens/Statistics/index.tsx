import { useState } from "react";

import { formatToPercentage } from "@utils/functions";
import { StatisticCard } from "@components/StatisticCard";
import { BackButton } from "@components/BackButton";
import { 
  Container, Title, Description, 
  Main, CardsTitle, CardsContainer 
} from "./styles";

export function Statistics(){

  const [onDiet, setOnDiet] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreTarget, setScoreTarget] = useState(0.7);
  const [bestSequelAmount, setBestSequelAmount] = useState(0);
  const [totalMealsAmount, setTotalMealsAmount] = useState(0);
  const [onDietMealsAmount, setOnDietMealsAmount] = useState(0);
  const [outDietAmount, setOutDietAmount] = useState(0);

  return(
    <Container onDiet={onDiet}>
      <BackButton 
        styledButton
        onDiet={onDiet}
      />
      <Title>
        {formatToPercentage(score)}
      </Title>
      <Description>
        das refeições dentro da meta
      </Description>

      <Main>
        <CardsTitle>
          Estatísticas Gerais
        </CardsTitle>
        <StatisticCard 
          amount={bestSequelAmount}         
          label="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard 
          amount={totalMealsAmount}         
          label="refeições registradas"
        />
        <CardsContainer>
          <StatisticCard 
            amount={onDietMealsAmount}         
            label="refeições dentro da dieta"
            style="GREEN"
          />
          <StatisticCard 
            amount={outDietAmount}         
            label="refeições fora da dieta"
            style="RED"
          />
        </CardsContainer>

      </Main>

    </Container>
  )
}