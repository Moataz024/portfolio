import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import GitHubStats from './components/GitHubStats';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <div className="py-24 px-4" id="github-stats">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-16 text-center">GitHub Statistics</h2>
          <GitHubStats />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;