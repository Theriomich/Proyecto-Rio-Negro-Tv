import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/Gestion de Derechos img/IMG-7380.jpg";
import image2 from "../Multimedia/Gestion de Derechos img/IMG_3409.jpg";
import image3 from "../Multimedia/Gestion de Derechos img/IMG-9576.jpg";
import image4 from "../Multimedia/Gestion de Derechos img/img4.JPG";
import image5 from "../Multimedia/Gestion de Derechos img/IMG-9781.jpg";
import image6 from "../Multimedia/Gestion de Derechos img/IMG-0267.jpg";
import image7 from "../Multimedia/Gestion de Derechos img/IMG-9767.jpg";
import "./RightsManagment.css";

function RightsManagement() {
  return (
    <CustomLayout>
      <div className="rights">
        <div className="rightsTitle">
          <h1>Gestión de Derechos</h1>
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
            id="extra-images4"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image6} />
          </div>
          <div
            id="extra-images3"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image5} />
          </div>
          <div
            id="extra-images3"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={image7} />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default RightsManagement;
