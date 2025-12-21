import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import { useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";

function App() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="app">
      <header className="main-header">
        <div className="logo">Rehla</div>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/api">API Page</Link>
          <Link to="/favorites">Favorites ({favorites.length})</Link>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
