

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Contact from './components/Contact';
import AssessmentTasks from './components/AssessmentTasks';
import About from './components/About';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
      
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/assessment-tasks" element={<AssessmentTasks />} />
      <Route path ="*" element={<NotFound />} />
    </Routes>
 
 </BrowserRouter>

  );
}

export default App;
