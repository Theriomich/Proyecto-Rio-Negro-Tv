import videoInicio from "../Multimedia/RIO NEGRO TELEVISION.mp4";
import "./Home.css";
import CustomNavbar from "./CustomNavbar";

function Home() {
  return (
    <div className="home">
      <CustomNavbar />
      <div className="cointainerHome">
        <video autoPlay controls>
          <source src={videoInicio} type="video/mp4" />
        </video>
      </div>
      <footer className="footer">
        <h2>Contacto@rionegrotv.cl</h2>
      </footer>
    </div>
  );
}

export default Home;
