import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Gatlas, Home } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
