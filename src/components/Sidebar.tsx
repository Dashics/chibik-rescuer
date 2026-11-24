import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Навигация</h2>
      <nav>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><Link to="/" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>Главная</Link></li>
          <li><Link to="/catalog" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>Каталог</Link></li>
          <li><Link to="/suggest" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>Предложить тему</Link></li>
          <li><Link to="/profile" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>Изученные темы</Link></li>
          <li><Link to="/profile" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>Избранное</Link></li>
          <li><Link to="/about" className="menu-btn" style={{display: 'block', textDecoration: 'none'}}>О проекте</Link></li>
        </ul>
      </nav>
    </aside>
  );
}