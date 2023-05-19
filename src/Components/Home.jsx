import "./Home.css";
import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import ImageHome from "../Multimedia/Homeimg/IMG_6221.jpeg";
import imagehometwo from "../Multimedia/Homeimg/IMG-3259.jpg";
import image3 from "../Multimedia/Homeimg/img3.jpg";
import image4 from "../Multimedia/Homeimg/img4.jpeg";
import image5 from "../Multimedia/Homeimg/img5.JPG";
import image6 from "../Multimedia/Homeimg/IMG-5828.jpg";
import middle from "../Multimedia/Homeimg/IMG-6270.jpg";
import ReactPlayer from "react-player";

function Home() {
  return (
    <CustomLayout>
      <div className="home">
        <div className="container-video">
          <ReactPlayer
            url="https://player.vimeo.com/video/824088159"
            className="video"
            playing
            controls
          />
        </div>

        <div
          id="view-first"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="RÍO NEGRO TELEVISIÓN es una empresa generadora de contenido fundada el año 2001
con un fuerte carácter periodístico y tecnológico. Con base en Chile, hoy entregamos
soluciones técnicas en gran parte de Sudamerica, esto gracias a la experiencia y capacidad
de nuestros profesionales."
            image={ImageHome}
            style={{ marginTop: "80px" }}
          />
        </div>
        <div
          id="conatiner-middle-images"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <div
            id="middle"
            className="samples__item__picture wow fadeInUp"
            data-wow-offset="90"
            data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s" }}
          >
            <img src={middle} />
          </div>
        </div>

        <div
          id="view-two"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="1s"
          style={{ visibility: "visible", animationDuration: "1s" }}
        >
          <TextAndImageContainer
            text="El volumen de los recursos técnicos propios hacen de RÏO NEGRO TELEVISION una
          compañía capaz de ofrecer soluciones integrales, creativas y eficientes."
            image={imagehometwo}
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
            <img src={image6} />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default Home;
