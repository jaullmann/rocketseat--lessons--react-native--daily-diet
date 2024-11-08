import { Container, Header, Logo, Avatar } from './styles';

import { ScoreCard } from '@components/ScoreCard';

import logoImg from '@assets/mainLogo.png';
import avatarImg from '@assets/avatar.png';

export function Home() {
  return (
    <Container>
      
      <Header>
        <Logo source={logoImg}/>
        <Avatar source={avatarImg} />
      </Header>

      <ScoreCard score={1}/>

    </Container>
  );
}

