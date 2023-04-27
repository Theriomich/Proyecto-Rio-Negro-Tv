import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/MovilesTv img/IMG-0031.jpg";
import image2 from "../Multimedia/MovilesTv img/IMG-3025.jpg";
import "./TelevisionMoviles.css";

function TelevisionMobiles() {
  return (
    <CustomLayout>
      <div className="television">
        <div className="televisionTitle">
          <h1>Móviles de Televisión</h1>;
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
            style={{ marginTop: "80px" }}
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
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default TelevisionMobiles;
