import CustomLayout from "./CustomLayout";
import image from "../Multimedia/Contenido img/IMG-3682.jpg";
import image2 from "../Multimedia/Contenido img/IMG-2819.jpg";
import image3 from "../Multimedia/Contenido img/IMG_3467.jpg";
import image4 from "../Multimedia/Contenido img/IMG_1762.jpg";
import fondo from "../Multimedia/Contenido img/FONDO.jpg";

import TextAndImageContainer from "./TextAndImageContainer";
import "./Content.css";
function Content() {
  return (
    <CustomLayout>
      <div className="content">
        <h1>Contenido</h1>;
        <TextAndImageContainer
          text="La creación de contenidos y el desarrollo de estos proyectos hasta transformarlos en
        programas ha sido siempre nuestro objetivo."
          image={image}
          style={{ marginTop: "80px" }}
        />
        <TextAndImageContainer
          text="Somos realizadores por naturaleza, para ello ;
        contamos con profesionales altamente calificados en todas las fases del flujo creativo y
        productivo."
          image={image2}
          imageSide="right"
          style={{ marginTop: "80px" }}
        />
      </div>
    </CustomLayout>
  );
}

export default Content;
