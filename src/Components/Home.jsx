import videoInicio from "../Multimedia/RIO NEGRO TELEVISION.mp4";
import "./Home.css";
import CustomNavbar from "./CustomNavbar";
import wallpaper from "../Multimedia/Homeimg/homepagecollage2collage.jpg";

function Home() {
  return (
    <div className="main-container">
      <CustomNavbar />

      <div
        className="home"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixedr",
          backgroundPosition: "center center",
        }}
      >
        <div className="containerHome">
          <video autoPlay controls>
            <source src={videoInicio} type="video/mp4" />
          </video>
        </div>
        <footer className="footer">
          <h2>Contacto@rionegrotv.cl</h2>
        </footer>
      </div>
    </div>
  );
}

export default Home;
