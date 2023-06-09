import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Contenido img/IMG-3682.jpg";
import image2 from "../Multimedia/Contenido img/d5c7153d-cb93-4275-9322-5a588dbe288a.jpg";
import image3 from "../Multimedia/Contenido img/img3.jpeg";
import TextAndImageContainer from "./TextAndImageContainer";
import "./Content.css";
function Content() {
  return (
    <CustomLayout>
      <div className="content">
        <div className="contentTitle">
          <h1>Contenido</h1>
        </div>

        <div
          id="view-first-content"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="La creación de contenidos y el desarrollo de estos proyectos hasta transformarlos en
        programas ha sido siempre nuestro objetivo."
            image={image}
          />
        </div>
        <div
          id="view-second-content"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="Somos realizadores por naturaleza, para ello ;
        contamos con profesionales altamente calificados en todas las fases del flujo creativo y
        productivo."
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
        </div>
      </div>
    </CustomLayout>
  );
}

export default Content;
