import { useParams, Link, useNavigate } from 'react-router-dom';
import { situationsData } from '../data';
import { deleteSituation } from '../api';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const situation = situationsData.find(s => s.id === Number(id));

  // Если урока нет — показываем сообщение
  if (!situation) {
    return (
      <main className="content">
        <h2>Урок не найден</h2>
        <Link to="/catalog">← Вернуться в каталог</Link>
      </main>
    );
  }

  // Функция удаления
  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить этот урок?')) {
      try {
        // Делаем DELETE-запрос на сервер
        await deleteSituation(situation.id);
        alert('Урок удален с сервера!');
        navigate('/catalog'); // Перекидываем пользователя в каталог
      } catch (error) {
        alert('Ошибка при удалении. Попробуйте позже.');
      }
    }
  };

  return (
    <main className="content">
      <Link to="/catalog" style={{ display: 'inline-block', marginBottom: '20px', color: '#4a2e75' }}>
        ← Назад в каталог
      </Link>
      
      <h2>{situation.title}</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Категория: {situation.category}</p>
      
      <div className="lesson-grid">
        <section className="lesson-section">
          <h3 style={{ color: '#d32f2f' }}>🚨 Признаки</h3>
          <ul>
            {situation.signs.map((sign, i) => <li key={i}>{sign}</li>)}
          </ul>
        </section>

        <section className="lesson-section">
          <h3 style={{ color: '#2e7d32' }}>✅ Что делать</h3>
          <ol>
            {situation.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </section>

        <section className="lesson-section">
          <h3 style={{ color: '#d32f2f' }}>❌ Чего нельзя делать</h3>
          <ul>
            {situation.forbidden.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>
      </div>

      {/* Кнопка удаления */}
      <button 
        onClick={handleDelete} 
        style={{ marginTop: '30px', padding: '10px 20px', background: '#d32f2f', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Удалить урок
      </button>
    </main>
  );
}