
<<<<<<< HEAD
import Header from './components/header/header';
=======

import Header from './components/header/header';

>>>>>>> 6016d92b18039355cf6ae584248a46c1b75be022
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

export default App
