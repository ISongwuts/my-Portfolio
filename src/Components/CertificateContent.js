import { Row, Col, Container, Carousel } from "react-bootstrap";
import "../style/CertificateContent.css";
import Cer1 from "../img/certificate/cer1.jpg";
import Cer2 from "../img/certificate/cer2.png";
import Cer3 from "../img/certificate/cer3.jpg";
import Cer5 from "../img/certificate/cer5.jpg";
import Cer6 from "../img/certificate/cer6.jpg";
import Cer7 from "../img/certificate/cer7.png";
import Cer8 from "../img/certificate/cer8.png";
import Cer9 from "../img/certificate/cer9.png";
import Cer10 from "../img/certificate/cer10.png";
import Cer11 from "../img/certificate/cer11.png";
import Cer12 from "../img/certificate/cer12.png";
import Cer13 from "../img/certificate/cer13.png";

function CertificateContent() {
  const arr_img = [
    Cer1,
    Cer2,
    Cer3,
    Cer5,
    Cer6,
    Cer7,
    Cer8,
    Cer9,
    Cer10,
    Cer11,
    Cer12,
    Cer13,
  ];
  return (
    <div className="CertificateContent-container">
      <div className="CertificateContent-title">
        <h1 className="title cer-title">
          My <span className="highlight"> Certificates </span>
        </h1>
        <Container>
          <Row>
            <Col sm className="wrap-carousel">
              <Carousel className="carousel">
                {arr_img.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 cer-img"
                        src={item}
                        alt={index}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row className="wrap-expand-cer">
            {arr_img.map((item, index) => {
              return (
                  <Col >
                <div class="box">
                  <img className="expand-cer-img" src={item} alt={index.toString}/>
                  <div class="box-content">
                    <h3 class="name">Crystal</h3>
                    <span class="post">Web Designer</span>
                  </div>
                </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CertificateContent;
