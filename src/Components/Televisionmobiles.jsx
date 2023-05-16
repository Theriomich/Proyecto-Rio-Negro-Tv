import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/MovilesTv img/IMG_1836.redjpg.jpg";
import image2 from "../Multimedia/MovilesTv img/IMG_2779.jpeg";
import image3 from "../Multimedia/MovilesTv img/IMG_3299 red.jpg";
import "./TelevisionMoviles.css";

function TelevisionMobiles() {
  return (
    <CustomLayout>
      <div className="television">
        <div className="televisionTitle">
          <h1>Móviles de Televisión</h1>
        </div>

        <div
          id="view-first-television"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="RIO NEGRO TELEVISION posee unidades móviles propias capaces de solucionar y
          atender las distintas necesidades de producción tanto en Chile como en gran parte de
          Sudamerica."
            image={image}
          />
        </div>
        <div
          id="view-second-television"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="Con un equipamiento de estándar internacional , hoy realizamos distintas
          producciones y transmisiones en directo para clientes de todo el mundo."
            image={image2}
            imageSide="right"
          />
        </div>
        <div
          id="view-third-television"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer text={null} image={image3} />
        </div>
      </div>
    </CustomLayout>
  );
}

export default TelevisionMobiles;
