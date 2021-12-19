import "./App.css";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import CertificateSection from "./sections/CertificateSection";
import ProjectSection from "./sections/ProjectSection";
import Footer from './Components/Footer'

function App() {
  return (
    <div>
        <MainSection />
        <AboutSection />
        <SkillSection />
        <CertificateSection />
        <ProjectSection />
        <Footer />
    </div>
  );
}

export default App;
