import Navbar from "../Components/NavbarComp";
import TypingText from "../Components/TypingText";
import FreelancerImg from "../Components/FreelancerImg";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../style/MainSection.css";

function MainSection() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    } , [])
  return (
    <section className="MainSection" id="main-section">
      <div data-aos="zoom-out">
        <Navbar />
        <TypingText />
        <FreelancerImg />
      </div>
    </section>
  );
}
export default MainSection;
