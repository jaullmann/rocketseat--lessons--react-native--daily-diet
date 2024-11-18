import { Label } from "./styles";

// function formattedDate(date: Date): string {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = String(date.getFullYear()).slice(-2);
//   return `${day}.${month}.${year}`;
// }

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