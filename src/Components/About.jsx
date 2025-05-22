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
            Hi! I’m Anil, a frontend developer who loves turning ideas into
            interactive, visually appealing web experiences. With a focus on
            clean code and user-centric design, I build apps using React.js, and
            modern JavaScript tools. Whether it’s crafting a smooth search
            feature or optimizing load performance, I’m always aiming to level
            up my skills and create impactful projects. <br />
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
