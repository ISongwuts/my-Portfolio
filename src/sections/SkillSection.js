import { Container, Row, Col } from 'react-bootstrap';
import '../style/SkillSection.css'

function SkillSection () {
    return(
        <div className="SkillSection" id="skill-section">
            <Container>
                <Row>
                    <Col sm><h1><span className="highlight">My</span> Skill</h1></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SkillSection;