// Это адрес нашего тестового сервера (он публичный и бесплатный)
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 1. GET-запрос (получить список)
export async function fetchSituations() {
  // Имитируем задержку, чтобы ты увидела состояние "Загрузка..."
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Ошибка сервера');
  return response.json();
}

// 2. POST-запрос (отправить данные формы)
export async function createSuggestion(data: any) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), // Превращаем объект в строку
  });
  if (!response.ok) throw new Error('Ошибка отправки');
  return response.json();
}
// 3. DELETE-запрос (удалить запись)
export async function deleteSituation(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Ошибка удаления');
  return true;
}