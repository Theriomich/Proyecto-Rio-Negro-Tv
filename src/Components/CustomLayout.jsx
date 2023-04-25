import CustomNavbar from "./CustomNavbar";
import "./CustomLayout.css";
import logofooter from "../Multimedia/logo2.png";

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
        <img src={logofooter} />
        <h2>Contacto@rionegrotv.cl</h2>
      </footer>
    </div>
  );
}

export default CustomLayout;
