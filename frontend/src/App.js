<<<<<<< HEAD
import Header from './components/header/header';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/dashboard"
>>>>>>> e01ceef90ec88678ea2c60ee401cebeba5e06eed
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
=======
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes>
      </Router>
>>>>>>> e01ceef90ec88678ea2c60ee401cebeba5e06eed
    </div>
  );
}

export default App;
