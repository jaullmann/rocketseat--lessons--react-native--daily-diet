type dateFormat = 'BR' | 'US';

export function formattedDate(date: Date, outputFormat: dateFormat = 'BR'): string {
  date.setHours(date.getHours() - 3);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear(); 
  if (outputFormat == 'BR') {   
    return `${day}/${month}/${year}`;
  } else {
    return `${year}-${month}-${day}`;
  }  
}

export function formattedTime(date: Date): string {
  date.setHours(date.getHours() - 3);
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${hour}:${minute}`;
}

export function formatAmericanDate(brazilianDate: string): string {
  const day = Number(brazilianDate.split('/')[0]).toString().padStart(2, '0');
  const month = Number(brazilianDate.split('/')[1]).toString().padStart(2, '0');
  const year = Number(brazilianDate.split('/')[2]).toString().padStart(4, '0');
  return `${year}-${month}-${day}`; 
}

export function formatBrazilianDate(americanDate: string): string {
  const year = Number(americanDate.split('-')[0]).toString().padStart(4, '0');
  const month = Number(americanDate.split('-')[1]).toString().padStart(2, '0');
  const day = Number(americanDate.split('-')[2]).toString().padStart(2, '0');
  return `${day}/${month}/${year}`;
}

export function formatToPercentage(num: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: num === 1 ? 0 : 2,
    maximumFractionDigits: num === 1 ? 0 : 2,
  }).format(num);
}

export function isValidDate(dateString: string): boolean {
  if (dateString.length < 8 || !dateString.includes('/')) {
    return false;
  }
  const day = Number(dateString.split('/')[0]);
  const month = Number(dateString.split('/')[1]);
  const year = Number(dateString.split('/')[2]);
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
  const isValidHour = hour >= 0 && hour <= 23
  const isValidMinute = minute >= 0 && minute <= 59
  return isValidHour && isValidMinute
}