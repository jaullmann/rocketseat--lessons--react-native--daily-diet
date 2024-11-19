import { useState } from 'react';

import { FlatList } from 'react-native';
import { Container, Header, Logo, Avatar, Label } from './styles';

import { Button } from '@components/Button';
import { ScoreCard } from '@components/ScoreCard';
import { DailyCardsGroup } from '@components/DailyCardsGroup';

import logoImg from '@assets/mainLogo.png';
import avatarImg from '@assets/avatar.png';

const meals = [
  {title: 'Salada de batatas', description: 'description', date: '2024-11-14', time: '13:35',  onDiet: true },
  {title: 'Salada de tomates', description: 'description', date: '2024-11-12', time:  '18:25', onDiet: true },
  {title: 'Pepinos com beterrabas', description: 'description', date: '2024-10-10', time: '19:12', onDiet: false },
  {title: 'Torta de morangos', description: 'description', date: '2024-09-02', time: '22:45', onDiet: true },
  {title: 'Salada de batatas', description: 'description', date: '2024-11-14', time: '13:35', onDiet: true },
  {title: 'Salada de ameixas', description: 'description', date: '2024-11-12', time: '16:15', onDiet: true },
  {title: 'Pepinos com beterrabas', description: 'description', date: '2024-10-10', time: '19:12', onDiet: false },
  {title: 'Torta de morangos', description: 'description', date: '2024-09-02', time: '22:45', onDiet: true }  
]

const dates = meals.map((meal) => meal.date)
const uniqueDates = Array.from(new Set(dates.map(date => date)));


export function Home() {

  const [score, setScore] = useState(0);
  const [scoreTarget, setScoreTarget] = useState(0.7);

  return (
    <Container>
      
      <Header>
        <Logo source={logoImg}/>
        <Avatar source={avatarImg} />
      </Header>

      <ScoreCard score={score} scoreTarget={scoreTarget}/>

      <Label>
        Refeições
      </Label>

      <Button 
        title={'Adicionar Refeição'}
        type={'ADD'}
      />  

      <FlatList 
        data={uniqueDates}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DailyCardsGroup 
            dailyMeals={meals.filter(meal => meal.date === item)}
          />
        )}
        contentContainerStyle={[{ paddingBottom: 100 }, uniqueDates.length === 0 && { flex: 1 }]}
      /> 


    </Container>
  );
}

