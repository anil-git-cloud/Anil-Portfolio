import "./header.css";
import { CTA } from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I am</h5>
        <h1>Anil Dhangar</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
