import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Experience } from './components/pages/Experience';
import { Projects } from './components/pages/Projects';
import { Skills } from './components/pages/Skills';
import { Education } from './components/pages/Education';
import { Contact } from './components/pages/Contact';
import { Resume } from './components/pages/Resume';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background dark">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            {/* Handle preview_page.html and other unmatched routes */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}