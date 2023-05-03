import CustomNavbar from "./CustomNavbar";
import "./CustomLayout.css";
import logofooter from "../Multimedia/logo2.png";
import brand from "../Multimedia/Brands/01_TORNEOS.png";
import brand2 from "../Multimedia/Brands/03_RED-BULL.png";
import brand3 from "../Multimedia/Brands/04_NEP.png";
import brand4 from "../Multimedia/Brands/05_ESPN.png";
import brand5 from "../Multimedia/Brands/06_CSV2022.png";
import brand6 from "../Multimedia/Brands/07_ITTF.svg.png";
import brand7 from "../Multimedia/Brands/08_UCHILE.png";
import brand8 from "../Multimedia/Brands/09_TVN.png";
import brand9 from "../Multimedia/Brands/10_MOVISTAR.png";
import brand10 from "../Multimedia/Brands/10_MOVISTAR_FUNDACION.png";
import brand11 from "../Multimedia/Brands/12_UC.png";
import brand12 from "../Multimedia/Brands/13_RUGBY FERUCHI.png";
import brand13 from "../Multimedia/Brands//14_FEVOCHI.png";
import brand14 from "../Multimedia/Brands/15_SPORTV.png";
import brand15 from "../Multimedia/Brands/16_UCSH.png";
import brand16 from "../Multimedia/Brands/16_USACH.png";
import brand17 from "../Multimedia/Brands/carozzi.png";
import brand18 from "../Multimedia/Brands/direct.png";
import brand19 from "../Multimedia/Brands/play.png";
import brand20 from "../Multimedia/Brands/uichhile.png";

function CustomLayout(prop) {
  const children = prop.children;
  return (
    <div className="custom-layout">
      <CustomNavbar />
      {children}
      <footer
        className="footer"
        style={{
          backgroundColor: "rgb(33,32,31)",
          background:
            "linear-gradient(54deg, rgba(33,32,31,0.9668242296918768) 25%, rgba(143,61,2,1) 45%, rgba(140,61,8,1) 66%, rgba(216,77,19,1) 85%)",
          color: "white",
          borderTop: "white 4px solid",
        }}
      >
        <div className="brands">
          <img
            src={brand}
            style={{
              backgroundColor: "white",
            }}
          />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand4} />
          <img src={brand5} />
          <img src={brand6} />
          <img src={brand7} />
          <img
            src={brand8}
            style={{
              backgroundColor: "white",
            }}
          />
          <img src={brand9} />
          <img src={brand10} />
          <img src={brand11} />
          <img src={brand12} />
          <img src={brand13} />
          <img src={brand14} />
          <img src={brand15} />
          <img
            src={brand16}
            style={{
              backgroundColor: "white",
            }}
          />
          <img
            src={brand17}
            style={{
              backgroundColor: "white",
            }}
          />
          <img src={brand18} />
          <img
            src={brand19}
            style={{
              backgroundColor: "white",
            }}
          />
          <img
            src={brand20}
            style={{
              backgroundColor: "white",
            }}
          />
        </div>
        <div className="footerText">
          <h2>
            Dirección: Río Negro Exequiel Fernández 3461, Macul. <br />
            Contacto: gnur@rionegrotv.cl <br />© 2023. Todos los derechos
            reservados.
          </h2>
        </div>
        <div className="img-footer">
          <img src={logofooter} />
        </div>
      </footer>
    </div>
  );
}

export default CustomLayout;
