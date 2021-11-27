import "../style/ProjectContent.css";
import { Row, Col, Container } from "react-bootstrap";
import project1 from "../img/Project/IoT.png";
import project2 from "../img/Project/CT.PNG";
import project3 from "../img/Project/TodoList.PNG";

function ProjectContent() {
  const project = [
    {
      cover: project1,
      date: "Published on Oct 8, 2021",
      title: "Iot Application",
      link: "https://github.com/ISongwuts/IOT-APP",
      demo: "https://github.com/ISongwuts/IOT-APP"
    },
    {
      cover: project2,
      date: "Published on Nov 26, 2021",
      title: "Crypto-Table",
      link: "https://github.com/ISongwuts/Crypto-Table",
      demo: "https://isongwut-project-cryptotable.netlify.app/"
    },
    {
      cover: project3,
      date: "Published on Nov 27, 2021",
      title: "Todo-List",
      link: "https://github.com/ISongwuts/Crypto-Table",
      demo: "https://isongwut-project-todolist.netlify.app/"
    },
  ];
  return (
    <div className="ProjectContent-container">
      <h1 className="title center">
        <span className="highlight">Projects</span>
      </h1>
      <Container>
        <Row>
          {project.map((item, index) => {
            return (
              <Col sm className="wrap-project">
                <div className="card">
                  <img src={item.cover} alt="Thumbnail" className="thumbnail" />
                  <div className="content">
                    <p className="date">{item.date}</p>
                    <Row>
                      <Col>
                        <h3 className="project-title">
                          <a className="link-to" href={item.link}>
                            {item.title}
                          </a>
                        </h3>
                      </Col>
                      <Col>
                          <a className="liveDemo"href={item.demo}>Live Demo</a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectContent;
