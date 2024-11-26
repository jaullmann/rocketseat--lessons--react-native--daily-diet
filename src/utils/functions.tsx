export function formattedDate(date: Date): string {
  date.setHours(date.getHours() - 3);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear(); 
  return `${day}/${month}/${year}`;
}

export function formattedTime(date: Date): string {
  date.setHours(date.getHours() - 3);
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${hour}:${minute}`;
}

export function formatToPercentage(num: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: num === 1 ? 0 : 2,
    maximumFractionDigits: num === 1 ? 0 : 2,
  }).format(num);
}

export function isValidDate(dateString: string): boolean {
  const stringLength = dateString.length;
  if (stringLength !== 10) {
    return false;
  }
  const day = Number(dateString.slice(0, 2));
  const month = Number(dateString.slice(3, 5));
  const year = Number(dateString.slice(6, 10));
  if (!(day && month && year)) {
    return false;
  }
  const date = new Date(year, month - 1, day);    
  return date.getFullYear() === year &&
         date.getMonth() === month - 1 &&
         date.getDate() === day;
}

export function isValidTime(timeString: string): boolean {
  const stringLength = timeString.length;
  if (stringLength < 3 || !timeString.includes(':')) {
    return false;
  }
  const hour = Number(timeString.split(':')[0]);
  const minute = Number(timeString.split(':')[1]);
  if (!(hour && minute)) {
    return false;
  }
  const isValidHour = hour >= 0 && hour <= 23
  const isValidMinute = minute >= 0 && minute <= 59
  return isValidHour && isValidMinute
}