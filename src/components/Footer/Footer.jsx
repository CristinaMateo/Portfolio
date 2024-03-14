import React from "react";

const Footer = () => {
  return (
    <footer>
       <article className="links-container">
        <a className="link smallGrid" href="https://linkedin.com/in/mateo-cristina">
          <img src="/assets/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a className="link smallGrid" href="https://github.com/CristinaMateo">
        <img src="/assets/github.png" alt="GitHub" />
          GitHub
        </a>
        <a className="link smallGrid" href="mailto:cris.mateo.99@gmail.com">
        <img src="/assets/mail.png" alt="Mail" />
          cris.mateo.99@gmail.com
        </a>
      </article>
    </footer>
  );
};

export default Footer;
