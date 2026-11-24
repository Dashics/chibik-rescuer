import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { situationsData } from '../data'; // Пока оставим для карточек
import { fetchSituations } from '../api'; // Наш GET-запрос
import SituationList from '../components/SituationList';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(''); // Состояние для ошибки

  // useEffect срабатывает один раз при загрузке
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        // Делаем реальный GET-запрос на сервер
        await fetchSituations(); 
        setError('');
      } catch (err) {
        setError('Не удалось получить данные. Проверьте интернет.');
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const filtered = situationsData.filter(s => 
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  // Если идет загрузка — показываем это
  if (isLoading) {
    return (
      <main className="content" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Загрузка данных... ⏳</h2>
        <p>Чибик связывается с сервером!</p>
      </main>
    );
  }

  // Если произошла ошибка — показываем красный текст
  if (error) {
    return (
      <main className="content" style={{ textAlign: 'center', marginTop: '50px', color: '#d32f2f' }}>
        <h2>Ошибка! ❌</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="menu-btn" style={{ marginTop: '20px', width: '200px' }}>
          Попробовать снова
        </button>
      </main>
    );
  }

  return (
    <main className="content">
      <section id="welcome" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>Привет! Я Чибик-спасатель!</h2>
        <div style={{ fontSize: '4rem', margin: '20px 0' }}>🐱‍👤</div>
        <p>Давай учиться оказывать первую помощь.</p>
      </section>

      <input 
        type="search" 
        placeholder="Поиск ситуации..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        style={{ marginBottom: '20px' }}
      />

      {search.trim() !== '' ? (
        <section>
          <h3>Результаты поиска:</h3>
          <SituationList situations={filtered} />
        </section>
      ) : (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
          <Link to="/catalog" className="menu-btn" style={{ textDecoration: 'none', width: '200px', textAlign: 'center' }}>
            Перейти в каталог
          </Link>
          <Link to="/suggest" className="menu-btn" style={{ textDecoration: 'none', width: '200px', textAlign: 'center' }}>
            Предложить тему
          </Link>
        </div>
      )}
    </main>
  );
}