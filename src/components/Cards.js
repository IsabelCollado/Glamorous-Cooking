import FormDate from './FormDate';

const Cards = ({
  name,
  type,
  priceRange,
  image,
  description,
  specialDiets,
  city,
  webUrl,
}) => {
  return (
    <section className="projects">
      <article className="projects--article">
        <div className="projects--div">
          <div>
            <img src={image} alt={name} className="projects--img" />
          </div>
        </div>
        <div className="projects--text">
          <h3 className="projects--h3">{name.toUpperCase()}</h3>
          <p className="projects--p">{description}</p>
          <p className="projects--p">{type}</p>
          <p className="projects--p">{priceRange}</p>
          <p className="projects--p">{specialDiets}</p>
          <p className="projects--p">{city}</p>
          <div className="projects--div2">
            <a
              href={webUrl}
              target="_blank"
              rel="noreferrer"
              title={`${name} website`}
              className="projects--a"
            >
              <i className="fa-solid fa-display"></i>
            </a>
          </div>
        </div>
      </article>
      <div className="form--div">
        <FormDate />
      </div>
    </section>
  );
};

export default Cards;
