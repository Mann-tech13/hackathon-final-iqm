import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/dashboard"

import './App.css';
import { Home } from './components/home/Home';

function App() {
  return (
    <div className="App">

      
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
