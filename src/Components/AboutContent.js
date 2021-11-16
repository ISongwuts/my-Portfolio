import { Container, Row, Col } from "react-bootstrap";
import MyProfile from "./MyProfile";
import "../style/AboutContent.css";

function AboutContent() {
  return (
    <div className="AboutContent-container">
      <h1 className="title">
        About <span className="highlight">ME</span>
      </h1>
      <Container>
        <Row>
          <Col sm>
            <p className="about-me">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Good day,
              everyone! I'm 17 years old and my name is{" "}
              <span className="highlight">Songwut Malisri</span> , but you may call me<span className="highlight"> ice</span>. I'm a
              Computer Technical Department student at Ubonratchathani Technical
              College in Thailand, <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I enjoy
              <span className="highlight"> coding</span> and <span className="highlight">learning new things</span>. I'm interested in Computer
              Science, Computer Engineering, and Data Analysis, and I aspire to
              be successful in the future... No, it will undoubtedly be a
              <span className="highlight"> success!</span>
            </p>
          </Col>
          <Col sm>
            <MyProfile />
          </Col>
        </Row>
        <Row>
            <Col sm><p className="wrap-content-word"><em className="content-word">"Success is a lousy teacher. I seduces smart people into thinking they can’t lose."</em></p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutContent;
