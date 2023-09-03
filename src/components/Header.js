import Hero from '../images/hero.jpg';

const Header = () => {
  return (
    <section className="header">
      <h1 className="header--h1">Glamorous Cooking</h1>
      <img src={Hero} alt="imagen" className="header--hero" />
    </section>
  );
};

export default Header;
