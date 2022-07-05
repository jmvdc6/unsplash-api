import React from "react";

import ImageCard from "./ImageCard";
import Loader from "./Loader";
import styles from "./ImageList.module.css";

const ImageList = (props) => {
  if (props.images) {
    return (
      <div className={styles["image-list"]}>
        {props.images.map(({ urls, alt_description, id }) => (
          <ImageCard src={urls.regular} alt={alt_description} key={id} />
        ))}
        {props.loading ? <Loader /> : ""}
      </div>
    );
  }
};

export default ImageList;
