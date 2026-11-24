import SuggestionForm from '../components/SuggestionForm';

export default function SuggestPage() {
  return (
    <main className="content">
      <h2 style={{ marginBottom: '20px' }}>Предложить свою ситуацию</h2>
      <SuggestionForm />
    </main>
  );
}