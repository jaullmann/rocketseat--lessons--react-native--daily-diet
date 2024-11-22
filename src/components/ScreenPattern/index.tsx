import { ReactNode } from "react";
import { BackButton } from "@components/BackButton";
import { BackgroundProps, Container, Title, Main } from "./styles";

type Props = BackgroundProps & {
  title: string;
  children?: ReactNode;
}

export function ScreenPattern({ title, style = "REGULAR" }: Props){
  return(
    <Container style={style}>
      <BackButton top={57} />
      <Title>
        {title}
      </Title>
      <Main />
    </Container>
  )
}