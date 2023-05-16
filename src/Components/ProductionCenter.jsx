import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Centros de Producción img/IMG_8381.jpeg";
import image2 from "../Multimedia/Centros de Producción img/verde.JPG";
import image3 from "../Multimedia/Centros de Producción img/time.JPG";
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
            text="Poseemos diversas alternativas de estudios. "
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
          <TextAndImageContainer
            text="Desde full led a estudios tradicionales con escenografía dependiendo de las necesidades de cada proyecto."
            image={image2}
            imageSide="right"
          />
        </div>
        <div
          id="view-third-production"
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

export default ProductionCenter;
