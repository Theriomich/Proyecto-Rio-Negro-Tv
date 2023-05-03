import CustomNavbar from "./CustomNavbar";
import "./CustomLayout.css";
import logofooter from "../Multimedia/logo2.png";
import brand from "../Multimedia/Brands/marca.png";

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
          <img src={brand} />
          <img src={brand} />
          <img src={brand} />
          <img src={brand} />
          <img src={brand} />
          <img src={brand} />
          <img src={brand} />
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
