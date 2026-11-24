import { Link } from 'react-router-dom';
import { situationsData } from '../data';

export default function CatalogPage() {
  // Получаем уникальные категории (например, "Ожоги", "Раны")
  const categories = Array.from(new Set(situationsData.map(s => s.category)));

  return (
    <main className="content">
      <h2>Каталог ситуаций</h2>
      <p>Выберите категорию:</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {categories.map(category => (
          <Link 
            key={category} 
            to={`/category/${encodeURIComponent(category)}`} 
            className="card" 
            style={{ textDecoration: 'none', width: '200px', textAlign: 'center', padding: '30px' }}
          >
            <h3>{category}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}