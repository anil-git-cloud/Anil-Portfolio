import Resume from "../assets/Anil's Resume.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let Connect
      </a>
    </div>
  );
};

// export default CTA;
