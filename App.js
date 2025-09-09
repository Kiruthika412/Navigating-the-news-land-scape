import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavbarComponent />

      {/* Main content container */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
