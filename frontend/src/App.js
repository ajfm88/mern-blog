import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/blog/:slug' element={<ArticleDetailPage />} />
    </Routes>
  );
}

export default App;
