import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { FaReact, FaPython, FaRust, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { GiArchiveResearch } from "react-icons/gi";
import {
  SiAdobephotoshop,
  SiFlutter,
  SiKotlin,
  SiDart,
  SiBootstrap,
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../style/SkillContent.css";

function MySkillBeginner({ title }) {
  const beginner = [
    { name: "React Js", value: <FaReact className="skill" /> },
    { name: "Rust", value: <FaRust className="skill" /> },
    { name: "Javascript", value: <IoLogoJavascript className="skill" /> },
    { name: "Firebase", value: <IoLogoFirebase className="skill" /> },
    { name: "NodeJs", value: <DiNodejs className="skill" /> },
    { name: "Kotlin", value: <SiKotlin className="skill" /> },
    { name: "Bootstrap", value: <SiBootstrap className="skill" /> },
  ];
  return (
    <Col sm className="touch-me">
      <Col sm className="myskill-container">
        <div className="skill-title-wrap">
          <h2 className="skill-title">{title}</h2>
        </div>
      </Col>
      <div className="wrap-skill">
        <Row className="secondary-wrap-skill">
          <ul>
            {beginner.map((skill, index) => (
              <li key={index} className="skill-list">
                {skill.value}
                <p className="lang-title">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </Col>
  );
}

function MySkillIntermediate({ title }) {
  const beginner = [
    {
      name: "Photoshop",
      value: <SiAdobephotoshop className="skill" />,
    },
    { name: "Python", value: <FaPython className="skill" /> },
    { name: "Flutter", value: <SiFlutter className="skill" /> },
    { name: "Java", value: <FaJava className="skill" /> },
    { name: "Dart", value: <SiDart className="skill" /> },
  ];
  return (
    <Col sm className="touch-me">
      <Col sm className="myskill-container">
        <div className="skill-title-wrap">
          <h2 className="skill-title">{title}</h2>
        </div>
      </Col>
      <div className="wrap-skill">
        <Row className="secondary-wrap-skill">
          <ul>
            {beginner.map((skill, index) => (
              <li key={index} className="skill-list">
                {skill.value}
                <p className="lang-title">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </Col>
  );
}

function MySkillAdvanced({ title }) {
  const beginner = [
    {
      name: "Search for new knowledge",
      value: <GiArchiveResearch className="skill" />,
    },
  ];
  return (
    <Col sm className="touch-me">
      <Col sm className="myskill-container">
        <div className="skill-title-wrap">
          <h2 className="skill-title">{title}</h2>
        </div>
      </Col>
      <div className="wrap-skill">
        <Row className="secondary-wrap-skill">
          <ul>
            {beginner.map((skill, index) => (
              <li key={index} className="skill-list">
                {skill.value}
                <p className="lang-title">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </Col>
  );
}

function SkillContent() {
    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    },[])
  return (
    <div data-aos="zoom-in" className="skill-content">
      <Container className="skill-content-container">
        <Row>
          <Col sm>
            <h1 className="title">
              <span className="highlight">My</span> Skill
            </h1>
          </Col>
        </Row>
        <Row>
          <MySkillBeginner title="Beginner" />
          <MySkillIntermediate title="Intermediate" />
          <MySkillAdvanced title="Advanced" />
        </Row>
        <Row>
          <Col sm className="wrap-ability">
            <p className="ability-proud highlight">
              My finest ability is searching for new knowledge, and I am
              proud of it.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillContent;
