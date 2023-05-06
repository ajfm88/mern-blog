import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/blog/:slug' element={<ArticleDetailPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
