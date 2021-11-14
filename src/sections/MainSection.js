import Navbar from '../Components/NavbarComp'
import TypingText from '../Components/TypingText';
import '../style/MainSection.css';
function MainSection(){
    return(
        <section className="MainSection">
            <Navbar />
            <TypingText />
        </section>
    );
}
export default MainSection;