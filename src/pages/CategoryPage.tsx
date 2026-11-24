import { useParams, Link } from 'react-router-dom';
import { situationsData } from '../data';
import SituationList from '../components/SituationList';

export default function CategoryPage() {
  const { categoryName } = useParams();
  
  // Фильтруем ситуации по выбранной категории
  const filtered = situationsData.filter(s => s.category === categoryName);

  return (
    <main className="content">
      <Link to="/catalog" style={{ display: 'inline-block', marginBottom: '20px', color: '#5b3a8e' }}>← Назад в каталог</Link>
      <h2>Категория: {categoryName}</h2>
      
      <SituationList situations={filtered} />
    </main>
  );
}