import "./header.css";
// import main from "../assets/Logo-portfolio.gif";
import { CTA } from "./CTA";
// import ME from '../../assets/headerImg.jpeg'
// import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I am</h5>
        {/* <img className="img-width" src={main} alt="img" /> */}
        <h1>Anil Dhangar</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
