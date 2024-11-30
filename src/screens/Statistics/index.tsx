import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { mealStatistics } from "@storage/meal/mealStatistics";

import { formatToPercentage } from "@utils/functions";
import { StatisticCard } from "@components/StatisticCard";
import { BackButton } from "@components/BackButton";
import { Loading } from "@components/Loading";
import { 
  Container, Title, Description, 
  Main, CardsTitle, CardsContainer 
} from "./styles";

export function Statistics(){
  const [isLoading, setIsLoading] = useState(true);
  const [onDiet, setOnDiet] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreTarget, setScoreTarget] = useState(0.7);
  const [bestSequelAmount, setBestSequelAmount] = useState(0);
  const [totalMealsAmount, setTotalMealsAmount] = useState(0);
  const [onDietMealsAmount, setOnDietMealsAmount] = useState(0);
  const [outDietMealsAmount, setOutDietMealsAmount] = useState(0);

  const navigation = useNavigation();

  async function fetchStatistics(){    
    try {
      const data = await mealStatistics();
      setBestSequelAmount(data.bestOnDietSequel);
      setTotalMealsAmount(data.mealsAmount);
      setOnDietMealsAmount(data.mealsOnDiet);
      setOutDietMealsAmount(data.mealsOutDiet);
      setScore(data.userScore);
      setOnDiet(data.mealsAmount ? data.userScore >= scoreTarget : true);   
    } catch(error) {
      Alert.alert("Estatísticas de refeições", "Não foi possível obter os dados do usuário.") 
      navigation.navigate('home');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchStatistics();
  }, [])

  return (
    <Container onDiet={onDiet}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackButton styledButton onDiet={onDiet} left={24}/>
          <Title>{formatToPercentage(score)}</Title>
          <Description>das refeições dentro da meta</Description>

          <Main>
            <CardsTitle>Estatísticas Gerais</CardsTitle>
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
                amount={outDietMealsAmount}
                label="refeições fora da dieta"
                style="RED"
              />
            </CardsContainer>
          </Main>
        </>
      )}
    </Container>
  );
}