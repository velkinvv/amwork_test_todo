import moment from 'moment';

//даты можно было генерировать через фейкер, но решил написать свою функцию

function getRandomDateRange(): { startDate: string; endDate: string } {
   const startDate = new Date();

  // Генерируем случайный интервал от 1 до 30 дней
  const randomInterval = Math.floor(Math.random() * 30) + 1;

  // Вычитаем случайный интервал из текущей даты, чтобы получить дату начала
  startDate.setDate(startDate.getDate() - randomInterval);

  // Генерируем случайное количество миллисекунд для времени (от 0 до 86400000, что соответствует 24 часам)
  const randomTimeMillis = Math.floor(Math.random() * 86400000);

  // Добавляем случайное время к дате начала
  startDate.setTime(startDate.getTime() + randomTimeMillis);

  // Генерируем случайный интервал от 1 до (30 - randomInterval) дней
  const maxRandomInterval = 30 - randomInterval;
  const randomEndInterval = Math.floor(Math.random() * maxRandomInterval) + 1;

  // Вычитаем случайный интервал из текущей даты, чтобы получить дату окончания
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + randomEndInterval);

  // Генерируем случайное время для даты окончания и добавляем его
  const randomEndTimeMillis = Math.floor(Math.random() * 86400000);
  endDate.setTime(endDate.getTime() + randomEndTimeMillis);

  // Возвращаем объект с датами начала и окончания
  return {
    startDate: moment(startDate).format('MMM DD, LT'),
    endDate: moment(endDate).format('MMM DD, LT'),
  };
}


export default getRandomDateRange