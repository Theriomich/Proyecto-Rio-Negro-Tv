import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/Canales img/IMG-2801.jpg";
import image2 from "../Multimedia/Canales img/IMG_0570.jpeg";
import image3 from "../Multimedia/Canales img/TV.JPG";
import "./ChannelsAdm.css";

function ChannelsAdm() {
  return (
    <CustomLayout>
      <div className="channels">
        <div className="channelsTitle">
          <h1>Administración de Canales</h1>;
        </div>

        <div
          id="view-first-channel"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="La ingenieria, construcción, desarrollo y puesta en el aire de canales de televisión es una de
            nuestras fortalezas."
            image={image}
            style={{ marginTop: "80px" }}
          />
        </div>
        <div
          id="view-second-channel"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="Estos proyectos han sido desarrollados desde nuestra fundación
            teniendo al aire actualmente múltiples ejemplos."
            image={image2}
            imageSide="right"
            style={{ marginTop: "80px" }}
          />
        </div>
        <div
          id="view-third-channel"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="Hoy contamos con la administración técnica y de contenido de dos canales de cobertura en
            toda Latinoamérica."
            image={image3}
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default ChannelsAdm;
