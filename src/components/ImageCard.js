import React from "react";

const ImageCard = ({ src, alt }) => {
  return (
    <a href={src}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default ImageCard;
