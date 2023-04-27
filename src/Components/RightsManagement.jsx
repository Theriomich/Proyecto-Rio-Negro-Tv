import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/Gestion de Derechos img/film.JPG";
import image2 from "../Multimedia/Gestion de Derechos img/IMG_4911.jpg";
import "./RightsManagment.css";

function RightsManagement() {
  return (
    <CustomLayout>
      <div className="rights">
        <div className="rightsTitle">
          <h1>Gestión de Derechos</h1>;
        </div>

        <div
          id="view-first-rights"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="La comercialización de derechos nacionales e internacionales de eventos puntuales o
            torneos son un área importante de nuestra gestión. "
            image={image}
            style={{ marginTop: "80px" }}
          />
        </div>
        <div
          id="view-second-rights"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text=" Actualmente contamos con diversos
            derechos deportivos que desarrollamos íntegramente en producción, comercialización y
            televisación."
            image={image2}
            imageSide="right"
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default RightsManagement;
