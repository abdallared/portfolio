import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import EducationSkills from './sections/EducationSkills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import AchievementsContact from './sections/AchievementsContact';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <Projects />
      <AchievementsContact />
    </div>
  );
}
