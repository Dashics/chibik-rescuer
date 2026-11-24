import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import LessonPage from './pages/LessonPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import SuggestPage from './pages/SuggestPage'; // <-- Проверь эту строчку

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/suggest" element={<SuggestPage />} /> {/* <-- И этот маршрут */}
        </Routes>
        
      </div>
      <Footer />
    </>
  );
}

export default App;