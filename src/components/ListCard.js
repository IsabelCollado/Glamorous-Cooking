import defaultImage from '../images/image_por_defecto.jpeg';
import Cards from './Cards';
import '../styles/layouts/_listCard.scss';

const ListCard = ({ projectListData }) => {
  const dataHtml = projectListData.map((eachProject) => {
    return (
      <Cards
        key={eachProject.id}
        name={eachProject.name}
        type={eachProject.type}
        specialDiets={eachProject.specialDiets}
        webUrl={eachProject.webUrl}
        description={eachProject.description}
        image={eachProject.image === '' ? defaultImage : eachProject.image}
        priceRange={eachProject.priceRange}
        city={eachProject.city}
      />
    );
  });
  return (
    <section className="section-projects">
      <h3 className="section-projects_h1">Elige tu restaurante</h3>
      <ul className="section-projects_ul">{dataHtml}</ul>
    </section>
  );
};

export default ListCard;
