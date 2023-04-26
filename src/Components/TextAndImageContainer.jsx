import "./TextAndImageContainer.css";
import WOW from "wowjs";
import "animate.css";
import { useEffect } from "react";

function TextAndImageContainer({ image, text, imageSide, ...restOfProps }) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  let content;

  if (imageSide === "right") {
    content = (
      <>
        <p
          id="container-text"
          className="samples__item__info__list wow fadeInUp"
          data-wow-delay="0,2s"
          style={{
            visibility: "visible",
            animationDelay: "1s",
          }}
        >
          {text}
        </p>
        <img
          id="container-image"
          src={image}
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="2s"
          style={{ visibility: "visible", animationDuration: "1s" }}
          alt="img"
        />
      </>
    );
  } else {
    content = (
      <>
        <img
          id="container-image"
          src={image}
          className="samples__item__picture wow fadeInUp"
          data-wow-offset="90"
          data-wow-duration="2s"
          style={{ visibility: "visible", animationDuration: "1s" }}
          alt="img"
        />

        <p
          id="container-text"
          className="samples__item__info__list wow fadeInUp"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDelay: "1s",
          }}
        >
          {text}
        </p>
      </>
    );
  }

  return (
    <div className="text-and-image-container" {...restOfProps}>
      {content}
    </div>
  );
}

export default TextAndImageContainer;
