export function formatToPercentage(num: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: num === 1 ? 0 : 2,
    maximumFractionDigits: num === 1 ? 0 : 2,
  }).format(num);
}