import { Link } from 'react-router-dom';
import type { Situation } from '../types';

interface Props {
  situation: Situation;
}

export default function SituationCard({ situation }: Props) {
  return (
    <article className="card">
      <h3>{situation.title}</h3>
      <p className="category">{situation.category}</p>
      <p className="short">{situation.short}</p>
      
      {/* Кнопка теперь является ссылкой на страницу урока */}
      <Link to={`/lesson/${situation.id}`} className="card-btn">
        Подробнее
      </Link>
    </article>
  );
}