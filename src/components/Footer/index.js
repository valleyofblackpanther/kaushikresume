import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

import "./index.css";

const Footer = () => (
  <div className="footer-bg-container minusTenDegrees">
    <div className="social-media-container tenDegrees">
      <a
        href="https://docs.google.com/document/d/16OVZQvRHQmOEhmuQTklqb8B1nvwjxcNaOy0bm8Z9bp0/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FcDocument className="font-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/chintam-kaushik-3778701a7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="font-icons" />
      </a>
      <a
        href="https://github.com/valleyofblackpanther"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="font-icons" />
      </a>
    </div>
    <p className="contact-heading tenDegrees">Contact ME</p>
  </div>
);

export default Footer;
