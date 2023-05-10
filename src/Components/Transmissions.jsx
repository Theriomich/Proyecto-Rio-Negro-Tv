import TextAndImageContainer from "./TextAndImageContainer";
import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Transmisionesimg/collagetransimsion1.png";
import image2 from "../Multimedia/Transmisionesimg/collagetransmision2.png";
import "./Transmissions.css";
function Transmissions() {
  return (
    <CustomLayout>
      <div className="transmissions">
        <div className="transmissionsTitle">
          <h1>Transmisiones</h1>;
        </div>

        <div
          id="view-first-transmissions"
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="0,5s"
          style={{ visibility: "visible", animationDuration: "0,5s" }}
        >
          <TextAndImageContainer
            text="La conectividad de un punto a otro y el transporte de señales es posible a través de las
          múltiples tecnologías con las cuales contamos. "
            image={image}
            style={{ marginTop: "80px" }}
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
            text="Contamos con tecnologías como telepuerto C/KU, móviles DSNG,
          fibras y mochilas DMNG."
            image={image2}
            imageSide="right"
            style={{ marginTop: "80px" }}
          />
        </div>
      </div>
    </CustomLayout>
  );
}

export default Transmissions;
