import TextAndImageContainer from "./TextAndImageContainer";
import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Transmisionesimg/IMG-7278.jpg";
import image2 from "../Multimedia/Transmisionesimg/IMG-2847.JPG";
import image3 from "../Multimedia/Transmisionesimg/IMG_5569 redi.jpg";
import image4 from "../Multimedia/Transmisionesimg/IMG-7227.jpg";
import image5 from "../Multimedia/Transmisionesimg/IMG-5817.jpg";

import "./Transmissions.css";

function Transmissions() {
  return (
    <CustomLayout>
      <div className="transmissions">
        <div className="transmissionsTitle">
          <h1>Transmisiones</h1>
        </div>

        <div
          id="view-first-transmissions"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="La conectividad de un punto a otro y el transporte de señales es posible a través de las múltiples tecnologías con las cuales contamos."
            image={image}
          />
        </div>
        <div
          id="view-second-transmissions"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="Usamos tecnologías como telepuerto C/KU, móviles DSNG, fibras y mochilas DMNG, además de los nuevos protocolos de transmisión."
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
            id="extra-images3"
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

export default Transmissions;
