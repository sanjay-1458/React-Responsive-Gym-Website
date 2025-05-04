import React from "react";
import Header from "../../components/Header";
import "./about.css";
import Image from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
function About() {
  return (
    <>
      <Header title="About Us" image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        corporis excepturi, deserunt suscipit rem autem maxime illum laudantium
        necessitatibus nam dolorem. Ut quas quos delectus consequatur! Ad non,
        exercitationem iusto vero provident cum.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image"></img>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut
              explicabo repellat laboriosam commodi aliquid, vero dicta eveniet
              quidem, aspernatur quae, nisi saepe corrupti voluptate
              perspiciatis. Id nobis est itaque cupiditate harum amet!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              quod culpa. Dicta recusandae esse aut sunt ullam labore pariatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio blanditiis ex, sint vel omnis eius. Nihil iure,
              similique repudiandae optio aperiam fugit?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut
              explicabo repellat laboriosam commodi aliquid, vero dicta eveniet
              quidem, aspernatur quae, nisi saepe corrupti voluptate
              perspiciatis. Id nobis est itaque cupiditate harum amet!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              quod culpa. Dicta recusandae Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Distinctio blanditiis ex, sint vel
              omnis eius. Nihil iure, similique repudiandae optio aperiam fugit?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Story Image"></img>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Story Image"></img>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut
              explicabo repellat laboriosam commodi aliquid, vero dicta eveniet
              quidem, aspernatur quae, nisi saepe corrupti voluptate
              perspiciatis. Id nobis est itaque cupiditate harum amet!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              quod culpa. Dicta recusandae esse aut sunt ullam labore pariatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio blanditiis ex, sint vel omnis eius. Nihil iure,
              similique repudiandae optio aperiam fugit?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
