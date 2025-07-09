export function dateFormatter(date: string) {
  const [year, month, day] = date.split('-').map(Number);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateToConvert = new Date(year, month - 1, day);
  dateToConvert.setHours(0, 0, 0, 0);

  if (today.getTime() === dateToConvert.getTime()) {
    return 'Сегодня';
  }

  if (today.getTime() - dateToConvert.getTime() === 86400000) {
    return 'Вчера';
  }

  return dateToConvert.toLocaleDateString('ru-RU');
}
