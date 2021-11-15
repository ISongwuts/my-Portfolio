import DevImg from '../img/dev-img.png'
import '../style/SvgImg.css'

function SvgImg(){
    return(
        <div className="SvgImg">
            <img src={DevImg} alt="dev-img" className="dev-img"/>
        </div>
    );
}

export default SvgImg;