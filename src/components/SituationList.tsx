import type { Situation } from '../types';
import SituationCard from './SituationCard';

interface Props {
  situations: Situation[];
}

export default function SituationList({ situations }: Props) {
  if (situations.length === 0) {
    return <p>Ничего не найдено 😔</p>;
  }

  return (
    <div className="cards">
      {situations.map((situation) => (
        <SituationCard key={situation.id} situation={situation} />
      ))}
    </div>
  );
}