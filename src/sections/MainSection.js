import Navbar from '../Components/NavbarComp'
import TypingText from '../Components/TypingText';
import FreelancerImg from '../Components/FreelancerImg';

import '../style/MainSection.css';
function MainSection(){
    return(
        <section className="MainSection" id="main-section">
            <Navbar />
            <TypingText />
            <FreelancerImg />
        </section>
    );
}
export default MainSection;