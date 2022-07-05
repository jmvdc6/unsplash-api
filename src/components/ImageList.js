import React from "react";

import ImageCard from "./ImageCard";
import styles from "./ImageList.module.css";

const ImageList = (props) => {
  if (props.images) {
    return (
      <div className={styles["image-list"]}>
        {props.images.map(({ urls, alt_description, id }) => (
          <ImageCard src={urls.regular} alt={alt_description} key={id} />
        ))}
      </div>
    );
  }
};

export default ImageList;
