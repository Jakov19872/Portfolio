import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personnal website"
              description="Just a simple Personnal website built with HTML/CSS and JavaScript "
              demoLink="https://personnal-website-ahmed-bahrouns-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather app"
              description="Just a simple weather app where you type in the city and it gives you the temperature and how is the weather there(Built with HTML/CSS and JavaScript)."
              demoLink="https://weather-app-three-zeta-74.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Calories Calculator"
              description="An application where you type in some of your informations (weight/height/age/gender/goal/exercices internsity) and it will give you how many calories your body needs daily and then manage your diet"
              demoLink="https://calories-calculator-beta.vercel.app"              
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
