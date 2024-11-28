import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealStatistics } from '@storage/meal/mealStatistics';
import { mealGetAll } from '@storage/meal/mealGetAll';

import { Container, Header, Logo, Avatar, Label } from './styles';
import { Alert, FlatList } from 'react-native';
import { Button } from '@components/Button';
import { ScoreCard } from '@components/ScoreCard';
import { DailyCardsGroup } from '@components/DailyCardsGroup';
import { Loading } from '@components/Loading';

import logoImg from '@assets/mainLogo.png';
import avatarImg from '@assets/avatar.png';


export function Home(){

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [dateLabels, setDateLabels] = useState<string[]>([]);
  const [score, setScore] = useState(1);
  const [scoreTarget, setScoreTarget] = useState(0.7);

  const navigation = useNavigation();

  function handleCurrentStatistics(){
    navigation.navigate('statistics');
  }

  function handleNewMeal(){
    navigation.navigate('create', { id: undefined });
  }

  async function fetchMeals(){
    setIsLoading(true);
    try {
      const data = await mealGetAll();
      const statsData = await mealStatistics();      
      const dates = data.map((meal) => meal.date);
      const uniqueDates = Array.from(new Set(dates));
      setMeals(data);
      setScore(statsData.userScore);
      setDateLabels(uniqueDates);        
    } catch(error) {
      Alert.alert("Refeições", "Não foi possível obter dados de refeições.")
    } finally {
      setIsLoading(false);
    }  
  }  

  useEffect(() => {
    fetchMeals()
  },[])

  return (
    <Container>
      
      <Header>
        <Logo source={logoImg}/>
        <Avatar source={avatarImg} />
      </Header>

      <ScoreCard 
        score={score} 
        scoreTarget={scoreTarget}
        onPress={handleCurrentStatistics}
      />

      <Label>
        Refeições
      </Label>

      <Button 
        title={'Adicionar Refeição'}
        type={'ADD'}
        onPress={handleNewMeal}
      />  

      {
        isLoading ? <Loading /> : 
          <FlatList 
            data={dateLabels}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <DailyCardsGroup 
                dailyMeals={meals.filter(meal => meal.date === item)}
              />
            )}
            contentContainerStyle={[{ paddingBottom: 100 }, dateLabels.length === 0 && { flex: 1 }]}
          /> 
      }
    </Container>
  );
}

