import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Centros de Producción img/IMG_8381.jpeg";
import image2 from "../Multimedia/Centros de Producción img/verde.JPG";
import image3 from "../Multimedia/Centros de Producción img/third.jpg";
import image4 from "../Multimedia/Centros de Producción img/IMG-1743.jpg";
import image5 from "../Multimedia/Centros de Producción img/IMG-3037.jpg";
import TextAndImageContainer from "./TextAndImageContainer";
import "./ProductionCenter.css";

function ProductionCenter() {
  return (
    <CustomLayout>
      <div className="production">
        <div className="productionTitle">
          <h1>Centro de Producción</h1>
        </div>
        <div
          id="view-first-production"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="Poseemos diversas alternativas de estudios.Desde full led a estudios tradicionales con escenografía dependiendo de las necesidades de cada proyecto. "
            image={image}
          />
        </div>
        <div
          id="view-second-production"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer text={""} image={image2} imageSide="right" />
        </div>
        <div
          id="conatiner-extra-images"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <div
            id="extra-images1"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image3} />
          </div>
          <div
            id="extra-images2"
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
            <img src={image5} />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default ProductionCenter;
