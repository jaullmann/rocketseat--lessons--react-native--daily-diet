import { Container, Header, Logo, Avatar, Label } from './styles';

import { ScoreCard } from '@components/ScoreCard';
import { Button } from '@components/Button';

import logoImg from '@assets/mainLogo.png';
import avatarImg from '@assets/avatar.png';
import { DateLabel } from '@components/DateLabel';
import { MealCard } from '@components/MealCard';

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

      <DateLabel date={new Date('2024-11-13')} />
      <MealCard 
        time={new Date('2024-11-13')}
        description={'Salada de batata com ovos, azeitonas e creme azedo'}
        onDiet={false}
      />
      <MealCard 
        time={new Date('2024-11-13')}
        description={'Feijoada'}
        onDiet={false}
      />
      <MealCard 
        time={new Date('2024-11-13')}
        description={'Legumes no vapor'}
        onDiet={true}
      />

    </Container>
  );
}

