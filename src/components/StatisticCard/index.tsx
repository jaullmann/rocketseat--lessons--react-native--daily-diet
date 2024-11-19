import { Container, CardTitle, CardDescription, StyleProps } from "./styles";

type Props = StyleProps & {
  amount: number;
  label: string;
}

export function StatisticCard({ amount, label, style = "REGULAR" }: Props){
  return(
    <Container style={style}>
      <CardTitle>
        {amount}
      </CardTitle>
      <CardDescription>
        {label}
      </CardDescription>
    </Container>
  )
}