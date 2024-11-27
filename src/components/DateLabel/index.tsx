import { formatBrazilianDate } from "@utils/functions";

import { Label } from "./styles";

type DateLabelProps = {
  date: string;
}

export function DateLabel({ date }: DateLabelProps){
  return(
    <Label>
      {date}
    </Label>
  )
}