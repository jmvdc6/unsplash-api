import React from "react";
import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles.error}>
      <h1>{props.error}</h1>
    </div>
  );
};

export default Error;
