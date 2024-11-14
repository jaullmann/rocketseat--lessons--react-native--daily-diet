import { Container, Header, Logo, Avatar, Label } from './styles';

import { Button } from '@components/Button';
import { ScoreCard } from '@components/ScoreCard';
import { DailyCardsGroup } from '@components/DailyCardsGroup';

import logoImg from '@assets/mainLogo.png';
import avatarImg from '@assets/avatar.png';

const meals = [
  {title: 'Salada de batada', description: 'Salada de batada', date: new Date('2024-11-14 13:35:18'), onDiet: true },
  {title: 'Salada de ameixas', description: 'Salada de batada', date: new Date('2024-11-14 18:25:18'), onDiet: true },
  {title: 'Pepinos com beterrabas', description: 'Salada de batada', date: new Date('2024-11-14 19:12:18'), onDiet: false },
  {title: 'Torta de morangos', description: 'Salada de batada', date: new Date('2024-11-14 22:45:18'), onDiet: true }
]

export function Home() {
  return (
    <Container>
      
      <Header>
        <Logo source={logoImg}/>
        <Avatar source={avatarImg} />
      </Header>

      <ScoreCard score={0.7517}/>

      <Label>
        Refeições
      </Label>

      <Button 
        title={'Adicionar Refeição'}
        type={'ADD'}
      />     

      <DailyCardsGroup dailyMeals={meals}/> 

    </Container>
  );
}

