import videoInicio from "../Multimedia/RIO NEGRO TELEVISION.mp4";
import "./Home.css";
import CustomLayout from "./CustomLayout";
import TextAndImageContainer from "./TextAndImageContainer";
import ImageHome from "../Multimedia/Homeimg/IMG_2779.jpeg";
import imagehometwo from "../Multimedia/Homeimg/IMG_6221.jpeg";

function Home() {
  return (
    <CustomLayout>
      <div className="home">
        <video autoPlay controls>
          <source src={videoInicio} type="video/mp4" />
        </video>
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
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default Home;
