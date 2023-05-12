import CustomNavbar from "./CustomNavbar";
import "./CustomLayout.css";
import instagram from "../Multimedia/IG.png";
import emial from "../Multimedia/MAIL.png";
import map from "../Multimedia/MAP.png";
import brand from "../Multimedia/Brands/01_TORNEOS.png";
import brand2 from "../Multimedia/Brands/03_RED-BULL.png";
import brand3 from "../Multimedia/Brands/04_NEP.png";
import brand5 from "../Multimedia/Brands/CSVo.png";
import brand6 from "../Multimedia/Brands/07_ITTF.svg.png";
import brand7 from "../Multimedia/Brands/escudo-uchile.png";
import brand8 from "../Multimedia/Brands/09_TVN.png";
import brand10 from "../Multimedia/Brands/movis fundacion.png";
import brand11 from "../Multimedia/Brands/12_UC.png";
import brand12 from "../Multimedia/Brands/13_RUGBY FERUCHI.png";
import brand13 from "../Multimedia/Brands/14_FEVOCHI.png";
import brand14 from "../Multimedia/Brands/15_SPORTV.png";
import brand15 from "../Multimedia/Brands/universidadsantiago.png";
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
          backgroundColor: "black",
          color: "white",
          borderTop: "white 4px solid",
          borderTop: "6px solid #e04c10",
        }}
      >
        <div className="brands">
          <img
            src={brand18}
            style={{
              width: "15%",
            }}
          />
          <img src={brand} />
          <img src={brand2} />
          <img src={brand3} />
          <img
            src={brand5}
            style={{
              width: "12%",
            }}
          />
          <img src={brand6} />
          <img src={brand7} />
          <img src={brand8} />
          <img src={brand10} />
          <img src={brand11} />
          <img src={brand12} />
          <img src={brand13} />
          <img src={brand14} />
          <img src={brand15} />
          <img src={brand17} />
          <img src={brand19} />
          <img src={brand20} />
        </div>
        <div className="infoFooter">
          <div className="footerText">
            <img src={map} alt="Instagram" />
            <h2>
              <strong>DIRECCIÓN</strong> <br />
              EXEQUIEL FERNÁNDEZ 3461, MACUL.
            </h2>
          </div>

          <div className="contact">
            <img src={emial} alt="Instagram" />
            <h2>
              <strong>CONTACTO</strong> <br />
              GNUR@RIONEGROTV.CL
            </h2>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/rionegrotv/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagramImg"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <h2>
              <strong> SIGUENOS</strong> <br /> @RIONEGROTV
            </h2>
          </div>
        </div>
        <div className="rightsReserved">
          <h2>
            © 2023
            <br /> Todos los derechos reservados.
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default CustomLayout;
