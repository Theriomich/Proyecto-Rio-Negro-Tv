import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/MovilesTv img/camguy.jpeg";
import image2 from "../Multimedia/MovilesTv img/IMG_2779.jpeg";
import image3 from "../Multimedia/MovilesTv img/camera.jpeg";
import image4 from "../Multimedia/MovilesTv img/camion2.jpeg";
import image5 from "../Multimedia/MovilesTv img/IMG-9801.jpg";
import image6 from "../Multimedia/MovilesTv img/IMG-9048.jpg";
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
            image={image5}
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
          id="conatiner-extra-images"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <div
            id="extra-images1t"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image4} />
          </div>
          <div
            id="extra-images2"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image3} />
          </div>
          <div
            id="extra-images3"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image} />
          </div>
          <div
            id="extra-images4"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image6} />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default TelevisionMobiles;
