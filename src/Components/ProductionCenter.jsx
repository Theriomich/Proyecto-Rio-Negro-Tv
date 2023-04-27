import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Centros de Producción img/IMG_8381.jpeg";
import image2 from "../Multimedia/Centros de Producción img/estudio.JPG";
import TextAndImageContainer from "./TextAndImageContainer";
import "./ProductionCenter.css";

function ProductionCenter() {
  return (
    <CustomLayout>
      <div className="production">
        <div className="productionTitle">
          <h1>Centro de Producciones</h1>;
        </div>

        <div
          id="view-first-production"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="Dos estudios de televisión son hoy el centro de producción de Río Negro."
            image={image}
            style={{ marginTop: "80px" }}
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
            text="Uno full led y
            otro con escenografía propia , dan vida a distintos programas y activaciones dependiendo
            de las necesidades de cada proyecto."
            image={image2}
            imageSide="right"
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default ProductionCenter;
