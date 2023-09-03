const Footer = () => {
  return (
    <footer className="footer">
      <h5 className="footer--title">Follow us:</h5>
      <div className="footer--div">
        <a
          href="https://github.com/IsabelCollado"
          title="GitHub of Isabel Collado Herrera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="footer--icon fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isabel-collado-herrera/"
          target="_blank"
          title="Linkedin de Isabel Collado Herrera"
          rel="noopener noreferrer"
        >
          <i className="footer--icon fa-brands fa-linkedin"></i>
        </a>
      </div>

      <small className="footer__text">2023 &copy;Isabel Collado Herrera</small>
    </footer>
  );
};

export default Footer;
