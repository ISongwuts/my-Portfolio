import Navbar from '../Components/NavbarComp'
import TypingText from '../Components/TypingText';
import SvgImg from '../Components/SvgImg';
import '../style/MainSection.css';
function MainSection(){
    return(
        <section className="MainSection" id="main-section">
            <Navbar />
            <TypingText />
            <SvgImg />
        </section>
    );
}
export default MainSection;