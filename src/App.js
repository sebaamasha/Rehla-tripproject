import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="main-header">
        <div className="logo">Rehla</div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/add-story">Form</Link>
          <Link to="/api">API Page</Link>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-story" element={<FormPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
