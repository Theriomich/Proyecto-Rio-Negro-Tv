import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import image from "../Multimedia/Canales img/IMG-2801.jpg";
import image2 from "../Multimedia/Canales img/IMG_0570.jpeg";
import image3 from "../Multimedia/Canales img/IMG_0114.jpg";
import "./ChannelsAdm.css";

function ChannelsAdm() {
  return (
    <CustomLayout>
      <div className="channels">
        <div className="channelsTitle">
          <h1>Administración de Canales</h1>
        </div>
        <div
          id="view-first-channel"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="La ingeniería, construcción, desarrollo y puesta en el aire de canales de televisión es una de nuestras fortalezas."
            image={image}
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
            text="Estos proyectos han perdurado en el tiempo teniendo múltiples  ejemplos al aire. Actualmente contamos con la administración técnica y de contenido de dos canales de cobertura en toda Latinoamérica."
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

export default ChannelsAdm;
