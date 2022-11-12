

import Header from './components/header/header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/dashboard"

import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>

      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
