import { useState } from 'react';
import type { FormEvent } from 'react';
import { createSuggestion } from '../api'; // Импортируем наш сервис

export default function SuggestionForm() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Состояние загрузки

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const agree = (form.elements.namedItem('agree') as HTMLInputElement).checked;

    // Проверки (как раньше)
    if (name.length < 2) { setMessage('Имя короткое'); setMessageType('error'); return; }
    if (!email.includes('@')) { setMessage('Некорректный email'); setMessageType('error'); return; }
    if (description.length < 10) { setMessage('Описание короткое'); setMessageType('error'); return; }
    if (!agree) { setMessage('Нужно согласие'); setMessageType('error'); return; }

    // Если проверки прошли — отправляем на сервер
    setIsSubmitting(true);
    setMessage('Отправка...');
    setMessageType('');

    try {
      await createSuggestion({ name, email, description });
      setMessage('Спасибо! Данные отправлены на сервер ✅');
      setMessageType('success');
      form.reset();
    } catch (error) {
      setMessage('Не удалось отправить. Проверьте интернет ❌');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* ... поля формы остаются как были ... */}
      <label htmlFor="name">Ваше имя</label>
      <input type="text" id="name" name="name" required minLength={2} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="description">Описание ситуации</label>
      <textarea id="description" name="description" required minLength={10}></textarea>
      <label className="checkbox-label">
        <input type="checkbox" id="agree" name="agree" required />
        Согласен с обработкой данных
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
      {message && <p className={messageType}>{message}</p>}
    </form>
  );
}