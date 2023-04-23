import CustomNavbar from "./CustomNavbar";
import "./CustomLayout.css";

function CustomLayout(prop) {
  const children = prop.children;
  return (
    <div className="custom-layout">
      <CustomNavbar />
      {children}
      <footer
        className="footer"
        style={{
          backgroundColor: "rgb(240,155,6)",
          background:
            "linear-gradient(54deg, rgba(240,155,6,0.9668242296918768) 34%, rgba(143,87,2,1) 58%, rgba(137,84,3,1) 71%, rgba(15,15,15,0.5634628851540616) 91%)",
          color: "white",
          borderTop: "white 4px solid",
        }}
      >
        <h2>Contacto@rionegrotv.cl</h2>
      </footer>
    </div>
  );
}

export default CustomLayout;
