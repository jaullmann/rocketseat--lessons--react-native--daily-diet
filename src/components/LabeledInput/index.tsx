import { Container, Label, Input } from "./styles";

type Props = {
  label: string,
}

export function LabeledInput({ label }: Props){
  return(
    <Container>
      <Label>
        {label}
      </Label>
      <Input />
    </Container>
  )
}