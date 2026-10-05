import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { cv } from './data';

function App() {
  return (
    <div>
      <Header name={cv.name} role={cv.role} email={cv.email} github={cv.github} />
      <main>
        <About text={cv.about} />
        <Education items={cv.education} />
        <Skills items={cv.skills} />
        <Experience items={cv.experience} />
      </main>
      <Footer name={cv.name} />
    </div>
  );
}

export default App;
