import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routs/Home/Home.jsx'
import Episodes from './routs/Episodes/Episodes.jsx'
import Locations from './routs/Locations/Locations.jsx'
import Characters from './routs/Characters/Characters .jsx'
import Navbar from './components/Navbar/Navbar.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
