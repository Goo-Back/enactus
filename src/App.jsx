import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './Component/Pages/Home/Hero.jsx';
import Navbar1 from './Component/Navbar1.jsx';
import Project from './Component/Pages/Project/Project.jsx';
import Event from './Component/Pages/Event_/Event.jsx';
import LoginSigne_up from './Component/Pages/LoginSigne_up/LoginSigne_up.jsx';
import Footer from './Component/Footer.jsx';
import Apropo from './Component/Pages/About_us/Apropo.jsx';

function App() {
  return (
    <Router>
      <div className="content">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Apropo />} />
          <Route path="/project" element={<Project />} />
          <Route path="/event" element={<Event />} />
          <Route path="/join" element={<LoginSigne_up />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
