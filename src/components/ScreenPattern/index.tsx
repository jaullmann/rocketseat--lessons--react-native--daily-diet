import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ReactNode } from "react";
import { BackButton } from "@components/BackButton";
import { BackgroundProps, Container, Title, Main } from "./styles";

type Props = BackgroundProps & {
  title: string;
  children?: ReactNode;
}

export function ScreenPattern({ title, style = "REGULAR", children }: Props){
  return(
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container style={style}>
        <BackButton top={24} left={24}/>
        <Title>
          {title}
        </Title>
        <Main>
          {children}
        </Main>
      </Container>
    </KeyboardAwareScrollView>
  )
}