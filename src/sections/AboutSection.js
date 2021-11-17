import AboutContent from '../Components/AboutContent';
import { useEffect } from 'react'
import '../style/AboutSection.css';

function AboutSection(){
    return(
        <section  className="AboutSection" id="about-section">
            <AboutContent/>
        </section>
    );
}
export default AboutSection;