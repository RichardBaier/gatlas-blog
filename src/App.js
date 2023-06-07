import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Gatlas, Home } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <div className="flex-row justify-center align-center min-100-vh">
          <Route 
                path="/home"
                element={<Home />}
              />
              <Route 
                path="/gatlas" 
                element={<Gatlas />}
              />
        </div>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
