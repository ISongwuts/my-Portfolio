import Freelance from '../img/freelancer.png'
import '../style/FreelancerImg.css'

function FreelancerImg(){
    return(
        <div className="img-container">
            <img src={Freelance} alt="freelance" className="freelance-img shadowfilter"/>
        </div>
    );
}
export default FreelancerImg;