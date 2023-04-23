import "./TextAndImageContainer.css";

function TextAndImageContainer({ image, text, imageSide, ...restOfProps }) {
  let content;

  if (imageSide === "right") {
    content = (
      <>
        <p className="container-text">{text}</p>
        <img className="container-image" src={image} alt="img" />
      </>
    );
  } else {
    content = (
      <>
        <img className="container-image" src={image} alt="img" />
        <p className="container-text">{text}</p>
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
