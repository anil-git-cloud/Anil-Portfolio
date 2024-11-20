import "./about.css";
import ME from "../assets/Me.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="slide-up">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content" data-aos="slide-up">
          <p>
            Hey there! I am a final-year BSc student at RD National College,
            Mumbai. Deeply interested in Web Development. I am skilled in
            React.js and Frontend Development. Currently, I am exploring MERN
            Stack Development. <br />
            My projects involve creating both functional and good-looking web
            applications. <br />
            <br />I am eager to contribute my expertise to impactful projects
            and collaborate with fellow professionals. Lets connect and explore
            opportunities in the world of technology.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
