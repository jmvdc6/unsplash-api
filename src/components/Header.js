import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a
        href='https://unsplash.com/'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.link}
      >
        Unsplash API
      </a>
    </header>
  );
};

export default Header;
