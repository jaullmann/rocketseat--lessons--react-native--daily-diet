import { TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  label: string,
}

export function LabeledInput({ label, ...rest }: Props){
  return(
    <Container>
      <Label>
        {label}
      </Label>
      <Input {...rest}/>
    </Container>
  )
}