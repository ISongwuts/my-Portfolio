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
  const obj_img = [
    {
      img: Cer1,
      title: "SoloLearn",
      content: "Coding for Marketers course",
    },
    {
      img: Cer2,
      title: "KMITL K-Engineering",
      content: "Robotics AI and Vision",
    },
    {
      img: Cer3,
      title: "SoloLearn",
      content: "C++ Course",
    },
    {
      img: Cer5,
      title: "SoloLearn",
      content: "React + Redux Course",
    },
    {
      img: Cer6,
      title: "SoloLearn",
      content: "Python Core",
    },
    {
      img: Cer7,
      title: "ThaiMOOC",
      content: "Internet of Things",
    },
    {
      img: Cer8,
      title: "ThaiMOOC",
      content: "Graphics Computer",
    },
    {
      img: Cer9,
      title: "ThaiMOOC",
      content: "Responsive Website Course",
    },
    {
      img: Cer10,
      title: "ThaiMOOC",
      content: "C Language Programming",
    },
    {
      img: Cer11,
      title: "School Course",
      content: "Google Applications",
    },
    {
      img: Cer12,
      title: "Mahidol University Extension",
      content: "Internet of Things for living",
    },
    {
      img: Cer13,
      title: "School Course",
      content: "Basic Computer",
    },
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
                {obj_img.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 cer-img"
                        src={item.img}
                        alt={index}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row className="wrap-expand-cer">
            {obj_img.map((item, index) => {
              return (
                <Col>
                  <div class="box">
                    <img
                      className="expand-cer-img"
                      src={item.img}
                      alt={index.toString}
                    />
                    <div class="box-content">
                      <h3 class="name">{item.title}</h3>
                      <span class="post">{item.content}</span>
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
